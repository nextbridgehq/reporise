/**
 * Metrics Engine
 * Computes MAE, RMSE, Spearman rank correlation (with tied ranks), and F1 score.
 */

/**
 * Assigns fractional (average) ranks to elements in an array, handling ties.
 * 1-based ranking in ascending order.
 * @param {number[]} arr
 * @returns {number[]}
 */
export function rank(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  return arr.map(v => {
    const indices = [];
    sorted.forEach((val, idx) => {
      if (val === v) indices.push(idx + 1);
    });
    return indices.reduce((a, b) => a + b, 0) / indices.length;
  });
}

/**
 * Computes Spearman rank correlation coefficient between two numeric arrays,
 * properly handling tied ranks.
 * @param {number[]} actual
 * @param {number[]} expected
 * @returns {number}
 */
export function calculateSpearman(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    throw new TypeError('actual and expected must be arrays');
  }
  if (actual.length !== expected.length) {
    throw new Error('Arrays must have equal length');
  }
  const n = actual.length;
  if (n <= 1) return 0;

  const rX = rank(actual);
  const rY = rank(expected);

  let dSqSum = 0;
  for (let i = 0; i < n; i++) {
    dSqSum += Math.pow(rX[i] - rY[i], 2);
  }

  return 1 - ((6 * dSqSum) / (n * (Math.pow(n, 2) - 1)));
}

/**
 * Computes Root Mean Squared Error (RMSE) between two numeric arrays.
 * @param {number[]} actual
 * @param {number[]} expected
 * @returns {number}
 */
export function calculateRMSE(actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    throw new TypeError('actual and expected must be arrays');
  }
  if (actual.length !== expected.length) {
    throw new Error('Arrays must have equal length');
  }
  const n = actual.length;
  if (n === 0) return 0;

  let sumSq = 0;
  for (let i = 0; i < n; i++) {
    const diff = actual[i] - expected[i];
    sumSq += diff * diff;
  }
  return Math.sqrt(sumSq / n);
}

/**
 * Computes F1 score for classification/thresholded numeric evaluation.
 * @param {number[]} actual
 * @param {number[]} expected
 * @param {number} [threshold=3]
 * @returns {number}
 */
export function calculateF1(actual, expected, threshold = 3) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    throw new TypeError('actual and expected must be arrays');
  }
  if (actual.length !== expected.length) {
    throw new Error('Arrays must have equal length');
  }
  const n = actual.length;
  if (n === 0) return 0;

  let tp = 0;
  let fp = 0;
  let fn = 0;

  for (let i = 0; i < n; i++) {
    const actPos = actual[i] >= threshold;
    const expPos = expected[i] >= threshold;

    if (actPos && expPos) tp++;
    else if (actPos && !expPos) fp++;
    else if (!actPos && expPos) fn++;
  }

  const precision = tp + fp === 0 ? 0 : tp / (tp + fp);
  const recall = tp + fn === 0 ? 0 : tp / (tp + fn);
  return precision + recall === 0 ? 0 : (2 * precision * recall) / (precision + recall);
}

/**
 * Computes summary statistical metrics (MAE, RMSE, Spearman, F1) for score arrays.
 * @param {number[]} actual
 * @param {number[]} expected
 * @param {object} [options={}]
 * @param {number} [options.threshold=3]
 * @returns {{ mae: number, rmse: number, spearman: number, f1: number }}
 */
export function calculateMetrics(actual, expected, options = {}) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    throw new TypeError('actual and expected must be arrays');
  }
  if (actual.length !== expected.length) {
    throw new Error('Arrays must have equal length');
  }
  const n = actual.length;
  if (n === 0) {
    return { mae: 0, rmse: 0, spearman: 0, f1: 0 };
  }

  let sumAbs = 0;
  let sumSq = 0;
  for (let i = 0; i < n; i++) {
    const diff = actual[i] - expected[i];
    sumAbs += Math.abs(diff);
    sumSq += diff * diff;
  }

  const spearman = calculateSpearman(actual, expected);
  const threshold = options.threshold !== undefined ? options.threshold : 3;
  const f1 = calculateF1(actual, expected, threshold);

  return {
    mae: sumAbs / n,
    rmse: Math.sqrt(sumSq / n),
    spearman,
    f1
  };
}

/**
 * Mean Absolute Error helper supporting both pair objects and direct arrays.
 * @param {Array<{pred: number, actual: number}>|number[]} pairsOrActual
 * @param {number[]} [expected]
 * @returns {number}
 */
export function calculateMAE(pairsOrActual, expected) {
  if (Array.isArray(pairsOrActual) && Array.isArray(expected)) {
    if (pairsOrActual.length !== expected.length) {
      throw new Error('Arrays must have equal length');
    }
    if (pairsOrActual.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < pairsOrActual.length; i++) {
      sum += Math.abs(pairsOrActual[i] - expected[i]);
    }
    return sum / pairsOrActual.length;
  }

  if (Array.isArray(pairsOrActual)) {
    if (pairsOrActual.length === 0) return 0;
    let sum = 0;
    for (const p of pairsOrActual) {
      const pred = p.pred !== undefined ? p.pred : (p.actualScore ?? 0);
      const actual = p.actual !== undefined ? p.actual : (p.expectedScore ?? 0);
      sum += Math.abs(pred - actual);
    }
    return sum / pairsOrActual.length;
  }

  return 0;
}

/**
 * Overall category MAE helper for prediction and label objects.
 * @param {object} predictions
 * @param {object} labels
 * @returns {number}
 */
export function overallCategoryMAE(predictions, labels) {
  if (!predictions || !labels) return 0;
  if (predictions.overall !== undefined && labels.overall !== undefined) {
    return calculateMAE([{ pred: predictions.overall, actual: labels.overall }]);
  }
  const pairs = [];
  const predCats = predictions.categories || predictions;
  const labelCats = labels.categories || labels;
  for (const k in labelCats) {
    if (typeof labelCats[k] === 'number') {
      pairs.push({ pred: predCats[k] || 0, actual: labelCats[k] });
    }
  }
  return calculateMAE(pairs);
}

/**
 * Object-level metrics computation across benchmark corpora.
 * @param {object} actual
 * @param {object} expected
 * @param {number} [threshold=3]
 * @returns {{ overallMAE: number, spearman: number, f1: number }}
 */
export function computeMetrics(actual, expected, threshold = 3) {
  let totalError = 0;
  let count = 0;

  const actualRanks = [];
  const expectedRanks = [];
  let tp = 0;
  let fp = 0;
  let fn = 0;

  for (const id in expected) {
    if (actual[id]) {
      const expCats = expected[id].categories || expected[id];
      const actCats = actual[id].categories || actual[id];
      for (const cat in expCats) {
        const expVal = expCats[cat];
        const actVal = actCats[cat] !== undefined ? actCats[cat] : 0;

        totalError += Math.abs(expVal - actVal);
        count++;

        actualRanks.push(actVal);
        expectedRanks.push(expVal);

        const expPos = expVal >= threshold;
        const actPos = actVal >= threshold;
        if (expPos && actPos) tp++;
        else if (!expPos && actPos) fp++;
        else if (expPos && !actPos) fn++;
      }
    }
  }

  const overallMAE = count === 0 ? 0 : totalError / count;
  const spearman = actualRanks.length > 0 ? calculateSpearman(actualRanks, expectedRanks) : 0;

  const precision = tp + fp === 0 ? 0 : tp / (tp + fp);
  const recall = tp + fn === 0 ? 0 : tp / (tp + fn);
  const f1 = precision + recall === 0 ? 0 : (2 * precision * recall) / (precision + recall);

  return { overallMAE, spearman, f1 };
}
