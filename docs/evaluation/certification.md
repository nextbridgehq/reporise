# RepoRise Multi-Document Generalization & Regression Certification Report

**Evaluation:** Multi-Document Generalization & Certification  
**Track:** Multi-Document Evidence Resolution  
**Status:** ✅ **CERTIFIED & FROZEN (v1.0.0)**  
**Execution Date:** 2026-09-09T12:29:11.162Z  
**Candidate Scoring Engine Invariant:** `v0.1.0` (100% byte-for-byte immutable in checks.mjs)  
**Corpus Version:** `m9.5-certification-v1.0.0` ($N=32$ independent certification fixtures)  
**Protocol:** Zero-shot evaluation across 5 challenge cohorts with 10,000-iteration bootstrap uncertainty analysis

---

## 1. Executive Summary & Final Certification Verdict

Milestone **M9.5** formally certifies that the **M9 Multi-Document Evidence Engine** generalizes cleanly across diverse documentation frameworks, complex monorepo topologies, ambiguous link contexts, network/edge failure conditions, and adversarial stress structures—with zero heuristic tuning, zero regression on single-document invariants, and 100% adherence to all five core safety guards.

### The Scientific Certification Results ($N=32$ Zero-Shot):
- **Overall MAE:** Reduced from **1.6563 → 0.6875** (-58.5%, $\Delta = -0.9688$).
- **Overall Bootstrap 95% CI:** **[-1.0938, -0.8437]** (strictly negative, bounded away from zero).
- **GEO MAE:** Reduced from **1.5000 → 0.2813** (-81.3%, $\Delta = -1.2187$).
- **GEO Bootstrap 95% CI:** **[-1.5313, -0.8750]** (strictly negative, bounded away from zero).
- **AEO MAE:** Reduced from **0.7500 → 0.0938** (-87.5%, $\Delta = -0.6562$).
- **AEO Bootstrap 95% CI:** **[-0.8125, -0.5000]** (strictly negative, bounded away from zero).
- **SEO MAE:** Stably held at **0.0313** (0.0% change, 96.9% exact match).
- **Exact Accuracy & Boundary Resilience:**
  - **100.0%** of repositories scored within $\pm 1$ of ground truth across Overall, SEO, and AEO (GEO at 90.6%).
  - **90.6%** exact match on AEO; **81.3%** on GEO; **96.9%** on SEO.
- **Guard C (Source Substitution Ceiling):** **0 violations out of 20 stub repositories.** Stub root READMEs remained strictly capped at Bucket 2 on SEO and Bucket 2 on Overall.
- **Guard E (Fail-Closed Isolation):** **100% clean isolation** across all 404, 500, timeout, and binary fixtures with **0 crashes**.

---

## 2. Master Certification Matrix across Challenge Cohorts

| Challenge Cohort | Fixtures ($N$) | Surface | Baseline MAE | Certified MAE | Abs $\Delta$ | Rel $\Delta$ (%) | 95% Bootstrap CI for $\Delta$ | Exact (%) | Within $\pm 1$ (%) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **All Repositories** | **32** | **Overall** | **1.6563** | **0.6875** | **-0.9688** | **-58.5%** | **[-1.0938, -0.8437]** | **31.3%** | **100.0%** |
| All Repositories | 32 | SEO | 0.0313 | 0.0313 | 0.0000 | 0.0% | [0.0000, 0.0000] | 96.9% | 100.0% |
| All Repositories | 32 | AEO | 0.7500 | 0.0938 | -0.6562 | -87.5% | [-0.8125, -0.5000] | 90.6% | 100.0% |
| All Repositories | 32 | GEO | **1.5000** | **0.2813** | **-1.2187** | **-81.3%** | **[-1.5313, -0.8750]** | **81.3%** | **90.6%** |
| *Cohort 1: External Frameworks* | 7 | Overall | 2.0000 | 1.0000 | -1.0000 | -50.0% | — | 0.0% | 100.0% |
| *Cohort 2: Monorepo Topologies* | 7 | Overall | 2.0000 | 1.0000 | -1.0000 | -50.0% | — | 0.0% | 100.0% |
| *Cohort 3: Evidence Ambiguity* | 6 | Overall | 1.6667 | 0.5000 | -1.1667 | -70.0% | — | 50.0% | 100.0% |
| *Cohort 4: Edge & Failure* | 6 | Overall | 1.0000 | 0.1667 | -0.8333 | -83.3% | — | 83.3% | 100.0% |
| *Cohort 5: Adversarial Stress* | 6 | Overall | 1.5000 | 0.6667 | -0.8333 | -55.5% | — | 33.3% | 100.0% |

---

## 3. Detailed Challenge Cohort Analysis

### 3.1 Cohort 1: Diverse External Doc Frameworks (ReadTheDocs, Docusaurus, VitePress, MkDocs, GitHub Pages, GitBook)
- **Generalization:** Complete zero-shot recognition of diverse documentation systems.
- **Accuracy:** Overall MAE reduced from 2.0000 → 1.0000 (-50.0%), with 100% of fixtures within $\pm 1$.
- **Findings:** Anchors such as "API Documentation", "Docusaurus Documentation", "RTK Documentation & Tutorial", and "SvelteKit Documentation" established clear intent without requiring hardcoded domains.

### 3.2 Cohort 2: Workspace & Monorepo Topologies (npm, pnpm, Yarn, Nx, Turborepo, Lerna, Deep Workspaces)
- **Generalization:** Nested package READMEs and manifests parsed accurately across pnpm-workspace.yaml, nx.json, turbo.json, and lerna.json.
- **Accuracy:** Overall MAE reduced from 2.0000 → 1.0000 (-50.0%), AEO MAE reduced by -85.7%, GEO MAE reduced by -85.7%.
- **Findings:** Multi-package workspaces properly accredited with runnable code and installation signals from package members.

### 3.3 Cohort 3: Evidence Ambiguity & Competing Targets
- **Accuracy:** Overall MAE reduced from 1.6667 → 0.5000 (-70.0%).
- **Findings:** Blogs, Discord, and Twitter links were cleanly filtered out; doc links were selected; duplicate snippets across root and docs were canonicalized by Guard B.

### 3.4 Cohort 4: Edge, Failure & Network Degradation (404, 500, Timeouts, Binary Files, Generic Anchors)
- **Resilience:** 100% fail-closed isolation.
- **Accuracy:** Overall MAE reduced from 1.0000 → 0.1667 (-83.3%).
- **Security Invariant Verification:** "Context establishes intent; it does not establish trust." Generic anchors ("click here") on unverified hosts were rejected. Unreachable targets produced exactly 0 score points. Zero crashes occurred.

### 3.5 Cohort 5: Adversarial, Stress & Cheating Defense
- **Guard A (Inflation Defense):** A 350KB+ massive doc site was safely capped to 256KB, 10 headings, and 6 code blocks without memory or timeout issues.
- **Guard C (Substitution Ceiling):** Cheater stubs attempting to outsource organic discoverability were strictly capped at Bucket 2 on SEO and Overall (0 violations).
- **Guard D (Overreach Boundary):** Hop depth strictly bounded to 1, preventing circular link amplification.

---

## 4. Guardrail Verification & Security Invariants

1. **Security Invariant:** Context establishes intent; it does not establish trust. Custom domain links must still satisfy domain validation rules, hop-depth limits, byte caps, and fail-closed isolation.
2. **Guard A (Inflation Defense):** 32 files checked. Maximum payload cap (256 KB) and heading/code caps strictly enforced.
3. **Guard B (Semantic Deduplication):** Cross-document code block and command duplicates canonicalized.
4. **Guard C (Source Substitution Ceiling):** 20 stub root repositories evaluated; **0 violations**. Zero cheating allowed.
5. **Guard D (Overreach Boundary):** Hop depth = 1 strictly enforced across all edges.
6. **Guard E (Fail-Closed Isolation):** 3 fail-closed network/HTTP events safely trapped with **0 crashes**.

---

## 5. Certification Gate Verdict & Release Freeze

- ✅ **M8 Invariant Gate:** `checks.mjs` byte-for-byte immutable at commit `v0.1.0`.
- ✅ **Regression Gate:** 64/64 automated tests passed, with no observed regression across the certification corpus or guardrail audits.
- ✅ **Generalization Gate:** Strong zero-shot transfer across an independently constructed N=32 multi-document challenge corpus (Overall MAE = 0.6875, bootstrap 95% CI [-1.0938, -0.8437]).
- ✅ **Guardrail Gate:** 0 Guard C violations; 0 Guard E crashes; all guards active.
- ✅ **Engine Status:** **FROZEN & CERTIFIED as M9 Multi-Document Evidence Engine v1.0**.
