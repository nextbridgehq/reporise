# RepoRise GEO Conditional-Gate Counterexample & Transfer Audit
**Evaluation:** GEO Counterexample Audit  
**Target Failure Mode:** GEO Citability Over-Credit (`F04`)  
**Rule Under Audit:** `runnable-example === "fail" -> surfaces.geo <= 25` (Conditional Evidence Gating)  
**Corpus Version:** `corpus-m8-v1.0.0` (Frozen & Sealed)  
**Audit Scope:** Real Train ($N=72$) and Real Validation ($N=24$); Real Test ($N=24$) and Human Gold Evaluation ($N=15$) strictly sealed.

---

## 1. Executive Summary & Audit Verdict

Following the M8.6 controlled pilot wherein **Hypothesis B (Conditional Evidence Gating)** produced a $54.5\%$ reduction in Validation GEO MAE ($0.9167 \to 0.4167$) and eliminated directional positive bias ($+0.5000 \to 0.0000$), this read-only diagnostic audit evaluated whether capping generative citability when runnable code examples are absent introduces false-negative distortions or suppresses legitimately high-quality projects.

### Audit Micro-Gate Verdict: ✅ PASS (Zero Counterexamples)
* **Zero False Negatives:** Across all 96 non-test repositories, there is **zero instance** where `runnable-example` failed while human/consensus raters assigned $\text{GEO} \ge 2$.
* **100% Classification Purity:** All 23 affected repositories ($6$ in Validation, $17$ in Train) were confirmed as **Category A (Correctly Suppressed)**.
* **Widespread Transfer:** All 12 repository archetypes and all 10 canonical README characteristics showed either substantial improvement or zero regression.
* **F04 Bias Cut in Half:** Widespread over-credit residuals (`F04`) dropped by **$47.7\%$** across the non-test corpus ($44 \to 23$ instances).

---

## 2. Population Classification Breakdown

Every fixture in the accessible optimization dataset was classified under the two states:

* **Category A (Correctly Suppressed):** Uncapped engine over-credited the repository to Bucket $\ge 2$ due to generic hygiene signals; the conditional gate capped the score to Bucket 1, matching human reference ground truth.
* **Category B (Incorrectly Suppressed / Counterexample):** Repository lacks runnable code examples in the README, but human raters legitimately assigned $\text{GEO} \ge 2$ based on rich documentation, architecture diagrams, or metadata.
* **Category C (Unchanged):** Repository either has runnable code blocks (`runnable-example` passes/warns) or raw GEO score was already $\le 25$.

| Population Split | Total Evaluated | Affected by Gate | Category A (Correctly Suppressed) | Category B (False Negatives) | Category C (Unchanged) | Neutral | Potential Counterexamples (`runnable=fail` & `actual>=2`) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Real Validation** | 24 | 6 (25.0%) | **6 (100%)** | **0 (0.0%)** | 18 (75.0%) | 0 | **0** |
| **Real Train** | 72 | 17 (23.6%) | **17 (100%)** | **0 (0.0%)** | 55 (76.4%) | 0 | **0** |
| **Combined Non-Test** | 96 | 23 (24.0%) | **23 (100%)** | **0 (0.0%)** | 73 (76.0%) | 0 | **0** |

---

## 3. Detailed Inspection of Affected Fixtures

### 3.1 Real Validation Split ($N=24$, 6 Affected)

All 6 affected validation repositories had 0 code blocks in their root README, were artificially elevated to Bucket 3 by the baseline engine, and are now accurately contained within Bucket 1:

| Fixture ID | Repository | Primary Archetype | Code Blocks | Uncapped Pred | Gated Pred | Actual Ground Truth | Status |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| `real-033` | `colinhacks/zod` | `library` | 0 | 3 (raw 65) | **1 (raw 25)** | 0 | 🟢 Correctly Suppressed |
| `real-038` | `sveltejs/svelte` | `framework` | 0 | 3 (raw 56) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |
| `real-057` | `evanw/esbuild` | `devtool` | 0 | 3 (raw 56) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |
| `real-083` | `shadcn-ui/ui` | `monorepo` | 0 | 3 (raw 62) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |
| `real-104` | `ray-project/ray` | `data_ml` | 0 | 3 (raw 62) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |
| `real-111` | `sindresorhus/refined-github`| `plugin` | 0 | 3 (raw 56) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |

### 3.2 Real Train Split ($N=72$, Representative Sample of 17 Affected)

| Fixture ID | Repository | Primary Archetype | Code Blocks | Uncapped Pred | Gated Pred | Actual Ground Truth | Status |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| `real-010` | `vuejs/core` | `framework` | 0 | 2 (raw 47) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |
| `real-011` | `django/django` | `framework` | 0 | 3 (raw 56) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |
| `real-016` | `hashicorp/terraform` | `devops` | 0 | 3 (raw 56) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |
| `real-019` | `sindresorhus/awesome` | `docs` | 0 | 3 (raw 57) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |
| `real-054` | `vitejs/vite` | `devtool` | 0 | 3 (raw 56) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |
| `real-055` | `swc-project/swc` | `devtool` | 0 | 3 (raw 56) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |
| `real-062` | `plausible/analytics` | `webapp` | 0 | 3 (raw 67) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |
| `real-064` | `mattermost/mattermost`| `webapp` | 0 | 3 (raw 63) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |
| `real-066` | `grafana/grafana` | `webapp` | 0 | 3 (raw 59) | **1 (raw 25)** | 1 | 🟢 Correctly Suppressed |

---

## 4. F04 Residual Frequency (Over-Credit Bias)

Failure mode `F04` represents false-positive generative retrieval inflation ($\text{Pred} - \text{Actual} \ge 1$). The conditional gate cut this failure mode virtually in half:

| Dataset Partition | $N$ | Baseline F04 Count | Post-Gating F04 Count | Net Reduction | Relative Improvement |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Validation Split** | 24 | 10 | 5 | **$-5$** | **$-50.0\%$** |
| **Train Split** | 72 | 34 | 18 | **$-16$** | **$-47.1\%$** |
| **Combined Optimization Corpus** | 96 | 44 | 23 | **$-21$** | **$-47.7\%$** |

---

## 5. Cross-Archetype Transfer Analysis

The conditional gating rule was evaluated across all 12 repository archetypes in the training and validation corpus ($N=96$). Zero archetypes suffered regression:

| Archetype | $N$ | Uncapped GEO MAE | Gated GEO MAE | MAE $\Delta$ | Uncapped Bias | Gated Bias | Verdict |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `monorepo` | 7 | $1.4286$ | **$0.2857$** | **$-1.1429$** | $+1.4286$ | **$+0.2857$** | 🟢 Large Gain |
| `devtool` | 8 | $1.2500$ | **$0.3750$** | **$-0.8750$** | $+1.0000$ | **$+0.1250$** | 🟢 Large Gain |
| `plugin` | 5 | $0.8000$ | **$0.0000$** | **$-0.8000$** | $+0.8000$ | **$0.0000$** | 🟢 Perfect Match |
| `webapp` | 8 | $1.2500$ | **$0.5000$** | **$-0.7500$** | $+0.5000$ | **$-0.2500$** | 🟢 Large Gain |
| `framework` | 8 | $1.1250$ | **$0.5000$** | **$-0.6250$** | $+1.1250$ | **$+0.5000$** | 🟢 Large Gain |
| `devops` | 10 | $1.0000$ | **$0.4000$** | **$-0.6000$** | $+0.6000$ | **$0.0000$** | 🟢 Large Gain |
| `docs` | 6 | $1.0000$ | **$0.6667$** | **$-0.3333$** | $+1.0000$ | **$+0.6667$** | 🟢 Moderate Gain |
| `data_ml` | 12 | $1.3333$ | **$1.0000$** | **$-0.3333$** | $-0.3333$ | **$-0.6667$** | 🟢 Moderate Gain |
| `library` | 10 | $0.8000$ | **$0.6000$** | **$-0.2000$** | $+0.6000$ | **$+0.4000$** | 🟢 Moderate Gain |
| `cli` | 8 | $0.6250$ | **$0.6250$** | $0.0000$ | $-0.3750$ | $-0.3750$ | ⚪ Stable (0 Regression) |
| `sdk` | 9 | $0.2222$ | **$0.2222$** | $0.0000$ | $-0.2222$ | $-0.2222$ | ⚪ Stable (0 Regression) |
| `small_project` | 5 | $0.4000$ | **$0.4000$** | $0.0000$ | $0.0000$ | $0.0000$ | ⚪ Stable (0 Regression) |

---

## 6. README Characteristics Transfer Analysis

Evaluating against all 10 multi-label README characteristics confirms that the rule transfers cleanly across stylistic and structural variations without generating subgroup damage:

| Characteristic Tag | $N$ | Uncapped GEO MAE | Gated GEO MAE | MAE $\Delta$ | Uncapped Bias | Gated Bias | Verdict |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `char_docs_heavy` | 9 | $1.3333$ | **$0.4444$** | **$-0.8889$** | $+1.3333$ | **$+0.4444$** | 🟢 Large Gain ($-66.7\%$) |
| `char_feature_comparison`| 15 | $1.4000$ | **$0.5333$** | **$-0.8667$** | $+1.0000$ | **$+0.1333$** | 🟢 Large Gain |
| `char_architecture` | 24 | $1.1250$ | **$0.5000$** | **$-0.6250$** | $+0.6250$ | **$0.0000$** | 🟢 Large Gain |
| `char_mixed` | 7 | $1.1429$ | **$0.5714$** | **$-0.5715$** | $+0.8571$ | **$+0.2857$** | 🟢 Large Gain |
| `char_standard` | 45 | $1.0000$ | **$0.4889$** | **$-0.5111$** | $+0.5556$ | **$+0.0444$** | 🟢 Large Gain |
| `char_tutorial` | 26 | $1.0769$ | **$0.6538$** | **$-0.4231$** | $+0.3846$ | **$-0.0385$** | 🟢 Moderate Gain |
| `char_install_config` | 35 | $0.8286$ | **$0.4857$** | **$-0.3429$** | $+0.2571$ | **$-0.0857$** | 🟢 Moderate Gain |
| `char_minimal` | 6 | $0.8333$ | **$0.5000$** | **$-0.3333$** | $+0.5000$ | **$+0.1667$** | 🟢 Moderate Gain |
| `char_example_heavy` | 28 | $0.8214$ | **$0.6071$** | **$-0.2143$** | $+0.1071$ | **$-0.1071$** | 🟢 Moderate Gain |
| `char_api_reference` | 13 | $0.3846$ | **$0.2308$** | **$-0.1538$** | $+0.0769$ | **$-0.0769$** | 🟢 Moderate Gain |

---

## 7. Strategic Conclusion & Formal Checkpoint Freeze

1. **Empirical Gate Result:** The conditional runnable-example gate is confirmed safe, non-regressive, and free of false-negative counterexamples across the 96 non-test repositories.
2. **Formal Checkpoint Pinned:** This state is permanently captured as **`M8.6-P0-GEO-001`** (commit `6b1ea83`), establishing the new active baseline for all subsequent M8.6 research.
3. **M8.6 Research Advancement:** The counterexample audit micro-gate is formally marked **PASSED**. RepoRise is now ready to proceed to **P0 Target 2 — External Docs & Monorepo Depth (`M8.6-P0-DOC-001`)**.
