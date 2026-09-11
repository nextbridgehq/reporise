import assert from 'assert';
import { calculateMAE, overallCategoryMAE } from '../../eval/metrics.mjs';
import { scoreFixture } from '../../eval/score.mjs';

function testMetrics() {
  const mae = calculateMAE([{ pred: 4, actual: 5 }, { pred: 2, actual: 2 }]);
  assert.strictEqual(mae, 0.5, 'MAE should be 0.5');

  const emptyMae = calculateMAE([]);
  assert.strictEqual(emptyMae, 0, 'Empty pairs MAE should be 0');

  const catMae = overallCategoryMAE({ overall: 4 }, { overall: 5 });
  assert.strictEqual(catMae, 1, 'overallCategoryMAE should be 1');
}

function testScore() {
  const res = scoreFixture('test-fixture', null, null);
  assert.ok(res && typeof res.overall === 'number', 'scoreFixture should return object with overall score');
}

try {
  testMetrics();
  testScore();
  console.log('PASS');
} catch(e) {
  console.error('FAIL', e.message);
  process.exitCode = 1;
}
