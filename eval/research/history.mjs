/**
 * Sanitizes experiment history before providing it to strategy providers.
 * Strictly removes validationMetrics, testMetrics, and edgeCaseMetrics to prevent data leakage.
 *
 * @param {Array<Object>} experiments - Array of raw experiment records
 * @returns {Array<Object>} Sanitized experiment records
 */
export function sanitizeHistory(experiments) {
  if (!Array.isArray(experiments)) {
    return [];
  }

  return experiments.map(exp => {
    if (!exp || typeof exp !== 'object') {
      return exp;
    }
    const safe = { ...exp };
    delete safe.validationMetrics;
    delete safe.testMetrics;
    delete safe.edgeCaseMetrics;
    return safe;
  });
}

/**
 * Finds the best validation metrics among all accepted experiments in the history.
 *
 * @param {Array<Object>} experiments - Array of experiment records
 * @returns {Object|null} The validationMetrics object of the best accepted run, or null if none
 */
export function getBestState(experiments) {
  if (!Array.isArray(experiments)) {
    return null;
  }
  let best = null;
  for (const exp of experiments) {
    if (exp && exp.decision === 'accepted' && exp.validationMetrics) {
      if (!best || (typeof exp.validationMetrics.mae === 'number' && exp.validationMetrics.mae < best.mae)) {
        best = exp.validationMetrics;
      }
    }
  }
  return best;
}

