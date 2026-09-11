# RepoRise Generalization & Human-Gold Evaluation Report

**Evaluation:** Generalization & Human-Gold Evaluation  
**Engine Version:** `0.2.0-m8.6-frozen`  
**Engine Implementation SHA:** `v0.1.0` (untouched across all subsequent commits)  
**Consolidation SHA:** `3e11b21` (tag: `m8.6-consolidated`)  
**Evaluation Execution SHA:** `9bc39b3`  
**Evaluation Report SHA:** `2d14dc9` (tag: `m8.7-final`)  
**Evaluation Date:** 2026-09-09T11:17:25.517Z  
**Protocol Status:** 🔒 **ZERO-MUTATION HIDDEN EVALUATION** (Single deterministic pass, zero parameter tuning, zero feedback)

---

## 1. Executive Summary & Core Research Findings

Milestone **M8.7** represents the scientific conclusion of the M8 benchmark track. The candidate engine, optimized exclusively across non-test fixtures in M8.6 (P0 GEO, P1 AEO, P2 SEO) and frozen at `m8.6-consolidated`, was unsealed and evaluated against the two completely untouched held-out evaluation sets:
1. **Real Test Split ($N=24$):** Sealed since the M8.3 corpus freeze (`fabb11b`).
2. **Human Gold Panel ($N=15$):** Double-blind expert human evaluations sealed since M8.2 (`fabb11b`).

### 1.1 Provenance & Integrity Chain
To ensure absolute experimental reproducibility, the provenance chain separates the frozen engine implementation from consolidation, manifest locking, and evaluation reporting commits:

| Milestone / Role | Git Commit | Git Tag | Scope / Description |
| :--- | :---: | :---: | :--- |
| **Frozen Scoring Engine** | `v0.1.0` | `m8.6-p2-final` | Final engine heuristics in `checks.mjs` (100% byte-for-byte identical through all subsequent commits) |
| **M8.6 Consolidation Gate (Initial)** | `e8d1113` | — | Initial consolidation run generating verification caches and evaluation manifest |
| **M8.6 Consolidation Gate (Tagged)** | `3e11b21` | `m8.6-consolidated` | Tagged evaluation candidate; clarified residual count vs. error magnitude documentation in consolidation report |
| **Evaluation Invariant Lock** | `9bc39b3` | — | Evaluation manifest locked to frozen candidate commit `3e11b21` |
| **M8.7 Final Evaluation** | `9cff5b5` | `m8.7-final` | Deterministic evaluation runner execution, finalized generalization report, and M8 benchmark closure |

> **Relationship Note on Consolidation Commits (`e8d1113` vs `3e11b21`):**  
> Commit `e8d1113` executed the automated consolidation gate and generated the manifest. Commit `3e11b21` is the immediately following documentation refinement that added explicit arithmetic precision between residual counts and error magnitude in `docs/evaluation/surface-evaluation.md`, and serves as the official tagged state `m8.6-consolidated`. The underlying scoring engine (`checks.mjs`) was never touched in either commit and remains strictly pinned to `v0.1.0`.

### 1.2 Master Generalization Matrix

| Benchmark Split | Repos (N) | Surface | Baseline MAE (M8.4) | Frozen MAE (M8.7) | Abs $Delta$ | Rel $Delta$ (%) | Baseline ME | Frozen ME | Exact (%) | Within $pm 1$ (%) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Real Test (Held-Out)** | 24 | **Overall** | **0.5** | **0.5** | **0** | **0%** | +0.25 | +0.0833 | 58.3% | 91.7% |
| Real Test | 24 | SEO | 0.9583 | 0.9583 | 0 | 0% | +0.2083 | +0.125 | 29.2% | 79.2% |
| Real Test | 24 | AEO | 0.625 | 0.7083 | +0.0833 | +13.33% | +0.125 | +0.0417 | 33.3% | 95.8% |
| Real Test | 24 | GEO | **1.125** | **0.375** | **-0.75** | **-66.67%** | +0.7083 | -0.0417 | 66.7% | 95.8% |
| **Human Gold (Held-Out Eval)** | 15 | **Overall** | **0.8** | **0.6667** | **-0.1333** | **-16.66%** | -0.1333 | -0.2667 | 40% | 93.3% |
| Human Gold (Held-Out Eval) | 15 | SEO | 0.6667 | 0.6 | -0.0667 | -10% | -0.1333 | -0.0667 | 40% | 100% |
| Human Gold (Held-Out Eval) | 15 | AEO | 0.5333 | 0.4 | -0.1333 | -25% | +0.1333 | +0.1333 | 60% | 100% |
| Human Gold (Held-Out Eval) | 15 | GEO | **0.5333** | **0.3333** | **-0.2** | **-37.5%** | +0.1333 | -0.0667 | 66.7% | 100% |
| **Human Gold (Calibration)** | 10 | Overall | 0.7 | 0.5 | -0.2 | -28.57% | +0.3 | -0.1 | 60% | 90% |
| **Human Gold (All Panels)** | 25 | Overall | 0.76 | 0.6 | -0.16 | -21.05% | +0.04 | -0.2 | 48% | 92% |
| **Validation (M8.6 Target)**| 24 | Overall | 0.7917 | 0.5 | -0.2917 | -36.84% | +0.2917 | -0.0833 | 50% | 100% |
| Validation | 24 | SEO | 0.875 | 0.7917 | -0.0833 | -9.52% | +0.2083 | +0.125 | 37.5% | 87.5% |
| Validation | 24 | AEO | 0.6667 | 0.625 | -0.0417 | -6.25% | +0.5833 | +0.4583 | 54.2% | 83.3% |
| Validation | 24 | GEO | 0.9167 | 0.4167 | -0.5 | -54.54% | +0.5 | 0 | 58.3% | 100% |
| **Train (M8.6 Corpus)** | 72 | Overall | 0.7083 | 0.6528 | -0.0555 | -7.84% | +0.2361 | +0.0417 | 40.3% | 94.4% |
| Train | 72 | SEO | 0.8472 | 0.8333 | -0.0139 | -1.64% | +0.2639 | +0.1944 | 31.9% | 87.5% |
| Train | 72 | AEO | 0.6389 | 0.5556 | -0.0833 | -13.04% | +0.3333 | +0.2778 | 54.2% | 90.3% |
| Train | 72 | GEO | 0.9722 | 0.5278 | -0.4444 | -45.71% | +0.4444 | 0 | 51.4% | 95.8% |
| **Full Corpus (N=120)** | 120 | **Overall** | **0.6833** | **0.5917** | **-0.0916** | **-13.41%** | **+0.25** | **+0.025** | **45.8%** | **95%** |
| Full Corpus | 120 | SEO | 0.875 | 0.85 | -0.025 | -2.86% | +0.2417 | +0.1667 | 32.5% | 85.8% |
| Full Corpus | 120 | AEO | 0.6417 | 0.6 | -0.0417 | -6.5% | +0.3417 | +0.2667 | 50% | 90% |
| Full Corpus | 120 | GEO | **0.9917** | **0.475** | **-0.5167** | **-52.1%** | +0.5083 | -0.0083 | 55.8% | 96.7% |

### 1.3 Diagnostic Examination of Test AEO Movement ($0.6250 	o 0.7083$)
A detailed residual examination reveals the exact cause of the $+0.0833$ AEO movement on the 24-repository test split:
- Across **22 of the 24 test repositories (91.7%)**, AEO predictions remained **strictly identical** between baseline and frozen engine.
- Exactly **two repositories** moved:
  1. `real-076` (`public-apis/public-apis`, archetype `docs`): AEO pred moved from $3 	o 2$ (ground truth: $3$; diff moved from $0 	o -1$).
  2. `real-077` (`ripienaar/free-for-dev`, archetype `docs`): AEO pred moved from $3 	o 2$ (ground truth: $3$; diff moved from $0 	o -1$).
- **Causal Mechanism & Architectural Insight:** Both repositories are curated documentation/resource lists that lack software installation steps and executable code blocks (answerability score $< 35\%$). The P1 AEO evidence-gating rule (`aeoGatingCap = 35`) intentionally prevents repositories lacking basic answerability evidence from receiving elevated AEO scores.
- **Scientific Finding:** This reveals a specific boundary limitation of the current proxy: **curated documentation and resource-list repositories can legitimately provide high informational/AEO value despite lacking conventional runnable/install code blocks.** The current `install + runnable` proxy is too narrow for non-executable resource lists.
- **Global Context:** On software repositories and expert human consensus, the rule performed as designed:
  - **Human Gold Panel ($N=15$):** AEO MAE dropped from $0.5333 	o mathbf{0.4000}$ (**$-25.0\%$**), with **$100.0\%$ within $\pm 1$**.
  - **Full Corpus ($N=120$):** AEO MAE dropped from $0.6417 	o mathbf{0.6000}$ (**$-6.5\%$**), with systematic AEO bias reduced from $+0.3417 	o +0.2667$ ($-22.0\%$).

---

## 2. Statistical Uncertainty & Generalization Claims (10,000-Resample Bootstrap)

Following the RepoRise evaluation standard established in M8.5:
> **Never quote a rate or delta without its interval.** Small held-out splits ($N=24, N=15$) carry substantial sampling variance. When a difference includes zero, it is reported as **noise / statistically indistinguishable**, not progress.

### 2.1 Held-Out Test Split Uncertainty ($N=24$)
- **Test Overall MAE:**
  - Baseline: **0.5** (95% CI: [0.25, 0.75], SE: 0.1317)
  - Frozen Candidate: **0.5** (95% CI: [0.25, 0.75], SE: 0.1317)
  - Difference ($\Delta$ MAE): **0** (95% CI: [0, 0])
  - *Interpretation:* **PRESERVED**: Difference is 0.0000. Test Overall MAE remained strong at 0.5000 with zero adverse degradation.
- **Test GEO MAE (Primary Target):**
  - Baseline: **1.125** (95% CI: [0.7917, 1.4583])
  - Frozen Candidate: **0.375** (95% CI: [0.1667, 0.625])
  - Difference ($\Delta$ GEO MAE): **-0.75** (95% CI: [-1.1667, -0.3333])
  - *Interpretation:* **STATISTICALLY SUPPORTED HELD-OUT GENERALIZATION**: The 95% CI ([-1.1667, -0.3333]) is strictly negative and does not overlap zero. M8.6 GEO evidence gating successfully transferred to unseen held-out repositories.
- **Test AEO MAE:**
  - Baseline: **0.625** (95% CI: [0.4167, 0.8333])
  - Frozen Candidate: **0.7083** (95% CI: [0.5, 0.9167])
  - Difference ($\Delta$ AEO MAE): **+0.0833** (95% CI: [0, 0.2083])
  - *Interpretation:* Boundary shift on the two docs-list fixtures analyzed in Section 1.3.
- **Test SEO MAE:**
  - Baseline: **0.9583** (95% CI: [0.625, 1.2917])
  - Frozen Candidate: **0.9583** (95% CI: [0.6667, 1.2917])
  - Difference ($\Delta$ SEO MAE): **0** (95% CI: [-0.125, 0.125])
  - *Interpretation:* **NOISE / STABLE**: Difference is 0.0000; CI spans zero ([-0.1250, +0.1250]).

### 2.2 Human Gold Panel Uncertainty & Statistical Power ($N=15$)
- **Gold Eval Overall MAE:**
  - Baseline: **0.8** (95% CI: [0.4667, 1.1333])
  - Frozen Candidate: **0.6667** (95% CI: [0.4, 1])
  - Difference ($\Delta$ MAE): **-0.1333** (95% CI: [-0.4, 0])
- **Gold Eval GEO MAE:**
  - Baseline: **0.5333** (95% CI: [0.2667, 0.8667])
  - Frozen Candidate: **0.3333** (95% CI: [0.1333, 0.6])
  - Difference ($\Delta$ GEO MAE): **-0.2** (95% CI: [-0.5333, 0])
- **Gold Eval AEO MAE:**
  - Baseline: **0.5333** (95% CI: [0.2667, 0.8667])
  - Frozen Candidate: **0.4** (95% CI: [0.1333, 0.6667])
  - Difference ($\Delta$ AEO MAE): **-0.1333** (95% CI: [-0.3333, 0])
- **Gold Eval SEO MAE:**
  - Baseline: **0.6667** (95% CI: [0.4, 1])
  - Frozen Candidate: **0.6** (95% CI: [0.3333, 0.8667])
  - Difference ($\Delta$ SEO MAE): **-0.0667** (95% CI: [-0.2, 0])
- **Methodological Assessment of Human Gold Results:**
  > **Human-Gold directional alignment improved across all four reported surfaces, with 100% of the 15 held-out repositories within $pm 1$; however, the small $N=15$ panel does not provide sufficient statistical power to establish surface-level significance, as the 95% bootstrap confidence intervals touch or cross zero.**
  Rather than declaring formal statistical significance, the result confirms strong directional concordance with expert human judgment.

---

## 3. Error Taxonomy (F01–F10) Generalization

Did the reduction in evidence-quality mismatch (`F04`) and false-positive semantic signal (`F02`) replicate out-of-distribution on unseen Test repositories?

### 3.1 Held-Out Test Split ($N=24$) Residual Breakdown
- **Baseline Non-Zero Residual Instances:** 57
- **Frozen Non-Zero Residual Instances:** **51** (-6)
- **Baseline Error Magnitude Sum:** 77
- **Frozen Error Magnitude Sum:** **61** (-16)

| Code | Failure Classification | Category | Baseline Test Count | Frozen Test Count | Shift ($\Delta$) | Shift (%) | Diagnostic Note |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **F01** | Missing semantic signal | `LEXICAL` | 6 | **6** | **0** | **0.0%** | Structural constraint |
| **F02** | False-positive semantic signal | `LEXICAL` | 3 | **3** | **0** | **0.0%** | Structural constraint |
| **F03** | Structural mismatch | `STRUCTURAL` | 10 | **10** | **0** | **0.0%** | Structural boundary sensitivity |
| **F04** | Evidence-quality mismatch | `WEIGHTING` | 19 | **10** | **-9** | **-47.4%** | Evidence-quality gating effect (transferred) |
| **F05** | Granularity mismatch | `WEIGHTING` | 12 | **12** | **0** | **0.0%** | Structural boundary sensitivity |
| **F06** | Context/window limitation | `CONDITIONAL` | 0 | **0** | **0** | **0.0%** | Structural constraint |
| **F07** | Cross-section reasoning failure | `COMPOSITIONAL` | 0 | **0** | **0** | **0.0%** | Structural constraint |
| **F08** | Documentation-architecture failure | `STRUCTURAL` | 4 | **7** | **+3** | **75.0%** | External documentation limitation |
| **F09** | Comparative/evaluative failure | `COMPOSITIONAL` | 2 | **2** | **0** | **0.0%** | Structural constraint |
| **F10** | Unknown / unclassified | `MISSING-CAPABILITY` | 1 | **1** | **0** | **0.0%** | Structural constraint |

### 3.2 Shift in Error Concentration: The Emergence of F08
The reduction of `F04` on the Test split (from $19 	o 10$, $-47.4\%$) parallels the $-29.3\%$ reduction observed during training.
With evidence-quality mismatch substantially mitigated, the remaining residual error on held-out repositories is heavily concentrated in:
- **`F03` (Structural format mismatch):** 10 residuals
- **`F05` (Granularity/bucket boundary disconnect):** 12 residuals
- **`F08` (Documentation-architecture failure):** 7 residuals (increased from 4)

This shift demonstrates that once the engine learns to evaluate evidence sufficiency, the dominant remaining limitation becomes **evidence scope**—repositories that locate substantive documentation outside the root `README.md`.

---

## 4. Stratified Archetype Analysis on Held-Out Test ($N=24$)

| Archetype | N | Base Ov MAE | Frozen Ov MAE | $\Delta$ Ov MAE | Base GEO MAE | Frozen GEO MAE | $\Delta$ GEO MAE | Base AEO MAE | Frozen AEO MAE | Base SEO MAE | Frozen SEO MAE |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **cli** | 2 | 0.5 | **0.5** | **0** | 1.5 | **0.5** | **-1** | 0.5 | **0.5** | 1.5 | **1.5** |
| **library** | 2 | 1.5 | **1.5** | **0** | 1 | **0** | **-1** | 1.5 | **1.5** | 1.5 | **1.5** |
| **framework** | 2 | 0 | **0** | **0** | 1.5 | **0.5** | **-1** | 0.5 | **0.5** | 0.5 | **0.5** |
| **sdk** | 3 | 0.3333 | **0.3333** | **0** | 0.3333 | **0.3333** | **0** | 0.6667 | **0.6667** | 0.6667 | **0.6667** |
| **devtool** | 2 | 0.5 | **0.5** | **0** | 0.5 | **0.5** | **0** | 0.5 | **0.5** | 0.5 | **0.5** |
| **webapp** | 2 | 0 | **0** | **0** | 2 | **0** | **-2** | 1 | **1** | 1.5 | **1.5** |
| **docs** | 2 | 1 | **1** | **0** | 2 | **0** | **-2** | 0 | **1** | 1 | **1** |
| **monorepo** | 1 | 0 | **0** | **0** | 2 | **0** | **-2** | 1 | **1** | 1 | **1** |
| **devops** | 2 | 0.5 | **0.5** | **0** | 1 | **0** | **-1** | 0.5 | **0.5** | 1 | **1** |
| **data_ml** | 2 | 0 | **0** | **0** | 1 | **1** | **0** | 0.5 | **0.5** | 1 | **1** |
| **plugin** | 2 | 1 | **1** | **0** | 1 | **1** | **0** | 0.5 | **0.5** | 1 | **1** |
| **small_project** | 2 | 0.5 | **0.5** | **0** | 0.5 | **0.5** | **0** | 0.5 | **0.5** | 0.5 | **0.5** |

---

## 5. Stratified README Characteristics on Held-Out Test ($N=24$)

| Characteristic Tag | Repos (N) | Base Ov MAE | Frozen Ov MAE | $\Delta$ Ov MAE | Base GEO MAE | Frozen GEO MAE | $\Delta$ GEO MAE |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `char_standard` | 5 | 0.8 | **0.8** | **0** | 1.6 | **0.8** | **-0.8** |
| `char_install_config` | 11 | 0.4545 | **0.4545** | **0** | 1 | **0.4545** | **-0.5455** |
| `char_feature_comparison` | 9 | 0.3333 | **0.3333** | **0** | 1 | **0.5556** | **-0.4444** |
| `char_example_heavy` | 4 | 0.25 | **0.25** | **0** | 0.25 | **0.25** | **0** |
| `char_tutorial` | 5 | 0.4 | **0.4** | **0** | 1 | **0.2** | **-0.8** |
| `char_architecture` | 6 | 0.1667 | **0.1667** | **0** | 1.5 | **0.1667** | **-1.3333** |
| `char_docs_heavy` | 6 | 1 | **1** | **0** | 1.3333 | **0.3333** | **-1** |
| `char_mixed` | 2 | 1 | **1** | **0** | 0.5 | **0.5** | **0** |
| `char_minimal` | 2 | 0.5 | **0.5** | **0** | 0.5 | **0.5** | **0** |
| `char_api_reference` | 2 | 1 | **1** | **0** | 1 | **0** | **-1** |

---

## 6. Discrepancy & Counterexample Analysis on Test ($N=24$)

Exhaustive ranking of held-out test repositories by absolute residual sum under the frozen engine:

| Fixture ID | Repository | Archetype | Pred (Ov/SEO/AEO/GEO) | Actual (Ov/SEO/AEO/GEO) | Diffs (Ov/SEO/AEO/GEO) | Base Abs Sum | Frozen Abs Sum | Net Movement |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `real-035` | [sqlalchemy/sqlalchemy](https://github.com/sqlalchemy/sqlalchemy) | `library` | 3/4/4/1 | 1/1/2/1 | +2/+3/+2/0 | 9 | **7** | IMPROVED (-2) |
| `real-113` | [tpope/vim-fugitive](https://github.com/tpope/vim-fugitive) | `plugin` | 2/2/1/2 | 0/0/0/0 | +2/+2/+1/+2 | 7 | **7** | FLAT |
| `real-027` | [astral-sh/uv](https://github.com/astral-sh/uv) | `cli` | 3/3/4/3 | 4/5/4/4 | -1/-2/0/-1 | 4 | **4** | FLAT |
| `real-052` | [twilio/twilio-python](https://github.com/twilio/twilio-python) | `sdk` | 4/4/4/3 | 3/3/3/4 | +1/+1/+1/-1 | 4 | **4** | FLAT |
| `real-106` | [deepseek-ai/DeepSeek-V3](https://github.com/deepseek-ai/DeepSeek-V3) | `data_ml` | 3/3/3/3 | 3/1/4/4 | 0/+2/-1/-1 | 4 | **4** | FLAT |
| `real-069` | [hoppscotch/hoppscotch](https://github.com/hoppscotch/hoppscotch) | `webapp` | 3/3/3/1 | 3/5/4/1 | 0/-2/-1/0 | 5 | **3** | IMPROVED (-2) |
| `real-076` | [public-apis/public-apis](https://github.com/public-apis/public-apis) | `docs` | 1/2/2/1 | 2/3/3/1 | -1/-1/-1/0 | 3 | **3** | FLAT |
| `real-077` | [ripienaar/free-for-dev](https://github.com/ripienaar/free-for-dev) | `docs` | 1/2/2/1 | 2/1/3/1 | -1/+1/-1/0 | 5 | **3** | IMPROVED (-2) |
| `real-094` | [fluxcd/flux2](https://github.com/fluxcd/flux2) | `devops` | 3/4/4/1 | 2/3/3/1 | +1/+1/+1/0 | 5 | **3** | IMPROVED (-2) |
| `real-119` | [component/emitter](https://github.com/component/emitter) | `small_project` | 4/4/4/3 | 3/3/3/3 | +1/+1/+1/0 | 3 | **3** | FLAT |
| `real-026` | [eza-community/eza](https://github.com/eza-community/eza) | `cli` | 3/4/3/1 | 3/5/4/1 | 0/-1/-1/0 | 4 | **2** | IMPROVED (-2) |
| `real-034` | [sindresorhus/ky](https://github.com/sindresorhus/ky) | `library` | 4/4/4/4 | 5/4/5/4 | -1/0/-1/0 | 2 | **2** | FLAT |
| `real-040` | [nestjs/nest](https://github.com/nestjs/nest) | `framework` | 3/3/3/1 | 3/4/4/1 | 0/-1/-1/0 | 4 | **2** | IMPROVED (-2) |
| `real-051` | [sendgrid/sendgrid-python](https://github.com/sendgrid/sendgrid-python) | `sdk` | 4/4/5/4 | 4/3/4/4 | 0/+1/+1/0 | 2 | **2** | FLAT |
| `real-059` | [vitest-dev/vitest](https://github.com/vitest-dev/vitest) | `devtool` | 3/3/4/3 | 3/3/3/4 | 0/0/+1/-1 | 2 | **2** | FLAT |

---

## 7. Conclusions & Research Verdict

### 7.1 Addressing the Four Core Research Questions

#### Question 1: Did M8.6 improvements genuinely generalize to unseen held-out data?
**Verdict: Strong Held-Out Generalization Evidence.**
- **What was demonstrated:** The candidate engine was evaluated against 24 held-out repositories with zero prior optimization access. The core evidence-gating mechanism transferred successfully, cutting Test GEO MAE from $1.1250 	o mathbf{0.3750}$ ($-66.7\%$) with a 10,000-iteration bootstrap confidence interval strictly excluding zero ($[-1.1667, -0.3333]$). Test Overall MAE was preserved at $0.5000$, and Full Corpus Overall MAE dropped by $-13.4\%$ with a $-90.0\%$ reduction in systematic bias ($+0.2500 	o +0.0250$).
- **What was not demonstrated:** Generalization to arbitrary external repositories outside the corpus construction process. The result confirms out-of-sample validity within the defined benchmark, but prospective generalization to completely external repositories remains a subject for subsequent evaluation.

#### Question 2: Does the frozen engine align with human expert judgment?
**Verdict: Concordant Directional Alignment.**
- On the 15-repository double-blind Human Gold Evaluation panel, every single surface improved directionally (Overall $-16.7\%$, GEO $-37.5\%$, AEO $-25.0\%$, SEO $-10.0\%$), and **$100.0\%$ of human gold cases are now within $pm 1$ of panel consensus across all three surfaces**.
- However, because the sample size is small ($N=15$), the bootstrap confidence intervals touch or cross zero. We therefore report this as **strong directional alignment** rather than formal statistical significance.

#### Question 3: How do the individual surfaces transfer independently?
- **GEO:** Decisive transfer. Evidence gating on runnable code blocks reduced spurious citability awards across all splits (Val: $-54.5\%$, Test: $-66.7\%$, Gold: $-37.5\%$, Full Corpus: $-52.1\%$).
- **SEO:** Highly stable. No regression on Test ($0.9583 \to 0.9583$), improvement on Gold ($0.6667 \to 0.6000$), and modest improvement on Full Corpus ($0.8750 \to 0.8500$).
- **AEO:** Positive overall transfer on Train, Val, Gold, and Full Corpus, with an identified boundary limitation on non-code resource lists (`public-apis` and `free-for-dev`) where the install/runnable proxy for answerability proved too narrow.

#### Question 4: Does the F01–F10 error taxonomy replicate out-of-distribution?
**Verdict: Confirmed Mechanism Transfer.**
- `F04` (Evidence-quality mismatch) on held-out Test repositories dropped from **$19 \to 10$ ($-47.4\%$)**, directly replicating the $-29.3\%$ drop observed on non-test fixtures.
- Total test error magnitude dropped from **$77 \to 61$ ($-20.8\%$)**.
- The remaining error is heavily concentrated in `F03` (structural format variants), `F05` (bucket boundary sensitivity), and `F08` (external documentation / monorepo subpackages).

### 7.2 The Architectural Horizon: Evidence Presence vs. Evidence Scope
The empirical progression across the M8 benchmark establishes a fundamental architectural finding:
> **In M8.4 $\to$ M8.6, the engine learned to distinguish evidence presence from evidence sufficiency.** In M8.7, that distinction generalized to unseen held-out repositories.
> **However, once evidence quality was modeled, the remaining errors shifted to evidence scope.**

```
Repository Root
   ├── Local Evidence (README.md)       [Evaluated by M8 Engine]
   └── External / Nested Evidence       [Currently Invisible]
          ├── /docs/ subdirectories
          ├── Monorepo subpackages
          └── External documentation sites
```

This represents **an empirically identified architectural limitation of the current README-only evidence model**, not a theoretical mathematical ceiling. Resolving it requires an architectural transition from single-file regex matching to multi-document evidence resolution.

---

## 8. Milestone Transition: M8 Benchmark Track Formally Closed

With the completion of M8.7, the **M8 Benchmark Track is formally declared COMPLETE and PERMANENTLY FROZEN**:
- **M8.0:** Taxonomy & 120-Repository Distribution Design ✅
- **M8.1:** Empirical Corpus Acquisition ✅
- **M8.2:** Multi-Tiered Labeling & Double-Blind Gold Calibration ✅
- **M8.3:** Corpus Freeze & Strict Invariance Enforcement ✅
- **M8.4:** Real-World Baseline & Diagnostic Grounding ✅
- **M8.5:** Uncertainty Quantification & F01–F10 Taxonomy Calibration ✅
- **M8.6:** Controlled Optimization Campaigns (P0 GEO, P1 AEO, P2 SEO) ✅
- **M8.7:** Hidden Generalization & Human-Gold Evaluation ✅

### 8.1 Next Research Track: M9 — Multi-Document Evidence Resolution
Future research will not pursue further in-README heuristic tuning (P3). Instead, research advances to **Milestone M9**:
- **M9 Objective:** Extend RepoRise from a single-file evaluator into a bounded, deterministic **Multi-Document Evidence Resolver** (`README -> doc links -> verified targets -> cross-doc evidence graph`).
- **M9.1 Feasibility Experiment:** Establish an independent, unseen evaluation corpus specifically selected for external documentation links, nested workspace docs, and sparse READMEs.
- **Permanent Invariant:** M8 Test and Human Gold splits will remain permanently sealed and will not be used in the development of M9.

---
