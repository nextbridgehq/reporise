# RepoRise Labeling & Gold Calibration Report

**Evaluation:** Labeling & Gold Calibration  
**Verdict:** ✅ APPROVED  
**Release Tag Target:** `m8.2-labeling-final`  
**Completion Date:** 2026-09-08  
**Previous Baseline Tag:** `m8.1-acquisition-final` (`bcf95d3`)  

---

## 1. Executive Summary

Milestone 8.2 established a multi-tier measurement and reference system across the 120-repository M8 corpus without leaking RepoRise deterministic heuristic scores to independent evaluators.

All 12 quality acceptance gates (M8.2-A through M8.2-L) passed with zero exceptions, establishing a scientifically auditable foundation for M8.3 Corpus Freeze (`corpus-m8-v1.0.0`) and M8.4 Real-World Baseline recording.

---

## 2. Multi-Tier Measurement Architecture & Inventory Counts

| Evaluation Layer | Evaluator ID / Protocol | Scope | Storage Location | Double-Blind Isolation | Status |
| :--- | :--- | :---: | :--- | :---: | :---: |
| **Tier 1 (Deterministic)** | `reporise_deterministic_v0.2.0` | 120 / 120 | `eval/labels/tier1-deterministic/` | ✅ Complete | Complete |
| **Tier 2A (Reviewer A)** | `reviewer_a` (`m8-label-rubric-v1.0.0`) | 120 / 120 | `eval/labels/reviewer-a/` | ✅ Complete | Complete |
| **Tier 2B (Reviewer B)** | `reviewer_b` (Predetermined subset) | 50 / 50 | `eval/labels/reviewer-b/` | ✅ Complete | Complete |
| **Tier 3 (Human Gold)** | `human_gold_panel` (`m8-gold-v1.0.0`) | 25 / 25 | `eval/labels/human-gold/` | ✅ Complete | Complete |
| **Consolidated Dataset** | `ai_consensus` & calibrated | 120 / 120 | `eval/labels/real/` | ✅ Complete | Complete |

---

## 3. Inter-Rater Agreement (Reviewer A vs Reviewer B)

Computed across the predetermined 50-repository double-review subset (`eval/corpus/reviewer-b-manifest.json`):

| Dimension | Exact Agreement | Within $\pm 1$ Band | Mean Absolute Error (MAE) | Acceptance Gate | Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Overall** | **98.0%** (49/50) | **100.0%** (50/50) | **0.020** | $\text{MAE} \le 0.65$, $\pm 1 \ge 85\%$ | ✅ PASS |
| **SEO** | 100.0% (50/50) | 100.0% (50/50) | 0.000 | — | ✅ PASS |
| **AEO** | 100.0% (50/50) | 100.0% (50/50) | 0.000 | — | ✅ PASS |
| **GEO** | 100.0% (50/50) | 100.0% (50/50) | 0.000 | — | ✅ PASS |

Major Disagreements ($|\text{diff}| > 1$): **0 / 50**.

---

## 4. Double-Blind Human Gold & AI-Review Calibration Analysis

The Human Gold panel evaluated 25 repositories selected strictly on metadata quotas before labeling commenced:
- **Calibration Subset (10 Repositories):** Selected exclusively from Train and Validation splits.
- **Untouched Evaluation Subset (15 Repositories):** Held completely untouched during calibration derivation to serve as an uncontaminated test benchmark.

### 4.1 Empirical Systematic Offset (Human Gold − AI Consensus on $N=10$)
- $\Delta \text{Overall} = 0.00$
- $\Delta \text{SEO} = 0.00$
- $\Delta \text{AEO} = -0.30$
- $\Delta \text{GEO} = 0.00$

### 4.2 Interpretation Constraint
> **Methodological Note:** The 10-repository calibration subset identified a $-0.30$ AEO systematic difference under the specified calibration protocol, while SEO, GEO, and Overall showed zero measured offset. This is an empirical characterization of rater divergence—not evidence that Reviewer A/B is "corrected" or that the human panel establishes universal ground truth.

All label records retain `raw_score` permanently immutable alongside `calibrated_score` and `calibration_version: "m8-cal-v1.0.0"`.

---

## 5. Twelve Acceptance Gates Scorecard

- [x] **[M8.2-A] Rubric Frozen:** `m8-label-rubric-v1.0.0` committed and immutable.
- [x] **[M8.2-B] Tier 1 Audit Complete:** 120/120 repositories scored deterministically offline.
- [x] **[M8.2-C] Reviewer A Complete:** 120/120 repositories reviewed with rubric rationale.
- [x] **[M8.2-D] Reviewer B Complete:** 50/50 predetermined subset reviewed independently.
- [x] **[M8.2-E] Agreement Thresholds Satisfied:** Overall $\text{MAE} = 0.020 \le 0.65$, $\pm 1 = 100.0\% \ge 85\%$.
- [x] **[M8.2-F] Gold Manifest Frozen:** 25-repository manifest committed in `eval/corpus/human-gold-manifest.json`.
- [x] **[M8.2-G] Human Calibration Complete:** 10/10 calibration fixtures scored double-blind.
- [x] **[M8.2-H] Human Evaluation Complete:** 15/15 untouched evaluation fixtures scored double-blind.
- [x] **[M8.2-I] Calibration/Evaluation Separation Verified:** 10 cal fixtures (Train/Val only, 0 test) strictly disjoint from 15 untouched eval fixtures.
- [x] **[M8.2-J] Raw Labels Immutable:** All 120 label records maintain `raw_score` alongside `calibrated_score`.
- [x] **[M8.2-K] Provenance Recorded:** Every label file records `evaluator_id`, `rubric_version`, `label_source`, and timestamp.
- [x] **[M8.2-L] Score Independence Confirmed:** Zero leakage of RepoRise deterministic scores into AI or human evaluation logs.

---

## 6. Dataset Integrity & Manifest Checksums

| File | SHA-256 Digest |
| :--- | :--- |
| `eval/corpus/inventory.json` | `16d3db81ad6548dfccb1b61016d79c79cd8399c67288f66c9ac763a8083d31a1` |
| `eval/corpus/reviewer-b-manifest.json` | `eb8da057bfa99451c82a196f4ed688f17677bb1542b5e5fbc1b52cdb6e8c2c1a` |
| `eval/corpus/human-gold-manifest.json` | `7b636b4ffec41d8ff85212b32204ea0f6006a724374bfee257e652e423749407` |
| `eval/corpus/schema/m8-label.schema.json` | `c12da0f7df8a687837b23a0b09abe3a0303ce42f3e61a5c6e8951fa1f376d9c9` |
| `eval/research/RUBRIC.md` | `01de427170d15e28b9b852df05d0503719fbadfc39f3afd28e2c63d6a5c5bffa` |
| `eval/labels/labeling-completion-manifest.json` | Generated |

**Test Suite:** 49 passed, 0 failed (`npm test`).
