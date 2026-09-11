import assert from 'node:assert';
import { edgeCaseGate } from '../../eval/research/edge-gate.mjs';

function testEdgeCaseGate() {
  const best = { edgeCasePassRate: 0.9 };
  assert.strictEqual(edgeCaseGate({ edgeCasePassRate: 0.8 }, best), false, 'lower pass rate should fail gate');
  assert.strictEqual(edgeCaseGate({ edgeCasePassRate: 0.9 }, best), true, 'equal pass rate should pass gate');
  assert.strictEqual(edgeCaseGate({ edgeCasePassRate: 0.95 }, best), true, 'higher pass rate should pass gate');
}

function testNoBestMetrics() {
  assert.strictEqual(edgeCaseGate({ edgeCasePassRate: 0.8 }, null), true, 'null bestMetrics should pass gate');
  assert.strictEqual(edgeCaseGate({ edgeCasePassRate: 0.8 }, undefined), true, 'undefined bestMetrics should pass gate');
  assert.strictEqual(edgeCaseGate({ edgeCasePassRate: 0.8 }, {}), true, 'empty bestMetrics (no edgeCasePassRate) should pass gate');
}

function testMissingCurrentMetrics() {
  const best = { edgeCasePassRate: 0.5 };
  assert.strictEqual(edgeCaseGate({}, best), false, 'missing current edgeCasePassRate treated as 0 should fail against 0.5');
  assert.strictEqual(edgeCaseGate(null, best), false, 'null currentMetrics treated as 0 should fail against 0.5');
}

try {
  testEdgeCaseGate();
  testNoBestMetrics();
  testMissingCurrentMetrics();
  console.log('PASS: edgeCaseGate');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
