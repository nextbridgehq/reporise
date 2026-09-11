import assert from 'node:assert';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { validateFixture } from '../../eval/validate-fixture.mjs';

function testValidFixture() {
  assert.doesNotThrow(() => {
    validateFixture({ id: 'test', schemaVersion: 1, files: [] });
  });

  assert.doesNotThrow(() => {
    validateFixture({
      id: 'full-test',
      schemaVersion: 1,
      repository: 'test-repo',
      commit: 'abc1234',
      capturedAt: '2026-08-25T00:00:00.000Z',
      files: [
        {
          path: 'README.md',
          sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
          sizeBytes: 0,
        },
      ],
      warnings: [],
    });
  });
  console.log('PASS: testValidFixture');
}

function testInvalidSchemaVersion() {
  assert.throws(
    () => validateFixture({ id: 'test', schemaVersion: 2, files: [] }),
    /Invalid schemaVersion/
  );
  assert.throws(
    () => validateFixture({ id: 'test', schemaVersion: undefined, files: [] }),
    /Invalid schemaVersion/
  );
  assert.throws(
    () => validateFixture({ id: 'test', schemaVersion: '1', files: [] }),
    /Invalid schemaVersion/
  );
  console.log('PASS: testInvalidSchemaVersion');
}

function testMissingId() {
  assert.throws(
    () => validateFixture({ schemaVersion: 1, files: [] }),
    /Missing id/
  );
  assert.throws(
    () => validateFixture({ id: '', schemaVersion: 1, files: [] }),
    /Missing id/
  );
  assert.throws(
    () => validateFixture({ id: 123, schemaVersion: 1, files: [] }),
    /Missing id/
  );
  console.log('PASS: testMissingId');
}

function testInvalidFiles() {
  assert.throws(
    () => validateFixture({ id: 'test', schemaVersion: 1, files: null }),
    /files must be an array/
  );
  assert.throws(
    () => validateFixture({ id: 'test', schemaVersion: 1, files: 'not-array' }),
    /files must be an array/
  );
  assert.throws(
    () => validateFixture({ id: 'test', schemaVersion: 1 }),
    /files must be an array/
  );
  console.log('PASS: testInvalidFiles');
}

function testInvalidFileEntries() {
  // Missing path
  assert.throws(
    () =>
      validateFixture({
        id: 'test',
        schemaVersion: 1,
        files: [{ sha256: 'abc', sizeBytes: 10 }],
      }),
    /Invalid file entry/
  );

  // Missing sha256
  assert.throws(
    () =>
      validateFixture({
        id: 'test',
        schemaVersion: 1,
        files: [{ path: 'README.md', sizeBytes: 10 }],
      }),
    /Invalid file entry/
  );

  // Missing sizeBytes
  assert.throws(
    () =>
      validateFixture({
        id: 'test',
        schemaVersion: 1,
        files: [{ path: 'README.md', sha256: 'abc' }],
      }),
    /Invalid file entry/
  );

  // sizeBytes not number
  assert.throws(
    () =>
      validateFixture({
        id: 'test',
        schemaVersion: 1,
        files: [{ path: 'README.md', sha256: 'abc', sizeBytes: '10' }],
      }),
    /Invalid file entry/
  );

  // Null file entry
  assert.throws(
    () =>
      validateFixture({
        id: 'test',
        schemaVersion: 1,
        files: [null],
      }),
    /Invalid file entry/
  );

  console.log('PASS: testInvalidFileEntries');
}

function testInvalidRootFixture() {
  assert.throws(() => validateFixture(null), /Invalid fixture object/);
  assert.throws(() => validateFixture(undefined), /Invalid fixture object/);
  assert.throws(() => validateFixture('string'), /Invalid fixture object/);
  console.log('PASS: testInvalidRootFixture');
}

function testCliExecution() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'fixture-val-'));
  const validPath = path.join(tmpDir, 'valid.json');
  const invalidPath = path.join(tmpDir, 'invalid.json');

  try {
    fs.writeFileSync(
      validPath,
      JSON.stringify({ id: 'cli-test', schemaVersion: 1, files: [] })
    );
    fs.writeFileSync(
      invalidPath,
      JSON.stringify({ id: 'cli-test', schemaVersion: 99, files: [] })
    );

    // Valid file CLI check
    const out = execSync(`node eval/validate-fixture.mjs "${validPath}"`, {
      encoding: 'utf8',
    });
    assert.ok(out.includes('cli-test'));

    // Invalid file CLI check
    let threw = false;
    try {
      execSync(`node eval/validate-fixture.mjs "${invalidPath}"`, {
        stdio: 'pipe',
      });
    } catch (err) {
      threw = true;
      assert.strictEqual(err.status, 1);
    }
    assert.ok(threw, 'CLI should exit 1 on invalid fixture');

    // Missing arg CLI check
    let threwNoArg = false;
    try {
      execSync(`node eval/validate-fixture.mjs`, { stdio: 'pipe' });
    } catch (err) {
      threwNoArg = true;
      assert.strictEqual(err.status, 1);
    }
    assert.ok(threwNoArg, 'CLI should exit 1 on missing arg');

    console.log('PASS: testCliExecution');
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

try {
  testValidFixture();
  testInvalidSchemaVersion();
  testMissingId();
  testInvalidFiles();
  testInvalidFileEntries();
  testInvalidRootFixture();
  testCliExecution();
  console.log('All validate-fixture tests passed!');
} catch (e) {
  console.error('FAIL: validateFixture', e.message);
  process.exitCode = 1;
}
