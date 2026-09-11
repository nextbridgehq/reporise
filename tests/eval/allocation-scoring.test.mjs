import assert from 'node:assert';
import { scoreArms } from '../../eval/research/allocation/scoring.mjs';

const mockPolicy = {
  weights: { successRate: 0.35, recentSuccess: 0.25, novelty: 0.20, uncertainty: 0.20 },
  recencyDecay: 0.15,
  saturation: { minEvaluated: 5, minConsecutiveRejections: 5, penalty: 0.25 },
  coldStart: true
};

export function runTests() {
  console.log('Running allocation-scoring.test.mjs...');
  
  const arms = [
    { target: 't1', modality: 'add', evaluated: 0, acceptanceRate: 0, lastImprovementIteration: null, consecutiveRejections: 0 },
    { target: 't2', modality: 'add', evaluated: 10, acceptanceRate: 0.5, lastImprovementIteration: 20, consecutiveRejections: 0 },
    { target: 't3', modality: 'add', evaluated: 6, acceptanceRate: 0.0, lastImprovementIteration: null, consecutiveRejections: 6 }
  ];

  const currentIteration = 25;
  const scored = scoreArms(arms, mockPolicy, currentIteration);

  // t1: 0 evaluated -> max novelty (1.0) and uncertainty (1.0)
  const s1 = scored.find(a => a.target === 't1');
  assert.strictEqual(s1.scores.novelty, 1.0);
  assert.strictEqual(s1.scores.uncertainty, 1.0);
  assert.strictEqual(s1.scores.recentSuccess, 0.0);
  assert.strictEqual(s1.scores.successRate, 0.0);
  assert.strictEqual(s1.opportunityScore, 0.40); // 0.2 + 0.2
  assert.strictEqual(s1.saturated, false);

  // t2: highly successful, somewhat recent
  const s2 = scored.find(a => a.target === 't2');
  assert.strictEqual(s2.scores.successRate, 0.5);
  // age = 5, exp(-0.15 * 5) = exp(-0.75) ≈ 0.472
  assert(Math.abs(s2.scores.recentSuccess - Math.exp(-0.75)) < 0.001);
  assert.strictEqual(s2.saturated, false);
  
  // score should be 0.35*0.5 + 0.25*0.472 + 0.2*(1/sqrt(11)) + 0.2*(1/sqrt(11))
  const expectedT2 = (0.35 * 0.5) + (0.25 * Math.exp(-0.75)) + (0.4 / Math.sqrt(11));
  assert(Math.abs(s2.opportunityScore - expectedT2) < 0.001);

  // t3: saturated
  const s3 = scored.find(a => a.target === 't3');
  assert.strictEqual(s3.saturated, true);
  // score should be heavily penalized (0.25 * base)
  const baseT3 = (0.4 / Math.sqrt(7));
  const expectedT3 = baseT3 * 0.25;
  assert(Math.abs(s3.opportunityScore - expectedT3) < 0.001);

  console.log('allocation-scoring.test.mjs passed!\n');
}
