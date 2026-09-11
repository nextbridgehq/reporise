import fs from 'node:fs';

export const MUTATION_POINTS = {
  'comparison-heading': {
    type: 'structural',
    mutations: [
      { type: 'add_pattern' },
      { type: 'remove_pattern' }
    ]
  },
  'definitional-pattern': {
    type: 'structural',
    mutations: [
      { type: 'add_pattern' },
      { type: 'remove_pattern' },
      { type: 'add_condition', allowed: ['heading_context'] }
    ]
  },
  'comparison-table-points': {
    type: 'structural',
    mutations: [
      { type: 'change_weight', min: 1, max: 5 }
    ]
  },
  'geo-citability-weight': {
    type: 'numeric',
    min: 0.5,
    max: 5.0,
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace', min: 0.5, max: 5.0 }
    ]
  },
  'geo-evidence-gating': {
    type: 'numeric',
    min: 10,
    max: 100,
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace', min: 10, max: 100 }
    ]
  },
  'answerability-evidence-gating': {
    type: 'numeric',
    min: 10,
    max: 100,
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace', min: 10, max: 100 }
    ]
  },
  'external-docs-recognition': {
    type: 'boolean',
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace' }
    ]
  },
  'install-heading': {
    type: 'regex',
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace' }
    ]
  },
  'faq-heading': {
    type: 'regex',
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace' }
    ]
  },
  'requirements-heading': {
    type: 'regex',
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace' }
    ]
  },
  'conversational-query-recognition': {
    type: 'boolean',
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace' }
    ]
  },
  'navigation-heading-filter': {
    type: 'boolean',
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace' }
    ]
  },
  'narrative-prose-recognition': {
    type: 'boolean',
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace' }
    ]
  },
  'compositional-usage-recognition': {
    type: 'boolean',
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace' }
    ]
  },
  'aeo-evidence-gating': {
    type: 'numeric',
    min: 10,
    max: 100,
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace', min: 10, max: 100 }
    ]
  },
  'aeo-synthesis-balanced': {
    type: 'boolean',
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace' }
    ]
  },
  'monorepo-manifest-boundary': {
    type: 'boolean',
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace' }
    ]
  },
  'title-extraction-boundary': {
    type: 'boolean',
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace' }
    ]
  },
  'seo-evidence-gating': {
    type: 'numeric',
    min: 10,
    max: 100,
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace', min: 10, max: 100 }
    ]
  },
  'comparison-seo-weighting': {
    type: 'numeric',
    min: 0.1,
    max: 10.0,
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace', min: 0.1, max: 10.0 }
    ]
  },
  'seo-synthesis-balanced': {
    type: 'boolean',
    allowedOperations: ['replace'],
    mutations: [
      { type: 'replace' }
    ]
  }
};

export function validateMutationType(spec, mutation) {
  const allowed = spec.mutations.find(m => m.type === mutation.type);
  if (!allowed) {
    throw new Error(`Mutation type ${mutation.type} not allowed for this target`);
  }
  
  if (mutation.type === 'change_weight') {
    if (typeof mutation.value !== 'number' || mutation.value < allowed.min || mutation.value > allowed.max) {
      throw new Error(`Weight ${mutation.value} out of bounds [${allowed.min}, ${allowed.max}]`);
    }
  }
  
  if (mutation.type === 'add_condition') {
    if (!allowed.allowed.includes(mutation.value)) {
      throw new Error(`Condition ${mutation.value} is not allowed for this target`);
    }
  }
}

export function applyMutation(sourceCode, target, mutation) {
  const marker = `// @research-point ${target}`;
  let lines = sourceCode.split('\n');
  const idx = lines.findIndex(l => l.includes(marker));
  
  if (idx === -1) throw new Error(`Marker not found for ${target}`);
  
  if (mutation.type === 'add_pattern' || mutation.type === 'remove_pattern') {
    // Array splicing logic
    let arrayStart = -1;
    let arrayEnd = -1;
    for (let i = idx + 1; i < lines.length; i++) {
      if (lines[i].includes('[')) arrayStart = i;
      if (lines[i].includes(']')) {
        arrayEnd = i;
        break;
      }
    }
    
    if (arrayStart === -1 || arrayEnd === -1) {
      throw new Error(`Could not find array definition for ${target}`);
    }
    
    let arrayContent = lines.slice(arrayStart, arrayEnd + 1).join('\n');
    
    if (mutation.type === 'add_pattern') {
      const pattern = `"${mutation.value.replace(/"/g, '\\"')}"`;
      if (!arrayContent.includes(pattern)) {
        lines[arrayEnd - 1] += ',';
        lines.splice(arrayEnd, 0, `  ${pattern}`);
      }
    } else {
      // remove pattern
      const pattern = mutation.value;
      const targetIndex = lines.findIndex((l, i) => i > arrayStart && i < arrayEnd && l.includes(`"${pattern}"`));
      if (targetIndex !== -1) {
        lines.splice(targetIndex, 1);
        // Fix trailing comma on previous line if it became the last item
        if (lines[targetIndex - 1].endsWith(',') && lines[targetIndex].includes(']')) {
          lines[targetIndex - 1] = lines[targetIndex - 1].replace(/,$/, '');
        }
      }
    }
  } else if (mutation.type === 'change_weight') {
    const line = lines[idx + 1];
    lines[idx + 1] = line.replace(/=\s*\d+(?:\.\d+)?/, `= ${mutation.value}`);
  } else if (mutation.type === 'add_condition') {
    let blockStart = -1;
    let blockEnd = -1;
    for (let i = idx + 1; i < lines.length; i++) {
      if (lines[i].includes('{')) blockStart = i;
      if (lines[i].includes('}')) {
        blockEnd = i;
        break;
      }
    }
    
    if (blockStart === -1 || blockEnd === -1) {
      throw new Error(`Could not find conditions block for ${target}`);
    }
    
    const condition = mutation.value;
    for (let i = blockStart + 1; i < blockEnd; i++) {
      if (lines[i].includes(condition)) {
        lines[i] = lines[i].replace('false', 'true');
        break;
      }
    }
  }
  
  return lines.join('\n');
}
