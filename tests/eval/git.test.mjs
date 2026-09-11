import assert from 'assert';
import { currentCommit, diffFiles, assertCleanTree } from '../../eval/research/git.mjs';

function testCurrentCommit() {
  const commit = currentCommit();
  assert.ok(typeof commit === 'string', 'Commit should be a string');
  assert.ok(commit.length >= 7, 'Commit sha should be at least 7 chars');
  assert.match(commit, /^[0-9a-f]+$/i, 'Commit sha should be hex characters');
}

function testDiffFiles() {
  const diff = diffFiles();
  assert.ok(Array.isArray(diff), 'diffFiles should return an array');
}

function testAssertCleanTreeExport() {
  assert.strictEqual(typeof assertCleanTree, 'function', 'assertCleanTree should be a function');
}

try {
  testCurrentCommit();
  testDiffFiles();
  testAssertCleanTreeExport();
  console.log('PASS');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
