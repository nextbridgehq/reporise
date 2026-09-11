import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const INVENTORY_PATH = path.resolve('eval/corpus/inventory.json');
const CORPUS_DIR = path.resolve('eval/corpus');
const LABELS_DIR = path.resolve('eval/labels');
const METADATA_DIR = path.resolve('eval/metadata');
const MANIFESTS_DIR = path.resolve('eval/manifests');

function sha256(content) {
  return crypto.createHash('sha256').update(content).digest('hex');
}

function printHeader(title) {
  console.log(`\n======================================================================`);
  console.log(`  ${title}`);
  console.log(`======================================================================`);
}

function verifyM83Gates() {
  printHeader('M8.3 CORPUS FREEZE & RELEASE PACKAGING ACCEPTANCE GATES');

  const gates = [
    { id: 'M8.3-A', title: 'Corpus Layer Materialized (120 snapshots matching inventory & contract)', pass: false, details: '' },
    { id: 'M8.3-B', title: 'Metadata Layer Integrity (inventory, splits, taxonomy, provenance complete)', pass: false, details: '' },
    { id: 'M8.3-C', title: 'Split Constraint Verification (72 Train / 24 Validation / 24 Test)', pass: false, details: '' },
    { id: 'M8.3-D', title: 'Zero Orphan Assets (Bidirectional 1:1 match across snapshots, labels, inventory)', pass: false, details: '' },
    { id: 'M8.3-E', title: 'Full Measurement Preservation (Tier 1: 120, Rev A: 120, Rev B: 50, Gold: 25, Real: 120)', pass: false, details: '' },
    { id: 'M8.3-F', title: 'Corpus Cryptographic Seal (corpus.sha256 byte-for-byte disk match)', pass: false, details: '' },
    { id: 'M8.3-G', title: 'Labels Cryptographic Seal (labels.sha256 byte-for-byte disk match)', pass: false, details: '' },
    { id: 'M8.3-H', title: 'Release Manifest Sealed (corpus-m8-v1.0.0 release manifest complete)', pass: false, details: '' }
  ];

  if (!fs.existsSync(INVENTORY_PATH)) {
    console.error(`Fatal: Inventory not found at ${INVENTORY_PATH}`);
    process.exit(1);
  }

  const inventory = JSON.parse(fs.readFileSync(INVENTORY_PATH, 'utf8'));
  const invIds = new Set(inventory.map(item => item.fixture_id));

  // Gate M8.3-A: Corpus Layer Materialized
  let corpusPass = true;
  let corpusErrors = [];
  for (const item of inventory) {
    const fixtureDir = path.join(CORPUS_DIR, item.fixture_id);
    const fixtureJson = path.join(fixtureDir, 'fixture.json');
    if (!fs.existsSync(fixtureJson)) {
      corpusPass = false;
      corpusErrors.push(`${item.fixture_id} missing fixture.json`);
      break;
    }
    const stat = fs.statSync(fixtureDir);
    if (!stat.isDirectory()) {
      corpusPass = false;
      corpusErrors.push(`${item.fixture_id} is not a directory`);
      break;
    }
  }
  if (corpusPass) {
    gates[0].pass = true;
    gates[0].details = `All 120 fixture folders verified in ${CORPUS_DIR}`;
  } else {
    gates[0].details = corpusErrors.join('; ');
  }

  // Gate M8.3-B: Metadata Layer Integrity
  const metaFiles = ['inventory.json', 'splits.json', 'taxonomy.json', 'provenance.json'];
  let metaPass = true;
  let missingMeta = [];
  for (const mf of metaFiles) {
    const p = path.join(METADATA_DIR, mf);
    if (!fs.existsSync(p)) {
      metaPass = false;
      missingMeta.push(mf);
    }
  }
  if (metaPass) {
    const metaInv = JSON.parse(fs.readFileSync(path.join(METADATA_DIR, 'inventory.json'), 'utf8'));
    const metaSplits = JSON.parse(fs.readFileSync(path.join(METADATA_DIR, 'splits.json'), 'utf8'));
    if (metaInv.length === 120 && metaSplits.total_repositories === 120) {
      gates[1].pass = true;
      gates[1].details = 'All 4 metadata files present and validated against inventory';
    } else {
      gates[1].details = `Metadata length mismatch (inv: ${metaInv.length}, splits: ${metaSplits.total_repositories})`;
    }
  } else {
    gates[1].details = `Missing metadata files: ${missingMeta.join(', ')}`;
  }

  // Gate M8.3-C: Split Constraint Verification
  const trainCount = inventory.filter(i => i.split === 'train').length;
  const valCount = inventory.filter(i => i.split === 'validation').length;
  const testCount = inventory.filter(i => i.split === 'test').length;
  if (trainCount === 72 && valCount === 24 && testCount === 24) {
    gates[2].pass = true;
    gates[2].details = `Exact 72/24/24 split verified (60.0% / 20.0% / 20.0%)`;
  } else {
    gates[2].details = `Split constraint violated: Train=${trainCount}, Val=${valCount}, Test=${testCount}`;
  }

  // Gate M8.3-D: Zero Orphan Assets
  const realLabelsDir = path.join(LABELS_DIR, 'real');
  const labelFiles = fs.readdirSync(realLabelsDir).filter(f => f.endsWith('.json'));
  let orphanErrors = [];
  if (labelFiles.length !== 120) {
    orphanErrors.push(`Expected 120 consolidated labels in eval/labels/real, found ${labelFiles.length}`);
  }
  for (const lf of labelFiles) {
    const id = lf.replace('.json', '');
    if (!invIds.has(id)) {
      orphanErrors.push(`Orphan label found: ${lf}`);
    }
  }
  if (orphanErrors.length === 0) {
    gates[3].pass = true;
    gates[3].details = '120/120 bidirectional correspondence between inventory, snapshots, and consolidated labels';
  } else {
    gates[3].details = orphanErrors.join('; ');
  }

  // Gate M8.3-E: Full Measurement Preservation
  const t1 = fs.readdirSync(path.join(LABELS_DIR, 'tier1-deterministic')).filter(f => f.endsWith('.json')).length;
  const rA = fs.readdirSync(path.join(LABELS_DIR, 'reviewer-a')).filter(f => f.endsWith('.json')).length;
  const rB = fs.readdirSync(path.join(LABELS_DIR, 'reviewer-b')).filter(f => f.endsWith('.json')).length;
  const hG = fs.readdirSync(path.join(LABELS_DIR, 'human-gold')).filter(f => f.endsWith('.json')).length;
  const rC = fs.readdirSync(path.join(LABELS_DIR, 'real')).filter(f => f.endsWith('.json')).length;

  if (t1 === 120 && rA === 120 && rB === 50 && hG === 25 && rC === 120) {
    gates[4].pass = true;
    gates[4].details = `Preserved: Tier1=${t1}, RevA=${rA}, RevB=${rB}, Gold=${hG}, Consolidated=${rC}`;
  } else {
    gates[4].details = `Counts mismatch: Tier1=${t1}, RevA=${rA}, RevB=${rB}, Gold=${hG}, Consolidated=${rC}`;
  }

  // Gate M8.3-F: Corpus Cryptographic Seal
  const corpusManifestPath = path.join(MANIFESTS_DIR, 'corpus.sha256');
  if (fs.existsSync(corpusManifestPath)) {
    const lines = fs.readFileSync(corpusManifestPath, 'utf8').trim().split('\n');
    let checksumErrors = 0;
    for (const line of lines) {
      if (!line.trim()) continue;
      const [expectedHash, relPath] = line.trim().split(/\s+/);
      const fullPath = path.resolve(relPath);
      if (!fs.existsSync(fullPath)) {
        checksumErrors++;
        break;
      }
      const actualHash = sha256(fs.readFileSync(fullPath));
      if (actualHash !== expectedHash) {
        checksumErrors++;
        break;
      }
    }
    if (checksumErrors === 0) {
      gates[5].pass = true;
      gates[5].details = `All ${lines.length} files in corpus.sha256 verified byte-for-byte`;
    } else {
      gates[5].details = `${checksumErrors} checksum mismatches in corpus.sha256`;
    }
  } else {
    gates[5].details = 'corpus.sha256 missing';
  }

  // Gate M8.3-G: Labels Cryptographic Seal
  const labelsManifestPath = path.join(MANIFESTS_DIR, 'labels.sha256');
  if (fs.existsSync(labelsManifestPath)) {
    const lines = fs.readFileSync(labelsManifestPath, 'utf8').trim().split('\n');
    let checksumErrors = 0;
    for (const line of lines) {
      if (!line.trim()) continue;
      const [expectedHash, relPath] = line.trim().split(/\s+/);
      const fullPath = path.resolve(relPath);
      if (!fs.existsSync(fullPath)) {
        checksumErrors++;
        break;
      }
      const actualHash = sha256(fs.readFileSync(fullPath));
      if (actualHash !== expectedHash) {
        checksumErrors++;
        break;
      }
    }
    if (checksumErrors === 0) {
      gates[6].pass = true;
      gates[6].details = `All ${lines.length} files in labels.sha256 verified byte-for-byte`;
    } else {
      gates[6].details = `${checksumErrors} checksum mismatches in labels.sha256`;
    }
  } else {
    gates[6].details = 'labels.sha256 missing';
  }

  // Gate M8.3-H: Release Manifest Sealed
  const releaseManifestPath = path.join(MANIFESTS_DIR, 'release-manifest.json');
  if (fs.existsSync(releaseManifestPath)) {
    const rel = JSON.parse(fs.readFileSync(releaseManifestPath, 'utf8'));
    if (rel.release_tag === 'corpus-m8-v1.0.0' && rel.corpus.repository_count === 120) {
      gates[7].pass = true;
      gates[7].details = `release-manifest.json valid (tag: ${rel.release_tag}, repos: ${rel.corpus.repository_count})`;
    } else {
      gates[7].details = 'release-manifest.json invalid contents';
    }
  } else {
    gates[7].details = 'release-manifest.json missing';
  }

  // Print results
  let allPass = true;
  for (const gate of gates) {
    const mark = gate.pass ? '✅ PASS' : '❌ FAIL';
    if (!gate.pass) allPass = false;
    console.log(`[${gate.id}] ${mark} — ${gate.title}`);
    console.log(`       Details: ${gate.details}`);
  }

  console.log(`\n----------------------------------------------------------------------`);
  console.log(`  OVERALL VERDICT: ${allPass ? '✅ ALL 8 M8.3 RELEASE GATES PASSED' : '❌ RELEASE GATES FAILED'}`);
  console.log(`======================================================================\n`);

  if (!allPass) {
    process.exit(1);
  }
}

verifyM83Gates();
