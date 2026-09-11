import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import { runLoop, runLoopWithRecovery } from '../../eval/research/runner.mjs';
import { MockLLMStrategyProvider } from '../../eval/research/providers/mock.mjs';
import { ProgrammaticStrategyProvider } from '../../eval/research/providers/programmatic.mjs';

test('LLM Providers & E2E', async (t) => {
  await t.test('ProgrammaticStrategyProvider conforms to contract', async () => {
    const provider = new ProgrammaticStrategyProvider();
    const proposal = await provider.propose({
      mutationPoints: { 'definitional-pattern': { type: 'regex' } },
      iteration: 0
    });
    
    assert.strictEqual(proposal.target, 'definitional-pattern');
    assert.strictEqual(proposal.mutation.type, 'replace');
    assert.ok(proposal.hypothesis);
    assert.ok(proposal.expected_effect.metric);
  });

  await t.test('MockLLMStrategyProvider conforms to contract', async () => {
    const provider = new MockLLMStrategyProvider();
    const proposal = await provider.propose({});
    
    assert.strictEqual(proposal.target, 'definitional-pattern');
    assert.strictEqual(proposal.mutation.type, 'replace');
    assert.strictEqual(proposal.mutation.value.pattern, 'is|are');
  });

  await t.test('Mock LLM E2E Flow', async () => {
    try { fs.unlinkSync('eval/research/.experiments.jsonl'); } catch(e) {}
    try { fs.rmSync('eval/research/proposals', { recursive: true, force: true }); } catch(e) {}
    fs.mkdirSync('eval/research/proposals', { recursive: true });
    
    const mockProvider = new MockLLMStrategyProvider();
    mockProvider.name = 'mock-llm';
    
    let recovered = false;
    runLoopWithRecovery(() => {
      runLoop(1, mockProvider);
    }, () => {
      recovered = true;
    });
    
    assert.strictEqual(recovered, true, 'Recovery must be called');
    
    // Check experiment logs
    const logs = fs.readFileSync('eval/research/.experiments.jsonl', 'utf8').trim().split('\n');
    assert.strictEqual(logs.length, 1);
    
    const exp = JSON.parse(logs[0]);
    assert.strictEqual(exp.provider, 'mock-llm');
    assert.ok(['accepted', 'rejected', 'crashed'].includes(exp.decision));
    
    // Check proposal persistence
    const proposals = fs.readdirSync('eval/research/proposals');
    assert.strictEqual(proposals.length, 1);
    
    const savedProposal = JSON.parse(fs.readFileSync(`eval/research/proposals/${proposals[0]}`, 'utf8'));
    assert.strictEqual(savedProposal.proposal.target, 'definitional-pattern');
  });
});
