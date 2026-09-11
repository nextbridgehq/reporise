export class ChallengeProvider {
  constructor(challenges) {
    this.challenges = challenges;
    this.currentIndex = 0;
    this.metadata = {
      provider: 'scripted',
      model: 'deterministic',
      endpoint: 'local'
    };
  }

  async propose(context) {
    if (this.currentIndex >= this.challenges.length) {
      return null;
    }
    
    const challenge = this.challenges[this.currentIndex++];
    
    return {
      target: challenge.target,
      hypothesis: challenge.description,
      rationale: challenge.description,
      mutation: challenge.mutation,
      expected_effect: {
        metric: 'validation_mae',
        direction: challenge.expectedDeltaDir < 0 ? 'decrease' : 'maintain'
      }
    };
  }
}
