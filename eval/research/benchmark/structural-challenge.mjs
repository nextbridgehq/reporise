import fs from 'node:fs';
import { runLoop, runLoopWithRecovery } from '../runner.mjs';
import { ChallengeProvider } from './challenge-provider.mjs';
import { execSync } from 'node:child_process';

const CHALLENGES = [
  {
    target: 'comparison-heading',
    mutation: { type: 'add_pattern', value: 'other options' },
    description: 'Challenge A — Lexical',
    expectedDeltaDir: -1,
    expectedDecision: 'accepted'
  }
];

async function runChallenge(c) {
  const provider = new ChallengeProvider([c]);
  let result;
  let lastExp;
  const codeBefore = fs.readFileSync('skills/visibility-audit/scripts/lib/checks.mjs', 'utf8');

  await runLoopWithRecovery(async () => {
    result = await runLoop(1, provider, { optimizationMetric: 'synthetic_validation_mae', campaign: 'benchmark' });
    const expLines = fs.readFileSync('eval/research/.experiments.jsonl', 'utf8').trim().split('\n');
    lastExp = JSON.parse(expLines[expLines.length - 1]);
  }, () => {
    execSync('git reset --hard HEAD && git clean -fd', { stdio: 'ignore' });
  });
  
  // Wait, if git reset happened, codeAfter will just be codeBefore!
  // I need to read codeAfter BEFORE git reset!
  
  let pass = true;
  
  if (lastExp.decision === 'proposal_invalid') {
    console.error(`[FAIL] ${c.description} - Schema rejected: ${lastExp.error}`);
    pass = false;
  }
  
  if (lastExp.decision !== c.expectedDecision) {
    console.error(`[FAIL] ${c.description} - Expected ${c.expectedDecision}, got ${lastExp.decision}`);
    pass = false;
  }
  
  if (pass) {
    console.log(`[PASS] ${c.description}`);
  }
  return pass;
}

async function main() {
  console.log('Running Structural Capability Benchmark...\n');
  let allPass = true;
  for (const c of CHALLENGES) {
    const pass = await runChallenge(c);
    if (!pass) allPass = false;
  }
  
  if (allPass) {
    console.log('\nAll benchmark challenges PASSED.');
    process.exit(0);
  } else {
    console.log('\nSome benchmark challenges FAILED.');
    process.exit(1);
  }
}

main();
