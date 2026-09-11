import { seededRandom } from '../seed.mjs';

export class ProgrammaticStrategyProvider {
  constructor() {
    this.name = 'programmatic';
  }

  async propose({ mutationPoints, iteration, history, seed }) {
    // Generate a deterministic but variable mutation based on the iteration/seed
    const rand = seededRandom(`programmatic-${seed}-${iteration}`);
    
    // Choose a target deterministically
    const targets = Object.keys(mutationPoints);
    const targetIdx = Math.floor(rand() * targets.length);
    const target = targets[targetIdx];
    
    return {
      target,
      hypothesis: `Programmatic hypothesis ${iteration}`,
      expected_effect: { metric: 'mae', direction: 'decrease' },
      mutation: {
        type: 'add_pattern',
        value: `mock_pattern_${iteration}`
      }
    };
  }
}
