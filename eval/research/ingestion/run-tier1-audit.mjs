import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import { collect } from '../../../skills/visibility-audit/scripts/lib/collect.mjs';
import { runChecks, prioritise } from '../../../skills/visibility-audit/scripts/lib/checks.mjs';

const INVENTORY_PATH = path.resolve('eval/corpus/inventory.json');
const CORPUS_DIR = path.resolve('eval/corpus');
const TIER1_OUTPUT_DIR = path.resolve('eval/labels/tier1-deterministic');

function scoreToBucket(score) {
  if (score >= 90) return 5;
  if (score >= 70) return 4;
  if (score >= 50) return 3;
  if (score >= 30) return 2;
  if (score >= 10) return 1;
  return 0;
}

export function auditRepository(repoPath) {
  const data = collect(repoPath);
  const { results, categories, surfaces, overall } = runChecks(data);
  const topFixes = prioritise(results);

  const seo = surfaces.seo || 0;
  const aeo = surfaces.aeo || 0;
  const geo = surfaces.geo || 0;
  const finalOverall = overall !== null ? overall : Math.round((seo + aeo + geo) / 3);

  return {
    raw: { overall: finalOverall, seo, aeo, geo },
    buckets: {
      overall: scoreToBucket(finalOverall),
      seo: scoreToBucket(seo),
      aeo: scoreToBucket(aeo),
      geo: scoreToBucket(geo)
    },
    topFixes: topFixes.map(f => ({ id: f.id, title: f.title, status: f.status, priority: f.priority }))
  };
}

async function main() {
  console.log(`\n======================================================================`);
  console.log(`  M8.2 PHASE 2: TIER 1 DETERMINISTIC VISCRAFT AUDIT`);
  console.log(`======================================================================`);

  if (!fsSync.existsSync(INVENTORY_PATH)) {
    console.error(`Inventory not found at ${INVENTORY_PATH}`);
    process.exit(1);
  }

  const inventory = JSON.parse(await fs.readFile(INVENTORY_PATH, 'utf8'));
  console.log(`Loaded ${inventory.length} repositories from ${INVENTORY_PATH}`);

  await fs.mkdir(TIER1_OUTPUT_DIR, { recursive: true });

  const summary = {
    total: inventory.length,
    audited: 0,
    missing: 0,
    bucketDistributions: {
      overall: [0, 0, 0, 0, 0, 0],
      seo: [0, 0, 0, 0, 0, 0],
      aeo: [0, 0, 0, 0, 0, 0],
      geo: [0, 0, 0, 0, 0, 0]
    },
    archetypeAverages: {}
  };

  const reviewedAt = new Date().toISOString();

  for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i];
    const repoPath = path.join(CORPUS_DIR, item.fixture_id);

    if (!fsSync.existsSync(repoPath)) {
      console.warn(`[WARN] Fixture not materialized on disk: ${item.fixture_id} (${item.repository})`);
      summary.missing++;
      continue;
    }

    try {
      const result = auditRepository(repoPath);

      const record = {
        fixture_id: item.fixture_id,
        repository: item.repository,
        rubric_version: "m8-label-rubric-v1.0.0",
        evaluator_id: "reporise_deterministic_v0.2.0",
        label_source: "deterministic_audit",
        human_verified: false,
        gold_role: "none",
        scores: result.buckets,
        raw_scores: result.raw,
        rationale: {
          overall: `Deterministic audit overall score ${result.raw.overall}% mapped to bucket ${result.buckets.overall}. Top fixes: ${result.topFixes.slice(0, 2).map(f => f.title).join('; ') || 'None'}.`,
          seo: `Deterministic audit SEO surface score ${result.raw.seo}% mapped to bucket ${result.buckets.seo}.`,
          aeo: `Deterministic audit AEO surface score ${result.raw.aeo}% mapped to bucket ${result.buckets.aeo}.`,
          geo: `Deterministic audit GEO surface score ${result.raw.geo}% mapped to bucket ${result.buckets.geo}.`
        },
        top_fixes: result.topFixes,
        reviewed_at: reviewedAt
      };

      const outPath = path.join(TIER1_OUTPUT_DIR, `${item.fixture_id}.json`);
      await fs.writeFile(outPath, JSON.stringify(record, null, 2), 'utf8');

      // Update distributions
      summary.audited++;
      summary.bucketDistributions.overall[result.buckets.overall]++;
      summary.bucketDistributions.seo[result.buckets.seo]++;
      summary.bucketDistributions.aeo[result.buckets.aeo]++;
      summary.bucketDistributions.geo[result.buckets.geo]++;

      if (!summary.archetypeAverages[item.primary_archetype]) {
        summary.archetypeAverages[item.primary_archetype] = { count: 0, sumOverall: 0, sumSeo: 0, sumAeo: 0, sumGeo: 0 };
      }
      const arch = summary.archetypeAverages[item.primary_archetype];
      arch.count++;
      arch.sumOverall += result.raw.overall;
      arch.sumSeo += result.raw.seo;
      arch.sumAeo += result.raw.aeo;
      arch.sumGeo += result.raw.geo;

      if ((i + 1) % 20 === 0 || i === inventory.length - 1) {
        console.log(`  Audited [${i + 1}/${inventory.length}] fixtures...`);
      }
    } catch (err) {
      console.error(`Error auditing ${item.fixture_id}: ${err.message}`);
    }
  }

  console.log(`\nAudit Complete: ${summary.audited}/${summary.total} fixtures recorded in ${TIER1_OUTPUT_DIR}`);
  if (summary.missing > 0) {
    console.warn(`[WARN] ${summary.missing} fixtures were not found on disk.`);
  }

  console.log(`\nDiscrete Bucket Distribution (Overall 0-5):`);
  for (let b = 0; b <= 5; b++) {
    const count = summary.bucketDistributions.overall[b];
    const pct = ((count / Math.max(1, summary.audited)) * 100).toFixed(1);
    console.log(`  Bucket ${b}: ${count} (${pct}%)`);
  }

  console.log(`\nArchetype Average Overall Scores:`);
  for (const [arch, stats] of Object.entries(summary.archetypeAverages)) {
    const avg = (stats.sumOverall / stats.count).toFixed(1);
    console.log(`  ${arch.padEnd(16)} (N=${stats.count}): ${avg}%`);
  }
  console.log(`======================================================================\n`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve('eval/research/ingestion/run-tier1-audit.mjs')) {
  main().catch(console.error);
}
