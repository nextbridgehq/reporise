import assert from 'node:assert';
import { getBestState } from '../../eval/research/history.mjs';

function testBasicSelection() {
  const exps = [
    { decision: 'accepted', validationMetrics: { mae: 2.0 } },
    { decision: 'accepted', validationMetrics: { mae: 1.5 } },
    { decision: 'rejected', validationMetrics: { mae: 0.1 } }
  ];
  const best = getBestState(exps);
  assert.ok(best !== null, 'Expected best to not be null');
  assert.strictEqual(best.mae, 1.5);
}

function testEmptyAndInvalidInputs() {
  assert.strictEqual(getBestState([]), null);
  assert.strictEqual(getBestState(null), null);
  assert.strictEqual(getBestState(undefined), null);
  assert.strictEqual(getBestState('invalid'), null);
}

function testNoAccepted() {
  const exps = [
    { decision: 'rejected', validationMetrics: { mae: 1.0 } },
    { decision: 'crashed', validationMetrics: { mae: 0.5 } }
  ];
  assert.strictEqual(getBestState(exps), null);
}

function testMissingOrInvalidValidationMetrics() {
  const exps = [
    { decision: 'accepted' },
    { decision: 'accepted', validationMetrics: null },
    { decision: 'accepted', validationMetrics: { mae: 3.0 } }
  ];
  const best = getBestState(exps);
  assert.strictEqual(best.mae, 3.0);
}

function testTiesAndComparison() {
  const exps = [
    { decision: 'accepted', validationMetrics: { mae: 1.2, r2: 0.8 } },
    { decision: 'accepted', validationMetrics: { mae: 1.2, r2: 0.9 } }
  ];
  const best = getBestState(exps);
  assert.strictEqual(best.mae, 1.2);
}

try {
  testBasicSelection();
  testEmptyAndInvalidInputs();
  testNoAccepted();
  testMissingOrInvalidValidationMetrics();
  testTiesAndComparison();
  console.log('PASS: getBestState');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
