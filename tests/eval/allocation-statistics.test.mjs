import assert from 'node:assert';
import { buildArmStatistics } from '../../eval/research/allocation/statistics.mjs';

const mockRegistry = {
  'target-a': {
    mutations: [{ type: 'add_pattern' }, { type: 'replace' }]
  },
  'target-b': {
    mutations: [{ type: 'change_weight' }]
  }
};

export function runTests() {
  console.log('Running allocation-statistics.test.mjs...');

  // 1. Empty history
  const emptyStats = buildArmStatistics([], mockRegistry);
  assert.strictEqual(emptyStats.length, 3, 'Should create 3 arms for empty history');
  const armA1 = emptyStats.find(a => a.target === 'target-a' && a.modality === 'add_pattern');
  assert.strictEqual(armA1.attempts, 0);

  // 2. Mixed outcomes
  const history = [
    // target-a / replace: 1 accepted, 1 duplicate, 1 invalid, 1 llm_error, 1 rejected
    { iteration: 1, proposal: { target: 'target-a', mutation: { type: 'replace' } }, decision: 'accepted' },
    { iteration: 2, proposal: { target: 'target-a', mutation: { type: 'replace' } }, decision: 'duplicate' },
    { iteration: 3, proposal: { target: 'target-a', mutation: { type: 'replace' } }, decision: 'syntax_error' },
    { iteration: 4, proposal: { target: 'target-a', mutation: { type: 'replace' } }, decision: 'llm_error' },
    { iteration: 5, proposal: { target: 'target-a', mutation: { type: 'replace' } }, decision: 'rejected' },
    // target-b / change_weight: 1 rejected, 1 accepted
    { iteration: 6, proposal: { target: 'target-b', mutation: { type: 'change_weight' } }, decision: 'rejected' },
    { iteration: 7, proposal: { target: 'target-b', mutation: { type: 'change_weight' } }, decision: 'accepted' },
    // target-c: obsolete target (ignored)
    { iteration: 8, proposal: { target: 'target-c', mutation: { type: 'replace' } }, decision: 'accepted' }
  ];

  const stats = buildArmStatistics(history, mockRegistry);
  
  // target-a / replace checks
  const repArm = stats.find(a => a.target === 'target-a' && a.modality === 'replace');
  assert.strictEqual(repArm.attempts, 5, 'Should count all attempts');
  assert.strictEqual(repArm.evaluated, 2, 'Should only count accepted/rejected as evaluated');
  assert.strictEqual(repArm.accepted, 1);
  assert.strictEqual(repArm.rejected, 1);
  assert.strictEqual(repArm.duplicates, 1);
  assert.strictEqual(repArm.invalid, 1);
  assert.strictEqual(repArm.errors, 1);
  assert.strictEqual(repArm.acceptanceRate, 0.5);
  assert.strictEqual(repArm.consecutiveRejections, 1, 'Rejected was the last evaluated attempt');
  assert.strictEqual(repArm.lastImprovementIteration, 1);
  assert.strictEqual(repArm.improvements, 1);

  // target-b / change_weight checks
  const weightArm = stats.find(a => a.target === 'target-b' && a.modality === 'change_weight');
  assert.strictEqual(weightArm.attempts, 2);
  assert.strictEqual(weightArm.evaluated, 2);
  assert.strictEqual(weightArm.consecutiveRejections, 0, 'Last evaluated was accepted');
  assert.strictEqual(weightArm.lastImprovementIteration, 7);

  console.log('allocation-statistics.test.mjs passed!\n');
}

import { fileURLToPath } from 'url';

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runTests();
}
