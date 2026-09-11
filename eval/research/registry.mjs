export { MUTATION_POINTS } from './structural.mjs';

// Re-export validation to keep older code from breaking, even though we now use applyStructuredMutation
export function validateMutationPreflight(proposal, registry) {
  import('./structural.mjs').then(s => s.validateMutationType(registry[proposal.target], proposal.mutation));
}
