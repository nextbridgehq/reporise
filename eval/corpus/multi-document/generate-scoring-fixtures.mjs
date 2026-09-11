/**
 * generate-m9-2-fixtures.mjs — Generates the 40 fixtures for M9.2.
 */

import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { M9_2_CORPUS_ITEMS } from './corpus-scoring-data.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FIXTURES_DIR = join(__dirname, 'scoring-fixtures');
const INVENTORY_PATH = join(__dirname, 'scoring-inventory.json');

console.log('Generating M9.2 Scoring Integration Corpus (N=40)...');

rmSync(FIXTURES_DIR, { recursive: true, force: true });
mkdirSync(FIXTURES_DIR, { recursive: true });

const inventory = [];

for (const item of M9_2_CORPUS_ITEMS) {
  const repoDir = join(FIXTURES_DIR, item.fixture_id);
  mkdirSync(repoDir, { recursive: true });

  // 1. Root README
  writeFileSync(join(repoDir, 'README.md'), item.readme, 'utf8');

  // 2. Manifest
  if (item.manifest && Object.keys(item.manifest).length > 0) {
    writeFileSync(join(repoDir, 'package.json'), JSON.stringify(item.manifest, null, 2), 'utf8');
  }

  // 3. Local nested files (docs/, packages/)
  for (const [relPath, content] of Object.entries(item.local_files || {})) {
    const fullP = join(repoDir, relPath);
    mkdirSync(dirname(fullP), { recursive: true });
    writeFileSync(fullP, content, 'utf8');
  }

  // 4. External mocks
  if (item.external_docs && Object.keys(item.external_docs).length > 0) {
    writeFileSync(
      join(repoDir, 'external-mocks.json'),
      JSON.stringify(item.external_docs, null, 2),
      'utf8'
    );
  }

  inventory.push({
    fixture_id: item.fixture_id,
    repository: item.repository,
    split: item.split,
    archetype: item.archetype,
    doc_strategy: item.doc_strategy,
    ground_truth: item.ground_truth,
    has_external_mock: Object.keys(item.external_docs || {}).length > 0,
    has_local_nested: Object.keys(item.local_files || {}).length > 0,
    fixture_path: `eval/corpus/multi-document/scoring-fixtures/${item.fixture_id}`,
  });
}

writeFileSync(INVENTORY_PATH, JSON.stringify(inventory, null, 2), 'utf8');
console.log(`✓ Successfully generated 40 fixtures in ${FIXTURES_DIR}`);
console.log(`✓ Inventory written to ${INVENTORY_PATH}`);
