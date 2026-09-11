import fs from 'node:fs';
import { MUTATION_POINTS } from './registry.mjs';

function formatHistory(history) {
  if (!history || history.length === 0) return 'No previous attempts.';
  
  return history.map((exp, i) => {
    return `Attempt ${i+1} (${exp.decision}):
Target: ${exp.proposal?.target || exp.proposal?.research_point}
Mutation: ${JSON.stringify(exp.proposal?.mutation || { pattern: exp.proposal?.pattern })}
Effect: ${exp.results?.mae ? `MAE ${exp.results.mae}` : 'N/A'}`;
  }).join('\n\n');
}

export function getCurrentStatePrompt(state) {
  const { mutationPoints = MUTATION_POINTS, iteration = 0, history = [], bestMetrics, allocationPolicy, allocation } = state || {};

  const targetsPrompt = Object.entries(mutationPoints).map(([id, point]) => {
    let mutationsDesc = "";
    if (point.mutations) {
      mutationsDesc = point.mutations.map(m => m.type).join(', ');
    }
    
    let hint = "";
    if (id === 'comparison-heading') {
      hint = "Hint: M7.3 regex bounds are saturated. Try structural additions.";
    } else if (id === 'definitional-pattern') {
      hint = "Hint: Lexical limits reached. Adding conditions might help.";
    } else if (id === 'comparison-table-points') {
      hint = "Hint: Values > 3 usually regress.";
    }

    return `- ${id} (Allowed mutations: ${mutationsDesc})\n  ${hint}`;
  }).join('\n');

  return `You are RepoRise Autoresearch, an LLM optimizing a heuristic evaluation engine.
Your goal is to MINIMIZE the Real Validation MAE (Mean Absolute Error).

## Current Best Metrics:
- Validation MAE: ${bestMetrics?.mae?.toFixed(3) || 'N/A'} (lower is better)
- Edge Case Pass Rate: ${(bestMetrics?.edgeCasePassRate * 100 || 0).toFixed(0)}% (higher is better)

${allocationPolicy === 'adaptive' && allocation ? `
## RESEARCH ALLOCATION
Target: ${allocation.target}
Mutation modality: ${allocation.modality}
Reason: ${allocation.reason}

You MUST propose a mutation for this exact Target and Modality. Do NOT choose a different target.
` : `
## Available Targets:
${targetsPrompt}

Please select ONE target from the available list that you believe has the most opportunity for improvement.
Then select ONE mutation modality allowed for that target, and propose a specific change.
`}

## Structural Mutation Types
- add_pattern: Add a string to the target's pattern array. (e.g. "is a kind of")
- remove_pattern: Remove a string from the array.
- change_weight: Change the numeric weight (must be a number).
- add_condition: Activate a predefined logical condition like "heading_context".
NOTE: "modify_pattern" is NOT a valid mutation type. Never emit it.

## History of Attempts
${formatHistory(history)}

Generate a JSON proposal adhering EXACTLY to the following format:
{
  "target": "[target-id]",
  "rationale": "[why this target]",
  "hypothesis": "[what you are changing and why]",
  "expected_effect": {
    "metric": "validation_mae",
    "direction": "decrease"
  },
  "mutation": {
    "type": "[add_pattern|remove_pattern|change_weight|add_condition]",
    "value": "[string or number depending on type]"
  }
}`;
}
