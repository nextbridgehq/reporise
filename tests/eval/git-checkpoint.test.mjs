import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execSync } from 'node:child_process';
import { storeCheckpoint, restoreCheckpoint } from '../../eval/research/git-checkpoint.mjs';

function testStoreCheckpointCurrentRepo() {
  const chk = storeCheckpoint(process.cwd());
  assert.ok(chk, 'Checkpoint should be returned');
  assert.ok(typeof chk.head === 'string' && chk.head.length >= 7, 'HEAD sha should be present');
  assert.ok(typeof chk.tree === 'string' && chk.tree.length >= 7, 'Tree sha should be present');
  assert.match(chk.head, /^[0-9a-f]+$/i, 'HEAD should be hex string');
  assert.match(chk.tree, /^[0-9a-f]+$/i, 'Tree should be hex string');

  // Default cwd
  const chkDefault = storeCheckpoint();
  assert.ok(chkDefault.head);
  assert.ok(chkDefault.tree);
}

function testRestoreCheckpointTempRepo() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'reporise-git-checkpoint-test-'));
  try {
    execSync('git init', { cwd: tmpDir, stdio: 'pipe' });
    execSync('git config user.email "test@example.com"', { cwd: tmpDir, stdio: 'pipe' });
    execSync('git config user.name "Test"', { cwd: tmpDir, stdio: 'pipe' });
    execSync('git config core.autocrlf false', { cwd: tmpDir, stdio: 'pipe' });

    const testFile = path.join(tmpDir, 'test.txt');
    fs.writeFileSync(testFile, 'initial content\n');
    execSync('git add test.txt', { cwd: tmpDir, stdio: 'pipe' });
    execSync('git commit -m "initial commit"', { cwd: tmpDir, stdio: 'pipe' });

    const chk = storeCheckpoint(tmpDir);
    assert.ok(chk.head, 'Initial commit HEAD recorded');
    assert.ok(chk.tree, 'Initial commit tree recorded');

    // Mutate repo: modify tracked file and create untracked file
    fs.writeFileSync(testFile, 'mutated content\n');
    const untrackedFile = path.join(tmpDir, 'untracked.txt');
    fs.writeFileSync(untrackedFile, 'untracked\n');

    // Restore checkpoint
    restoreCheckpoint(tmpDir, chk);

    assert.strictEqual(fs.readFileSync(testFile, 'utf8').replace(/\r\n/g, '\n'), 'initial content\n', 'Tracked file restored');
    assert.strictEqual(fs.existsSync(untrackedFile), false, 'Untracked file cleaned');

    const status = execSync('git status --porcelain', { cwd: tmpDir, stdio: 'pipe' }).toString().trim();
    assert.strictEqual(status, '', 'Working tree is completely clean after restore');
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

function testErrorHandling() {
  assert.throws(() => {
    storeCheckpoint('/non/existent/path/that/cannot/be/git/repo');
  }, /fatal|not a git repository|ENOENT/i);

  assert.throws(() => {
    restoreCheckpoint(process.cwd(), null);
  }, /Invalid checkpoint/);
}

try {
  testStoreCheckpointCurrentRepo();
  testRestoreCheckpointTempRepo();
  testErrorHandling();
  console.log('PASS: git-checkpoint');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
