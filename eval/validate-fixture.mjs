import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Validates that a fixture object adheres to the Fixture Contract (SchemaVersion 1).
 *
 * @param {object} fixture - Parsed fixture object
 * @returns {boolean} true if valid
 * @throws {Error} if any contract requirement is violated
 */
export function validateFixture(fixture) {
  if (!fixture || typeof fixture !== 'object') {
    throw new Error('Invalid fixture object');
  }

  if (fixture.schemaVersion !== 1) {
    throw new Error('Invalid schemaVersion');
  }

  if (!fixture.id || typeof fixture.id !== 'string') {
    throw new Error('Missing id');
  }

  if (!Array.isArray(fixture.files)) {
    throw new Error('files must be an array');
  }

  for (const f of fixture.files) {
    if (
      !f ||
      typeof f !== 'object' ||
      !f.path ||
      typeof f.path !== 'string' ||
      !f.sha256 ||
      typeof f.sha256 !== 'string' ||
      typeof f.sizeBytes !== 'number'
    ) {
      throw new Error('Invalid file entry');
    }
  }

  return true;
}

// CLI execution support
if (
  process.argv[1] &&
  fileURLToPath(import.meta.url) === path.resolve(process.argv[1])
) {
  const targetPath = process.argv[2];
  if (!targetPath) {
    console.error('Usage: node eval/validate-fixture.mjs <path-to-fixture.json>');
    process.exit(1);
  }

  try {
    const raw = fs.readFileSync(targetPath, 'utf8');
    const parsed = JSON.parse(raw);
    validateFixture(parsed);
    console.log(`Validation passed: ${parsed.id}`);
  } catch (err) {
    console.error(`Validation failed: ${err.message}`);
    process.exit(1);
  }
}
