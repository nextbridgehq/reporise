import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { validateSyntax } from '../../eval/research/syntax.mjs';

test('validateSyntax passes arguments directly without shell interpretation', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'reporise-syntax-sec-'));
  const sentinelPath = path.join(tmpDir, 'sentinel.txt');
  
  // Hostile path containing quotes, command substitution, and semicolon
  // On Windows, double quotes in filenames are illegal on NTFS, so test with metacharacters safe for filename but dangerous in shell
  const hostileFilename = process.platform === 'win32'
    ? 'test_script;&echo_pwned.js'
    : `test"$(echo pwned > "${sentinelPath}")";.js`;
  const hostilePath = path.join(tmpDir, hostileFilename);
  fs.writeFileSync(hostilePath, 'const valid = true;\n', 'utf8');

  try {
    const isValid = validateSyntax(hostilePath);
    assert.strictEqual(fs.existsSync(sentinelPath), false, 'Sentinel file must not be created');
    assert.strictEqual(isValid, true, 'Valid JS file with metacharacters in filename must be parsed as valid syntax');
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});
