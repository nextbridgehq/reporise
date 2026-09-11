/**
 * aeo-pilot-provider.mjs — Controlled bounded pilot provider for M8.6 P1 AEO Conversational & Narrative Prose.
 * Systematically tests competing hypotheses across 5 classes + structural gating:
 * - Class 1: Section Heading Variants (Install, FAQ, Requirements)
 * - Class 2: Narrative Prose Signals
 * - Class 3: Conversational Query Phrasing
 * - Class 4: Compositional Signals
 * - Class 5: Negative Controls
 * - Structural: AEO Evidence Gating (cap 35, cap 29)
 * - Multi-Modal: Balanced Lexical + Structural Synthesis
 */

export class AeoPilotStrategyProvider {
  constructor() {
    this.name = "aeo-pilot";
    this.metadata = {
      provider: "aeo-pilot-controlled",
      model: "deterministic-m8.6-hypotheses",
      endpoint: "in-process"
    };

    this.candidates = [
      {
        target: "install-heading",
        hypothesis: "H1-A (Section Heading Variants: Install & Setup Synonyms)",
        rationale: "In libraries and CLI tools, setup instructions frequently appear under 'Usage', 'How to use', 'Cookbook', or 'Using <tool>' rather than 'Installation'.",
        expected_effect: { metric: "training_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: {
            pattern: "\\b(install|installation|getting started|setup|quick ?start|usage|how to use|cookbook|using \\w+)\\b",
            flags: "i"
          }
        }
      },
      {
        target: "faq-heading",
        hypothesis: "H1-B (Section Heading Variants: FAQ & Questions Synonyms)",
        rationale: "Captures 'Questions' sections in framework and library documentation (e.g. vuejs/core) where developers look for troubleshooting answers.",
        expected_effect: { metric: "training_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: {
            pattern: "\\b(faq|frequently asked|common questions|q ?& ?a|questions)\\b",
            flags: "i"
          }
        }
      },
      {
        target: "requirements-heading",
        hypothesis: "H1-C (Section Heading Variants: Requirements & Compatibility)",
        rationale: "Recognizes 'Browser support' and 'Supported environments' in client libraries (e.g. axios) where prerequisites and compatibility are documented.",
        expected_effect: { metric: "training_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: {
            pattern: "\\b(requirements?|prerequisites?|compatibility|supported versions?|system requirements|browser support|supported environments?)\\b",
            flags: "i"
          }
        }
      },
      {
        target: "narrative-prose-recognition",
        hypothesis: "H2 (Narrative Prose Signals for Installation)",
        rationale: "Tests whether detecting inline package manager commands (npm i, pip install, brew install) and narrative phrasing ('to install', 'first install') in README body can substitute for missing headings.",
        expected_effect: { metric: "training_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: true
        }
      },
      {
        target: "conversational-query-recognition",
        hypothesis: "H3 (Conversational/Query Phrasing in Question Headings)",
        rationale: "Tests expanding question heading patterns to capture conversational task-based query openers ('where to start', etc.).",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: true
        }
      },
      {
        target: "compositional-usage-recognition",
        hypothesis: "H4 (Compositional Answerability: Heading + Code Block)",
        rationale: "Requires the presence of both an instructional heading (usage/example) and a substantive code block to establish operational answerability without ungrounded lexical hits.",
        expected_effect: { metric: "training_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: true
        }
      },
      {
        target: "navigation-heading-filter",
        hypothesis: "H5 (Negative Control: Navigation Heading Filter)",
        rationale: "Excludes superficial navigation and table of contents headers from answerability evaluation to prevent false-positive inflation.",
        expected_effect: { metric: "validation_mae", direction: "maintain" },
        mutation: {
          type: "replace",
          value: true
        }
      },
      {
        target: "aeo-evidence-gating",
        hypothesis: "H6 (AEO Evidence Gating: Cap at 35 when Install and Runnable fail)",
        rationale: "Caps AEO score at 35 (Bucket 2 boundary) when a repository provides neither setup instructions nor runnable code examples, eliminating false positives on stub repositories.",
        expected_effect: { metric: "validation_mae", direction: "decrease" },
        mutation: {
          type: "replace",
          value: 35
        }
      },
      {
        target: "aeo-synthesis-balanced",
        hypothesis: "H7 (Balanced Multi-Modal Synthesis: Lexical Variants + AEO Gating at 35)",
        rationale: "Synthesizes targeted high-precision lexical heading variants with structural AEO evidence gating at 35, addressing both false negatives in libraries and false positives on stubs.",
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
      priority: "P1_aeo_narrative_prose",
      hypothesis: cand.hypothesis,
      rationale: cand.rationale,
      expected_effect: cand.expected_effect,
      mutation: cand.mutation
    };
  }
}
