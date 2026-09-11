/**
 * Edge-case regression gate.
 * Evaluates whether candidate proposal metrics satisfy edge-case performance
 * requirements compared to the current-best metrics.
 *
 * @param {object} currentMetrics - Metrics of candidate proposal.
 * @param {object} [bestMetrics] - Metrics of current best proposal.
 * @returns {boolean} True if proposal does not regress on edgeCasePassRate.
 */
export function edgeCaseGate(currentMetrics, bestMetrics) {
  if (!bestMetrics || bestMetrics.edgeCasePassRate === undefined) return true;
  const currentPassRate = currentMetrics?.edgeCasePassRate ?? 0;
  return currentPassRate >= bestMetrics.edgeCasePassRate;
}
