import assert from 'node:assert';
import { runLoop } from '../../eval/research/runner.mjs';
import { MUTATION_POINTS } from '../../eval/research/registry.mjs';

class MockMockLLMProvider {
  constructor(forceProposal) {
    this.metadata = { provider: 'mock', model: 'test', endpoint: 'local' };
    this.forceProposal = forceProposal;
  }
  
  async propose(context) {
    return this.forceProposal || {
      target: 'comparison-table-points',
      target_selection_rationale: 'Because',
      hypothesis: 'test',
      rationale: 'test',
      expected_effect: { metric: 'validation_mae', direction: 'decrease', reason: 'test' },
      mutation: { type: 'change_weight', value: 2 }
    };
  }
}

export async function runTests() {
  console.log('Running runner-allocation.test.mjs...');

  // Create a mock proposal that ignores adaptive allocation
  // Assuming the adaptive allocator won't pick 'comparison-table-points' x 'change_weight'
  // Or rather, we know that if we run adaptive on an empty history, it will pick 'comparison-heading' x 'add_pattern' (lexicographical first).
  // Our LLM will return 'comparison-table-points' x 'change_weight'.
  const disobedientLLM = new MockMockLLMProvider({
    target: 'comparison-table-points',
    target_selection_rationale: 'Because',
    hypothesis: 'test',
    rationale: 'test',
    expected_effect: { metric: 'validation_mae', direction: 'decrease', reason: 'test' },
    mutation: { type: 'change_weight', value: 2 }
  });

  const report = await runLoop(1, disobedientLLM, { campaign: 'test-mismatch', allocationPolicy: 'adaptive' });
  
  assert.strictEqual(report.stats.allocation_mismatch, 1, 'Should reject proposal due to allocation mismatch');
  assert.strictEqual(report.stats.accepted, 0);

  // Now test an obedient LLM
  const obedientLLM = new MockMockLLMProvider({
    target: 'comparison-heading',
    target_selection_rationale: 'Because',
    hypothesis: 'test',
    rationale: 'test',
    expected_effect: { metric: 'validation_mae', direction: 'decrease', reason: 'test' },
    mutation: { type: 'add_pattern', value: 'foo' }
  });

  const report2 = await runLoop(1, obedientLLM, { campaign: 'test-match', allocationPolicy: 'adaptive' });
  
  // It shouldn't get an allocation mismatch, though it might fail evaluate/syntax/crashed
  assert.strictEqual(report2.stats.allocation_mismatch || 0, 0, 'Obedient LLM should not hit mismatch');

  console.log('runner-allocation.test.mjs passed!\n');
}

import { fileURLToPath } from 'url';
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runTests().catch(console.error);
}
