import assert from 'node:assert';
import { stageProtectedFiles } from '../../eval/research/git-checkpoint.mjs';

function testRejectsUnprotectedFile() {
  assert.throws(
    () => stageProtectedFiles(process.cwd(), ['some/random.js'], ['allowed.js']),
    /Attempted to stage unprotected file: some\/random\.js/
  );
}

function testAllowsProtectedFile() {
  assert.doesNotThrow(() => {
    stageProtectedFiles(process.cwd(), ['allowed.js'], ['allowed.js']);
  });
}

function testAllowsMultipleProtectedFiles() {
  assert.doesNotThrow(() => {
    stageProtectedFiles(
      process.cwd(),
      ['skills/visibility-audit/scripts/lib/checks.mjs', 'allowed.js'],
      ['allowed.js', 'skills/visibility-audit/scripts/lib/checks.mjs', 'other.js']
    );
  });
}

function testRejectsMixedFiles() {
  assert.throws(
    () => {
      stageProtectedFiles(
        process.cwd(),
        ['allowed.js', 'eval/baseline.json'],
        ['allowed.js', 'skills/visibility-audit/scripts/lib/checks.mjs']
      );
    },
    /Attempted to stage unprotected file: eval\/baseline\.json/
  );
}

function testHandlesPathSeparators() {
  assert.doesNotThrow(() => {
    stageProtectedFiles(
      process.cwd(),
      ['skills\\visibility-audit\\scripts\\lib\\checks.mjs'],
      ['skills/visibility-audit/scripts/lib/checks.mjs']
    );
  });

  assert.doesNotThrow(() => {
    stageProtectedFiles(
      process.cwd(),
      ['skills/visibility-audit/scripts/lib/checks.mjs'],
      ['skills\\visibility-audit\\scripts\\lib\\checks.mjs']
    );
  });
}

function testEmptyChangedFiles() {
  assert.doesNotThrow(() => {
    stageProtectedFiles(process.cwd(), [], ['allowed.js']);
  });
}

function testDefaultParameters() {
  assert.doesNotThrow(() => {
    stageProtectedFiles();
  });
}

try {
  testRejectsUnprotectedFile();
  testAllowsProtectedFile();
  testAllowsMultipleProtectedFiles();
  testRejectsMixedFiles();
  testHandlesPathSeparators();
  testEmptyChangedFiles();
  testDefaultParameters();
  console.log('PASS: protected');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
