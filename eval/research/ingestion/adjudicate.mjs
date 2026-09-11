import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';

const INVENTORY_PATH = path.resolve('eval/corpus/inventory.json');
const REVIEWER_B_MANIFEST_PATH = path.resolve('eval/corpus/reviewer-b-manifest.json');
const REVIEWER_A_DIR = path.resolve('eval/labels/reviewer-a');
const REVIEWER_B_DIR = path.resolve('eval/labels/reviewer-b');
const LABELS_REAL_DIR = path.resolve('eval/labels/real');

function computeAgreementStats(pairs) {
  if (pairs.length === 0) return { count: 0, exact: 0, exactPct: '0.0', offByOne: 0, offByOnePct: '0.0', mae: '0.000' };

  let exact = 0;
  let offByOne = 0;
  let sumDiff = 0;

  for (const { a, b } of pairs) {
    const diff = Math.abs(a - b);
    sumDiff += diff;
    if (diff === 0) exact++;
    if (diff <= 1) offByOne++;
  }

  const count = pairs.length;
  return {
    count,
    exact,
    exactPct: ((exact / count) * 100).toFixed(1),
    offByOne,
    offByOnePct: ((offByOne / count) * 100).toFixed(1),
    mae: (sumDiff / count).toFixed(3)
  };
}

async function main() {
  console.log(`\n======================================================================`);
  console.log(`  M8.2 PHASE 5: INTER-RATER AGREEMENT & ADJUDICATION ANALYSIS`);
  console.log(`======================================================================`);

  if (!fsSync.existsSync(INVENTORY_PATH) || !fsSync.existsSync(REVIEWER_B_MANIFEST_PATH)) {
    console.error(`Inventory or Reviewer B manifest missing`);
    process.exit(1);
  }

  const inventory = JSON.parse(await fs.readFile(INVENTORY_PATH, 'utf8'));
  const manifestB = JSON.parse(await fs.readFile(REVIEWER_B_MANIFEST_PATH, 'utf8'));
  const bFixtureIds = new Set(manifestB.map(m => m.fixture_id));

  await fs.mkdir(LABELS_REAL_DIR, { recursive: true });

  const pairsByDim = {
    overall: [],
    seo: [],
    aeo: [],
    geo: []
  };

  const pairsByArchetype = {};
  const majorDisagreements = [];

  for (const item of inventory) {
    const id = item.fixture_id;
    const aFile = path.join(REVIEWER_A_DIR, `${id}.json`);
    const bFile = path.join(REVIEWER_B_DIR, `${id}.json`);

    if (!fsSync.existsSync(aFile)) {
      console.warn(`Missing Reviewer A label for ${id}`);
      continue;
    }

    const aData = JSON.parse(await fs.readFile(aFile, 'utf8'));
    let bData = null;
    if (bFixtureIds.has(id) && fsSync.existsSync(bFile)) {
      bData = JSON.parse(await fs.readFile(bFile, 'utf8'));
    }

    if (bData) {
      for (const dim of ['overall', 'seo', 'aeo', 'geo']) {
        const pair = { a: aData.scores[dim], b: bData.scores[dim] };
        pairsByDim[dim].push(pair);

        if (!pairsByArchetype[item.primary_archetype]) {
          pairsByArchetype[item.primary_archetype] = [];
        }
        if (dim === 'overall') {
          pairsByArchetype[item.primary_archetype].push(pair);
        }
      }

      const diffOverall = Math.abs(aData.scores.overall - bData.scores.overall);
      if (diffOverall > 1) {
        majorDisagreements.push({ id, repo: item.repository, a: aData.scores.overall, b: bData.scores.overall, diff: diffOverall });
      }
    }

    // Consensus scoring
    let consensusScores;
    let labelSource;

    if (bData) {
      labelSource = 'ai_consensus';
      consensusScores = {
        overall: Math.round((aData.scores.overall + bData.scores.overall) / 2),
        seo: Math.round((aData.scores.seo + bData.scores.seo) / 2),
        aeo: Math.round((aData.scores.aeo + bData.scores.aeo) / 2),
        geo: Math.round((aData.scores.geo + bData.scores.geo) / 2)
      };
    } else {
      labelSource = 'ai_review';
      consensusScores = aData.scores;
    }

    const consensusRecord = {
      fixture_id: id,
      repository: item.repository,
      primary_archetype: item.primary_archetype,
      split: item.split,
      rubric_version: 'm8-label-rubric-v1.0.0',
      label_source: labelSource,
      human_verified: false,
      scores: consensusScores,
      raw_score: consensusScores.overall,
      rationale: aData.rationale,
      reviewer_a: {
        scores: aData.scores,
        rationale: aData.rationale
      },
      reviewer_b: bData ? {
        scores: bData.scores,
        rationale: bData.rationale
      } : null,
      adjudicated_at: new Date().toISOString()
    };

    const outPath = path.join(LABELS_REAL_DIR, `${id}.json`);
    await fs.writeFile(outPath, JSON.stringify(consensusRecord, null, 2), 'utf8');
  }

  // Report statistics
  const overallStats = computeAgreementStats(pairsByDim.overall);
  const seoStats = computeAgreementStats(pairsByDim.seo);
  const aeoStats = computeAgreementStats(pairsByDim.aeo);
  const geoStats = computeAgreementStats(pairsByDim.geo);

  console.log(`\nReviewer A vs Reviewer B Agreement Results (N=${overallStats.count}):`);
  console.log(`----------------------------------------------------------------------`);
  console.log(`Dimension        Exact Agreement      Within ±1        MAE`);
  console.log(`----------------------------------------------------------------------`);
  console.log(`Overall          ${overallStats.exactPct.padStart(5)}% (${overallStats.exact}/${overallStats.count})      ${overallStats.offByOnePct.padStart(5)}%        ${overallStats.mae}`);
  console.log(`SEO              ${seoStats.exactPct.padStart(5)}% (${seoStats.exact}/${seoStats.count})      ${seoStats.offByOnePct.padStart(5)}%        ${seoStats.mae}`);
  console.log(`AEO              ${aeoStats.exactPct.padStart(5)}% (${aeoStats.exact}/${aeoStats.count})      ${aeoStats.offByOnePct.padStart(5)}%        ${aeoStats.mae}`);
  console.log(`GEO              ${geoStats.exactPct.padStart(5)}% (${geoStats.exact}/${geoStats.count})      ${geoStats.offByOnePct.padStart(5)}%        ${geoStats.mae}`);
  console.log(`----------------------------------------------------------------------`);

  console.log(`\nPer-Archetype Overall Agreement (MAE & ±1):`);
  for (const [arch, pairs] of Object.entries(pairsByArchetype)) {
    const stats = computeAgreementStats(pairs);
    console.log(`  ${arch.padEnd(16)} (N=${stats.count}): MAE=${stats.mae}, ±1=${stats.offByOnePct}%`);
  }

  console.log(`\nMajor Disagreements (|diff| > 1): ${majorDisagreements.length}`);
  for (const d of majorDisagreements) {
    console.log(`  - ${d.id} (${d.repo}): A=${d.a}, B=${d.b} (diff=${d.diff})`);
  }

  // Gate Verification
  const maePass = parseFloat(overallStats.mae) <= 0.65;
  const offByOnePass = parseFloat(overallStats.offByOnePct) >= 85.0;

  console.log(`\n======================================================================`);
  console.log(`  GATE M8.2-E EVALUATION:`);
  console.log(`  MAE <= 0.65:      ${maePass ? '✅ PASS' : '❌ FAIL'} (Actual: ${overallStats.mae})`);
  console.log(`  ±1 Agreement >= 85%: ${offByOnePass ? '✅ PASS' : '❌ FAIL'} (Actual: ${overallStats.offByOnePct}%)`);
  console.log(`======================================================================\n`);

  if (!maePass || !offByOnePass) {
    console.error('Gate M8.2-E Failed.');
    process.exit(1);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve('eval/research/ingestion/adjudicate.mjs')) {
  main().catch(console.error);
}
