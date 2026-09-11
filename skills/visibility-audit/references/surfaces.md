# The three surfaces

Read this before explaining the SEO/AEO/GEO distinction to a user, or before making any claim about how generative retrieval works. The field has more confident advice than evidence, and repeating the confident version costs credibility with exactly the technical audience this plugin serves.

## Contents

- [SEO](#seo)
- [AEO](#aeo)
- [GEO](#geo)
- [Why they overlap](#why-they-overlap)
- [Confidence labels](#confidence-labels)
- [Claims to avoid](#claims-to-avoid)

## SEO

Ranking in general web search for the queries developers type. For a repository, the pages that can rank are: the repo page itself, the registry listing (npm/PyPI/crates), any docs site, and third-party pages that mention you.

The mechanics here are the best understood of the three and the least likely to change under you. Titles, headings, internal links, crawlability, freshness, and inbound links all behave roughly as they have for a decade.

**Repo-specific wrinkle:** a GitHub repo page is a weak SEO asset on its own. It has one title, one H1, and a body that search engines partially discount as boilerplate-heavy. A docs site you control is a stronger asset because it can have one page per intent.

## AEO

Answer engine optimization — being the content lifted into a featured snippet, a People Also Ask box, or any surface that shows an answer without a click.

The mechanism is extraction: a system finds a passage that self-containedly answers a specific question. This makes the shape of your content matter more than its volume. A section headed with the user's actual question, followed by a direct answer in the first sentence, is extractable. The same information spread across three paragraphs under a heading called "Configuration" is not.

**The highest-yield AEO content for a developer tool is error messages.** People paste them verbatim into search boxes. Nobody competes for them. A troubleshooting section seeded from your own issue tracker is close to free traffic.

## GEO

Generative engine optimization — being retrieved and cited when someone asks an LLM for a recommendation in your category.

Two distinct paths get you there, and conflating them produces bad advice:

1. **Training data.** Your content was in the model's training corpus. You cannot influence this on any useful timescale, and you cannot verify it.
2. **Retrieval at inference.** The model searches the web and reads what it finds. This you *can* influence, and it is where essentially all actionable GEO work lives.

The second path means GEO is largely downstream of SEO plus one extra property: **chunk-level self-containment.** Retrieval systems pull fragments, not documents. A fragment that says "This project supports both modes" is useless once separated from the page that named the project. A fragment that says "Loopguard supports both streaming and batch modes" survives the trip.

That single property — name the subject in the sentence, not in the heading above it — is the most reliable GEO advice available, and it is boring enough that most guides skip it in favour of things that sound more like a growth hack.

**The other reliable finding:** generative engines cite third-party sources disproportionately. Comparison articles, curated lists, forum answers, and review posts get cited more often than the vendor's own page, because the model is looking for something that reads as independent. This is why "get placed in the sources that already get cited" beats "optimize your own README" past a certain point — and it is the ceiling on what this offline audit can do for anyone.

## Why they overlap

The audit tags each check with the surfaces it moves, and most move more than one. That is not sloppy categorisation, it is the actual structure of the problem:

- A clear definitional opening sentence helps SEO (relevance), AEO (extractable answer), and GEO (self-contained chunk).
- A comparison table helps SEO (comparative queries are high volume), AEO (tables get lifted whole), and GEO (it places you inside a named category).
- Broken links hurt all three by wasting crawl and stranding readers.

The practical consequence: prioritise by breadth, not by surface. A fix moving all three beats two fixes moving one each.

## Confidence labels

When discussing tactics with a user, label them:

**Established** — mechanism understood, effect observable, stable for years.
Titles and headings, crawlability, internal linking, inbound links, code examples, registry metadata, tagged releases, licence presence, alt text, fixing broken links.

**Well-supported** — consistent with how retrieval works and widely observed, but without the decade of measurement behind classic SEO.
Chunk self-containment, question-shaped headings, comparison content, error-message coverage, third-party citation dominance.

**Speculative** — plausible, cheap, unproven.
`llms.txt`. Adoption is partial and no engine has committed to honouring it. Recommend it as low-cost insurance and say that plainly. Never present it as a ranking factor.

**Avoid entirely** — no evidence, and reputational risk if it surfaces.
Star farming, comment spam, mass directory submission, AI-generated content farms, keyword stuffing in READMEs, fabricated comparison tables.

## Claims to avoid

Do not tell a user:

- That a specific engine "prefers" a specific format. No engine publishes this and the claim will not survive contact with a skeptical developer.
- That schema markup makes an LLM cite them. Structured data helps classic search features; its effect on generative citation is unmeasured.
- Any specific number about how much traffic a change will produce. You do not know their baseline, their category's volume, or their competition.
- That the audit score correlates with traffic. It measures readiness, not outcome. Saying otherwise invites a fair accusation of selling a vanity metric.
