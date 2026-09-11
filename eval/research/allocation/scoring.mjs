export function scoreArms(arms, policy, currentIteration) {
  return arms.map(arm => {
    // 1. Success Rate [0.0 - 1.0]
    const successRate = arm.acceptanceRate;

    // 2. Recent Success [0.0 - 1.0]
    let recentSuccess = 0;
    if (arm.lastImprovementIteration !== null) {
      const age = Math.max(0, currentIteration - arm.lastImprovementIteration);
      recentSuccess = Math.exp(-policy.recencyDecay * age);
    }

    // 3. Novelty [0.0 - 1.0]
    const novelty = 1 / Math.sqrt(1 + arm.evaluated);

    // 4. Uncertainty [0.0 - 1.0]
    const uncertainty = 1 / Math.sqrt(1 + arm.evaluated);

    let opportunityScore = 
      (policy.weights.successRate * successRate) +
      (policy.weights.recentSuccess * recentSuccess) +
      (policy.weights.novelty * novelty) +
      (policy.weights.uncertainty * uncertainty);

    // 5. Saturation Penalty
    let saturated = false;
    if (
      arm.evaluated >= policy.saturation.minEvaluated &&
      arm.consecutiveRejections >= policy.saturation.minConsecutiveRejections
    ) {
      opportunityScore *= policy.saturation.penalty;
      saturated = true;
    }

    return {
      ...arm,
      scores: {
        successRate,
        recentSuccess,
        novelty,
        uncertainty,
        baseScore: opportunityScore / (saturated ? policy.saturation.penalty : 1)
      },
      opportunityScore,
      saturated
    };
  });
}
