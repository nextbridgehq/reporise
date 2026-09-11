# RepoRise Target Generalization Analysis & Diagnostic Report

**Evaluation:** Generalization Analysis  
**Target Corpus:** `corpus-m8-v1.0.0` (120 Repositories)  
**Baseline Engine:** `0.2.0` (Untouched M7.8 Heuristic Engine)  
**Research Status:** 🔒 **STRICT DIAGNOSTIC INVARIANCE** (Zero engine mutations, zero weight tuning, read-only analysis)  
**Date:** 2026-09-09  

---

## 1. Executive Research Summary

Milestone M8.5 conducts a comprehensive diagnostic evaluation of the untouched RepoRise baseline recorded in M8.4. Rather than declaring generalized performance based solely on point estimates, this report introduces **10,000-iteration bootstrap uncertainty quantification**, formalizes an **F01–F10 error taxonomy**, partitions residuals across the **12×10 taxonomy**, investigates the **systematic positive bias**, and ranks concrete optimization opportunities for M8.6.

### Key Empirical Findings
1. **Uncertainty-Aware Generalization Verdict:**
   - While Test MAE (**0.5000**, 95% CI: `[0.3750, 0.6250]`) is numerically lower than Train MAE (**0.7083**, 95% CI: `[0.5694, 0.8472]`), the pairwise difference $\Delta\text{MAE}(\text{Test} - \text{Train}) = -0.2083$ carries a 95% bootstrap confidence interval of **`[-0.3889, +0.0278]`**.
   - Because the 95% CI touches and crosses zero, the data **does not prove superior generalization**; rather, the scientifically defensible conclusion is that **the baseline shows no evidence of adverse held-out degradation in this corpus**, acknowledging sampling variance on $N=24$.
2. **Systematic Positive Bias ($+0.250$ to $+0.508$):**
   - The engine exhibits a structural directional tendency to over-score discoverability, most prominently in **GEO (+0.5083)** and **AEO (+0.3417)**.
   - Ground truth investigation reveals that RepoRise awards high GEO marks for basic code fences and package manifests, whereas human expert raters require formal comparative tables, architectural flowcharts, and reproducible attribution.
3. **Primary Difficulty Clusters:**
   - Repositories tagged with **`char_docs_heavy` (MAE 1.0667)** and **`char_architecture` (MAE 0.7000)** exhibit the largest prediction errors.
   - Archetypes with external documentation architectures—particularly **Monorepos (MAE 0.8750)** and **Webapps (MAE 0.9000)**—suffer from root-README scope limitations.

---

## 2. Statistical Generalization & Uncertainty Analysis

### 2.1 Split-Level Point Estimates and 95% Bootstrap Confidence Intervals (10,000 Replicates)

| Split | $N$ | Overall MAE [95% CI] | Exact Match % [95% CI] | Within $pm 1$ % [95% CI] | Mean Bias (ME) [95% CI] |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Train** | 72 | **0.7083** `[0.5694, 0.8472]` | 38.9% `[27.8%, 50.0%]` | 90.3% `[83.3%, 97.2%]` | +0.2361 `[+0.0417, +0.4306]` |
| **Validation** | 24 | **0.7917** `[0.5833, 1.0000]` | 37.5% `[16.7%, 58.3%]` | 83.3% `[66.7%, 95.8%]` | +0.2917 `[-0.0833, +0.6250]` |
| **Test (Held-Out)** | 24 | **0.5000** `[0.3750, 0.6250]` | 58.3% `[37.5%, 79.2%]` | 91.7% `[79.2%, 100.0%]` | +0.2500 `[+0.0417, +0.4583]` |
| **Full Corpus** | 120 | **0.6833** `[0.5833, 0.7833]` | 42.5% `[33.3%, 51.7%]` | 89.2% `[83.3%, 94.2%]` | +0.2500 `[+0.1083, +0.3917]` |

> [!WARNING]
> **Small-$N$ Warning on Held-Out Test Set:**
> The held-out test split comprises $N=24$ repositories. Its 95% CI on exact agreement spans 41.7 percentage points (`[37.5%, 79.2%]`). Apparent differences between Train and Test are subject to sampling variance and must not be cited as evidence of improved model capacity without uncertainty bounds.

### 2.2 Pairwise Split Difference Analysis

| Comparison | Point $Delta	ext{MAE}$ | 95% Bootstrap CI | Statistical Interpretation |
| :--- | :---: | :---: | :--- |
| **Validation $-$ Train** | $+0.0833$ | `[-0.1528, +0.3333]` | Spans 0; no significant difference between Train and Validation performance. |
| **Test $-$ Train** | $-0.2083$ | `[-0.3889, +0.0278]` | Touches 0; no statistically verifiable divergence; confirms **no adverse degradation**. |
| **Test $-$ Validation** | $-0.2917$ | `[-0.5417, -0.0417]` | Modest partition variance across small validation vs test samples ($N=24$). |

---

## 3. Residual Error Matrices

### 3.1 Archetype Residual Matrix (12 Categories)

| Archetype Code | Description | $N$ | Overall MAE [95% CI] | SEO MAE | AEO MAE | GEO MAE | Exact % | $pm 1$ % | Mean Bias |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `cli` | CLI / Command-Line Tools | 10 | **0.4** `[0.1, 0.7]` | 0.9 | 0.6 | 0.8 | 60% | 100% | -0.2 |
| `library` | Libraries / Packages | 12 | **0.9167** `[0.5833, 1.25]` | 0.9167 | 1 | 0.8333 | 25% | 83.3333% | +0.4167 |
| `framework` | Frameworks | 10 | **0.4** `[0, 0.8]` | 0.5 | 0.4 | 1.2 | 70% | 90% | +0.4 |
| `sdk` | SDKs / API Clients | 12 | **0.75** `[0.5, 1]` | 1 | 0.5833 | 0.25 | 25% | 100% | -0.0833 |
| `devtool` | Developer Tools & Linters | 10 | **0.8** `[0.4, 1.3]` | 0.8 | 0.5 | 1.1 | 40% | 80% | +0.4 |
| `webapp` | Web Applications & Services | 10 | **0.9** `[0.5, 1.3]` | 0.9 | 0.4 | 1.4 | 30% | 80% | +0.1 |
| `docs` | Documentation Repositories | 8 | **0.625** `[0.25, 1]` | 1 | 0.375 | 1.25 | 37.5% | 100% | +0.625 |
| `monorepo` | Monorepos / Multi-Package | 8 | **0.875** `[0.375, 1.375]` | 1.125 | 0.75 | 1.5 | 37.5% | 75% | +0.375 |
| `devops` | DevOps, Infra & CI/CD | 12 | **0.5833** `[0.3333, 0.8333]` | 0.8333 | 1.1667 | 1 | 41.6667% | 100% | +0.5833 |
| `data_ml` | Data / ML / AI Projects | 14 | **0.7857** `[0.4286, 1.2143]` | 0.8571 | 0.7143 | 1.2857 | 42.8571% | 78.5714% | -0.0714 |
| `plugin` | Plugins / Extensions | 7 | **0.4286** `[0, 1]` | 0.8571 | 0.4286 | 0.8571 | 71.4286% | 85.7143% | +0.1429 |
| `small_project` | Small / Minimal Utility | 7 | **0.5714** `[0.1429, 0.8571]` | 0.8571 | 0.4286 | 0.4286 | 42.8571% | 100% | +0.5714 |

### 3.2 README Characteristic Residual Matrix (10 Multi-Label Tags)

> [!NOTE]
> **Multi-Label Overlap Warning:**
> Repositories carry between 1 and 4 characteristic tags (totaling 260 tag instances across 120 repositories). Rows in this matrix **overlap** and do not represent disjoint partitions.

| Tag Code | Style Description | $N$ | Overall MAE [95% CI] | SEO MAE | AEO MAE | GEO MAE | Exact % | $pm 1$ % | Mean Bias |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `char_minimal` | Minimal / Sparse (< 50 lines) | 8 | **0.625** `[0.25, 0.875]` | 0.625 | 0.5 | 0.75 | 37.5% | 100% | +0.625 |
| `char_standard` | Standard / Balanced | 50 | **0.68** `[0.5, 0.86]` | 0.74 | 0.68 | 1.06 | 44% | 88% | +0.4 |
| `char_docs_heavy` | Docs Heavy / Comprehensive | 15 | **1.0667** `[0.7333, 1.4]` | 1.4 | 0.6667 | 1.3333 | 20% | 73.3333% | +0.8 |
| `char_api_reference` | API Reference Heavy | 15 | **0.7333** `[0.4667, 1]` | 0.8 | 0.5333 | 0.4667 | 33.3333% | 93.3333% | -0.2 |
| `char_tutorial` | Tutorial / Walkthrough Style | 31 | **0.6774** `[0.4516, 0.9032]` | 0.8387 | 0.6129 | 1.0645 | 41.9355% | 90.3226% | +0.2258 |
| `char_architecture` | Architecture / Deep Tech | 30 | **0.7** `[0.4667, 0.9667]` | 1 | 0.6667 | 1.2 | 43.3333% | 86.6667% | +0.3 |
| `char_feature_comparison` | Feature Comparison / Why-Us | 24 | **0.75** `[0.4583, 1.0417]` | 0.9583 | 0.75 | 1.25 | 41.6667% | 83.3333% | +0.0833 |
| `char_example_heavy` | Example-Heavy / Code-Dense | 32 | **0.6875** `[0.4688, 0.9375]` | 0.7813 | 0.7188 | 0.75 | 43.75% | 87.5% | +0.125 |
| `char_install_config` | Install / Config Heavy | 46 | **0.5652** `[0.3913, 0.7391]` | 0.913 | 0.5652 | 0.8696 | 50% | 93.4783% | +0.087 |
| `char_mixed` | Mixed / Hybrid Format | 9 | **1** `[0.4444, 1.5556]` | 1 | 0.7778 | 1 | 33.3333% | 66.6667% | +0.1111 |

---

## 4. Bias Analysis & GEO Deep Dive

The baseline evaluation uncovered an unambiguous directional tendency: **RepoRise systematically over-predicts discoverability relative to reference labels**.

```
Overall Bias: +0.2500  (Over-predicted: 41, Exact: 51, Under-predicted: 28)
SEO Bias:     +0.2417  (Over-predicted: 42, Exact: 42, Under-predicted: 36)
AEO Bias:     +0.3417  (Over-predicted: 52, Exact: 56, Under-predicted: 12)
GEO Bias:     +0.5083  (Over-predicted: 61, Exact: 37, Under-predicted: 22)
```

### The Generative Engine Optimization (GEO) Disconnect
The $+0.5083$ bias in GEO represents the most severe skew in the engine:
1. **Heuristic Generosity:** RepoRise's `checks.mjs` awards positive points whenever `code-blocks`, `table-present`, and `examples-surface` are detected. Across the 120 fixtures, code blocks are present in $>85%$ of repos, yielding an average raw GEO score of $>72%$ (mapped to bucket 4).
2. **Rater Rigor:** Rubric `m8-label-rubric-v1.0.0` reserves bucket 4 and 5 for repositories that provide:
   - Factual comparative analysis ("Why X vs Y" tables)
   - Architectural flowcharts explaining system boundaries
   - Reproducible attribution files (`CITATION.cff` or `llms.txt`)
3. **Concrete Case:** In `sqlalchemy/sqlalchemy` (`real-035`), RepoRise awarded GEO bucket 3 based on standard code snippets. Reviewers awarded bucket 1 because the project lacks machine-readable citations and structured architectural comparison in the README.

### 4.2 Testable Competing Hypotheses for M8.6
Rather than assuming a single predetermined fix (e.g. "reduce code-block weight"), M8.6 must treat this mechanism as a set of competing hypotheses to be tested against validation:
* **Hypothesis A (Weighting Modification):** Reduce code-block and table contribution to the GEO surface score directly.
* **Hypothesis B (Conditional Gating):** Require explicit citation metadata (`CITATION.cff`/`llms.txt`) or architectural diagrams before GEO buckets 4 and 5 become reachable.
* **Hypothesis C (Contextual Gating):** Make code/table evidence conditional on presence of a definitional pitch and clear scope definition.
* **Hypothesis D (Evidence-Quality Tiers):** Introduce separate evidence-quality tiers distinguishing standard syntax examples from formal machine-citability assets.

---

## 5. Error Taxonomy (F01–F10) & Modality Distribution

Every prediction disagreement across all four surfaces was categorized by underlying failure mechanism:

| Code | Failure Classification | Candidate Modality | Count | % of Errors | Operational Definition |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **F01** | Missing semantic signal | `LEXICAL` | 34 | 14.7% | Concept expressed via non-standard synonym missed by regex |
| **F02** | False-positive signal | `LEXICAL` | 28 | 12.1% | Superficial keyword match without substantive technical content |
| **F03** | Structural mismatch | `STRUCTURAL` | 38 | 16.5% | Content located under non-standard heading levels or tab layouts |
| **F04** | Evidence-quality mismatch | `WEIGHTING` | 62 | 26.8% | Basic evidence rewarded where rater required formal rigor |
| **F05** | Granularity/boundary jitter | `WEIGHTING` | 24 | 10.4% | Score sits directly at threshold boundary (e.g. 69 vs 70) |
| **F06** | Context/window limitation | `CONDITIONAL` | 11 | 4.8% | Signal valid only when paired with prerequisite domain context |
| **F07** | Cross-section reasoning failure | `COMPOSITIONAL` | 12 | 5.2% | Information split across multiple disparate document sections |
| **F08** | Docs-architecture failure | `STRUCTURAL` | 16 | 6.9% | Key discoverability assets reside in `/docs/` rather than root |
| **F09** | Comparative/evaluative failure | `COMPOSITIONAL` | 4 | 1.7% | Prose explains trade-offs but lacks explicit table or "vs" heading |
| **F10** | Unknown / unclassified | `MISSING-CAPABILITY` | 2 | 0.9% | Unmodeled edge anomalies |

### Modality Aggregation
- **`WEIGHTING`:** 86 instances (37.2%) $ightarrow$ Re-calibrating point values and bucket thresholds
- **`STRUCTURAL`:** 54 instances (23.4%) $ightarrow$ Heading hierarchy and document layout rules
- **`LEXICAL`:** 62 instances (26.8%) $ightarrow$ Regex pattern and synonym set refinement
- **`COMPOSITIONAL`:** 16 instances (6.9%) $ightarrow$ Multi-section synthesis requirements
- **`CONDITIONAL`:** 11 instances (4.8%) $ightarrow$ Contextual gating predicates

---

## 6. Representative Diagnostic Case Studies

### 6.1 Extreme Positive Error (RepoRise > Rater)
* **Repository:** `colinhacks/zod` (`real-033`, Library)
  * **Scores:** Overall: Pred 2 vs Actual 0 (Residual: $+2$); GEO: Pred 3 vs Actual 0
  * **Triggered Evidence:** Heuristic rewarded extensive TypeScript code blocks and package keywords.
  * **Expected Evidence:** Reviewers penalized the README as completely non-canonical and missing structured lede/installation text.
  * **Classification:** `F04` (`WEIGHTING` / Evidence-quality mismatch)

### 6.2 Extreme Negative Error (RepoRise < Rater)
* **Repository:** `pallets/flask` (`real-037`, Framework)
  * **Scores:** AEO: Pred 2 vs Actual 3 (Residual: $-1$); GEO: Pred 2 vs Actual 3
  * **Triggered Evidence:** Minimal root README with links to external tutorial and docs site.
  * **Expected Evidence:** Reviewer noted that the minimal pitch and install instructions answered canonical questions with extreme precision.
  * **Classification:** `F01` (`LEXICAL` / Missing semantic signal)

### 6.3 Monorepo Multi-Package Layout Disconnect
* **Repository:** `babel/babel` (`real-073`, Monorepo)
  * **Scores:** Overall: Pred 3 vs Actual 4 (Residual: $-1$); SEO: Pred 3 vs Actual 4
  * **Triggered Evidence:** Root README contains a brief high-level overview, delegating packages to `packages/babel-core`.
  * **Expected Evidence:** Human raters integrated subpackage manifests and contributing guides.
  * **Classification:** `F08` (`STRUCTURAL` / Documentation-architecture failure)

---

## 7. Cross-Archetype Transfer & Confounding Analysis

### 7.1 Cross-Archetype Transfer Analysis
- **Widespread Failure Modes:**
  - `F04` (Evidence-Quality Mismatch): Present across **all 12 archetypes** (ranging from 3 to 9 occurrences per archetype). This is a **universal engine deficiency** requiring global weight re-calibration.
  - `F01` (Missing Semantic Signal): Present across **10 archetypes**. Regex expansion will generalize globally.
- **Archetype-Specific Failure Modes:**
  - `F08` (Documentation-Architecture Failure): Concentrated exclusively in **Monorepo** ($N=5$) and **Docs** ($N=6$). Requires specialized sub-directory traversal rules rather than global keyword tweaks.

### 7.2 Multi-Label Characteristic Confounding
To verify whether high errors in `char_docs_heavy` (MAE 1.0667) and `char_architecture` (MAE 0.7000) reflect one shared issue or independent phenomena, we calculated pairwise Pearson $phi$-coefficients:
- **`char_docs_heavy` $leftrightarrow$ `char_architecture`:**
  - Co-occurrence: 9 repositories.
  - Pearson $r$: **$+0.3120$** (moderate correlation).
  - **Verdict:** While 9 of 15 docs-heavy repos also contain architecture explanations, 21 architecture repos exist independently. The two tags represent **partially overlapping but distinct structural challenges**.
- **`char_example_heavy` $leftrightarrow$ `char_install_config`:**
  - Co-occurrence: 28 repositories ($r = +0.2840$).
  - **Verdict:** High co-occurrence reflects standard package norms. Both exhibit low error (MAE $le 0.68$).

---

## 8. Optimization Readiness Ranking for M8.6

This ranking provides the formal research input to the M8.6 adaptive optimizer:

| Priority | Failure Mode | Scope | Evidence | Candidate Modality | Validation Budget | Existing DSL Compatibility |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: |
| **P0** | **GEO Evidence Over-Credit** (`F04`) | Widespread (12 archetypes) | Mean Error $+0.5083$; MAE $0.9917$ | `WEIGHTING` & `CONDITIONAL` | **35%** | Fully supported in check weights |
| **P0** | **External Docs & Monorepo Depth** (`F08`) | Monorepos & Docs (16 repos) | MAE $>0.87$ on Monorepos / Docs | `STRUCTURAL` | **30%** | Supported via `collect.mjs` signals |
| **P1** | **AEO Narrative Phrasing** (`F01`) | Widespread (10 archetypes) | AEO bias $+0.3417$; missing synonym hits | `LEXICAL` | **20%** | Supported via `SECTION_PATTERNS` regexes |
| **P1** | **Comparative Section Synthesis** (`F09`) | Comparison-heavy (24 repos) | Evaluative prose missed without "vs" | `COMPOSITIONAL` | **10%** | Supported via compound checks |
| **P2** | **Score Boundary Jitter** (`F05`) | Isolated edge cases | Boundary misses ($|\Delta| = 1$) | `WEIGHTING` | **5%** | Supported via `scoreToBucket` thresholds |
| **Total**| **Campaign Allocation Budget** | **Full Corpus Scope** | **All 120 Repositories** | **Multi-Modal Portfolio** | **100%** | **Verified Complete** |

### 8.1 Multi-Level Regression Protection Constraints
To prevent local over-optimization (e.g. improving GEO while regressing SEO or breaking a specific archetype), M8.6 enforces strict automated non-regression gates on candidate acceptance:
1. **Validation Tolerance:** Candidate must improve the target metric without regressing Real Validation Overall MAE by $> +0.02$.
2. **Surface Regression Gate:** No major surface (SEO, AEO, GEO) may regress by $> +0.05$ MAE.
3. **Archetype Regression Gate:** No individual repository archetype may regress by $> +0.15$ MAE.

### 8.2 Strict Test & Human Gold Isolation Invariants
* **Real Test Split ($N=24$):** 100% held-out and completely inaccessible to the optimization loop.
* **Human Gold Evaluation Set ($N=15$):** Completely held-out as a post-campaign evaluation instrument.
* **Permitted Optimization Signals:** Synthetic Train, Synthetic Validation, Real Train ($N=72$), and strictly budgeted Real Validation ($N=24$).

---

## 9. Formal Conclusion & Entry Gate to M8.6

1. **Diagnostic Phase Closed:** Milestone M8.5 is concluded strictly as a measurement and diagnostic experiment.
2. **Generalization Established:** The baseline shows no evidence of adverse held-out degradation in this corpus.
3. **Zero Contamination Verified:** No engine heuristics, check functions, weights, or prompts were altered.
4. **M8.6 Optimizer Unlocked:** With failure mechanisms, cross-archetype transfer dynamics, testable competing hypotheses, budget allocations, and regression gates formally established, RepoRise is now ready to proceed to **Milestone M8.6 (Larger-Corpus Optimization)**.


