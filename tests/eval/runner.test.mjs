import assert from 'node:assert';
import { runLoop } from '../../eval/research/runner.mjs';

function testRunLoop() {
  runLoop(1);
  
  assert.throws(() => runLoop(0), /Invalid iterations/);
  assert.throws(() => runLoop(-5), /Invalid iterations/);

  let iterationsRun = 0;
  runLoop(3, (i) => {
    iterationsRun++;
  });
  assert.strictEqual(iterationsRun, 3);
}

try {
  testRunLoop();
  console.log('PASS: runLoop');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
