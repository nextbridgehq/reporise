import assert from 'node:assert';
import { RegexStrategy } from '../../eval/research/strategies/regex.mjs';
import { StrategyProvider } from '../../eval/research/strategy-interface.mjs';

function testInheritance() {
  const s = new RegexStrategy();
  assert.ok(s instanceof StrategyProvider, 'RegexStrategy must extend StrategyProvider');
}

function testSingleMutationPoint() {
  const s = new RegexStrategy();
  const proposal = s.propose({
    mutationPoints: { 'point-a': { type: 'regex' } },
    previousExperiments: []
  });
  assert.deepStrictEqual(proposal, {
    target: 'point-a',
    op: 'replaceValue',
    value: { pattern: 'new_pattern_0', flags: 'i' }
  });
}

function testMultipleExperimentsRotation() {
  const s = new RegexStrategy();
  const points = {
    'point-a': { type: 'regex' },
    'point-b': { type: 'regex' }
  };

  const prop0 = s.propose({ mutationPoints: points, previousExperiments: [] });
  assert.strictEqual(prop0.target, 'point-a');
  assert.strictEqual(prop0.value.pattern, 'new_pattern_0');

  const prop1 = s.propose({ mutationPoints: points, previousExperiments: [{ id: 1 }] });
  assert.strictEqual(prop1.target, 'point-b');
  assert.strictEqual(prop1.value.pattern, 'new_pattern_1');

  const prop2 = s.propose({ mutationPoints: points, previousExperiments: [{ id: 1 }, { id: 2 }] });
  assert.strictEqual(prop2.target, 'point-a');
  assert.strictEqual(prop2.value.pattern, 'new_pattern_2');
}

function testEmptyOrMissingPoints() {
  const s = new RegexStrategy();
  assert.strictEqual(s.propose({ mutationPoints: {}, previousExperiments: [] }), null);
  assert.strictEqual(s.propose({ mutationPoints: null, previousExperiments: [] }), null);
  assert.strictEqual(s.propose({}), null);
}

function testFiltersOnlyRegexPoints() {
  const s = new RegexStrategy();
  const points = {
    'point-other': { type: 'ast' },
    'point-regex': { type: 'regex' }
  };
  const proposal = s.propose({ mutationPoints: points, previousExperiments: [] });
  assert.strictEqual(proposal.target, 'point-regex');
}

try {
  testInheritance();
  testSingleMutationPoint();
  testMultipleExperimentsRotation();
  testEmptyOrMissingPoints();
  testFiltersOnlyRegexPoints();
  console.log('PASS: RegexStrategy');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
