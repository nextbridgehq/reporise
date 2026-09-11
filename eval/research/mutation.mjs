import { MUTATION_POINTS } from './registry.mjs';

/**
 * Validates a mutation proposal before attempting to apply it.
 * Verifies structural correctness and regex validity.
 * @param {Object} proposal - The proposed mutation object
 * @param {Object} [registry=MUTATION_POINTS] - Optional registry override for testing
 * @throws {Error} If the mutation is invalid
 */
export function validateMutationPreflight(proposal, registry = MUTATION_POINTS) {
  if (!proposal || !proposal.target || !proposal.mutation || !(proposal.mutation ? (proposal.mutation ? proposal.mutation.value : proposal.value) : proposal.value)) {
    throw new Error('Malformed mutation structure');
  }

  const point = registry[proposal.target];
  if (!point) {
    throw new Error(`Unknown mutation target: ${proposal.target}`);
  }

  if (point.allowedOperations && !point.allowedOperations.includes(proposal.mutation.type)) {
    throw new Error(`Disallowed operation: ${proposal.mutation.type}`);
  }

  if (point.type === 'regex') {
    if (proposal.mutation.type !== 'replace') {
      throw new Error('Regex points only support "replace" operations');
    }
    const val = (proposal.mutation ? proposal.mutation.value : proposal.value);
    if (typeof val.pattern !== 'string') {
      throw new Error('Regex mutation must contain a string pattern');
    }
    try {
      new RegExp(val.pattern, val.flags || '');
    } catch (e) {
      throw new Error(`Invalid regex: ${e.message}`);
    }
  } else if (point.type === 'numeric') {
    if (typeof (proposal.mutation ? proposal.mutation.value : proposal.value) !== 'number') {
      throw new Error('Numeric mutation must contain a number value');
    }
    if (point.min !== undefined && (proposal.mutation ? proposal.mutation.value : proposal.value) < point.min) {
      throw new Error(`Value ${(proposal.mutation ? proposal.mutation.value : proposal.value)} is below minimum ${point.min}`);
    }
    if (point.max !== undefined && (proposal.mutation ? proposal.mutation.value : proposal.value) > point.max) {
      throw new Error(`Value ${(proposal.mutation ? proposal.mutation.value : proposal.value)} is above maximum ${point.max}`);
    }
  } else if (point.type === 'boolean') {
    if (typeof (proposal.mutation ? proposal.mutation.value : proposal.value) !== 'boolean') {
      throw new Error('Boolean mutation must contain a boolean value');
    }
  }
}

/**
 * Validates and applies a structured mutation securely.
 * @param {string} sourceCode - Original file content
 * @param {Object} proposal - The proposed mutation object
 * @param {Object} [registry=MUTATION_POINTS] - Optional registry override for testing
 * @returns {string} The mutated source code
 */
export function applyStructuredMutation(sourceCode, proposal, registry = MUTATION_POINTS) {
  validateMutationPreflight(proposal, registry);

  const point = registry[proposal.target];

  const marker = `// @research-point: ${proposal.target}`;
  const lines = sourceCode.split('\n');
  const markerIdx = lines.findIndex(l => l.includes(marker));

  if (markerIdx === -1) {
    throw new Error('Marker not found');
  }

  if (markerIdx + 1 >= lines.length) {
    throw new Error('Invalid marker location');
  }

  if (point.type === 'regex' && proposal.mutation.type === 'replace') {
    const val = (proposal.mutation ? proposal.mutation.value : proposal.value);
    const pat = val.pattern;
    const flg = val.flags || '';
    if (/(:|=)\s*\/.*\/[a-z]*([;,])/.test(lines[markerIdx + 1])) {
      lines[markerIdx + 1] = lines[markerIdx + 1].replace(
        /(:|=)\s*\/.*\/[a-z]*([;,])/, 
        `$1 /${pat}/${flg}$2`
      );
    } else if (/findHeading\(readme, \/.*\/[a-z]*\)/.test(lines[markerIdx + 1])) {
      lines[markerIdx + 1] = lines[markerIdx + 1].replace(
        /findHeading\(readme, \/.*\/[a-z]*\)/, 
        `findHeading(readme, /${pat}/${flg})`
      );
    }
  } else if (point.type === 'numeric' && proposal.mutation.type === 'replace') {
    lines[markerIdx + 1] = lines[markerIdx + 1].replace(
      /=\s*\d+(?:\.\d+)?/,
      `= ${(proposal.mutation ? proposal.mutation.value : proposal.value)}`
    );
  } else if (point.type === 'boolean' && proposal.mutation.type === 'replace') {
    lines[markerIdx + 1] = lines[markerIdx + 1].replace(
      /=\s*(true|false)/,
      `= ${(proposal.mutation ? proposal.mutation.value : proposal.value)}`
    );
  }

  return lines.join('\n');
}
