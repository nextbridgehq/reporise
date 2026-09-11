import assert from 'node:assert';
import { allocateNextExperiment } from '../../eval/research/allocation/allocator.mjs';

const mockRegistry = {
  'target-c': { mutations: [{ type: 'add_pattern' }, { type: 'change_weight' }] },
  'target-a': { mutations: [{ type: 'remove_pattern' }, { type: 'add_pattern' }] }
};

const mockPolicy = {
  weights: { successRate: 0.35, recentSuccess: 0.25, novelty: 0.20, uncertainty: 0.20 },
  recencyDecay: 0.15,
  saturation: { minEvaluated: 5, minConsecutiveRejections: 5, penalty: 0.25 },
  coldStart: true
};

export function runTests() {
  console.log('Running allocation.test.mjs...');

  // 1. Cold start with empty history
  // Expected order of arms by Target ASC, Modality ASC:
  // target-a / add_pattern
  // target-a / remove_pattern
  // target-c / add_pattern
  // target-c / change_weight
  const first = allocateNextExperiment([], mockRegistry, 0, mockPolicy);
  assert.strictEqual(first.target, 'target-a');
  assert.strictEqual(first.modality, 'add_pattern');
  assert.strictEqual(first.exploration, true);

  // 2. Determinism check
  const second = allocateNextExperiment([], mockRegistry, 0, mockPolicy);
  assert.deepEqual(first, second, 'Allocator must be deterministic');

  // 3. One attempt on target-a/add_pattern should move to the next cold-start
  const history = [
    { proposal: { target: 'target-a', mutation: { type: 'add_pattern' } }, decision: 'rejected', iteration: 1 }
  ];
  const next = allocateNextExperiment(history, mockRegistry, 1, mockPolicy);
  assert.strictEqual(next.target, 'target-a');
  assert.strictEqual(next.modality, 'remove_pattern', 'Should pick the next unexplored arm deterministically');
  assert.strictEqual(next.exploration, true);

  // 4. No cold start (all arms have attempts), pick highest scoring
  // Make target-c / add_pattern highly successful
  const historyFull = [
    { proposal: { target: 'target-a', mutation: { type: 'add_pattern' } }, decision: 'rejected', iteration: 1 },
    { proposal: { target: 'target-a', mutation: { type: 'remove_pattern' } }, decision: 'rejected', iteration: 2 },
    { proposal: { target: 'target-c', mutation: { type: 'change_weight' } }, decision: 'rejected', iteration: 3 },
    { proposal: { target: 'target-c', mutation: { type: 'add_pattern' } }, decision: 'accepted', iteration: 4 }
  ];
  const exploit = allocateNextExperiment(historyFull, mockRegistry, 5, mockPolicy);
  assert.strictEqual(exploit.target, 'target-c');
  assert.strictEqual(exploit.modality, 'add_pattern');
  assert.strictEqual(exploit.exploration, false);
  assert(exploit.opportunity_score > 0.4);

  console.log('allocation.test.mjs passed!\n');
}
