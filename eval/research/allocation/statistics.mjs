export function buildArmStatistics(history, registry) {
  const arms = new Map();

  // 1. Initialize arms from registry
  for (const [targetId, spec] of Object.entries(registry)) {
    if (spec.mutations) {
      for (const mut of spec.mutations) {
        const key = `${targetId}::${mut.type}`;
        arms.set(key, {
          target: targetId,
          modality: mut.type,
          attempts: 0,
          evaluated: 0,
          accepted: 0,
          rejected: 0,
          duplicates: 0,
          invalid: 0,
          errors: 0,
          acceptanceRate: 0,
          consecutiveRejections: 0,
          lastImprovementIteration: null,
          improvements: 0
        });
      }
    }
  }

  // 2. Sort history by iteration (or chronologically)
  const sortedHistory = [...history].sort((a, b) => (a.iteration || 0) - (b.iteration || 0));

  // 3. Fold experiments
  for (const exp of sortedHistory) {
    if (!exp.proposal || !exp.proposal.target) continue;
    
    const target = exp.proposal.target;
    let modality = 'replace'; // legacy default
    
    if (exp.proposal.mutation && exp.proposal.mutation.type) {
      modality = exp.proposal.mutation.type;
    }
    
    const key = `${target}::${modality}`;
    const arm = arms.get(key);
    
    // Ignore obsolete targets/modalities
    if (!arm) continue;
    
    arm.attempts += 1;
    
    const decision = exp.decision;
    
    if (decision === 'accepted') {
      arm.evaluated += 1;
      arm.accepted += 1;
      arm.improvements += 1;
      arm.lastImprovementIteration = exp.iteration || 0;
      arm.consecutiveRejections = 0;
    } else if (decision === 'rejected') {
      arm.evaluated += 1;
      arm.rejected += 1;
      arm.consecutiveRejections += 1;
    } else if (decision === 'duplicate' || decision === 'proposal_duplicate') {
      arm.duplicates += 1;
    } else if (decision === 'proposal_invalid' || decision === 'mutation_invalid' || decision === 'syntax_error' || decision === 'test_failed') {
      arm.invalid += 1;
    } else if (decision === 'llm_error') {
      arm.errors += 1;
    }
    
    if (arm.evaluated > 0) {
      arm.acceptanceRate = arm.accepted / arm.evaluated;
    }
  }

  return Array.from(arms.values());
}
