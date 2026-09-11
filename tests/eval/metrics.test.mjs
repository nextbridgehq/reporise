import assert from 'node:assert';
import { calculateMetrics, calculateMAE, overallCategoryMAE, calculateF1, calculateSpearman, calculateRMSE, computeMetrics } from '../../eval/metrics.mjs';

function testBasicMetrics() {
  const actual = [4, 2, 2];
  const expected = [5, 1, 2];
  const m = calculateMetrics(actual, expected);
  assert.strictEqual(m.mae, 2 / 3);
  // diffs: (4-5)^2 = 1, (2-1)^2 = 1, (2-2)^2 = 0 => sumSq = 2, meanSq = 2/3, rmse = sqrt(2/3)
  assert.strictEqual(m.rmse, Math.sqrt(2 / 3));
  assert.strictEqual(typeof m.spearman, 'number');
  assert.strictEqual(m.spearman, 0.875);
  console.log('PASS: testBasicMetrics');
}

function testTiedRanksSpearman() {
  // actual: [10, 20, 20, 40] -> ranks: [1, 2.5, 2.5, 4]
  // expected: [1, 2, 3, 4] -> ranks: [1, 2, 3, 4]
  // d = [0, 0.5, -0.5, 0] => d^2 = [0, 0.25, 0.25, 0] => sum = 0.5
  // n = 4, n(n^2-1) = 4 * 15 = 60
  // spearman = 1 - (6 * 0.5) / 60 = 1 - 3/60 = 1 - 0.05 = 0.95
  const m = calculateMetrics([10, 20, 20, 40], [1, 2, 3, 4]);
  assert.strictEqual(m.spearman, 0.95);
  console.log('PASS: testTiedRanksSpearman');
}

function testPerfectAndInverseCorrelation() {
  const perfect = calculateMetrics([1, 2, 3, 4, 5], [10, 20, 30, 40, 50]);
  assert.strictEqual(perfect.spearman, 1);
  assert.strictEqual(perfect.mae, 27);

  const inverse = calculateMetrics([1, 2, 3, 4, 5], [50, 40, 30, 20, 10]);
  assert.strictEqual(inverse.spearman, -1);
  console.log('PASS: testPerfectAndInverseCorrelation');
}

function testEmptyAndSingleElement() {
  const empty = calculateMetrics([], []);
  assert.deepStrictEqual(empty, { mae: 0, rmse: 0, spearman: 0, f1: 0 });

  const single = calculateMetrics([5], [3]);
  assert.strictEqual(single.mae, 2);
  assert.strictEqual(single.rmse, 2);
  assert.strictEqual(single.spearman, 0);
  console.log('PASS: testEmptyAndSingleElement');
}

function testAllIdenticalValues() {
  const identical = calculateMetrics([3, 3, 3], [3, 3, 3]);
  assert.strictEqual(identical.mae, 0);
  assert.strictEqual(identical.rmse, 0);
  assert.strictEqual(identical.spearman, 1);
  console.log('PASS: testAllIdenticalValues');
}

function testF1Calculation() {
  // actual >= 3 is positive: [4, 2, 3, 1] -> [true, false, true, false]
  // expected >= 3 is positive: [5, 1, 2, 4] -> [true, false, false, true]
  // tp: 1 (index 0), fp: 1 (index 2), fn: 1 (index 3), tn: 1 (index 1)
  // precision = 1 / (1 + 1) = 0.5
  // recall = 1 / (1 + 1) = 0.5
  // f1 = 2 * (0.5 * 0.5) / (0.5 + 0.5) = 0.5
  const f1 = calculateF1([4, 2, 3, 1], [5, 1, 2, 4], 3);
  assert.strictEqual(f1, 0.5);

  const f1Empty = calculateF1([], []);
  assert.strictEqual(f1Empty, 0);
  console.log('PASS: testF1Calculation');
}

function testLegacyAndHelperExports() {
  const mae = calculateMAE([{ pred: 4, actual: 5 }, { pred: 2, actual: 2 }]);
  assert.strictEqual(mae, 0.5);

  const catMae = overallCategoryMAE({ overall: 4 }, { overall: 5 });
  assert.strictEqual(catMae, 1);

  const rmse = calculateRMSE([4, 2], [5, 2]);
  assert.strictEqual(rmse, Math.sqrt(0.5));

  const spearman = calculateSpearman([1, 2, 3], [2, 4, 6]);
  assert.strictEqual(spearman, 1);

  const objMetrics = computeMetrics(
    { 'repo-1': { categories: { identity: 4, hygiene: 2 } } },
    { 'repo-1': { categories: { identity: 5, hygiene: 1 } } }
  );
  assert.strictEqual(objMetrics.overallMAE, 1.0);
  console.log('PASS: testLegacyAndHelperExports');
}

function testMismatchedLengthsThrows() {
  assert.throws(() => {
    calculateMetrics([1, 2], [1]);
  }, /Arrays must have equal length/);
  console.log('PASS: testMismatchedLengthsThrows');
}

try {
  testBasicMetrics();
  testTiedRanksSpearman();
  testPerfectAndInverseCorrelation();
  testEmptyAndSingleElement();
  testAllIdenticalValues();
  testF1Calculation();
  testLegacyAndHelperExports();
  testMismatchedLengthsThrows();
  console.log('All metrics tests passed!');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
