import test from 'node:test';
import assert from 'node:assert/strict';
import { validateSignals, SignalContractError } from '../skills/visibility-audit/scripts/lib/signal-schema.mjs';
import { collect } from '../skills/visibility-audit/scripts/lib/collect.mjs';
import { runChecks } from '../skills/visibility-audit/scripts/lib/checks.mjs';

test('validateSignals rejects null or non-object root signals', () => {
  assert.throws(() => validateSignals(null), (err) => {
    assert.ok(err instanceof SignalContractError);
    assert.ok(err instanceof TypeError);
    assert.strictEqual(err.fieldPath, 'signals');
    assert.strictEqual(err.expected, 'object');
    assert.strictEqual(err.receivedType, 'null');
    assert.strictEqual(err.message, "[SignalContractViolation] 'signals' must be object; received: null");
    return true;
  });

  assert.throws(() => validateSignals(undefined), (err) => {
    assert.ok(err instanceof SignalContractError);
    assert.strictEqual(err.fieldPath, 'signals');
    assert.strictEqual(err.receivedType, 'undefined');
    assert.strictEqual(err.message, "[SignalContractViolation] 'signals' is required; received: undefined");
    return true;
  });

  assert.throws(() => validateSignals("invalid"), (err) => {
    assert.strictEqual(err.receivedType, 'string');
    assert.strictEqual(err.message, "[SignalContractViolation] 'signals' must be object; received: string");
    return true;
  });

  assert.throws(() => validateSignals([]), (err) => {
    assert.strictEqual(err.receivedType, 'array');
    assert.strictEqual(err.message, "[SignalContractViolation] 'signals' must be object; received: array");
    return true;
  });
});

test('validateSignals rejects missing required top-level objects with is required message', () => {
  const base = {
    repo: { isGitRepo: false },
    readme: { present: false, headings: [], codeBlocks: [], links: [], brokenLinks: [], images: [] },
    files: {},
    dirs: { docsFileCount: 0, exampleFileCount: 0 }
  };

  const withoutRepo = { ...base };
  delete withoutRepo.repo;
  assert.throws(() => validateSignals(withoutRepo), (err) => {
    assert.strictEqual(err.fieldPath, 'signals.repo');
    assert.strictEqual(err.receivedType, 'undefined');
    assert.strictEqual(err.message, "[SignalContractViolation] 'signals.repo' is required; received: undefined");
    return true;
  });

  const withoutReadme = { ...base };
  delete withoutReadme.readme;
  assert.throws(() => validateSignals(withoutReadme), (err) => {
    assert.strictEqual(err.fieldPath, 'signals.readme');
    assert.strictEqual(err.receivedType, 'undefined');
    assert.strictEqual(err.message, "[SignalContractViolation] 'signals.readme' is required; received: undefined");
    return true;
  });

  const withoutFiles = { ...base };
  delete withoutFiles.files;
  assert.throws(() => validateSignals(withoutFiles), (err) => {
    assert.strictEqual(err.fieldPath, 'signals.files');
    assert.strictEqual(err.receivedType, 'undefined');
    assert.strictEqual(err.message, "[SignalContractViolation] 'signals.files' is required; received: undefined");
    return true;
  });

  const withoutDirs = { ...base };
  delete withoutDirs.dirs;
  assert.throws(() => validateSignals(withoutDirs), (err) => {
    assert.strictEqual(err.fieldPath, 'signals.dirs');
    assert.strictEqual(err.receivedType, 'undefined');
    assert.strictEqual(err.message, "[SignalContractViolation] 'signals.dirs' is required; received: undefined");
    return true;
  });
});

test('validateSignals rejects wrong types and non-arrays', () => {
  const badRepo = {
    repo: { isGitRepo: 'yes' },
    readme: { present: false, headings: [], codeBlocks: [], links: [], brokenLinks: [], images: [] },
    files: {},
    dirs: { docsFileCount: 0, exampleFileCount: 0 }
  };
  assert.throws(() => validateSignals(badRepo), (err) => {
    assert.strictEqual(err.fieldPath, 'signals.repo.isGitRepo');
    assert.strictEqual(err.expected, 'boolean');
    assert.strictEqual(err.receivedType, 'string');
    return true;
  });

  const badHeadings = {
    repo: { isGitRepo: false },
    readme: { present: false, headings: 'none', codeBlocks: [], links: [], brokenLinks: [], images: [] },
    files: {},
    dirs: { docsFileCount: 0, exampleFileCount: 0 }
  };
  assert.throws(() => validateSignals(badHeadings), (err) => {
    assert.strictEqual(err.fieldPath, 'signals.readme.headings');
    assert.strictEqual(err.expected, 'array');
    assert.strictEqual(err.receivedType, 'string');
    return true;
  });
});

test('validateSignals rejects non-finite or negative numeric counts', () => {
  const badWordCount = {
    repo: { isGitRepo: false },
    readme: { present: true, file: 'README.md', wordCount: NaN, headings: [], codeBlocks: [], links: [], brokenLinks: [], images: [] },
    files: {},
    dirs: { docsFileCount: 0, exampleFileCount: 0 }
  };
  assert.throws(() => validateSignals(badWordCount), (err) => {
    assert.strictEqual(err.fieldPath, 'signals.readme.wordCount');
    assert.strictEqual(err.expected, 'non-negative integer');
    assert.strictEqual(err.receivedType, 'number');
    return true;
  });

  const negativeDocs = {
    repo: { isGitRepo: false },
    readme: { present: false, headings: [], codeBlocks: [], links: [], brokenLinks: [], images: [] },
    files: {},
    dirs: { docsFileCount: -5, exampleFileCount: 0 }
  };
  assert.throws(() => validateSignals(negativeDocs), (err) => {
    assert.strictEqual(err.fieldPath, 'signals.dirs.docsFileCount');
    assert.strictEqual(err.expected, 'non-negative integer');
    return true;
  });
});

test('validateSignals passes valid collected signals by identity without mutation', () => {
  const collected = collect('.');
  const validated = validateSignals(collected);
  assert.strictEqual(validated, collected, 'validateSignals must return exact input reference');
});

test('validateSignals preserves scoring invariance', () => {
  const collected = collect('.');
  const rawScore = runChecks(collected);
  const validatedScore = runChecks(validateSignals(collected));
  assert.deepStrictEqual(validatedScore, rawScore, 'runChecks output must be strictly identical before and after validation');
});
