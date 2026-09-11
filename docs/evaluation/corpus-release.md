# RepoRise Real-World Ground Truth Corpus Release

**Release Tag:** `corpus-m8-v1.0.0`  
**Schema Version:** `1.0.0`  
**Engine Version:** `0.2.0`  
**Rubric:** `m8-label-rubric-v1.0.0`  
**Calibration:** `m8-cal-v1.0.0`  
**Total Repositories:** 120  
**Splits:** 72 Train / 24 Validation / 24 Test (60.0% / 20.0% / 20.0%)  

---

## 1. Release Architecture

The M8 corpus packages 4 distinct, immutable logical layers:

```
eval/
├── corpus/               # [Layer 1] 120 frozen repository snapshots (real-001 .. real-120)
│   └── real-XXX/         # Depth-1 sparse snapshots complying with FIXTURE_CONTRACT.md
├── metadata/             # [Layer 2] Ground truth metadata & splits
│   ├── inventory.json    # 120 pinned commit records with license, stars, tags
│   ├── splits.json       # Formal split assignments (72 Train, 24 Val, 24 Test)
│   ├── taxonomy.json     # 12 archetypes & 10 README characteristics definitions
│   └── provenance.json   # License, language, capture metadata
├── labels/               # [Layer 3] 3-tier measurement hierarchy & calibration
│   ├── tier1-deterministic/  # 120 offline heuristic audit labels
│   ├── reviewer-a/           # 120 independent rubric evaluations (Reviewer A)
│   ├── reviewer-b/           # 50 double-blind independent reviews (Reviewer B)
│   ├── human-gold/           # 25 expert panel gold labels (10 cal, 15 eval)
│   └── real/                 # 120 consolidated ground truth labels (raw + calibrated)
└── manifests/            # [Layer 4] Cryptographic seals & release manifest
    ├── corpus.sha256     # SHA-256 hash manifest for all 1,942 corpus files
    ├── labels.sha256     # SHA-256 hash manifest for all 435 label files
    ├── release-manifest.json  # Root release seal
    └── RELEASE_REPORT.md      # This release report
```

---

## 2. Cryptographic Hashes

| Manifest | File Count | Size | Root SHA-256 Checksum |
| :--- | :---: | :---: | :--- |
| **Corpus Files** (`corpus.sha256`) | 1,942 | 29.66 MB | `c955c737f3f21d940cbb92a20d5d9df9fbc952047b4a2030e4385bab282eedd0` |
| **Label Files** (`labels.sha256`) | 435 | 0.88 MB | `a5020bb5f50baa3b9d43fa16b2b4ad6c4626a3d265634803df40a61ed659ac0b` |

---

## 3. Stratification Summary

### 3.1 Repository Archetypes (12 Dimensions)
| Archetype Code | Name | Total Repos | Train (60%) | Val (20%) | Test (20%) |
| :--- | :--- | :---: | :---: | :---: | :---: |
| `cli` | CLI / Command-Line Tools | 10 | 6 | 2 | 2 |
| `library` | Libraries / Packages | 10 | 6 | 2 | 2 |
| `framework` | Frameworks | 10 | 6 | 2 | 2 |
| `sdk` | SDKs / API Clients | 10 | 6 | 2 | 2 |
| `devtool` | Developer Tools & Linters | 10 | 6 | 2 | 2 |
| `webapp` | Web Applications & Services | 10 | 6 | 2 | 2 |
| `docs` | Documentation Repositories | 10 | 6 | 2 | 2 |
| `monorepo` | Monorepos / Multi-Package | 10 | 6 | 2 | 2 |
| `devops` | DevOps, Infra & CI/CD | 10 | 6 | 2 | 2 |
| `data_ml` | Data / ML / AI Projects | 10 | 6 | 2 | 2 |
| `plugin` | Plugins / Extensions | 10 | 6 | 2 | 2 |
| `small_project` | Small / Minimal Utility Repositories | 10 | 6 | 2 | 2 |
| **Total** | | **120** | **72** | **24** | **24** |

### 3.2 README Characteristics (10 Multi-Label Tags)
| Characteristic Code | Name | Tag Count |
| :--- | :--- | :---: |
| `char_minimal` | Minimal / Sparse (< 50 lines) | 16 |
| `char_standard` | Standard / Balanced | 24 |
| `char_docs_heavy` | Docs Heavy / Comprehensive (> 300 lines) | 26 |
| `char_api_reference` | API Reference Heavy | 22 |
| `char_tutorial` | Tutorial / Walkthrough Style | 21 |
| `char_architecture` | Architecture / Deep Technical Explanation | 18 |
| `char_feature_comparison` | Feature Comparison / Why-Us Heavy | 17 |
| `char_example_heavy` | Example-Heavy / Code-Dense | 47 |
| `char_install_config` | Install / Configuration Heavy | 47 |
| `char_mixed` | Mixed / Hybrid Format | 22 |
| **Total Tag Instances** | | **260** |

---

## 4. Measurement & Inter-Rater Agreement

- **Reviewer A vs Reviewer B Agreement (N=50 double-reviewed):**
  - **Overall MAE:** `0.020` (Target gate: $\le 0.65$)
  - **Exact Match:** `98.0%` (49/50)
  - **Within $\pm 1$:** `100.0%` (50/50, Target gate: $\ge 85\%$)
  - **Major Disagreements ($|A - B| \ge 2$):** `0`

- **Human Gold & Calibration (N=25):**
  - **Calibration Subset (N=10):** Derived rater divergence offsets $\Delta\text{Overall} = 0.00, \Delta\text{SEO} = 0.00, \Delta\text{AEO} = -0.30, \Delta\text{GEO} = 0.00$.
  - **Untouched Evaluation Subset (N=15):** 100% held-out test isolation, zero contamination.
  - **Methodological Invariant:** $\Delta\text{AEO} = -0.30$ reflects an empirical rater divergence under this protocol; raw scores remain permanently immutable alongside calibrated scores in all labels.

---

## 5. Acceptance Gates Sign-Off

| Gate ID | Gate Description | Status |
| :--- | :--- | :---: |
| `M8.3-A` | Corpus Layer Materialized (120 snapshots matching inventory & contract) | ✅ PASS |
| `M8.3-B` | Metadata Layer Integrity (inventory, splits, taxonomy, provenance complete) | ✅ PASS |
| `M8.3-C` | Split Constraint Verification (72 Train / 24 Validation / 24 Test) | ✅ PASS |
| `M8.3-D` | Zero Orphan Assets (Bidirectional 1:1 match across snapshots, labels, inventory) | ✅ PASS |
| `M8.3-E` | Full Measurement Preservation (Tier 1: 120, Rev A: 120, Rev B: 50, Gold: 25, Real: 120) | ✅ PASS |
| `M8.3-F` | Corpus Cryptographic Seal (`corpus.sha256` byte-for-byte disk match) | ✅ PASS |
| `M8.3-G` | Labels Cryptographic Seal (`labels.sha256` byte-for-byte disk match) | ✅ PASS |
| `M8.3-H` | Release Manifest Sealed (`release-manifest.json` complete and validated) | ✅ PASS |

**Corpus Freeze Status:** 🔒 **FROZEN & IMMUTABLE** under tag `corpus-m8-v1.0.0`.
