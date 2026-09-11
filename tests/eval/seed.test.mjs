import assert from 'node:assert';
import { seededRandom } from '../../eval/research/runner.mjs';

function testSeededRandom() {
  // Test 1: Identical seeds produce identical first values
  const r1 = seededRandom(123)();
  const r2 = seededRandom(123)();
  assert.strictEqual(r1, r2, 'Identical seeds should produce identical first values');

  // Test 2: Identical seeds produce identical sequence of values
  const genA = seededRandom(42);
  const genB = seededRandom(42);
  const seqA = [genA(), genA(), genA(), genA(), genA()];
  const seqB = [genB(), genB(), genB(), genB(), genB()];
  assert.deepStrictEqual(seqA, seqB, 'Identical seeds should produce identical sequence of values');

  // Test 3: Output values are within [0, 1)
  for (const val of seqA) {
    assert.ok(val >= 0 && val < 1, `Output ${val} should be in [0, 1)`);
  }

  // Test 4: Different seeds produce different sequences
  const genC = seededRandom(999);
  const seqC = [genC(), genC(), genC(), genC(), genC()];
  assert.notDeepStrictEqual(seqA, seqC, 'Different seeds should produce different sequences');
}

try {
  testSeededRandom();
  console.log('PASS: seededRandom');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
