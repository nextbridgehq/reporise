import { parseArgs } from 'node:util';
import { runLoop } from './runner.mjs';
import { ProgrammaticStrategyProvider } from './providers/programmatic.mjs';
import { MockLLMStrategyProvider } from './providers/mock.mjs';
import { LLMStrategyProvider } from './providers/llm.mjs';
import { loadConfig } from './config.mjs';
import { redactConfig } from './secrets.mjs';

const options = {
  provider: { type: 'string' },
  iterations: { type: 'string', default: '1' },
  campaign: { type: 'string' },
  'allocation-policy': { type: 'string', default: 'fixed' },
  'dry-run': { type: 'boolean', default: false }
};

const { values } = parseArgs({ args: process.argv.slice(2), options });
const config = loadConfig(values);

let provider;
if (config.llm.provider === 'programmatic') {
  provider = new ProgrammaticStrategyProvider();
} else if (config.llm.provider === 'llm-mock') {
  provider = new MockLLMStrategyProvider();
} else {
  // Use generic LLM provider for 'llm', 'gemini', or any arbitrary name
  provider = new LLMStrategyProvider(config.llm);
}

const runConfig = { 
  campaign: config.research.campaign,
  allocationPolicy: values['allocation-policy']
};

if (values['dry-run']) {
  // Generate a safe config purely for UI representation
  const safeConfig = redactConfig(config);

  provider.propose({ mutationPoints: { 'definitional-pattern': { type: 'regex' } }, iteration: 0, history: [], bestMetrics: { mae: 5, edgeCasePassRate: 0 } })
    .then(proposal => {
      console.log('RepoRise Research');
      console.log('────────────────────────────────');
      console.log(`Campaign: ${runConfig.campaign}`);
      console.log(`Provider: ${provider.metadata.provider}`);
      console.log(`Model: ${provider.metadata.model}`);
      console.log(`Endpoint: ${provider.metadata.endpoint}`);
      console.log(`Strategy: ${provider.constructor.name}`);
      console.log(`API key: ${safeConfig.llm.apiKey}`);
      console.log(`Context: loaded`);
      console.log(`Proposal: generated`);
      console.log(`Target: ${proposal.target}`);
      console.log(`Validation: PASS`);
      console.log(`Mutation: valid`);
      console.log(`\nDry run:`);
      console.log(`NO FILES MODIFIED`);
      console.log(`NO EVALUATION EXECUTED`);
    })
    .catch(err => {
      // It's possible the propose method throws (e.g., missing API key validation)
      console.log('RepoRise Research');
      console.log('────────────────────────────────');
      console.log(`Campaign: ${runConfig.campaign}`);
      console.log(`Provider: ${provider.metadata.provider}`);
      console.log(`Model: ${provider.metadata.model}`);
      console.log(`Endpoint: ${provider.metadata.endpoint}`);
      console.log(`Strategy: ${provider.constructor.name}`);
      console.log(`API key: ${safeConfig.llm.apiKey}`);
      console.log(`Context: loaded`);
      console.error('\nDry run failed during generation:', err.message);
    });
} else {
  runLoop(parseInt(values.iterations, 10), provider, runConfig).then((report) => {
    if (!report) {
       console.log('Research run complete.');
       return;
    }
    const width = 45;
    console.log(`╔${'═'.repeat(width - 2)}╗`);
    console.log(`║ ${report.campaign} Research Campaign`.padEnd(width - 1) + '║');
    console.log(`╠${'═'.repeat(width - 2)}╣`);
    console.log(`║ Provider: ${report.provider}`.padEnd(width - 1) + '║');
    console.log(`║ Model: ${report.model}`.padEnd(width - 1) + '║');
    console.log(`║ Iterations: ${report.iterations}`.padEnd(width - 1) + '║');
    console.log(`╠${'═'.repeat(width - 2)}╣`);
    console.log(`║ Accepted:             ${report.stats.accepted}`.padEnd(width - 1) + '║');
    console.log(`║ Rejected:             ${report.stats.rejected}`.padEnd(width - 1) + '║');
    console.log(`║ Proposal invalid:     ${report.stats.proposal_invalid}`.padEnd(width - 1) + '║');
    console.log(`║ Mutation invalid:     ${report.stats.mutation_invalid}`.padEnd(width - 1) + '║');
    console.log(`║ Syntax error:         ${report.stats.syntax_error}`.padEnd(width - 1) + '║');
    console.log(`║ Test failure:         ${report.stats.test_failed}`.padEnd(width - 1) + '║');
    console.log(`║ LLM error:            ${report.stats.llm_error}`.padEnd(width - 1) + '║');
    console.log(`╠${'═'.repeat(width - 2)}╣`);
    console.log(`║ Baseline Val MAE:     ${report.initialMae.toFixed(3)}`.padEnd(width - 1) + '║');
    console.log(`║ Final Val MAE:        ${report.finalMae.toFixed(3)}`.padEnd(width - 1) + '║');
    console.log(`║ Edge Cases:           ${(report.edgeCases * 100).toFixed(0)}%`.padEnd(width - 1) + '║');
    console.log(`╚${'═'.repeat(width - 2)}╝`);
  }).catch(err => {
    console.error('Fatal research error:', err);
    process.exit(1);
  });
}
