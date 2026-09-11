/**
 * @typedef {Object} ProviderMetadata
 * @property {string} provider - The name of the provider (e.g. 'gemini', 'programmatic')
 * @property {string} model - The model being used
 * @property {string} endpoint - The endpoint being used
 */

/**
 * @typedef {Object} StrategyProvider
 * @property {ProviderMetadata} metadata - The metadata contract for this provider
 * @property {function(import('./context.mjs').ResearchContext): Promise<import('./proposal.mjs').ExperimentProposal|null>} propose
 */
