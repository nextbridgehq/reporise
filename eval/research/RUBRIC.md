# RepoRise Evaluation Rubric (Version: m8-label-rubric-v1.0.0)

**Version:** `m8-label-rubric-v1.0.0`  
**Status:** FROZEN & IMMUTABLE  
**Scope:** Milestone 8 Evaluation & Benchmarking  
**Harness Independence:** Reviewers (AI & Human) must evaluate solely from raw fixture evidence (README + Manifest) without sight of RepoRise deterministic scores or other reviewer outputs.

---

## 1. Rubric Architecture & Principles

1. **Discrete Scale (0–5):** Every score is an integer between `0` and `5`. Half-points are not permitted.
2. **Dimension Independence:** SEO, AEO, and GEO reflect three distinct retrieval paradigms. A repository may score high on SEO (great title, keywords, license) but fail on AEO (unclear capabilities) or GEO (no citability signals).
3. **Holistic Overall:** The `Overall` score is an independent holistic assessment of total discoverability and machine consumability—it is **not** a mathematical average of the three component dimensions.
4. **Missing Data Policy:**
   - Missing README: Score is strictly `0` across all dimensions.
   - Missing Manifest: Evaluated on README alone; points requiring manifest link-backs cannot be awarded.
   - Empty or Placeholder Sections: Treated as absent.

---

## 2. Dimension 1: SEO (Search Engine Optimization)

Evaluates whether the repository is structured to rank well in traditional keyword-based web and code search engines (GitHub Search, Google, Bing, Sourcegraph).

| Score | Rating | Concrete Rubric Criteria |
| :---: | :--- | :--- |
| **0** | **Absent / Hostile** | No discoverability signals. README missing or empty. No clear project title. No license file. Package manifest missing or completely broken. |
| **1** | **Minimal** | Project name present but H1 title is generic or diverges from package/repo name. One vague sentence description. No relevant keywords or tags. License missing or ambiguous. |
| **2** | **Basic** | H1 matches repository name. Basic 1-paragraph summary present. Valid standard license file in root. Manifest exists but lacks repository/homepage link-backs or keywords. |
| **3** | **Competent** | H1 matches repository name and primary package namespace. Clear introductory pitch with primary domain keywords. Valid OSI-approved license. Package manifest includes synchronized description and valid repository URL. |
| **4** | **Strong** | High-precision title and keyword density in introductory 150 words. Relevant status badges (version, build, license). Manifest fully populated with keywords, repository link-backs, author, and documentation URLs. Clean heading hierarchy without orphan headers. |
| **5** | **Exemplary** | Flawless discoverability architecture. Canonical H1 title, rich meta-description, explicit keyword taxonomy, complete manifest metadata (homepage, repo, bugs, keywords), valid license with badges, clean semantic HTML/Markdown hierarchy, zero keyword stuffing or crawler traps. |

---

## 3. Dimension 2: AEO (Answer Engine Optimization)

Evaluates whether an automated answer engine or retrieval-augmented crawler (Perplexity, Google AI Overviews, Bing Copilot) can extract concise, unambiguous answers to the **Five Canonical Questions**:
1. **What is it?** (Definitional identity and classification)
2. **Who is it for?** (Target audience, developer personas, use-case boundaries)
3. **What does it do?** (Core capabilities, key features, problems solved)
4. **How is it used?** (Immediate copy-paste install command & minimal quickstart snippet)
5. **What are the prerequisites / key facts?** (Runtime requirements, compatibility, language, ecosystem)

| Score | Rating | Concrete Rubric Criteria |
| :---: | :--- | :--- |
| **0** | **Unanswerable** | None of the 5 canonical questions can be answered from the documentation. Content is pure source code dump, placeholder, or broken text. |
| **1** | **Barely Answerable** | Answers at most 1 canonical question (e.g. project name or a raw code snippet with no context). Answers are fragmented or require guesswork. |
| **2** | **Partially Answerable** | Directly answers 2 of the 5 questions (typically "What is it?" and a raw install command). Lacks audience definition, feature breakdown, or prerequisites. |
| **3** | **Adequately Answerable** | Directly answers 3 to 4 of the 5 questions with readable text. Has an identifiable pitch, installation command, and basic feature list. Audience or prerequisites may be implicit. |
| **4** | **Well Answered** | Directly and concisely answers all 5 canonical questions in prominent, easily parsed sections. High semantic clarity; minimal extraneous prose. |
| **5** | **Exemplary AEO** | Answers all 5 questions within the first screenful of text. Uses strong definitional patterns (`"X is a Y that does Z"`), dedicated `## Features`, `## Installation`, and `## Quickstart` headings, copy-pasteable snippets with expected outputs, and explicit prerequisites. |

---

## 4. Dimension 3: GEO (Generative Engine Optimization & Citability)

Evaluates machine-readability, citability, factual density, and technical context required by Generative LLMs (ChatGPT, Claude, Gemini) to accurately synthesize and cite the project.

| Score | Rating | Concrete Rubric Criteria |
| :---: | :--- | :--- |
| **0** | **Non-Citable** | Zero technical citability. Conversational rambling, empty repository, or unformatted text walls with no machine-readable structures. |
| **1** | **Weak Citability** | Subjective, unverified assertions (`"the fastest library"`) without benchmarks or technical backing. No language-tagged code fences. No structured tables or bullet points. |
| **2** | **Basic Citability** | Code snippets present but lack language tags or comments. Basic bullet list of features present. Lacks architectural explanation, comparative context, or verifiable claims. |
| **3** | **Moderate Citability** | Proper syntax-highlighted code fences across examples. Structured, factual bullet points describing capabilities. Verifiable technical claims that an LLM can quote verbatim. |
| **4** | **Strong Citability** | Cleanly formatted Markdown tables (API parameters, feature matrices, compatibility). Clear comparison or differentiation section (`"Why X instead of Y?"`). Architecture diagrams or explicit component contracts. High factual signal-to-noise ratio. |
| **5** | **Exemplary GEO** | Richly structured machine-readable knowledge surface: comprehensive comparison matrix or benchmark table with explicit methodology, syntax-tagged code snippets for multiple patterns, architectural flow diagram or explanation, formal specification or citation metadata (`CITATION.cff`), zero vague marketing hyperbole. |

---

## 5. Dimension 4: Overall Discoverability

Holistic assessment of the repository's discoverability, information architecture, and machine consumability. This is **not** a mathematical average of SEO, AEO, and GEO.

| Score | Rating | Concrete Rubric Criteria |
| :---: | :--- | :--- |
| **0** | **Non-Functional** | Repository surface is essentially invisible and useless for discovery. |
| **1** | **Severely Deficient** | High cognitive and retrieval friction. Requires intensive reverse-engineering of source code to understand what the project does. |
| **2** | **Below Average** | Functional but weak. Basic purpose can be deduced after effort, but retrieval crawlers and LLMs will frequently mischaracterize or ignore it. |
| **3** | **Competent Standard** | Meets the conventional open-source standard. Clear identity, basic instructions, usable by humans and crawlers with moderate effort. |
| **4** | **High Quality** | Well-structured, professional, scannable, rich metadata, low retrieval friction. Instills confidence in both developers and retrieval engines. |
| **5** | **World-Class Benchmark** | Exemplary information architecture. Immediate semantic comprehension, flawless formatting, effortless multi-surface extraction across search, answer, and generative engines. |

---

## 6. Evaluator Independence & Integrity Rules

1. **Double-Blind Discipline:** Evaluators (both AI agents and human engineers) must score fixtures without access to RepoRise's deterministic score (`audit.mjs` output).
2. **Reviewer B Independence:** Reviewer B must score their assigned 50 fixtures without access to Reviewer A's scores or rationale.
3. **Human Gold Independence:** Human evaluators must score their assigned 25 fixtures without seeing Reviewer A or Reviewer B scores.
4. **Calibration vs. Evaluation Separation:**
   - The 10 Calibration fixtures are analyzed strictly to characterize systematic rater divergence.
   - The 15 Untouched Evaluation fixtures remain permanently frozen and untouched until final benchmark reporting.
