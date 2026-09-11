import assert from 'node:assert';
import { runLoopWithRecovery } from '../../eval/research/runner.mjs';

try {
  let restored = false;
  try {
    runLoopWithRecovery(() => { throw new Error('crash'); }, () => { restored = true; });
  } catch (e) {}
  assert.strictEqual(restored, true);
  console.log('PASS: recovery');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
