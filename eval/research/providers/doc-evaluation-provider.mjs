/**
 * doc-pilot-provider.mjs — Controlled bounded pilot provider for M8.6 P0 Docs & Monorepo Depth.
 * Systematically tests competing hypotheses for F08 / F03:
 * - Hypothesis A (External Docs Recognition)
 * - Hypothesis B (Conditional Answerability Gating)
 * - Hypothesis C (Boundary Calibration)
 */

export class DocPilotStrategyProvider {
  constructor() {
    this.name = "doc-pilot";
    this.metadata = {
      provider: "doc-pilot-controlled",
      model: "deterministic-m8.6-hypotheses",
      endpoint: "in-process"
    };

    this.candidates = [
      {
        target: "answerability-evidence-gating",
        hypothesis: "Hypothesis B1 (Answerability Conditional Gating: Cap at 49 when runnable-example and install-section fail)",
        rationale: "Repositories lacking both installation instructions and runnable code examples fail core developer answerability. Capping overall score at 49 prevents un-runnable stubs from receiving sound-foundation ratings.",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: 49
        }
      },
      {
        target: "external-docs-recognition",
        hypothesis: "Hypothesis A (External Documentation Recognition in docs-surface)",
        rationale: "Recognizes dedicated documentation sites (docs.*, ReadTheDocs, GitBook, /docs entrypoints) when in-repo docs directory is absent, reflecting modern multi-package and standalone docs architecture.",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: true
        }
      },
      {
        target: "answerability-evidence-gating",
        hypothesis: "Hypothesis B2 (Answerability Conditional Gating: Tighter cap at 45)",
        rationale: "Tests a tighter cap at 45 (mid-bucket 2) to evaluate whether deeper separation from bucket 3 improves calibration stability.",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: 45
        }
      },
      {
        target: "answerability-evidence-gating",
        hypothesis: "Hypothesis B3 (Answerability Conditional Gating: Severe cap at 29)",
        rationale: "Tests capping un-installable/un-runnable repositories at the boundary of bucket 1 (29 points) to evaluate if human raters penalize missing setup more harshly.",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: 29
        }
      },
      {
        target: "answerability-evidence-gating",
        hypothesis: "Hypothesis B0 (Null Control: Disable gating with cap at 100)",
        rationale: "Verifies the non-regression behavior and calibration baseline when gating is inactive.",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: 100
        }
      }
    ];
  }

  async propose(context) {
    const idx = context.iteration;
    if (idx >= this.candidates.length) return null;
    const cand = this.candidates[idx];

    return {
      proposal_id: "exp-" + Date.now() + "-" + idx,
      target: cand.target,
      priority: "P0_docs_monorepo_architecture",
      hypothesis: cand.hypothesis,
      rationale: cand.rationale,
      expected_effect: cand.expected_effect,
      mutation: cand.mutation
    };
  }
}
