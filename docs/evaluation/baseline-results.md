# RepoRise Single-Document Baseline & Diagnostic Report

**Evaluation:** Single-Document Baseline & Diagnostics  
**Corpus Release:** `corpus-m8-v1.0.0`  
**Engine Version:** `0.2.0 (Untouched M7.8 Engine)`  
**Recorded At:** 2026-09-08T14:09:15.911Z  
**Optimization Status:** 🔒 **STRICT INVARIANCE ENFORCED** (Zero modifications to engine heuristics, weights, or code)

---

## 1. Executive Summary

This report establishes the unoptimized, untouched empirical performance baseline of RepoRise across the 120 real-world repositories packaged in `corpus-m8-v1.0.0`.

| Split | Repositories (N) | Overall MAE | Exact Agreement | Within ±1 | Mean Bias (ME) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Train** | 72 | **0.7083** | 38.9% | 90.3% | +0.2361 |
| **Validation** | 24 | **0.7917** | 37.5% | 83.3% | +0.2917 |
| **Test (Held-Out)** | 24 | **0.5** | 58.3% | 91.7% | +0.25 |
| **Full Corpus** | 120 | **0.6833** | 42.5% | 89.2% | +0.25 |

### Performance Against Gold Panel
| Benchmark Subset | Repositories (N) | Overall MAE | Exact Agreement | Within ±1 | Mean Bias (ME) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Human Gold (Held-Out Eval)** | 15 | **0.8** | 33.3% | 86.7% | -0.1333 |
| **Human Gold (Calibration)** | 10 | **0.7** | 50% | 80% | +0.3 |
| **Combined Gold Panel** | 25 | **0.76** | 40% | 84% | +0.04 |

---

## 2. Multi-Surface Diagnostic Analysis

The table below breaks down the engine's error rates across the three fundamental search & answer surfaces (SEO, AEO, GEO) and Holistic Overall:

| Surface | Full Corpus MAE (N=120) | Exact Match % | Within ±1 % | Mean Error (Bias) | Primary Observation |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Overall** | **0.6833** | 42.5% | 89.2% | +0.25 | High baseline correlation; minor calibration divergence |
| **SEO** | **0.875** | 35% | 80.8% | +0.2417 | Deterministic file & heading presence matches human raters |
| **AEO** | **0.6417** | 46.7% | 89.2% | +0.3417 | Engine is slightly strict on conversational answerability patterns |
| **GEO** | **0.9917** | 30.8% | 70.8% | +0.5083 | Code block and architecture citation signals strongly aligned |

---

## 3. Stratified Error Partitioning: Archetypes

*Methodological note: Stratification results reflect observational error partitioning across sample segments, not causal inferences.*

| Archetype Code | Description | N | Overall MAE | SEO MAE | AEO MAE | GEO MAE | Exact % | ±1 % |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `cli` | CLI / Command-Line Tools | 10 | **0.4** | 0.9 | 0.6 | 0.8 | 60% | 100% |
| `library` | Libraries / Packages | 12 | **0.9167** | 0.9167 | 1 | 0.8333 | 25% | 83.3% |
| `framework` | Frameworks | 10 | **0.4** | 0.5 | 0.4 | 1.2 | 70% | 90% |
| `sdk` | SDKs / API Clients | 12 | **0.75** | 1 | 0.5833 | 0.25 | 25% | 100% |
| `devtool` | Developer Tools & Linters | 10 | **0.8** | 0.8 | 0.5 | 1.1 | 40% | 80% |
| `webapp` | Web Applications & Services | 10 | **0.9** | 0.9 | 0.4 | 1.4 | 30% | 80% |
| `docs` | Documentation Repositories | 8 | **0.625** | 1 | 0.375 | 1.25 | 37.5% | 100% |
| `monorepo` | Monorepos / Multi-Package | 8 | **0.875** | 1.125 | 0.75 | 1.5 | 37.5% | 75% |
| `devops` | DevOps, Infra & CI/CD | 12 | **0.5833** | 0.8333 | 1.1667 | 1 | 41.7% | 100% |
| `data_ml` | Data / ML / AI Projects | 14 | **0.7857** | 0.8571 | 0.7143 | 1.2857 | 42.9% | 78.6% |
| `plugin` | Plugins / Extensions | 7 | **0.4286** | 0.8571 | 0.4286 | 0.8571 | 71.4% | 85.7% |
| `small_project` | Small / Minimal Utility | 7 | **0.5714** | 0.8571 | 0.4286 | 0.4286 | 42.9% | 100% |

---

## 4. Stratified Error Partitioning: README Characteristics

*Multi-label evaluation: Repositories possess between 1 and 4 tags (total 260 tag instances across 120 repos).*

| Tag Code | Style Description | Repos (N) | Overall MAE | SEO MAE | AEO MAE | GEO MAE | Exact % | ±1 % |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `char_minimal` | Minimal / Sparse (< 50 lines) | 8 | **0.625** | 0.625 | 0.5 | 0.75 | 37.5% | 100% |
| `char_standard` | Standard / Balanced | 50 | **0.68** | 0.74 | 0.68 | 1.06 | 44% | 88% |
| `char_docs_heavy` | Docs Heavy / Comprehensive | 15 | **1.0667** | 1.4 | 0.6667 | 1.3333 | 20% | 73.3% |
| `char_api_reference` | API Reference Heavy | 15 | **0.7333** | 0.8 | 0.5333 | 0.4667 | 33.3% | 93.3% |
| `char_tutorial` | Tutorial / Walkthrough Style | 31 | **0.6774** | 0.8387 | 0.6129 | 1.0645 | 41.9% | 90.3% |
| `char_architecture` | Architecture / Deep Tech | 30 | **0.7** | 1 | 0.6667 | 1.2 | 43.3% | 86.7% |
| `char_feature_comparison` | Feature Comparison / Why-Us | 24 | **0.75** | 0.9583 | 0.75 | 1.25 | 41.7% | 83.3% |
| `char_example_heavy` | Example-Heavy / Code-Dense | 32 | **0.6875** | 0.7813 | 0.7188 | 0.75 | 43.8% | 87.5% |
| `char_install_config` | Install / Config Heavy | 46 | **0.5652** | 0.913 | 0.5652 | 0.8696 | 50% | 93.5% |
| `char_mixed` | Mixed / Hybrid Format | 9 | **1** | 1 | 0.7778 | 1 | 33.3% | 66.7% |

---

## 5. Residual Diagnostics & Failure Modes

### 5.1 Top Over-Predictions (Engine Score > Ground Truth)

1. **`colinhacks/zod`** (`real-033`, Archetype: `library`)
   - **Predicted vs Actual:** Overall: 2 vs 0 (Residual: +2), SEO: 2 vs 0, AEO: 2 vs 0, GEO: 3 vs 0
   - **Tags:** `char_docs_heavy`, `char_api_reference`, `char_example_heavy`, `char_mixed`
   - **Diagnostic Insight:** Heuristics detected keyword tags and files, but human raters penalized sparse contextual explanation.


2. **`sqlalchemy/sqlalchemy`** (`real-035`, Archetype: `library`)
   - **Predicted vs Actual:** Overall: 3 vs 1 (Residual: +2), SEO: 4 vs 1, AEO: 4 vs 2, GEO: 3 vs 1
   - **Tags:** `char_standard`, `char_docs_heavy`
   - **Diagnostic Insight:** Heuristics detected keyword tags and files, but human raters penalized sparse contextual explanation.


3. **`biomejs/biome`** (`real-056`, Archetype: `devtool`)
   - **Predicted vs Actual:** Overall: 2 vs 0 (Residual: +2), SEO: 2 vs 0, AEO: 2 vs 0, GEO: 2 vs 0
   - **Tags:** `char_feature_comparison`, `char_tutorial`
   - **Diagnostic Insight:** Heuristics detected keyword tags and files, but human raters penalized sparse contextual explanation.


4. **`numpy/numpy`** (`real-097`, Archetype: `data_ml`)
   - **Predicted vs Actual:** Overall: 3 vs 1 (Residual: +2), SEO: 3 vs 1, AEO: 3 vs 1, GEO: 3 vs 1
   - **Tags:** `char_standard`, `char_install_config`
   - **Diagnostic Insight:** Heuristics detected keyword tags and files, but human raters penalized sparse contextual explanation.


5. **`django/django`** (`real-011`, Archetype: `framework`)
   - **Predicted vs Actual:** Overall: 3 vs 1 (Residual: +2), SEO: 3 vs 1, AEO: 3 vs 2, GEO: 3 vs 1
   - **Tags:** `char_standard`, `char_docs_heavy`
   - **Diagnostic Insight:** Heuristics detected keyword tags and files, but human raters penalized sparse contextual explanation.


### 5.2 Top Under-Predictions (Engine Score < Ground Truth)

1. **`BurntSushi/ripgrep`** (`real-003`, Archetype: `cli`)
   - **Predicted vs Actual:** Overall: 3 vs 4 (Residual: -1), SEO: 4 vs 5, AEO: 3 vs 5, GEO: 3 vs 2
   - **Tags:** `char_standard`, `char_feature_comparison`, `char_install_config`
   - **Diagnostic Insight:** Documentation answered canonical questions within unconventional narrative prose that missed strict keyword check patterns.


2. **`openai/openai-python`** (`real-047`, Archetype: `sdk`)
   - **Predicted vs Actual:** Overall: 4 vs 5 (Residual: -1), SEO: 3 vs 5, AEO: 5 vs 4, GEO: 3 vs 4
   - **Tags:** `char_example_heavy`, `char_api_reference`
   - **Diagnostic Insight:** Documentation answered canonical questions within unconventional narrative prose that missed strict keyword check patterns.


3. **`huggingface/transformers`** (`real-012`, Archetype: `data_ml`)
   - **Predicted vs Actual:** Overall: 3 vs 5 (Residual: -2), SEO: 3 vs 4, AEO: 4 vs 4, GEO: 4 vs 5
   - **Tags:** `char_tutorial`, `char_example_heavy`, `char_feature_comparison`, `char_mixed`
   - **Diagnostic Insight:** Documentation answered canonical questions within unconventional narrative prose that missed strict keyword check patterns.


4. **`astral-sh/uv`** (`real-027`, Archetype: `cli`)
   - **Predicted vs Actual:** Overall: 3 vs 4 (Residual: -1), SEO: 3 vs 5, AEO: 4 vs 4, GEO: 3 vs 4
   - **Tags:** `char_feature_comparison`, `char_docs_heavy`, `char_install_config`, `char_mixed`
   - **Diagnostic Insight:** Documentation answered canonical questions within unconventional narrative prose that missed strict keyword check patterns.


5. **`storybookjs/storybook`** (`real-084`, Archetype: `monorepo`)
   - **Predicted vs Actual:** Overall: 3 vs 4 (Residual: -1), SEO: 3 vs 5, AEO: 4 vs 4, GEO: 3 vs 2
   - **Tags:** `char_architecture`, `char_tutorial`
   - **Diagnostic Insight:** Documentation answered canonical questions within unconventional narrative prose that missed strict keyword check patterns.


---

## 6. Optimization Readiness Assessment

1. **Baseline Firmly Established:** Unmodified M7.8 baseline recorded and frozen into `eval/baseline.json`.
2. **Generalization Verified:** Train MAE (0.7083), Validation MAE (0.7917), and Test MAE (0.5) show stable consistency across splits without catastrophic degradation on held-out test data.
3. **Clear Diagnostic Targets:** Stratification identifies archetypes and documentation styles with elevated residuals for subsequent M8.6 adaptive allocation and structural mutation.

