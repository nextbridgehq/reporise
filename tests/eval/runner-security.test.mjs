import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { storeCheckpoint, restoreCheckpoint } from '../../eval/research/git-checkpoint.mjs';

test('Git commit preserves hostile hypothesis characters literally without shell interpretation', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'reporise-git-sec-'));
  try {
    execFileSync('git', ['init'], { cwd: tmpDir, stdio: 'pipe' });
    execFileSync('git', ['config', 'user.name', 'TestUser'], { cwd: tmpDir, stdio: 'pipe' });
    execFileSync('git', ['config', 'user.email', 'test@example.com'], { cwd: tmpDir, stdio: 'pipe' });

    const targetFile = path.join(tmpDir, 'test.txt');
    fs.writeFileSync(targetFile, 'initial', 'utf8');
    execFileSync('git', ['add', 'test.txt'], { cwd: tmpDir, stdio: 'pipe' });
    execFileSync('git', ['commit', '-m', 'initial commit'], { cwd: tmpDir, stdio: 'pipe' });

    // Hostile commit message with metacharacters
    const hostileHypothesis = 'feat"; rm -rf /; $(echo hostile) && echo `ls` || "end';
    const commitMsg = `research(accept): exp-1 - ${hostileHypothesis.slice(0, 60)}`;
    fs.writeFileSync(targetFile, 'mutated', 'utf8');

    execFileSync('git', ['add', 'test.txt'], { cwd: tmpDir, stdio: 'pipe' });
    execFileSync('git', ['commit', '-m', commitMsg], { cwd: tmpDir, stdio: 'pipe' });

    const log = execFileSync('git', ['log', '-1', '--pretty=%B'], { cwd: tmpDir, encoding: 'utf8' }).trim();
    assert.strictEqual(log, commitMsg, 'Commit message must match literal string exactly');
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});

test('Git transaction failure restores checkpoint and ensures clean working tree', () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'reporise-failclosed-'));
  try {
    execFileSync('git', ['init'], { cwd: tmpDir, stdio: 'pipe' });
    execFileSync('git', ['config', 'user.name', 'TestUser'], { cwd: tmpDir, stdio: 'pipe' });
    execFileSync('git', ['config', 'user.email', 'test@example.com'], { cwd: tmpDir, stdio: 'pipe' });

    const targetFile = path.join(tmpDir, 'test.txt');
    fs.writeFileSync(targetFile, 'original content', 'utf8');
    execFileSync('git', ['add', 'test.txt'], { cwd: tmpDir, stdio: 'pipe' });
    execFileSync('git', ['commit', '-m', 'initial commit'], { cwd: tmpDir, stdio: 'pipe' });

    // 1. Take checkpoint
    const checkpoint = storeCheckpoint(tmpDir);

    // 2. Perform mutation
    fs.writeFileSync(targetFile, 'mutated uncommitted content', 'utf8');

    // 3. Stage file
    execFileSync('git', ['add', 'test.txt'], { cwd: tmpDir, stdio: 'pipe' });

    // 4. Simulate failure before commit completes -> trigger restore
    restoreCheckpoint(tmpDir, checkpoint);

    // 5. Verify restored state
    const currentContent = fs.readFileSync(targetFile, 'utf8');
    assert.strictEqual(currentContent, 'original content', 'File content must be restored to original checkpoint');

    const status = execFileSync('git', ['status', '--porcelain'], { cwd: tmpDir, encoding: 'utf8' }).trim();
    assert.strictEqual(status, '', 'Working tree must be completely clean after recovery');
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});
