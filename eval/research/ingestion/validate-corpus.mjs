import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const CORPUS_DIR = path.resolve('eval/corpus');
const MAX_FILE_SIZE = 512 * 1024; // 512 KB
const MAX_TOTAL_SIZE = 5 * 1024 * 1024; // 5 MB
const FORBIDDEN_DIRS = ['.git', 'node_modules', 'dist', 'build', 'coverage'];

function validateFixture(fixtureDir) {
  const id = path.basename(fixtureDir);
  const fixtureJsonPath = path.join(fixtureDir, 'fixture.json');

  if (!fs.existsSync(fixtureJsonPath)) {
    return { id, valid: false, errors: ['fixture.json does not exist'] };
  }

  let fixtureData;
  try {
    fixtureData = JSON.parse(fs.readFileSync(fixtureJsonPath, 'utf8'));
  } catch (err) {
    return { id, valid: false, errors: [`Corrupted fixture.json: ${err.message}`] };
  }

  const errors = [];
  const warnings = [];

  // 1. Schema check
  if (fixtureData.id !== id) errors.push(`ID mismatch: expected "${id}", found "${fixtureData.id}"`);
  if (fixtureData.schemaVersion !== 1 && fixtureData.schema_version !== 1) {
    errors.push(`schemaVersion must be 1`);
  }
  if (!Array.isArray(fixtureData.files)) {
    errors.push(`files array missing in fixture.json`);
    return { id, valid: false, errors, warnings };
  }

  // 2. Check forbidden directories
  for (const forbidden of FORBIDDEN_DIRS) {
    if (fs.existsSync(path.join(fixtureDir, forbidden))) {
      errors.push(`Forbidden directory "${forbidden}" found inside fixture`);
    }
  }

  // 3. File integrity & size checks
  let totalSizeBytes = 0;
  let hasReadme = false;

  for (const fileEntry of fixtureData.files) {
    const relPath = fileEntry.path;
    const fullPath = path.join(fixtureDir, relPath);

    if (!fs.existsSync(fullPath)) {
      errors.push(`Manifest file missing on disk: ${relPath}`);
      continue;
    }

    const stat = fs.statSync(fullPath);
    totalSizeBytes += stat.size;

    if (stat.size > MAX_FILE_SIZE) {
      errors.push(`File ${relPath} exceeds 512 KB limit (${(stat.size / 1024).toFixed(1)} KB)`);
    }

    const content = fs.readFileSync(fullPath);
    const actualHash = crypto.createHash('sha256').update(content).digest('hex');

    if (fileEntry.sha256 && fileEntry.sha256 !== actualHash) {
      errors.push(`SHA-256 mismatch on ${relPath}`);
    }

    const lower = relPath.toLowerCase();
    if (lower === 'readme.md' || lower === 'readme.rst' || lower === 'readme') {
      hasReadme = true;
    }
  }

  if (!hasReadme) {
    warnings.push(`No root README.md detected`);
  }

  if (totalSizeBytes > MAX_TOTAL_SIZE) {
    errors.push(`Total fixture size exceeds 5 MB limit (${(totalSizeBytes / (1024 * 1024)).toFixed(2)} MB)`);
  }

  return {
    id,
    valid: errors.length === 0,
    errors,
    warnings,
    fileCount: fixtureData.files.length,
    totalSizeBytes
  };
}

function main() {
  console.log(`\n======================================================================`);
  console.log(`  VISCRAFT FIXTURE CONTRACT VALIDATION`);
  console.log(`======================================================================`);

  const entries = fs.readdirSync(CORPUS_DIR, { withFileTypes: true })
    .filter(e => e.isDirectory() && e.name.startsWith('real-'))
    .map(e => path.join(CORPUS_DIR, e.name));

  console.log(`Checking ${entries.length} real-* fixtures in ${CORPUS_DIR}...`);

  let totalValid = 0;
  let totalFailed = 0;
  const failureReports = [];

  for (const dir of entries) {
    const res = validateFixture(dir);
    if (res.valid) {
      totalValid++;
    } else {
      totalFailed++;
      failureReports.push(res);
    }
  }

  console.log(`\nValidation Results:`);
  console.log(`  Valid:  ${totalValid}`);
  console.log(`  Failed: ${totalFailed}`);

  if (failureReports.length > 0) {
    console.error(`\nFailed Fixtures:`);
    for (const f of failureReports) {
      console.error(`\n[FAIL] ${f.id}:`);
      for (const e of f.errors) console.error(`  - ${e}`);
    }
    process.exit(1);
  } else {
    console.log(`\nResult: ✅ All checked fixtures strictly comply with FIXTURE_CONTRACT.md`);
  }
}

main();
