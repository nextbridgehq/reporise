# Check inventory and weighting rationale

Read this when a user disputes a verdict, asks why something scores the way it does, or wants to tune the weights. The check logic itself lives in `scripts/lib/checks.mjs` — this file explains the reasoning behind it, which the code deliberately does not carry.

## Contents

- [How scoring works](#how-scoring-works)
- [Identity — weight 25](#identity--weight-25)
- [Discoverability — weight 20](#discoverability--weight-20)
- [Answerability — weight 20](#answerability--weight-20)
- [Citability — weight 25](#citability--weight-25)
- [Hygiene — weight 10](#hygiene--weight-10)
- [Known heuristic limits](#known-heuristic-limits)

## How scoring works

Each check returns `pass` (1.0), `warn` (0.5), `fail` (0.0), or `skip` (excluded).

Category score = mean of its scored checks. Overall = category scores weighted by the category weight. Surface scores (SEO/AEO/GEO) are computed independently by averaging every check tagged with that surface, regardless of category.

`skip` exclusion is the design decision that matters most. A repo with no README could be scored 0 across the board, but that would produce a number dominated by one missing file and hide whether the manifest and repo metadata are in order. Excluding unmeasurable checks keeps every reported number meaningful.

Fix ranking = `category weight × severity × surface count`. A failing check in a heavy category that moves all three surfaces outranks a warning in a light category that moves one. This is what turns the report into a plan.

## Identity — weight 25

**Why heaviest, tied with citability:** every other surface depends on the reader — human or machine — being able to say what this thing is. A repo that ranks for a query and then fails to identify itself in the first sentence converts nothing.

| Check | Rationale |
| --- | --- |
| `readme-present` | The one file every surface reads. |
| `readme-h1` | Extractors take the H1 as document title; without it the title is inferred from the URL. |
| `one-line-description` | The sentence that gets quoted everywhere. Length band 30–300 chars: below that it says nothing, above it gets truncated mid-clause. |
| `definitional-opening` | `X is a Y` form. Named subject survives chunking; "This project" does not. The single most important check in the audit for GEO. |
| `license-file` | Missing licences get repos filtered out of curated lists — which are the third-party pages generative engines cite. |

## Discoverability — weight 20

**Why lighter than identity:** registry metadata is real and underused, but it raises a ceiling rather than fixing a floor. A repo with perfect keywords and an incoherent README still fails.

| Check | Rationale |
| --- | --- |
| `manifest-description` | Registry pages rank independently and are frequently the page actually retrieved. |
| `manifest-keywords` | Registry search is keyword-matched, unlike web search. Threshold of 5 is a floor, not a target. |
| `manifest-links` | Consolidates repo and registry into one entity rather than two orphans. |
| `releases-tagged` | Release pages are separately indexable and are one of the few freshness signals a repo emits. |
| `changelog` | Dated, factual, version-stamped — the shape of content that survives retrieval intact. |
| `repo-topics` | Always `skip`. Topics live on the GitHub API, not in the working tree. Included so the report names the gap rather than silently omitting it. |

## Answerability — weight 20

**Why not heavier:** AEO wins are real but narrower in scope than identity or citability. They capture specific high-intent queries rather than establishing the project in a category.

| Check | Rationale |
| --- | --- |
| `install-section` | "How do I install X" is among the highest-volume queries any tool receives. |
| `runnable-example` | Code blocks are extracted and reproduced more often than prose. Language tags preserve syntax context after extraction. |
| `question-headings` | Answer engines match the question, then lift the section beneath it. |
| `faq-section` | Error-message text is high-intent, low-competition, and pasted verbatim into search boxes. |
| `requirements-section` | "Does X work with Y version" is constant, and an unanswered version leaves the answer to a competitor. |

## Citability — weight 25

**Why heaviest, tied with identity:** this is the category most repos ignore entirely, and it is where the difference between "exists" and "gets recommended" lives.

| Check | Rationale |
| --- | --- |
| `comparison-section` | Category queries are overwhelmingly comparative. A repo that never names its category's other members is not in the category as far as retrieval is concerned. Scored `fail` rather than `warn` because the absence is near-universal and near-costless to fix. |
| `when-to-use` | Stated limits get quoted. Being recommended for the right job beats being recommended for everything and abandoned. |
| `docs-surface` | A README is one page and ranks for roughly one intent. Separate pages are how a project covers a category. |
| `examples-surface` | Answers "how do I do X with Y" queries the README never reaches. |
| `version-stamped-facts` | Specific dated facts get repeated; vague ones get paraphrased away or replaced with a competitor's specifics. |
| `citation-metadata` | `CITATION.cff` or `llms.txt`. Marked **speculative** — pass that uncertainty to the user. |

## Hygiene — weight 10

**Why lightest:** these are defects rather than opportunities. Fixing them removes drag; it does not add lift. But an unfixed one can suppress everything above it, which is why they are scored at all.

| Check | Rationale |
| --- | --- |
| `no-broken-links` | Wastes crawl and strands the reader at the moment of intent. Deterministic — filesystem-verified, no heuristic. |
| `readme-length` | Below 150 words there is nothing to rank. Above 4000 without a docs directory, one page competes with itself for every intent. |
| `heading-structure` | Extractors chunk on headings; skipped levels break the section-membership signal. |
| `images-have-alt` | The only part of an image a text extractor sees. Accessibility value is independent and sufficient on its own. |

## Known heuristic limits

State these when a verdict looks wrong, rather than defending the tool:

- **`definitional-opening`** pattern-matches `is a` / `are a` in the first 120 characters. A legitimate opening like "Turns your Git history into release notes." is not promotional but will warn. Override it.
- **Section detection** is regex over heading text. A section headed "Prior art" is a comparison section; the pattern will miss it.
- **`version-stamped-facts`** looks for any `\d+.\d+` pattern, so a README quoting an unrelated version number can pass spuriously.
- **Non-English READMEs** will underperform across every text heuristic. The score is not meaningful for them; say so rather than reporting it.
- **Monorepos** are audited at the path given. A root-level audit of a monorepo says little about the individual packages, which is usually where the visibility problem actually is.
