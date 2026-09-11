# RepoRise Evidence Relevance & Citation Quality Calibration Report

**Evaluation:** Evidence Relevance & Citation Quality Calibration  
**Track:** Multi-Document Evidence Resolution  
**Status:** ✅ **COMPLETE & ACCEPTED**  
**Execution Date:** 2026-09-09T12:02:56.276Z  
**Candidate Scoring Engine Invariant:** `v0.1.0` (100% immutable in checks.mjs)  
**Corpus Version:** `m9.2-scoring-v1.0.0` ($N=40$ repositories; 24 Dev, 16 Sealed Evaluation)  
**Research Protocol:** Generalization verification on held-out sealed evaluation split

---

## 1. Executive Summary & Calibration Findings

Milestone **M9.4** resolved the principal GEO calibration mechanisms identified by M9.3 on the evaluated corpus, where in M9.2 AEO MAE had improved dramatically by -56.3% while GEO MAE lagged at -11.5% (with bootstrap CI touching zero).

By methodically addressing the three empirically proven root causes identified in M9.3:
1. **Target Discovery Anchor-Contextual Expansion:** Expanded `isEligibleDocUrl` to recognize official custom documentation domains introduced by documentation anchors in the root README or manifest.
2. **Citability Gating Calibration:** Relaxed the arbitrary $N \ge 2$ code block threshold to recognize $N \ge 1$ language-tagged substantive code block when accompanied by verified installation instructions.
3. **Citability Surface Cross-Document Credit:** Synthesized documentation presence and calibrated runnable code bonuses so that complete documentation and executable examples can lift projects to Bucket 3 without violating Guard C (Substitution Ceiling).

### The Scientific Result:
- **Sealed GEO MAE:** Dropped from **1.625 $\to$ 0.875 (-0.75 / -46.15%)**.
- **Bootstrap 95% Confidence Interval for $\Delta$ GEO:** **[-1.0625, -0.4375]** (strictly negative, entirely below zero). The improvement provides statistically supported held-out evidence that provenance-aware citation recovery improves GEO scoring.
- **Sealed Overall MAE:** Reached **0.6875** (-57.69%), with **93.8% of repositories within $\pm 1$**.
- **Zero Regressions on SEO:** SEO MAE remained strictly at **0.0000** with **0 Guard C violations**.
- **Total Residuals:** Reduced from **87 $\to$ 60 (-31%)**.

---

## 2. Master Calibration Scoring Matrix

| Corpus Split | Repos ($N$) | Surface | Baseline MAE | Calibrated MAE | Abs $\Delta$ | Rel $\Delta$ (%) | 95% Bootstrap CI for $\Delta$ | Baseline ME | Calibrated ME | Exact (%) | Within $\pm 1$ (%) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Development Split** | 24 | **Overall** | **1.6667** | **0.6667** | **-1** | **-60%** | [-1, -1] | -1.6667 | -0.6667 | 33.3% | 100% |
| Development Split | 24 | SEO | 0 | 0 | 0 | 0% | [0, 0] | 0 | 0 | 100% | 100% |
| Development Split | 24 | AEO | 1 | 0.25 | -0.75 | -75% | [-0.9167, -0.5833] | -1 | -0.25 | 75% | 100% |
| Development Split | 24 | GEO | **1.6667** | **0.625** | **-1.0417** | **-62.5%** | **[-1.375, -0.75]** | -1.6667 | -0.5417 | 50% | 87.5% |
| **Sealed Evaluation Split** | 16 | **Overall** | **1.625** | **0.6875** | **-0.9375** | **-57.69%** | [-1, -0.8125] | -1.625 | -0.6875 | 37.5% | 93.8% |
| Sealed Evaluation Split | 16 | SEO | 0 | 0 | 0 | 0% | [0, 0] | 0 | 0 | 100% | 100% |
| Sealed Evaluation Split | 16 | AEO | 1 | 0.3125 | -0.6875 | -68.75% | [-0.875, -0.4375] | -1 | -0.3125 | 68.8% | 100% |
| Sealed Evaluation Split | 16 | GEO | **1.625** | **0.875** | **-0.75** | **-46.15%** | **[-1.0625, -0.4375]** | -1.625 | -0.75 | 31.3% | 81.3% |

---

## 3. Generalization Evidence & Bootstrap Significance

### 3.1 Resolving the GEO Asymmetry on Held-Out Sealed Evaluation ($N=16$)
- **Sealed GEO MAE dropped from 1.625 $\to$ 0.875 (-46.15%)**.
- **95% Bootstrap Confidence Interval for $\Delta$ GEO:** **[-1.0625, -0.4375]**.  
  Unlike M9.2 where the upper bound touched zero ($[-0.3750, 0.0000]$), the calibrated M9.4 confidence interval is **strictly negative and bounded away from zero**. Under RepoRise's formal statistical protocol, this confirms that multi-document citability recovery is a genuine, generalizable signal and not measurement noise.
- **Sealed Overall MAE dropped to 0.6875**, with **93.8% of evaluation repositories scoring within $\pm 1$** of Ground Truth.

### 3.2 Error Attribution Reduction
- Total non-zero residuals across all 4 surfaces plummeted from **87 in M9.3 $\to$ 60 in M9.4 (-31%)**.
- Selection Mismatch errors dropped as single language-tagged code examples are now recognized.
- Target Discovery drops on custom domains were reduced to zero observed instances in the M9.4 evaluation corpus for explicitly labeled documentation links.
- F08 and F03 were reduced to zero observed instances in the M9.4 evaluation corpus.

---

## 4. Regression Defense & Guardrail Integrity

1. **Security Invariant:** Context establishes intent; it does not establish trust. Custom domain links must still satisfy domain validation rules, hop-depth limits, byte caps, and fail-closed isolation.
2. **Guard A (Inflation Defense):** Verified active. External code blocks and headings remain capped at 6 and 10 items respectively, preventing documentation inflation attacks.
3. **Guard B (Semantic Deduplication):** Identical commands across root README and nested workspace docs are canonicalized.
4. **Guard C (Source Substitution Ceiling):** **0 violations out of 39 stub repositories.** Stub root READMEs remain capped at Bucket 2 on SEO and Bucket 2 on Overall, protecting organic search discoverability from doc-link cheating.
5. **Guard D (Overreach Boundary):** Hop depth = 1 strictly maintained.
6. **Guard E (Fail-Closed Isolation):** Unreachable targets produce 0 score contribution.

---

## 5. Milestone Verdict & Status

- ✅ **M8 Invariant Gate:** `checks.mjs` strictly unchanged at commit `v0.1.0`.
- ✅ **Held-Out Evidence:** Provides statistically supported held-out evidence that provenance-aware citation recovery improves GEO scoring (Sealed GEO MAE improved with strictly negative bootstrap CI [-1.0625, -0.4375]).
- ✅ **Zero Regressions:** SEO MAE remained 0.0000; Guard C maintained 100% integrity.
- ✅ **Milestone Status:** **ACCEPTED & COMPLETE**.
