import { assertCleanTree } from './git.mjs';
import { storeCheckpoint, restoreCheckpoint } from './git-checkpoint.mjs';
import { applyStructuredMutation } from './mutation.mjs';
import { appendLog } from './logger.mjs';
import { validateSyntax } from './syntax.mjs';
import { edgeCaseGate } from './edge-gate.mjs';
import { evaluateFixture } from './evaluate.mjs';
import { validateProposal } from './proposal.mjs';
import { MUTATION_POINTS } from './registry.mjs';
import { validateRegressionGates } from './regression-gate.mjs';
import { allocateNextExperiment } from './allocation/allocator.mjs';
import { validateAllocation } from './proposal.mjs';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const TARGET_FILE = 'skills/visibility-audit/scripts/lib/checks.mjs';
const PROPOSAL_DIR = 'eval/research/proposals';

export async function runLoop(iterations, strategyProvider, runConfig = { campaign: 'default' }) {
  if (iterations <= 0) throw new Error('Invalid iterations');
  
  if (!fs.existsSync(PROPOSAL_DIR)) {
    fs.mkdirSync(PROPOSAL_DIR, { recursive: true });
  }
  
  let experiments = [];
  // Pre-load full history for allocator
  let fullHistory = [];
  if (fs.existsSync('eval/research/.experiments.jsonl')) {
    const lines = fs.readFileSync('eval/research/.experiments.jsonl', 'utf8').trim().split('\n');
    fullHistory = lines.filter(Boolean).map(l => JSON.parse(l));
  }

  const baseline = await evaluateFixture();
  const baselineMetrics = baseline;
  let bestMetrics = baseline;
  const initialMae = baseline.realValidationMetrics.mae;
  const initialGeoMae = baseline.realValidationMetrics.surfaces.geo.mae;

  const { provider, model, endpoint } = strategyProvider.metadata || { provider: 'unknown', model: 'unknown', endpoint: 'unknown' };
  const campaign = runConfig.campaign;
  const allocationPolicy = runConfig.allocationPolicy || 'llm';
  const targetPriority = runConfig.targetPriority || 'P0_geo_evidence_quality';
  
  const stats = {
    targets: {},
    accepted: 0,
    rejected: 0,
    mutation_invalid: 0,
    syntax_error: 0,
    test_failed: 0,
    llm_error: 0,
    proposal_invalid: 0,
    allocation_mismatch: 0,
    crashed: 0
  };

  for (let i = 0; i < iterations; i++) {
    let allocation = null;
    if (allocationPolicy === 'adaptive') {
      allocation = allocateNextExperiment(fullHistory.concat(experiments), MUTATION_POINTS, fullHistory.length + i);
    }

    const context = {
      mutationPoints: MUTATION_POINTS,
      iteration: i,
      history: experiments,
      bestMetrics: {
        mae: bestMetrics.realValidationMetrics.mae,
        geoMae: bestMetrics.realValidationMetrics.surfaces.geo.mae,
        seoMae: bestMetrics.realValidationMetrics.surfaces.seo.mae,
        aeoMae: bestMetrics.realValidationMetrics.surfaces.aeo.mae,
        edgeCasePassRate: bestMetrics.edgeCaseMetrics.edgeCasePassRate
      },
      allocationPolicy,
      allocation,
      targetPriority
    };
    
    let proposal;
    try {
      proposal = await strategyProvider.propose(context);
    } catch (e) {
      const exp = { 
        iteration: i, 
        decision: 'llm_error', 
        error: e.message, 
        provider,
        model,
        endpoint,
        campaign
      };
      experiments.push(exp);
      appendLog('eval/research/.experiments.jsonl', exp);
      stats.llm_error++;
      continue;
    }
    
    if (!proposal) {
      continue;
    }

    const expId = `exp-${Date.now()}-${i}`;
    const target = proposal.target || proposal.research_point;
    stats.targets[target] = stats.targets[target] || { proposed: 0, accepted: 0 };
    stats.targets[target].proposed++;
    fs.writeFileSync(`${PROPOSAL_DIR}/${expId}.json`, JSON.stringify({
      experiment_id: expId,
      campaign,
      provider,
      model,
      endpoint,
      proposal
    }, null, 2));

    const exp = { 
      id: expId, 
      iteration: i, 
      allocation_policy: allocationPolicy,
      allocation,
      proposal, 
      decision: 'crashed', 
      provider,
      model,
      endpoint,
      campaign,
      target_priority: targetPriority
    };
    
    try {
      validateProposal(proposal);
      if (allocationPolicy === 'adaptive') {
        validateAllocation(proposal, allocation);
      }
    } catch (e) {
      if (e.message.includes('ALLOCATION_MISMATCH')) {
        exp.decision = 'allocation_mismatch';
        exp.error = e.message;
        stats.allocation_mismatch = (stats.allocation_mismatch || 0) + 1;
      } else {
        exp.decision = 'proposal_invalid';
        exp.error = e.message;
        stats.proposal_invalid++;
      }
      experiments.push(exp);
      appendLog('eval/research/.experiments.jsonl', exp);
      continue;
    }
    
    const checkpoint = storeCheckpoint(process.cwd());
    
    try {
      const sourceCode = fs.existsSync(TARGET_FILE) ? fs.readFileSync(TARGET_FILE, 'utf8') : '';
      const mutatedCode = applyStructuredMutation(sourceCode, proposal);
      fs.writeFileSync(TARGET_FILE, mutatedCode, 'utf8');
      
      if (!validateSyntax(TARGET_FILE)) {
        exp.decision = 'syntax_error';
        exp.error = 'Syntax Error';
        throw new Error('Syntax Error');
      }
      
      const metrics = await evaluateFixture();
      exp.metrics = metrics.realValidationMetrics;
      
      const gate = validateRegressionGates(metrics, bestMetrics, baselineMetrics, targetPriority);
      
      if (gate.passed) {
        // Enforce zero unit test regressions before acceptance
        try {
          execFileSync('node', ['skills/visibility-audit/scripts/test.mjs'], { stdio: 'ignore' });
        } catch (testErr) {
          exp.decision = 'test_failed';
          exp.error = 'Visibility audit unit test failure';
          stats.test_failed++;
          restoreCheckpoint(process.cwd(), checkpoint);
          experiments.push(exp);
          appendLog('eval/research/.experiments.jsonl', exp);
          continue;
        }

        try {
          execFileSync('git', ['add', TARGET_FILE], { stdio: 'pipe' });
          const commitMsg = `research(accept): ${expId} - ${proposal.hypothesis.slice(0, 60)}`;
          execFileSync('git', ['commit', '-m', commitMsg], { stdio: 'pipe' });
        } catch (gitErr) {
          exp.decision = 'git_error';
          exp.error = `Git persistence failure: ${gitErr.message}`;
          stats.rejected++;
          try {
            restoreCheckpoint(process.cwd(), checkpoint);
            assertCleanTree(process.cwd());
          } catch (restoreErr) {
            throw new Error(`FATAL_RECOVERY_FAILURE: Checkpoint restoration failed: ${restoreErr.message}`);
          }
          experiments.push(exp);
          appendLog('eval/research/.experiments.jsonl', exp);
          continue;
        }

        exp.decision = 'accepted';
        exp.improvement = gate.reason;
        bestMetrics = metrics;
        stats.accepted++;
        stats.targets[target] = stats.targets[target] || { proposed: 0, accepted: 0 };
        stats.targets[target].accepted++;
      } else {
        exp.decision = 'rejected';
        exp.error = gate.reason;
        stats.rejected++;
        restoreCheckpoint(process.cwd(), checkpoint);
      }
    } catch (e) {
      if (exp.decision === 'crashed') {
        if (e.message.includes('Malformed') || e.message.includes('Invalid regex')) {
          exp.decision = 'mutation_invalid';
          stats.mutation_invalid++;
        } else {
          exp.decision = 'test_failed';
          stats.test_failed++;
        }
      } else if (exp.decision === 'syntax_error') {
        stats.syntax_error++;
      }
      exp.error = e.message;
      restoreCheckpoint(process.cwd(), checkpoint);
    }
    
    experiments.push(exp);
    appendLog('eval/research/.experiments.jsonl', exp);
  }

  return {
    campaign,
    provider,
    model,
    iterations,
    stats,
    initialMae,
    finalMae: bestMetrics.realValidationMetrics.mae,
    initialGeoMae,
    finalGeoMae: bestMetrics.realValidationMetrics.surfaces.geo.mae,
    edgeCases: bestMetrics.edgeCaseMetrics.edgeCasePassRate
  };
}

export function seededRandom(seed) {
  let s = seed;
  return function() {
    s = Math.sin(s) * 10000;
    return s - Math.floor(s);
  };
}

export async function runLoopWithRecovery(workFn, restoreFn) {
  try {
    await workFn();
  } finally {
    restoreFn();
  }
}
