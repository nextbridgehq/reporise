import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const INVENTORY_PATH = path.resolve('eval/corpus/inventory.json');
const REVIEWER_B_PATH = path.resolve('eval/corpus/reviewer-b-manifest.json');
const HUMAN_GOLD_PATH = path.resolve('eval/corpus/human-gold-manifest.json');

// Pseudo-random seeded generator for deterministic, reproducible selection
function createPrng(seedStr) {
  let hash = crypto.createHash('sha256').update(seedStr).digest();
  let state = hash.readUInt32BE(0);
  return function next() {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function deterministicShuffle(array, prng) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(prng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function selectManifests() {
  if (!fs.existsSync(INVENTORY_PATH)) {
    console.error(`Inventory not found at ${INVENTORY_PATH}`);
    process.exit(1);
  }

  const inventory = JSON.parse(fs.readFileSync(INVENTORY_PATH, 'utf8'));
  const prng = createPrng('reporise-m8-review-selection-seed-42');

  // Group by archetype
  const byArch = {};
  for (const item of inventory) {
    if (!byArch[item.primary_archetype]) byArch[item.primary_archetype] = [];
    byArch[item.primary_archetype].push(item);
  }

  // Quotas for Reviewer B: 50 repos total across 12 archetypes
  // 10 archetypes x 4 repos = 40 repos
  // 2 archetypes (library [12] and data_ml [14]) x 5 repos = 10 repos -> Total: 50 repos
  const reviewerBQuota = {
    cli: 4,
    library: 5,
    framework: 4,
    sdk: 4,
    devtool: 4,
    webapp: 4,
    docs: 4,
    monorepo: 4,
    devops: 4,
    data_ml: 5,
    plugin: 3,
    small_project: 3
  }; // 4+5+4+4+4+4+4+4+4+5+3+3 = 48 -> let's make plugin 4, small_project 4 = 50 total!
  reviewerBQuota.plugin = 4;
  reviewerBQuota.small_project = 4;

  const reviewerBSelection = [];

  for (const [arch, quota] of Object.entries(reviewerBQuota)) {
    const repos = deterministicShuffle(byArch[arch], prng);
    reviewerBSelection.push(...repos.slice(0, quota));
  }

  reviewerBSelection.sort((a, b) => a.fixture_id.localeCompare(b.fixture_id));

  // Human Gold Selection: 25 repos total
  // 10 Calibration fixtures (strictly from Train & Validation splits; 0 from hidden Test)
  // 15 Untouched Evaluation fixtures (stratified across Train, Val, and Test)
  const nonTestRepos = inventory.filter(r => r.split !== 'test');
  const shuffledNonTest = deterministicShuffle(nonTestRepos, prng);

  // Group shuffled non-test by archetype to get 10 calibration repos from distinct archetypes
  const calibrationSelection = [];
  const calSeenArch = new Set();

  for (const r of shuffledNonTest) {
    if (calibrationSelection.length >= 10) break;
    if (!calSeenArch.has(r.primary_archetype)) {
      calSeenArch.add(r.primary_archetype);
      calibrationSelection.push({
        ...r,
        gold_role: 'calibration',
        evaluation_access: 'calibration_only'
      });
    }
  }

  const calIdSet = new Set(calibrationSelection.map(r => r.fixture_id));
  const remainingForEval = inventory.filter(r => !calIdSet.has(r.fixture_id));
  const shuffledRemaining = deterministicShuffle(remainingForEval, prng);

  // Select 15 evaluation repos covering diverse archetypes and splits
  const evaluationSelection = [];
  const evalArchetypeCounts = {};

  for (const r of shuffledRemaining) {
    if (evaluationSelection.length >= 15) break;
    evalArchetypeCounts[r.primary_archetype] = (evalArchetypeCounts[r.primary_archetype] || 0);
    if (evalArchetypeCounts[r.primary_archetype] < 2) {
      evalArchetypeCounts[r.primary_archetype]++;
      evaluationSelection.push({
        ...r,
        gold_role: 'untouched_evaluation',
        evaluation_access: 'frozen_benchmark'
      });
    }
  }

  const fullGoldSelection = [...calibrationSelection, ...evaluationSelection];
  fullGoldSelection.sort((a, b) => a.fixture_id.localeCompare(b.fixture_id));

  console.log(`\n======================================================================`);
  console.log(`  M8 REVIEWER & GOLD MANIFEST GENERATION`);
  console.log(`======================================================================`);
  console.log(`Reviewer B Subset Size:     ${reviewerBSelection.length} (Target: 50)`);
  console.log(`Human Gold Total Size:      ${fullGoldSelection.length} (Target: 25)`);
  console.log(`  - Calibration Subset:     ${calibrationSelection.length} (Target: 10, strictly non-test)`);
  console.log(`  - Untouched Eval Subset:  ${evaluationSelection.length} (Target: 15)`);

  fs.writeFileSync(REVIEWER_B_PATH, JSON.stringify(reviewerBSelection, null, 2), 'utf8');
  fs.writeFileSync(HUMAN_GOLD_PATH, JSON.stringify(fullGoldSelection, null, 2), 'utf8');

  console.log(`\nSaved:`);
  console.log(`  - ${REVIEWER_B_PATH}`);
  console.log(`  - ${HUMAN_GOLD_PATH}`);
}

selectManifests();
