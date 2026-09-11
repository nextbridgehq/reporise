import test from 'node:test';
import assert from 'node:assert';
import { validateProposal } from '../../eval/research/proposal.mjs';

test('ExperimentProposal Validation & Security', async (t) => {
  const validProposal = {
    target: 'definitional-pattern',
    hypothesis: 'A test hypothesis.',
    rationale: 'A test rationale.',
    mutation: { type: 'replace', value: { pattern: 'test' } },
    expected_effect: { metric: 'validation_mae', direction: 'decrease', reason: 'Test.' }
  };

  await t.test('Accepts valid proposal', () => {
    assert.strictEqual(validateProposal(validProposal), true);
  });

  await t.test('Rejects missing fields', () => {
    const invalid = { ...validProposal };
    delete invalid.hypothesis;
    assert.throws(() => validateProposal(invalid), /Missing required field 'hypothesis'/);
  });

  await t.test('Rejects unknown target', () => {
    const invalid = { ...validProposal, target: 'non-existent-point' };
    assert.throws(() => validateProposal(invalid), /not an allowed research point/);
  });

  await t.test('Rejects unsupported mutation type', () => {
    const invalid = { ...validProposal, mutation: { type: 'delete' } };
    assert.throws(() => validateProposal(invalid), /is not supported/);
  });

  await t.test('Rejects oversized mutation value', () => {
    const invalid = { ...validProposal, mutation: { type: 'replace', value: 'x'.repeat(2500) } };
    assert.throws(() => validateProposal(invalid), /exceeds maximum allowed length/);
  });

  await t.test('Rejects invalid expected metric', () => {
    const invalid = { ...validProposal, expected_effect: { metric: 'cpu_usage', direction: 'decrease' } };
    assert.throws(() => validateProposal(invalid), /Invalid metric/);
  });

  await t.test('Rejects invalid expected direction', () => {
    const invalid = { ...validProposal, expected_effect: { metric: 'validation_mae', direction: 'explode' } };
    assert.throws(() => validateProposal(invalid), /Invalid direction/);
  });
});
