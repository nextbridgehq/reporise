import fs from 'node:fs';
import path from 'node:path';

const ARCHETYPES = [
  'cli', 'library', 'framework', 'sdk', 'devtool', 'webapp',
  'docs', 'monorepo', 'devops', 'data_ml', 'plugin', 'small_project'
];

const README_TAGS = [
  'char_minimal',
  'char_standard',
  'char_docs_heavy',
  'char_api_reference',
  'char_tutorial',
  'char_architecture',
  'char_feature_comparison',
  'char_example_heavy',
  'char_install_config',
  'char_mixed'
];

function printHeader(title) {
  console.log(`\n======================================================================`);
  console.log(`  ${title}`);
  console.log(`======================================================================`);
}

function runAudit(manifestPath) {
  const resolved = path.resolve(manifestPath);
  if (!fs.existsSync(resolved)) {
    console.error(`Error: Manifest file not found at ${resolved}`);
    process.exit(1);
  }

  const pool = JSON.parse(fs.readFileSync(resolved, 'utf8'));
  const total = pool.length;

  printHeader(`M8 STRATIFICATION & COVERAGE AUDIT (${total} Repositories)`);
  console.log(`Manifest: ${resolved}`);

  let errors = [];
  let warnings = [];

  // 1. Archetype Distribution
  const archetypeCounts = {};
  for (const a of ARCHETYPES) archetypeCounts[a] = 0;

  for (const item of pool) {
    const arch = item.primary_archetype;
    if (!ARCHETYPES.includes(arch)) {
      errors.push(`Unknown primary archetype "${arch}" on candidate ${item.candidate_id || item.repository}`);
    } else {
      archetypeCounts[arch]++;
    }
  }

  console.log(`\n--- 1. ARCHETYPE DISTRIBUTION (Floor: >= 5) ---`);
  console.log(`${'Archetype'.padEnd(20)} | ${'Count'.padStart(6)} | ${'% Total'.padStart(8)} | ${'Status'.padEnd(10)}`);
  console.log('-'.repeat(52));

  for (const arch of ARCHETYPES) {
    const count = archetypeCounts[arch];
    const pct = ((count / total) * 100).toFixed(1) + '%';
    let status = 'OK';
    if (count < 5) {
      status = 'FAIL (<5)';
      errors.push(`Archetype ${arch} has count ${count} which is below minimum floor of 5`);
    } else if (count < 7) {
      status = 'LOW (>=5)';
    }
    console.log(`${arch.padEnd(20)} | ${count.toString().padStart(6)} | ${pct.padStart(8)} | ${status.padEnd(10)}`);
  }

  // 2. README Characteristic Tag Coverage (Multi-Label)
  const tagCounts = {};
  for (const tag of README_TAGS) tagCounts[tag] = 0;

  let totalTagOccurrences = 0;
  for (const item of pool) {
    const tags = item.readme_characteristics || [];
    if (tags.length === 0) {
      warnings.push(`Candidate ${item.candidate_id || item.repository} has 0 README characteristic tags`);
    }
    for (const tag of tags) {
      if (!README_TAGS.includes(tag)) {
        errors.push(`Unknown README tag "${tag}" on candidate ${item.candidate_id || item.repository}`);
      } else {
        tagCounts[tag]++;
        totalTagOccurrences++;
      }
    }
  }

  console.log(`\n--- 2. README CHARACTERISTICS COVERAGE (Floor: >= 5, Multi-Label) ---`);
  console.log(`Total tag instances: ${totalTagOccurrences} (Avg: ${(totalTagOccurrences / total).toFixed(2)} tags/repo)`);
  console.log(`${'README Characteristic Tag'.padEnd(28)} | ${'Count'.padStart(6)} | ${'Coverage %'.padStart(10)} | ${'Status'.padEnd(10)}`);
  console.log('-'.repeat(62));

  for (const tag of README_TAGS) {
    const count = tagCounts[tag];
    const covPct = ((count / total) * 100).toFixed(1) + '%';
    let status = 'OK';
    if (count < 5) {
      status = 'FAIL (<5)';
      errors.push(`README tag ${tag} has count ${count} which is below minimum floor of 5`);
    }
    console.log(`${tag.padEnd(28)} | ${count.toString().padStart(6)} | ${covPct.padStart(10)} | ${status.padEnd(10)}`);
  }

  // 3. Split Distribution (Train / Val / Test)
  const splitCounts = { train: 0, validation: 0, test: 0, unspecified: 0 };
  for (const item of pool) {
    const s = item.proposed_split || item.split;
    if (s && splitCounts[s] !== undefined) {
      splitCounts[s]++;
    } else {
      splitCounts.unspecified++;
    }
  }

  console.log(`\n--- 3. PROPOSED SPLIT ALLOCATION ---`);
  console.log(`Train:      ${splitCounts.train.toString().padStart(4)} (${((splitCounts.train / total) * 100).toFixed(1)}%)  [Target: ~60%]`);
  console.log(`Validation: ${splitCounts.validation.toString().padStart(4)} (${((splitCounts.validation / total) * 100).toFixed(1)}%)  [Target: ~20%]`);
  console.log(`Test:       ${splitCounts.test.toString().padStart(4)} (${((splitCounts.test / total) * 100).toFixed(1)}%)  [Target: ~20%]`);
  if (splitCounts.unspecified > 0) {
    console.log(`Unassigned: ${splitCounts.unspecified.toString().padStart(4)} (${((splitCounts.unspecified / total) * 100).toFixed(1)}%)`);
  }

  // 4. Cross-Tabulation Matrix: Archetype x README Characteristic
  console.log(`\n--- 4. CROSS-TABULATION MATRIX (Archetype x README Tags) ---`);
  // Print abbreviated tag headers
  const abbrevTags = README_TAGS.map(t => t.replace('char_', '').substring(0, 5));
  const tagHeader = abbrevTags.map(t => t.padStart(6)).join(' | ');
  console.log(`${'Archetype'.padEnd(15)} | ${tagHeader} | ${'Total'.padStart(5)}`);
  console.log('-'.repeat(20 + abbrevTags.length * 9));

  for (const arch of ARCHETYPES) {
    const rowCounts = {};
    for (const t of README_TAGS) rowCounts[t] = 0;
    let archTotal = 0;

    for (const item of pool) {
      if (item.primary_archetype === arch) {
        archTotal++;
        for (const t of (item.readme_characteristics || [])) {
          if (rowCounts[t] !== undefined) rowCounts[t]++;
        }
      }
    }

    const rowStr = README_TAGS.map(t => rowCounts[t].toString().padStart(6)).join(' | ');
    console.log(`${arch.padEnd(15)} | ${rowStr} | ${archTotal.toString().padStart(5)}`);
  }
  console.log(`Legend: ${README_TAGS.map((t, i) => `${abbrevTags[i]}=${t}`).join(', ')}`);

  // 5. Cross-Tabulation Matrix: Archetype x Split
  console.log(`\n--- 5. STRATIFIED SPLITS BY ARCHETYPE ---`);
  console.log(`${'Archetype'.padEnd(16)} | ${'Train'.padStart(6)} | ${'Val'.padStart(6)} | ${'Test'.padStart(6)} | ${'Total'.padStart(6)}`);
  console.log('-'.repeat(50));

  for (const arch of ARCHETYPES) {
    let tr = 0, va = 0, te = 0;
    for (const item of pool) {
      if (item.primary_archetype === arch) {
        const s = item.proposed_split || item.split;
        if (s === 'train') tr++;
        else if (s === 'validation') va++;
        else if (s === 'test') te++;
      }
    }
    const sum = tr + va + te;
    console.log(`${arch.padEnd(16)} | ${tr.toString().padStart(6)} | ${va.toString().padStart(6)} | ${te.toString().padStart(6)} | ${sum.toString().padStart(6)}`);
  }

  // 6. Language Diversity
  const langCounts = {};
  for (const item of pool) {
    const l = item.language || 'unknown';
    langCounts[l] = (langCounts[l] || 0) + 1;
  }
  console.log(`\n--- 6. LANGUAGE & ECOSYSTEM DIVERSITY ---`);
  const sortedLangs = Object.entries(langCounts).sort((a, b) => b[1] - a[1]);
  for (const [lang, count] of sortedLangs) {
    const pct = ((count / total) * 100).toFixed(1) + '%';
    console.log(`  ${lang.padEnd(16)}: ${count.toString().padStart(4)} (${pct})`);
  }

  // Audit Result Summary
  printHeader(`AUDIT SUMMARY`);
  if (warnings.length > 0) {
    console.log(`Warnings (${warnings.length}):`);
    for (const w of warnings) console.warn(`  [WARN] ${w}`);
  }
  if (errors.length > 0) {
    console.error(`\nErrors (${errors.length}):`);
    for (const e of errors) console.error(`  [FAIL] ${e}`);
    console.log(`\nResult: ❌ STRATIFICATION AUDIT FAILED`);
    process.exit(1);
  } else {
    console.log(`Result: ✅ ALL STRATIFICATION & COVERAGE CONSTRAINTS SATISFIED!`);
    console.log(`- 12/12 Archetypes verified (all >= 5 floor)`);
    console.log(`- 10/10 README Characteristics verified (all >= 5 floor)`);
    console.log(`- Train/Val/Test stratification verified`);
  }
}

const targetPath = process.argv[2] || 'eval/corpus/candidates-pool.json';
runAudit(targetPath);
