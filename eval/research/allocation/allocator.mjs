import { DEFAULT_ALLOCATION_POLICY } from './policy.mjs';
import { buildArmStatistics } from './statistics.mjs';
import { scoreArms } from './scoring.mjs';

export function allocateNextExperiment(history, registry, currentIteration, overridePolicy = null) {
  const policy = overridePolicy || DEFAULT_ALLOCATION_POLICY;

  const stats = buildArmStatistics(history, registry);
  const scoredArms = scoreArms(stats, policy, currentIteration);

  // 1. Cold-start exploration phase
  if (policy.coldStart) {
    const unexplored = scoredArms.filter(arm => arm.evaluated === 0);
    if (unexplored.length > 0) {
      // Deterministic tie-breaking for cold start
      unexplored.sort((a, b) => {
        if (a.target !== b.target) return a.target.localeCompare(b.target);
        return a.modality.localeCompare(b.modality);
      });

      const selected = unexplored[0];
      return {
        target: selected.target,
        modality: selected.modality,
        opportunity_score: selected.opportunityScore,
        exploration: true,
        reason: "Cold-start exploration: arm has not been evaluated.",
        policy: "adaptive",
        statistics: {
          evaluated: selected.evaluated,
          accepted: selected.accepted,
          rejected: selected.rejected
        }
      };
    }
  }

  // 2. Exploit/Explore phase (opportunity score)
  scoredArms.sort((a, b) => {
    // Score DESC
    if (Math.abs(b.opportunityScore - a.opportunityScore) > 1e-9) {
      return b.opportunityScore - a.opportunityScore;
    }
    // Target ASC
    if (a.target !== b.target) {
      return a.target.localeCompare(b.target);
    }
    // Modality ASC
    return a.modality.localeCompare(b.modality);
  });

  const selected = scoredArms[0];

  // Deterministic reason generation
  let reason = "Highest opportunity score based on historical success and recent improvement.";
  if (selected.saturated) {
    reason = "Score reduced by saturation penalty after repeated recent rejections, but remains highest opportunity.";
  } else if (selected.evaluated < 3 && selected.accepted === 0) {
    reason = "Exploration favored because the arm has limited evaluation history.";
  }

  return {
    target: selected.target,
    modality: selected.modality,
    opportunity_score: selected.opportunityScore,
    exploration: false, // Explicit cold-start is false here, though score-based exploration may be happening
    reason,
    policy: "adaptive",
    statistics: {
      evaluated: selected.evaluated,
      accepted: selected.accepted,
      rejected: selected.rejected
    }
  };
}
