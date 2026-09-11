import fs from 'node:fs';
import path from 'node:path';
import { collect } from '../../skills/visibility-audit/scripts/lib/collect.mjs';

const INVENTORY_PATH = path.resolve('eval/metadata/inventory.json');
const CORPUS_DIR = path.resolve('eval/corpus');
const LABELS_REAL_DIR = path.resolve('eval/labels/real');
const CACHE_OUT_PATH = path.resolve('eval/research/collected-cache.json');

console.log('Building M8.6 research collection cache (Strict Isolation: Train N=72, Validation N=24)...');

const inventory = JSON.parse(fs.readFileSync(INVENTORY_PATH, 'utf8'));

// STRICT ISOLATION GATE: Only include train and validation. Never include test!
const allowedInventory = inventory.filter(item => {
  if (item.split === 'test') {
    return false;
  }
  return item.split === 'train' || item.split === 'validation';
});

console.log(`Filtered out 24 held-out test repositories. Total repositories in cache: ${allowedInventory.length}`);

const cacheEntries = [];
let count = 0;

for (const item of allowedInventory) {
  count++;
  const fixturePath = path.join(CORPUS_DIR, item.fixture_id);
  const labelPath = path.join(LABELS_REAL_DIR, `${item.fixture_id}.json`);
  const labelData = JSON.parse(fs.readFileSync(labelPath, 'utf8'));

  process.stdout.write(`\r[${count}/${allowedInventory.length}] Collecting ${item.fixture_id} (${item.repository})...`);
  const collectedData = collect(fixturePath);

  cacheEntries.push({
    fixture_id: item.fixture_id,
    repository: item.repository,
    primary_archetype: item.primary_archetype,
    readme_characteristics: item.readme_characteristics || [],
    split: item.split,
    ground_truth: {
      scores: labelData.scores,
      calibrated_score: labelData.calibrated_score !== undefined ? labelData.calibrated_score : labelData.scores.overall,
      raw_score: labelData.raw_score !== undefined ? labelData.raw_score : labelData.scores.overall
    },
    collected: collectedData
  });
}

console.log('\nWriting cache file to', CACHE_OUT_PATH);
fs.writeFileSync(CACHE_OUT_PATH, JSON.stringify(cacheEntries, null, 2), 'utf8');
console.log(`Cache generated successfully! File size: ${(fs.statSync(CACHE_OUT_PATH).size / (1024 * 1024)).toFixed(2)} MB`);
