export class MockLLMStrategyProvider {
  constructor() {
    this.name = 'mock-llm';
  }

  async propose(state) {
    return {
      target: 'definitional-pattern',
      target_selection_rationale: "Mock rational to select definitional-pattern based on failure hints.",
      hypothesis: 'Changing the definitional pattern to capture more variants.',
      expected_effect: { metric: 'mae', direction: 'decrease' },
      mutation: {
        type: 'add_pattern',
        value: 'is|are'
      }
    };
  }
}
