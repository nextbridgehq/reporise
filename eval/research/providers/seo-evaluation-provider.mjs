/**
 * seo-pilot-provider.mjs — Controlled bounded pilot provider for M8.6 P2 SEO Semantic Relevance, Metadata & Boundary Calibration.
 * Systematically tests competing hypotheses across 3 families + controls:
 * - Family P2-A: Semantic Identity Signals (Title extraction, HTML/banner headings) [35%]
 * - Family P2-B: Boundary & Granularity / F05 (SEO evidence gating, monorepo workspace boundary) [35%]
 * - Family P2-C: Metadata Alignment (Comparison surface weighting calibration) [20%]
 * - Controls & Stress Tests: Invariant baseline & negative stress test [10%]
 */

export class SeoPilotStrategyProvider {
  constructor() {
    this.name = "seo-pilot";
    this.metadata = {
      provider: "seo-pilot-controlled",
      model: "deterministic-m8.6-hypotheses",
      endpoint: "in-process"
    };

    this.candidates = [
      {
        target: "seo-evidence-gating",
        hypothesis: "H0 (Null Control: Baseline Calibration with Gating Inactive at 100)",
        rationale: "Verifies the non-regression baseline and score invariance when SEO evidence gating is inactive at 100.",
        expected_effect: { metric: "validation_mae", direction: "maintain" },
        mutation: {
          type: "replace",
          value: 100
        }
      },
      {
        target: "seo-evidence-gating",
        hypothesis: "H2-B1 (SEO Evidence Gating: Cap at 45 when Install and Runnable Fail)",
        rationale: "Directly addresses F02 false positives. When a repository provides neither setup instructions nor a runnable code block, cap SEO raw score at 45 (Bucket 2 boundary), eliminating unearned high scores on stub/empty repositories (e.g. esbuild, ray, k3s).",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: 45
        }
      },
      {
        target: "seo-evidence-gating",
        hypothesis: "H2-B2 (SEO Evidence Gating: Cap at 35 when Install and Runnable Fail)",
        rationale: "Tests a stricter cap at 35 to evaluate whether deeper suppression on un-runnable repositories improves accuracy or causes false negatives.",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: 35
        }
      },
      {
        target: "title-extraction-boundary",
        hypothesis: "H1-A (Semantic Identity: Title Extraction from HTML Heading or Banner Logo)",
        rationale: "Tests whether recognizing HTML <h1> headings and logo image alt text in README headers recovers title identity for prominent repositories (e.g. Storybook, Starship).",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: true
        }
      },
      {
        target: "monorepo-manifest-boundary",
        hypothesis: "H3-B (Boundary & Granularity: Monorepo Private Workspace Manifest Boundary)",
        rationale: "In monorepos, root package.json is typically private: true with no published keywords/description because packages are published individually. Tests skipping root manifest checks for private workspace roots to address F05 boundary defects.",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: true
        }
      },
      {
        target: "comparison-seo-weighting",
        hypothesis: "H4-B (Metadata Alignment: Calibrate Comparison Section Weight on SEO to 0.5)",
        rationale: "Tests moderating comparison-section weight on the SEO surface from 1.0 to 0.5, reflecting that search engine discoverability depends less on explicit competitor comparison tables than on topical identity.",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: 0.5
        }
      },
      {
        target: "comparison-seo-weighting",
        hypothesis: "H4-B2 (Metadata Alignment: Calibrate Comparison Section Weight on SEO to 0.25)",
        rationale: "Tests stronger de-weighting of comparison-section on the SEO surface to 0.25.",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: 0.25
        }
      },
      {
        target: "comparison-seo-weighting",
        hypothesis: "H5-STRESS (Negative Stress Test: Artificially Over-weight Comparison on SEO to 5.0)",
        rationale: "Negative control demonstrating why distorting surface weights or keyword proxies regresses precision and is rejected by the regression gate.",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: 5.0
        }
      },
      {
        target: "seo-synthesis-balanced",
        hypothesis: "H6-SYNTH (Balanced Synthesis: Multi-Modal SEO Calibration)",
        rationale: "Synthesizes accepted structural boundary calibrations, ensuring high precision on standard repos without inflating false positives.",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: true
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
      priority: "P2_seo_semantic_boundary",
      hypothesis: cand.hypothesis,
      rationale: cand.rationale,
      expected_effect: cand.expected_effect,
      mutation: cand.mutation
    };
  }
}
