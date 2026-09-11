import assert from 'node:assert';
import { sanitizeHistory } from '../../eval/research/history.mjs';

function testSanitizeStripsForbiddenMetrics() {
  const raw = [
    {
      id: 1,
      proposal: { target: 'point-a' },
      trainMetrics: { mae: 1.0 },
      validationMetrics: { mae: 2.0 },
      testMetrics: { mae: 3.0 },
      edgeCaseMetrics: { regressions: 0 },
      decision: 'accepted'
    }
  ];

  const san = sanitizeHistory(raw);
  assert.strictEqual(san.length, 1);
  assert.strictEqual(san[0].id, 1);
  assert.deepStrictEqual(san[0].proposal, { target: 'point-a' });
  assert.deepStrictEqual(san[0].trainMetrics, { mae: 1.0 });
  assert.strictEqual(san[0].decision, 'accepted');

  // Verify stripped forbidden fields
  assert.strictEqual(san[0].validationMetrics, undefined);
  assert.strictEqual(san[0].testMetrics, undefined);
  assert.strictEqual(san[0].edgeCaseMetrics, undefined);
  assert.strictEqual('validationMetrics' in san[0], false);
  assert.strictEqual('testMetrics' in san[0], false);
  assert.strictEqual('edgeCaseMetrics' in san[0], false);
}

function testSanitizeDoesNotMutateOriginal() {
  const original = [
    {
      trainMetrics: { mae: 1 },
      validationMetrics: { mae: 2 },
      testMetrics: { mae: 3 },
      edgeCaseMetrics: { mae: 4 }
    }
  ];
  const san = sanitizeHistory(original);
  assert.notStrictEqual(san[0], original[0]);
  assert.deepStrictEqual(original[0].validationMetrics, { mae: 2 });
  assert.deepStrictEqual(original[0].testMetrics, { mae: 3 });
  assert.deepStrictEqual(original[0].edgeCaseMetrics, { mae: 4 });
}

function testSanitizeEmptyAndInvalidInputs() {
  assert.deepStrictEqual(sanitizeHistory([]), []);
  assert.deepStrictEqual(sanitizeHistory(null), []);
  assert.deepStrictEqual(sanitizeHistory(undefined), []);
}

function testMultipleExperiments() {
  const raw = [
    { id: 1, trainMetrics: { mae: 1 }, validationMetrics: { mae: 2 } },
    { id: 2, trainMetrics: { mae: 0.5 }, testMetrics: { mae: 1.5 } },
    { id: 3, trainMetrics: { mae: 0.8 }, edgeCaseMetrics: { regressions: 1 } }
  ];
  const san = sanitizeHistory(raw);
  assert.strictEqual(san.length, 3);
  assert.strictEqual(san[0].validationMetrics, undefined);
  assert.strictEqual(san[1].testMetrics, undefined);
  assert.strictEqual(san[2].edgeCaseMetrics, undefined);
  assert.strictEqual(san[0].trainMetrics.mae, 1);
  assert.strictEqual(san[1].trainMetrics.mae, 0.5);
  assert.strictEqual(san[2].trainMetrics.mae, 0.8);
}

try {
  testSanitizeStripsForbiddenMetrics();
  testSanitizeDoesNotMutateOriginal();
  testSanitizeEmptyAndInvalidInputs();
  testMultipleExperiments();
  console.log('PASS: sanitizeHistory');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
