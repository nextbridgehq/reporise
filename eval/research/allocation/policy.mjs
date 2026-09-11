export const DEFAULT_ALLOCATION_POLICY = {
  weights: {
    successRate: 0.35,
    recentSuccess: 0.25,
    novelty: 0.20,
    uncertainty: 0.20
  },

  recencyDecay: 0.15,

  saturation: {
    minEvaluated: 5,
    minConsecutiveRejections: 5,
    penalty: 0.25
  },

  coldStart: true
};
