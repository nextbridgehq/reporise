import fs from 'node:fs';
import path from 'node:path';
import { runChecks } from '../../skills/visibility-audit/scripts/lib/checks.mjs';

function scoreToBucket(score) {
  if (score >= 90) return 5;
  if (score >= 70) return 4;
  if (score >= 50) return 3;
  if (score >= 30) return 2;
  if (score >= 10) return 1;
  return 0;
}

const CACHE_PATH = path.resolve('eval/research/collected-cache.json');
const cache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));

console.log('======================================================================');
console.log('  M8.6-P0-GEO-002: CONDITIONAL-GATE COUNTEREXAMPLE & TRANSFER AUDIT');
console.log('======================================================================\n');

// Verify strict test isolation
for (const item of cache) {
  if (item.split === 'test') {
    throw new Error('ISOLATION VIOLATION: Test repository in cache!');
  }
}

// Evaluate each repository under:
// 1. Baseline (uncapped: geoGatingCap = 100)
// 2. Gated (capped at 25 when runnable-example fails)
const auditResults = [];

for (const item of cache) {
  const { results, surfaces } = runChecks(item.collected);
  const runEx = results.find(r => r.id === 'runnable-example');
  const runExStatus = runEx ? runEx.status : 'unknown';
  
  // Baseline:
  // Note: currently checks.mjs has geoGatingCap = 25 because of accepted mutation.
  // To get raw uncapped score, calculate directly from inSurface without cap:
  const STATUS_VALUE = { pass: 1, warn: 0.5, fail: 0, skip: null };
  const inGeo = results.filter(r => r.surfaces.includes('geo') && STATUS_VALUE[r.status] !== null);
  const uncappedRawGeo = inGeo.length
    ? Math.round((inGeo.reduce((s, r) => s + STATUS_VALUE[r.status], 0) / inGeo.length) * 100)
    : 0;
  
  const gatedRawGeo = (runExStatus === 'fail' && uncappedRawGeo > 25) ? 25 : uncappedRawGeo;
  
  const predUncapped = scoreToBucket(uncappedRawGeo);
  const predGated = scoreToBucket(gatedRawGeo);
  const actualGeo = item.ground_truth.scores.geo;
  
  const affected = uncappedRawGeo !== gatedRawGeo;
  let classification = 'C_unchanged';
  
  if (affected) {
    const errorBefore = Math.abs(predUncapped - actualGeo);
    const errorAfter = Math.abs(predGated - actualGeo);
    
    if (errorAfter < errorBefore) {
      classification = 'A_correctly_suppressed';
    } else if (actualGeo >= 2 && predGated < actualGeo) {
      classification = 'B_incorrectly_suppressed'; // False negative counterexample
    } else if (errorAfter > errorBefore) {
      classification = 'B_incorrectly_suppressed';
    } else {
      classification = 'Neutral_equal_error';
    }
  }

  // Also specifically check: is runnable-example absent (fail) while actualGeo >= 2?
  const isPotentialCounterexample = (runExStatus === 'fail' && actualGeo >= 2);

  auditResults.push({
    fixture_id: item.fixture_id,
    repository: item.repository,
    primary_archetype: item.primary_archetype,
    readme_characteristics: item.readme_characteristics || [],
    split: item.split,
    run_example_status: runExStatus,
    code_blocks_count: item.collected.readme.codeBlocks?.length || 0,
    uncapped_raw_geo: uncappedRawGeo,
    gated_raw_geo: gatedRawGeo,
    pred_uncapped: predUncapped,
    pred_gated: predGated,
    actual_geo: actualGeo,
    affected,
    classification,
    is_potential_counterexample: isPotentialCounterexample
  });
}

// -------------------------------------------------------------------
// 1. CLASSIFICATION BREAKDOWN
// -------------------------------------------------------------------
console.log('--- 1. POPULATION CLASSIFICATION BREAKDOWN ---');
for (const sp of ['validation', 'train']) {
  const subset = auditResults.filter(r => r.split === sp);
  const counts = {
    total: subset.length,
    affected: subset.filter(r => r.affected).length,
    catA_correctly_suppressed: subset.filter(r => r.classification === 'A_correctly_suppressed').length,
    catB_incorrectly_suppressed: subset.filter(r => r.classification === 'B_incorrectly_suppressed').length,
    catC_unchanged: subset.filter(r => r.classification === 'C_unchanged').length,
    neutral: subset.filter(r => r.classification === 'Neutral_equal_error').length,
    potential_counterexamples: subset.filter(r => r.is_potential_counterexample).length
  };
  console.log(`Split: ${sp.toUpperCase()} (N=${subset.length})`);
  console.log(`  Affected by gate:               ${counts.affected} / ${counts.total} (${((counts.affected/counts.total)*100).toFixed(1)}%)`);
  console.log(`  [Category A] Correctly suppressed: ${counts.catA_correctly_suppressed}`);
  console.log(`  [Category B] Incorrectly suppressed: ${counts.catB_incorrectly_suppressed}`);
  console.log(`  [Category C] Unchanged:            ${counts.catC_unchanged}`);
  console.log(`  Neutral:                           ${counts.neutral}`);
  console.log(`  Potential counterexamples (runnable=fail, actual>=2): ${counts.potential_counterexamples}\n`);
}

// -------------------------------------------------------------------
// 2. COUNTEREXAMPLE DETAIL INSPECTION
// -------------------------------------------------------------------
console.log('--- 2. DETAILED INSPECTION OF POTENTIAL COUNTEREXAMPLES ---');
const counterexamples = auditResults.filter(r => r.is_potential_counterexample);
console.log(`Total fixtures with runnable=fail and actual_geo >= 2: ${counterexamples.length}`);

if (counterexamples.length === 0) {
  console.log('  >>> ZERO COUNTEREXAMPLES FOUND across Train (N=72) and Validation (N=24)!');
  console.log('  >>> Every single fixture where runnable-example failed was rated Bucket 1 or 0 by human/reference!');
} else {
  for (const ce of counterexamples) {
    console.log(`\n  Fixture: ${ce.fixture_id} (${ce.repository}) [${ce.split}]`);
    console.log(`    Archetype: ${ce.primary_archetype}, Tags: ${ce.readme_characteristics.join(', ')}`);
    console.log(`    Code blocks in README: ${ce.code_blocks_count}`);
    console.log(`    Uncapped pred: ${ce.pred_uncapped} (raw ${ce.uncapped_raw_geo}) -> Gated pred: ${ce.pred_gated} (raw ${ce.gated_raw_geo})`);
    console.log(`    Actual reference GEO: ${ce.actual_geo}`);
    console.log(`    Classification: ${ce.classification}`);
  }
}

// -------------------------------------------------------------------
// 3. F04 RESIDUAL COUNT (Before vs After)
// -------------------------------------------------------------------
// F04 is defined as GEO Over-credit where pred - actual >= 1
console.log('\n--- 3. F04 RESIDUAL FREQUENCY (OVER-CREDIT BIAS) ---');
for (const sp of ['validation', 'train', 'combined']) {
  const subset = sp === 'combined' ? auditResults : auditResults.filter(r => r.split === sp);
  const f04_before = subset.filter(r => (r.pred_uncapped - r.actual_geo) >= 1).length;
  const f04_after = subset.filter(r => (r.pred_gated - r.actual_geo) >= 1).length;
  const f04_delta = f04_after - f04_before;
  const f04_reduction_pct = ((f04_before - f04_after) / f04_before * 100).toFixed(1);
  console.log(`Split: ${sp.toUpperCase()} (N=${subset.length})`);
  console.log(`  F04 instances before: ${f04_before}`);
  console.log(`  F04 instances after:  ${f04_after}`);
  console.log(`  F04 net reduction:    ${f04_delta} (${f04_reduction_pct}% reduction)\n`);
}

// -------------------------------------------------------------------
// 4. PER-ARCHETYPE GEO TRANSFER DYNAMICS
// -------------------------------------------------------------------
console.log('--- 4. PER-ARCHETYPE GEO TRANSFER (MAE & BIAS BEFORE VS AFTER) ---');
const archetypes = [...new Set(auditResults.map(r => r.primary_archetype))].sort();
const archetypeAudit = {};

for (const arch of archetypes) {
  const archItems = auditResults.filter(r => r.primary_archetype === arch);
  const n = archItems.length;
  
  const uncappedMae = Number((archItems.reduce((s, r) => s + Math.abs(r.pred_uncapped - r.actual_geo), 0) / n).toFixed(4));
  const gatedMae = Number((archItems.reduce((s, r) => s + Math.abs(r.pred_gated - r.actual_geo), 0) / n).toFixed(4));
  const uncappedMe = Number((archItems.reduce((s, r) => s + (r.pred_uncapped - r.actual_geo), 0) / n).toFixed(4));
  const gatedMe = Number((archItems.reduce((s, r) => s + (r.pred_gated - r.actual_geo), 0) / n).toFixed(4));
  
  archetypeAudit[arch] = {
    n,
    uncapped_mae: uncappedMae,
    gated_mae: gatedMae,
    mae_delta: Number((gatedMae - uncappedMae).toFixed(4)),
    uncapped_bias: uncappedMe,
    gated_bias: gatedMe,
    bias_delta: Number((gatedMe - uncappedMe).toFixed(4))
  };

  const statusMarker = gatedMae < uncappedMae ? '🟢 Improved' : gatedMae === uncappedMae ? '⚪ Unchanged' : '🔴 Regressed';
  console.log(`  ${arch.padEnd(14)} (N=${n}): MAE ${uncappedMae.toFixed(4)} -> ${gatedMae.toFixed(4)} (Δ ${archetypeAudit[arch].mae_delta > 0 ? '+' : ''}${archetypeAudit[arch].mae_delta.toFixed(4)}) | Bias ${uncappedMe.toFixed(4)} -> ${gatedMe.toFixed(4)} [${statusMarker}]`);
}

// -------------------------------------------------------------------
// 5. PER-README-CHARACTERISTIC GEO TRANSFER
// -------------------------------------------------------------------
console.log('\n--- 5. PER-README-CHARACTERISTIC GEO TRANSFER ---');
const tags = [
  'char_api_reference',
  'char_architecture',
  'char_docs_heavy',
  'char_example_heavy',
  'char_feature_comparison',
  'char_install_config',
  'char_minimal',
  'char_mixed',
  'char_standard',
  'char_tutorial'
];
const tagAudit = {};

for (const tag of tags) {
  const tagItems = auditResults.filter(r => r.readme_characteristics.includes(tag));
  const n = tagItems.length;
  if (n === 0) continue;

  const uncappedMae = Number((tagItems.reduce((s, r) => s + Math.abs(r.pred_uncapped - r.actual_geo), 0) / n).toFixed(4));
  const gatedMae = Number((tagItems.reduce((s, r) => s + Math.abs(r.pred_gated - r.actual_geo), 0) / n).toFixed(4));
  const uncappedMe = Number((tagItems.reduce((s, r) => s + (r.pred_uncapped - r.actual_geo), 0) / n).toFixed(4));
  const gatedMe = Number((tagItems.reduce((s, r) => s + (r.pred_gated - r.actual_geo), 0) / n).toFixed(4));

  tagAudit[tag] = {
    n,
    uncapped_mae: uncappedMae,
    gated_mae: gatedMae,
    mae_delta: Number((gatedMae - uncappedMae).toFixed(4)),
    uncapped_bias: uncappedMe,
    gated_bias: gatedMe
  };

  const statusMarker = gatedMae < uncappedMae ? '🟢 Improved' : gatedMae === uncappedMae ? '⚪ Unchanged' : '🔴 Regressed';
  console.log(`  ${tag.padEnd(22)} (N=${n}): MAE ${uncappedMae.toFixed(4)} -> ${gatedMae.toFixed(4)} (Δ ${tagAudit[tag].mae_delta > 0 ? '+' : ''}${tagAudit[tag].mae_delta.toFixed(4)}) | Bias ${uncappedMe.toFixed(4)} -> ${gatedMe.toFixed(4)} [${statusMarker}]`);
}

// -------------------------------------------------------------------
// SAVE FULL REPORT
// -------------------------------------------------------------------
const fullAuditReport = {
  milestone: 'M8.6-P0-GEO-002',
  title: 'Conditional-Gate Counterexample & Transfer Audit Report',
  timestamp: new Date().toISOString(),
  rule_evaluated: 'runnable-example === "fail" -> surfaces.geo <= 25',
  summary: {
    train_n: 72,
    val_n: 24,
    total_evaluated: 96,
    held_out_test_n: 24,
    test_isolation_verified: true
  },
  counterexample_audit: {
    total_counterexamples: counterexamples.length,
    counterexamples
  },
  f04_residual_reduction: {
    train: {
      before: auditResults.filter(r => r.split === 'train' && (r.pred_uncapped - r.actual_geo) >= 1).length,
      after: auditResults.filter(r => r.split === 'train' && (r.pred_gated - r.actual_geo) >= 1).length
    },
    val: {
      before: auditResults.filter(r => r.split === 'validation' && (r.pred_uncapped - r.actual_geo) >= 1).length,
      after: auditResults.filter(r => r.split === 'validation' && (r.pred_gated - r.actual_geo) >= 1).length
    }
  },
  archetype_transfer: archetypeAudit,
  readme_characteristic_transfer: tagAudit,
  fixtures: auditResults
};

const outPath = path.resolve('docs/evaluation/data/geo-counterexample-audit.json');
fs.writeFileSync(outPath, JSON.stringify(fullAuditReport, null, 2), 'utf8');
console.log(`\nFull audit report saved to ${outPath}`);
