import assert from 'node:assert';
import { StrategyProvider } from '../../eval/research/strategy-interface.mjs';

function testStrategyProviderThrows() {
  const p = new StrategyProvider();
  assert.throws(
    () => p.propose({}),
    /Not implemented/
  );
}

function testSubclassCanImplement() {
  class TestStrategy extends StrategyProvider {
    propose(context) {
      return { target: 'test', op: 'replaceValue', value: { pattern: 'test' } };
    }
  }

  const s = new TestStrategy();
  const res = s.propose({});
  assert.strictEqual(res.target, 'test');
}

try {
  testStrategyProviderThrows();
  testSubclassCanImplement();
  console.log('PASS: StrategyProvider');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
