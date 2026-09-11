import { MUTATION_POINTS } from './registry.mjs';

/**
 * Validates an ExperimentProposal for structural and logical safety.
 * This is a pure function. It throws if invalid.
 * 
 * @param {Object} proposal
 * @returns {boolean} true if valid
 */
export function validateProposal(proposal) {
  if (!proposal || typeof proposal !== 'object') {
    throw new Error('PROPOSAL_INVALID: Proposal must be an object');
  }

  // Mandatory fields
  const requiredFields = ['target', 'hypothesis', 'rationale', 'mutation', 'expected_effect'];
  for (const field of requiredFields) {
    if (!(field in proposal)) {
      throw new Error(`PROPOSAL_INVALID: Missing required field '${field}'`);
    }
  }

  // Target existence
  if (!MUTATION_POINTS[proposal.target]) {
    throw new Error(`PROPOSAL_INVALID: Target '${proposal.target}' is not an allowed research point`);
  }

  // Exactly one target is implicitly validated by having a single string target field
  if (typeof proposal.target !== 'string') {
    throw new Error('PROPOSAL_INVALID: Target must be a string');
  }

  // Mutation type and value
  const mutation = proposal.mutation;
  if (!mutation || typeof mutation !== 'object') {
    throw new Error('PROPOSAL_INVALID: Mutation must be an object');
  }

  const spec = MUTATION_POINTS[proposal.target];
  let allowedTypes = ['replace'];
  if (spec && spec.mutations) {
    allowedTypes = spec.mutations.map(m => m.type);
  }

  if (!allowedTypes.includes(mutation.type)) {
    throw new Error(`PROPOSAL_INVALID: Mutation type '${mutation.type}' is not supported for target '${proposal.target}'`);
  }

  if (typeof mutation.value !== 'string' && typeof mutation.value !== 'object' && typeof mutation.value !== 'number' && typeof mutation.value !== 'boolean') {
    throw new Error('PROPOSAL_INVALID: Mutation value must be a string, number, boolean, or object');
  }

  // Prevent enormous replacement strings
  const valueStr = typeof mutation.value === 'string' ? mutation.value : JSON.stringify(mutation.value);
  if (valueStr.length > 2000) {
    throw new Error('PROPOSAL_INVALID: Mutation size exceeds maximum allowed length');
  }

  // Expected effect
  const effect = proposal.expected_effect;
  if (!effect || typeof effect !== 'object') {
    throw new Error('PROPOSAL_INVALID: expected_effect must be an object');
  }

  if (!['validation_mae', 'training_mae', 'edge_case_pass_rate'].includes(effect.metric)) {
    throw new Error(`PROPOSAL_INVALID: Invalid metric '${effect.metric}' in expected_effect`);
  }

  if (!['decrease', 'increase', 'maintain'].includes(effect.direction)) {
    throw new Error(`PROPOSAL_INVALID: Invalid direction '${effect.direction}' in expected_effect`);
  }

  return true;
}

export function validateAllocation(proposal, allocation) {
  if (!allocation) return true;
  if (proposal.target !== allocation.target) throw new Error(`ALLOCATION_MISMATCH: Proposal target '${proposal.target}' does not match allocated target '${allocation.target}'`);
  if (proposal.mutation.type !== allocation.modality) throw new Error(`ALLOCATION_MISMATCH: Proposal mutation type '${proposal.mutation.type}' does not match allocated modality '${allocation.modality}'`);
  return true;
}
