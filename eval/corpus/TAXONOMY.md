# Evaluation Corpus Taxonomy

This directory houses the RepoRise evaluation corpus.

The formal specification governing repository selection, taxonomy distribution, labeling tiers, and split boundaries ($N = 120$) is defined in:
- [`docs/superpowers/plans/2026-09-08-m8-corpus-taxonomy-specification.md`](file:///d:/Projects/mini%20projects/skills/reporise/docs/superpowers/plans/2026-09-08-m8-corpus-taxonomy-specification.md)

## Summary of Dimensions
- **Dimension A (Repository Archetype):** 12 mutually exclusive types (CLI, Library, Framework, SDK, DevTool, WebApp, Docs, Monorepo, DevOps, Data/ML, Plugin, Small Project).
  - *Primary-archetype rule:* Mapped to dominant engineering purpose. Small/Simple is fallback only. Documentation-Heavy is assigned only when documentation itself is the dominant engineering artifact.
- **Dimension B (README Characteristics):** 10 multi-label attributes (Minimal, Standard, Docs-Heavy, API Reference, Tutorial, Architecture, Feature Comparison, Example Heavy, Install/Config Heavy, Mixed).
  - *Coverage rule:* The $\ge 5$ threshold is a coverage constraint, not a balancing target.
- **Target Size:** $N = 120$ ($100$ minimum, $150$ stretch).
- **Splits:** 72 Train (60%), 24 Validation (20%), 24 Hidden Test (20%).
  - *Validation budget:* Real Validation is query-budgeted to prevent adaptive overfitting.
- **Truth Tiers:**
  - Tier 1: Deterministic RepoRise Audit (120/120)
  - Tier 2: AI Reviewer A (120/120) + Reviewer B (50/120) for inter-rater consistency
  - Tier 3: Double-blind Human Gold (25 repos: 10 calibration, 15 untouched evaluation)
- **Corpus Acceptance Gate:** Comprehensive 12-stage gate required before tag `corpus-m8-v1.0.0` and optimization.

## Milestone 8 Progression
- **M8.0** Taxonomy & Distribution Specification (✅ COMPLETE, `dc88a6b` + amendments)
- **M8.1** Corpus Acquisition & Integrity (🔄 IN PROGRESS)
- **M8.2** Labeling & Gold Calibration
- **M8.3** Corpus Freeze (`corpus-m8-v1.0.0`)
- **M8.4** Real-World Baseline & Diagnostics
- **M8.5** Generalization Analysis
- **M8.6** Larger-Corpus Optimization
- **M8.7** M8 Final Benchmark
- **M8.8** Freeze / Release Decision
