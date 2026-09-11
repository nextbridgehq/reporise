/**
 * geo-pilot-provider.mjs — Controlled bounded pilot provider for M8.6 P0 GEO Exploration.
 * Systematically tests the competing GEO hypotheses:
 * - Hypothesis A (Weighting)
 * - Hypothesis B (Conditional Gating)
 * - Hypothesis C (Contextual Gating / Combined)
 */

export class GeoPilotStrategyProvider {
  constructor() {
    this.name = 'geo-pilot';
    this.metadata = {
      provider: 'geo-pilot-controlled',
      model: 'deterministic-m8.6-hypotheses',
      endpoint: 'in-process'
    };

    this.candidates = [
      {
        target: 'geo-evidence-gating',
        hypothesis: 'Hypothesis B (Conditional Gating: Cap at 25 when runnable-example fails)',
        rationale: 'Repositories without any runnable code blocks lack fundamental machine citability for code answers. Capping at 25 prevents over-crediting empty code surfaces.',
        expected_effect: { metric: 'validation_mae', direction: 'decrease' },
        mutation: {
          type: 'replace',
          value: 25
        }
      },
      {
        target: 'geo-evidence-gating',
        hypothesis: 'Hypothesis B (Conditional Gating: Cap at 29 when runnable-example fails)',
        rationale: 'Caps un-runnable repositories at the boundary of bucket 1 (29 points) to test boundary sensitivity.',
        expected_effect: { metric: 'validation_mae', direction: 'decrease' },
        mutation: {
          type: 'replace',
          value: 29
        }
      },
      {
        target: 'geo-evidence-gating',
        hypothesis: 'Hypothesis B (Conditional Gating: Cap at 49 when runnable-example fails)',
        rationale: 'Caps un-runnable repositories at the boundary of bucket 2 (49 points) as a softer gating alternative.',
        expected_effect: { metric: 'validation_mae', direction: 'decrease' },
        mutation: {
          type: 'replace',
          value: 49
        }
      },
      {
        target: 'geo-citability-weight',
        hypothesis: 'Hypothesis A (Weighting: Weight citability checks 1.5x in GEO)',
        rationale: 'Increases the relative influence of actual citability checks over basic hygiene/identity checks in generative engine surface.',
        expected_effect: { metric: 'validation_mae', direction: 'decrease' },
        mutation: {
          type: 'replace',
          value: 1.5
        }
      },
      {
        target: 'geo-citability-weight',
        hypothesis: 'Hypothesis A (Weighting: Weight citability checks 2.0x in GEO)',
        rationale: 'Tests higher citability weighting (2.0x) to counterbalance the 11 hygiene/identity checks.',
        expected_effect: { metric: 'validation_mae', direction: 'decrease' },
        mutation: {
          type: 'replace',
          value: 2.0
        }
      },
      {
        target: 'geo-citability-weight',
        hypothesis: 'Hypothesis A (Weighting: Weight citability checks 2.5x in GEO)',
        rationale: 'Tests strong citability weighting (2.5x) to strongly prioritize machine attribution and comparison.',
        expected_effect: { metric: 'validation_mae', direction: 'decrease' },
        mutation: {
          type: 'replace',
          value: 2.5
        }
      }
    ];
  }

  async propose(context) {
    const idx = context.iteration;
    if (idx >= this.candidates.length) {
      return null;
    }
    return this.candidates[idx];
  }
}
