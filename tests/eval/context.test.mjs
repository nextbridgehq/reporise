import test from 'node:test';
import assert from 'node:assert';
import { buildLLMContext } from '../../eval/research/context.mjs';

test('buildLLMContext', async (t) => {
  const history = [
    { iteration: 0, decision: 'rejected', proposal: { target: 'test-point', mutation: { type: 'replace', value: 'x' }, hypothesis: 'Hypothesis A' } }
  ];
  const bestMetrics = { mae: 1.5, edgeCasePassRate: 0.8 };
  const mutationPoints = { 'test-point': { type: 'regex' } };

  const prompt = buildLLMContext(history, bestMetrics, 1, mutationPoints);

  await t.test('Includes metrics', () => {
    assert.ok(prompt.includes('Baseline MAE: 1.5000'));
    assert.ok(prompt.includes('Edge Case Pass Rate: 80.0%'));
  });

  await t.test('Includes previous experiments', () => {
    assert.ok(prompt.includes('Experiment 0'));
    assert.ok(prompt.includes('Hypothesis A'));
    assert.ok(prompt.includes('rejected'));
  });

  await t.test('Includes allowed targets', () => {
    assert.ok(prompt.includes('test-point'));
  });

  await t.test('Includes strict output format instructions', () => {
    assert.ok(prompt.includes('Do not modify protected files.'));
    assert.ok(prompt.includes('Return ONLY the required structured JSON proposal.'));
    assert.ok(prompt.includes('"expected_effect": {'));
  });
});
