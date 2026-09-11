import test from 'node:test';
import assert from 'node:assert';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

test('secret hygiene: git actually ignores .env files', () => {
  const rootDir = process.cwd();
  
  // We need to create dummy files temporarily if they don't exist
  // so `git check-ignore` can evaluate them properly in some versions of git
  const testFiles = ['.env', '.env.local', '.env.test.local'];
  const created = [];
  
  for (const f of testFiles) {
    if (!fs.existsSync(path.join(rootDir, f))) {
      fs.writeFileSync(path.join(rootDir, f), '');
      created.push(f);
    }
  }

  try {
    for (const file of testFiles) {
      try {
        execSync(`git check-ignore ${file}`, { stdio: 'ignore' });
        // If it exits with 0, it means the file IS ignored (success)
      } catch (err) {
        assert.fail(`Expected ${file} to be ignored by git, but it is not.`);
      }
    }
  } finally {
    // Cleanup temporary files
    for (const f of created) {
      if (fs.existsSync(path.join(rootDir, f))) {
        fs.unlinkSync(path.join(rootDir, f));
      }
    }
  }
});

test('secret hygiene: .env.example remains trackable', () => {
  try {
    execSync(`git check-ignore .env.example`, { stdio: 'ignore' });
    // If it exits with 0, it means the file IS ignored, which is bad!
    assert.fail('.env.example should NOT be ignored');
  } catch (err) {
    // exit code 1 means NOT ignored, which is what we want
    assert.strictEqual(err.status, 1, '.env.example is properly trackable');
  }
});
