import assert from 'node:assert';
import fs from 'node:fs';
import { runLoop, runLoopWithRecovery } from '../../eval/research/runner.mjs';

function testE2E() {
  try { fs.unlinkSync('eval/research/.experiments.jsonl'); } catch(e) {}
  
  let recovered = false;
  runLoopWithRecovery(async () => {
    await runLoop(3, null, 'dummy');
  }, () => {
    recovered = true;
  });
  
  assert.strictEqual(recovered, true, 'Recovery must be called');
  
  const logs = fs.readFileSync('eval/research/.experiments.jsonl', 'utf8');
  const lines = logs.trim().split('\n');
  assert.strictEqual(lines.length, 3, 'Must have run 3 iterations');
  
  for (const line of lines) {
    const exp = JSON.parse(line);
    assert.ok(exp.decision === 'accepted' || exp.decision === 'rejected');
  }
  
  try { fs.unlinkSync('eval/research/.experiments.jsonl'); } catch(e) {}
  console.log('PASS: Full M5 E2E Flow');
}

testE2E();
