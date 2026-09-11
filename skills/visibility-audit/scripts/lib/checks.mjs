/**
 * checks.mjs — the judgment layer.
 *
 * Every check returns one of four statuses:
 *   pass  — the signal is present and adequate
 *   warn  — present but weak; worth improving, not a blocker
 *   fail  — absent or broken
 *   skip  — cannot be determined offline (needs the GitHub API or the web)
 *
 * `skip` is load-bearing. An offline audit that guesses at what it cannot see
 * is worse than one that says so, because a confident wrong score sends the
 * user to fix the wrong thing. Skipped checks are excluded from the score and
 * listed separately as "unverified offline".
 *
 * Each check declares which surface it moves:
 *   seo — ranking in general web search for developer intent queries
 *   aeo — being lifted verbatim into a direct answer / featured snippet
 *   geo — being retrieved and cited by a generative engine
 * Many checks move more than one. That overlap is the point: the cheapest
 * wins are the ones that move all three at once.
 */

export const CATEGORIES = {
  identity: {
    label: 'Identity',
    weight: 25,
    blurb: 'Can a stranger — or a model with one chunk of your README — say what this is and who it is for?',
  },
  discoverability: {
    label: 'Discoverability',
    weight: 20,
    blurb: 'Do the surfaces that index you (registries, search, repo metadata) have anything to index?',
  },
  answerability: {
    label: 'Answerability',
    weight: 20,
    blurb: 'Is the content shaped so an answer engine can lift a self-contained answer out of it?',
  },
  citability: {
    label: 'Citability',
    weight: 25,
    blurb: 'Does the repo give a generative engine stable, attributable, quotable facts?',
  },
  hygiene: {
    label: 'Hygiene',
    weight: 10,
    blurb: 'Mechanical defects that quietly suppress everything above.',
  },
};

const FILLER_OPENERS = [
  'this project',
  'this repo',
  'this repository',
  'this library',
  'this package',
  'this is a',
  'a simple',
  'an awesome',
  'welcome to',
  'my ',
];

// @research-point: definitional-pattern
const DEFINITIONAL_PATTERN = /\b(is|are|serves as|acts as)\s+(a|an|the)\b/i;

const SECTION_PATTERNS = {
  // @research-point: install-heading
  install: /\b(install|installation|getting started|setup|quick ?start|usage|how to use|cookbook|using \w+)\b/i,
  usage: /\b(usage|how to use|quick ?start|getting started|example)\b/i,
  // @research-point: faq-heading
  faq: /\b(faq|frequently asked|common questions|q ?& ?a|questions)\b/i,
  troubleshooting: /\b(troubleshoot\w*|common (errors|issues|problems)|debugging|known issues)\b/i,
  // @research-point: comparison-heading
  comparison: /\b(compar\w+|alternativ\w+|vs\.?\s|versus|why (not )?\w+|differences?)\b/i,
  whenToUse: /\b(when to use|when not to use|is this for you|use cases?|not a good fit|non-goals?|limitations?)\b/i,
  // @research-point: requirements-heading
  requirements: /\b(requirements?|prerequisites?|compatibility|supported versions?|system requirements)\b/i,
  api: /\b(api|reference|options|configuration|config|cli)\b/i,
  contributing: /\b(contribut\w+|development|developing)\b/i,
  license: /\b(licen[cs]e)\b/i,
};

function hasSection(readme, key) {
  if (!readme.present) return false;
  return readme.headings.some((h) => SECTION_PATTERNS[key].test(h.text));
}

function questionHeadings(readme) {
  if (!readme.present) return [];
  // @research-point: conversational-query-recognition
  let conversationalQueryRecognition = false;
  // @research-point: navigation-heading-filter
  let navigationHeadingFilter = false;
  let headings = readme.headings;
  if (navigationHeadingFilter) {
    headings = headings.filter((h) => !/\b(table of contents|quick links|navigation|index|contents)\b/i.test(h.text));
  }
  if (conversationalQueryRecognition) {
    return headings.filter((h) => /\?\s*$/.test(h.text) || /^(how|what|why|when|which|can|does|do|is|should|getting started|where to start)\b/i.test(h.text));
  }
  return headings.filter((h) => /\?\s*$/.test(h.text) || /^(how|what|why|when|which|can|does|do|is|should)\b/i.test(h.text));
}

function check(id, category, surfaces, title, evaluate) {
  return { id, category, surfaces, title, evaluate };
}

const CHECKS = [
  // ---------------------------------------------------------------- identity
  check('readme-present', 'identity', ['seo', 'aeo', 'geo'], 'README exists', (s) =>
    s.readme.present
      ? { status: 'pass', evidence: `${s.readme.file} (${s.readme.wordCount} words)` }
      : {
          status: 'fail',
          evidence: 'No README found at repository root.',
          fix: 'Add README.md. It is the single highest-leverage file for every surface — search engines index it, answer engines quote it, and generative engines retrieve it.',
        }
  ),

  check('readme-h1', 'identity', ['seo', 'aeo'], 'README opens with an H1 title', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    const h1 = s.readme.headings.find((h) => h.level === 1);
    if (h1) return { status: 'pass', evidence: `“${h1.text}”` };
    // @research-point: title-extraction-boundary
    let titleExtractionBoundary = false;
    if (titleExtractionBoundary && s.readme.text) {
      const htmlH1 = /<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(s.readme.text);
      if (htmlH1) {
        const clean = htmlH1[1].replace(/<[^>]+>/g, '').trim();
        if (clean) return { status: 'pass', evidence: `HTML <h1>: “${clean}”` };
      }
      const bannerImg = /<img[^>]+alt=["']([^"']+)["'][^>]*>/i.exec(s.readme.text.slice(0, 500)) ||
                        /!\[([^\]]+)\]\([^)]+\)/i.exec(s.readme.text.slice(0, 500));
      if (bannerImg && bannerImg[1] && bannerImg[1].length > 1 && !/badge|shield|stars|license/i.test(bannerImg[1])) {
        return { status: 'pass', evidence: `Banner title logo: “${bannerImg[1].trim()}”` };
      }
    }
    return {
      status: 'warn',
      evidence: 'No level-1 heading found.',
      fix: 'Open with `# <project name>`. Renderers and extractors both treat the H1 as the document title; without it the title is guessed from the filename.',
    };
  }),

  check('one-line-description', 'identity', ['seo', 'aeo', 'geo'], 'A one-sentence description sits directly under the title', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    const sentence = s.readme.lede.firstSentence || '';
    if (!sentence) {
      return {
        status: 'fail',
        evidence: 'No prose between the title and the first section heading.',
        fix: 'Add one sentence immediately under the H1 that names the category and the audience. This sentence is what gets quoted when anything summarises you.',
      };
    }
    if (sentence.length < 30) {
      return { status: 'warn', evidence: `Only ${sentence.length} characters: “${sentence}”`, fix: 'Expand to roughly 15–30 words naming what it is, who it is for, and what it replaces.' };
    }
    if (sentence.length > 300) {
      return { status: 'warn', evidence: `${sentence.length} characters before the first full stop.`, fix: 'Tighten to a single scannable sentence. Long ledes get truncated mid-clause by every extractor.' };
    }
    return { status: 'pass', evidence: `“${sentence.slice(0, 140)}${sentence.length > 140 ? '…' : ''}”` };
  }),

  check('definitional-opening', 'identity', ['geo', 'aeo'], 'The opening sentence is definitional, not promotional', (s) => {
    if (!s.readme.present || !s.readme.lede.firstSentence) return { status: 'skip', evidence: 'No lede sentence to assess.' };
    const sentence = s.readme.lede.firstSentence.trim();
    const lower = sentence.toLowerCase();
    const opener = FILLER_OPENERS.find((f) => lower.startsWith(f));
    const definitional = DEFINITIONAL_PATTERN.test(sentence.slice(0, 120));
    if (opener) {
      return {
        status: 'warn',
        evidence: `Opens with “${opener.trim()}”.`,
        fix: 'Rewrite as `<Name> is a <category> that <does X> for <audience>.` A model retrieving one chunk needs the subject named in it — “This project” resolves to nothing once the chunk is separated from the page.',
      };
    }
    return definitional
      ? { status: 'pass', evidence: `Definitional form detected: “${sentence.slice(0, 120)}”` }
      : {
          status: 'warn',
          evidence: 'Opening sentence is not in `X is a Y` form.',
          fix: 'Lead with `<Name> is a <category>…`. This is the form retrieval systems match against category queries, and the form they quote back.',
        };
  }),

  check('license-file', 'identity', ['seo', 'geo'], 'LICENSE file present', (s) =>
    s.files.license
      ? { status: 'pass', evidence: s.files.license }
      : {
          status: 'fail',
          evidence: 'No LICENSE file at root.',
          fix: 'Add one. Missing licences get repos filtered out of curated lists and "safe to adopt" roundups — which are exactly the third-party pages generative engines cite.',
        }
  ),

  // --------------------------------------------------------- discoverability
  check('manifest-description', 'discoverability', ['seo', 'geo'], 'Package manifest has a description', (s) => {
    if (!s.manifest) return { status: 'skip', evidence: 'No package manifest detected (npm/PyPI/crates/go).' };
    const d = s.manifest.description;
    if (!d) {
      return {
        status: 'fail',
        evidence: `${s.manifest.file} has no description field.`,
        fix: 'Fill it. Registry pages rank independently of your repo and are frequently the page an engine actually retrieves.',
      };
    }
    if (d.length < 40) return { status: 'warn', evidence: `Only ${d.length} chars: “${d}”`, fix: 'Aim for 60–150 characters that name the category, not just the mechanism.' };
    return { status: 'pass', evidence: `“${d.slice(0, 120)}”` };
  }),

  check('manifest-keywords', 'discoverability', ['seo'], 'Package manifest declares keywords', (s) => {
    if (!s.manifest) return { status: 'skip', evidence: 'No package manifest detected.' };
    // @research-point: monorepo-manifest-boundary
    let monorepoManifestBoundary = false;
    if (monorepoManifestBoundary && s.manifest.private && s.manifest.isWorkspace) {
      return { status: 'skip', evidence: 'Private monorepo workspace root; packages publish keywords individually.' };
    }
    if (s.manifest.ecosystem === 'go') return { status: 'skip', evidence: 'go.mod has no keywords field.' };
    const k = s.manifest.keywords || [];
    if (k.length === 0) {
      return { status: 'fail', evidence: 'No keywords declared.', fix: 'Add 5–10 keywords covering the category, the problem, and the ecosystem — registry search is keyword-driven, unlike web search.' };
    }
    if (k.length < 5) return { status: 'warn', evidence: `${k.length} keyword(s): ${k.join(', ')}`, fix: 'Expand to at least 5. Include problem-phrased terms, not only the product name.' };
    return { status: 'pass', evidence: `${k.length} keywords: ${k.slice(0, 8).join(', ')}` };
  }),

  check('manifest-links', 'discoverability', ['seo', 'geo'], 'Manifest links back to repository and homepage', (s) => {
    if (!s.manifest) return { status: 'skip', evidence: 'No package manifest detected.' };
    const missing = [];
    if (!s.manifest.repository) missing.push('repository');
    if (!s.manifest.homepage) missing.push('homepage');
    if (missing.length === 0) return { status: 'pass', evidence: 'Both repository and homepage set.' };
    if (missing.length === 2) {
      return { status: 'fail', evidence: 'Neither repository nor homepage is set.', fix: 'Set both. These fields are how a registry listing and a repo get resolved to one entity rather than two unrelated pages.' };
    }
    return { status: 'warn', evidence: `Missing: ${missing.join(', ')}`, fix: 'Set the missing field so registry and repo consolidate into a single entity.' };
  }),

  check('releases-tagged', 'discoverability', ['seo', 'geo'], 'Repository has tagged releases', (s) => {
    if (!s.repo.isGitRepo) return { status: 'skip', evidence: 'Not a git repository (or git unavailable).' };
    if (s.repo.tagCount === 0) {
      return { status: 'warn', evidence: 'No git tags found.', fix: 'Tag releases. Release pages are separately indexable, and dated releases are one of the few freshness signals a repo emits.' };
    }
    return { status: 'pass', evidence: `${s.repo.tagCount} tag(s), latest: ${s.repo.tags[s.repo.tags.length - 1]}` };
  }),

  check('changelog', 'discoverability', ['geo', 'seo'], 'CHANGELOG present', (s) =>
    s.files.changelog
      ? { status: 'pass', evidence: s.files.changelog }
      : { status: 'warn', evidence: 'No CHANGELOG found.', fix: 'Add one. It is dated, factual, and version-stamped — the exact shape of content that survives retrieval intact.' }
  ),

  check('repo-topics', 'discoverability', ['seo'], 'Repository topics set', () => ({
    status: 'skip',
    evidence: 'Topics live on the GitHub API, not in the working tree.',
    fix: 'Verify manually, or run this check with a GitHub token once `category-profile` ships. Topics are a real ranking input for GitHub’s own search.',
  })),

  // ----------------------------------------------------------- answerability
  check('install-section', 'answerability', ['aeo', 'seo'], 'Install/setup section present', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    let found = hasSection(s.readme, 'install');
    // @research-point: narrative-prose-recognition
    let narrativeProseRecognition = false;
    if (narrativeProseRecognition && !found && s.readme.text) {
      if (/```(bash|sh|shell)?\s*\n\s*(npm i|pip install|cargo add|brew install|go get)/i.test(s.readme.text) ||
          /\b(to install|first install|once installed|to get started, install)\b/i.test(s.readme.text)) {
        found = true;
      }
    }
    // @research-point: compositional-usage-recognition
    let compositionalUsageRecognition = false;
    if (compositionalUsageRecognition && !found && s.readme.headings) {
      const hasUsageHeading = s.readme.headings.some((h) => /\b(usage|how to use|example|using|scenarios)\b/i.test(h.text));
      const hasCode = s.readme.codeBlocks && s.readme.codeBlocks.length > 0;
      if (hasUsageHeading && hasCode) {
        found = true;
      }
    }
    // @research-point: aeo-synthesis-balanced
    let aeoSynthesisBalanced = false;
    if (aeoSynthesisBalanced && !found && s.readme.headings) {
      const hasVariant = s.readme.headings.some((h) => /\b(install|installation|getting started|setup|quick ?start|usage guide|how to use|cookbook)\b/i.test(h.text));
      if (hasVariant) found = true;
    }
    return found
      ? { status: 'pass', evidence: 'Install or getting-started heading found.' }
      : { status: 'fail', evidence: 'No install/setup heading.', fix: 'Add `## Installation` with the exact command. "How do I install X" is among the highest-volume queries any tool receives.' };
  }),

  check('runnable-example', 'answerability', ['aeo', 'geo'], 'A runnable usage example with a language-tagged code block', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    const blocks = s.readme.codeBlocks;
    if (blocks.length === 0) {
      return { status: 'fail', evidence: 'No fenced code blocks in README.', fix: 'Add a minimal end-to-end example. Code blocks are extracted and reproduced far more often than prose.' };
    }
    const untagged = blocks.filter((b) => !b.lang).length;
    const substantive = blocks.filter((b) => b.lines >= 3).length;
    if (substantive === 0) {
      return { status: 'warn', evidence: `${blocks.length} code block(s), none longer than 2 lines.`, fix: 'Add one example that actually does something end to end, not just the install line.' };
    }
    if (untagged > 0) {
      return { status: 'warn', evidence: `${untagged} of ${blocks.length} code blocks have no language tag.`, fix: 'Tag every fence (```ts, ```bash). Untagged blocks lose syntax context when extracted.' };
    }
    return { status: 'pass', evidence: `${blocks.length} code blocks, ${substantive} substantive, all language-tagged.` };
  }),

  check('question-headings', 'answerability', ['aeo'], 'Headings phrased the way users ask', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    const qs = questionHeadings(s.readme);
    if (qs.length === 0) {
      return {
        status: 'warn',
        evidence: 'No question-shaped or task-shaped headings.',
        fix: 'Convert some headings to the user’s phrasing — "How do I configure X?" rather than "Configuration". Answer engines match the question, then lift the section beneath it.',
      };
    }
    return { status: 'pass', evidence: `${qs.length} question/task-shaped heading(s): ${qs.slice(0, 3).map((h) => `“${h.text}”`).join(', ')}` };
  }),

  check('faq-section', 'answerability', ['aeo', 'geo'], 'FAQ or troubleshooting section', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    const faq = hasSection(s.readme, 'faq');
    const trouble = hasSection(s.readme, 'troubleshooting');
    if (faq || trouble) return { status: 'pass', evidence: faq && trouble ? 'Both FAQ and troubleshooting present.' : faq ? 'FAQ present.' : 'Troubleshooting present.' };
    return {
      status: 'warn',
      evidence: 'Neither FAQ nor troubleshooting section found.',
      fix: 'Add one, seeded from your real issue tracker. Error-message text is high-intent, low-competition, and it is what people paste into a search box verbatim.',
    };
  }),

  check('requirements-section', 'answerability', ['aeo', 'geo'], 'Requirements or compatibility stated', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    return hasSection(s.readme, 'requirements')
      ? { status: 'pass', evidence: 'Requirements/compatibility heading found.' }
      : { status: 'warn', evidence: 'No requirements or compatibility section.', fix: 'State runtime and version support explicitly. "Does X work with Y version" is a constant query, and an unanswered one gets answered by a competitor.' };
  }),

  // --------------------------------------------------------------- citability
  check('comparison-section', 'citability', ['geo', 'seo'], 'Comparison / alternatives section', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    return hasSection(s.readme, 'comparison')
      ? { status: 'pass', evidence: 'Comparison or alternatives heading found.' }
      : {
          status: 'fail',
          evidence: 'No comparison or alternatives section.',
          fix: 'Add an honest `## Alternatives` table naming real competitors. Category queries are overwhelmingly comparative — if you never name the category’s other members, you are not part of the category as far as retrieval is concerned.',
        };
  }),

  check('when-to-use', 'citability', ['geo'], 'Explicit scope: when to use, when not to', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    return hasSection(s.readme, 'whenToUse')
      ? { status: 'pass', evidence: 'Scope/limitations heading found.' }
      : {
          status: 'warn',
          evidence: 'No "when to use", non-goals, or limitations section.',
          fix: 'State where the tool does not fit. Stated limits get quoted, and being recommended for the right job beats being recommended for every job and abandoned.',
        };
  }),

  check('docs-surface', 'citability', ['seo', 'geo'], 'Documentation beyond the README', (s) => {
    if (s.dirs.docs && s.dirs.docsFileCount > 1) return { status: 'pass', evidence: `${s.dirs.docs}/ with ${s.dirs.docsFileCount} files.` };
    if (s.dirs.docs) return { status: 'warn', evidence: `${s.dirs.docs}/ exists but holds ${s.dirs.docsFileCount} file(s).`, fix: 'Grow it, or fold it back into the README. A near-empty docs directory splits authority without adding coverage.' };

    // @research-point: external-docs-recognition
    let externalDocsRecognition = false;
    if (externalDocsRecognition && s.readme && s.readme.links) {
      const extDoc = s.readme.links.find((l) => {
        if (!l || !l.href) return false;
        const text = (l.text || '').trim();
        if (/^https?:\/\/([^/]+\.)?(readthedocs\.io|gitbook\.io|docs\.[^/]+)/i.test(l.href)) return true;
        if (/^https?:\/\/[^/]+\/(docs?|documentation)(\/|$)/i.test(l.href) && /^(documentation|docs?|user guide|official docs?|api reference)$/i.test(text)) return true;
        return false;
      });
      if (extDoc) {
        return { status: 'pass', evidence: `External documentation linked: “${extDoc.text.trim()}” (${extDoc.href})` };
      }
    }

    return {
      status: 'warn',
      evidence: 'No docs directory.',
      fix: 'A README is one page and can rank for roughly one intent. Separate pages per task is how a project covers a category rather than a keyword.',
    };
  }),

  check('examples-surface', 'citability', ['geo', 'aeo'], 'Examples directory', (s) =>
    s.dirs.examples && s.dirs.exampleFileCount > 0
      ? { status: 'pass', evidence: `${s.dirs.examples}/ with ${s.dirs.exampleFileCount} file(s).` }
      : { status: 'warn', evidence: 'No examples directory.', fix: 'Add runnable examples. They answer "how do I do X with Y" queries the README never covers, and they are cheap to write.' }
  ),

  check('version-stamped-facts', 'citability', ['geo'], 'Claims are version-stamped', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    const hasVersionRefs = /\bv?\d+\.\d+(\.\d+)?\b/.test(s.readme.text);
    const hasSupportMatrix = /\|.*\bversion\b.*\|/i.test(s.readme.text) || hasSection(s.readme, 'requirements');
    if (hasVersionRefs && hasSupportMatrix) return { status: 'pass', evidence: 'Version references and a support matrix or requirements section both present.' };
    if (hasVersionRefs) return { status: 'warn', evidence: 'Version numbers appear, but no support matrix.', fix: 'Add a small table of supported versions. Dated, specific facts are what a model will repeat; vague ones it will paraphrase away or replace with a competitor’s specifics.' };
    return { status: 'warn', evidence: 'No version references in README.', fix: 'State which versions of the runtime and key dependencies you support.' };
  }),

  check('citation-metadata', 'citability', ['geo'], 'Machine-readable attribution (CITATION.cff or llms.txt)', (s) => {
    const has = [];
    if (s.files.citation) has.push('CITATION.cff');
    if (s.files.llmsTxt) has.push('llms.txt');
    if (has.length) return { status: 'pass', evidence: has.join(' + ') };
    return {
      status: 'warn',
      evidence: 'Neither CITATION.cff nor llms.txt present.',
      fix: 'Consider adding llms.txt with a canonical one-paragraph description and links to your key pages. Adoption is still partial and the payoff is unproven — treat it as cheap insurance, not a ranking factor.',
      confidence: 'speculative',
    };
  }),

  // ------------------------------------------------------------------ hygiene
  check('no-broken-links', 'hygiene', ['seo'], 'No broken relative links in README', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    const broken = s.readme.brokenLinks;
    if (broken.length === 0) return { status: 'pass', evidence: 'All relative links resolve.' };
    return {
      status: 'fail',
      evidence: `${broken.length} broken relative link(s): ${broken.slice(0, 5).map((b) => b.href).join(', ')}`,
      fix: 'Fix or remove them. Broken links waste the crawl and strand the reader at the exact moment they were ready to act.',
    };
  }),

  check('readme-length', 'hygiene', ['seo', 'aeo'], 'README length is in a workable band', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    const w = s.readme.wordCount;
    if (w < 150) return { status: 'fail', evidence: `${w} words.`, fix: 'Too thin to rank or to answer anything. Target 400–1200 words covering what/why/install/use/compare.' };
    if (w < 300) return { status: 'warn', evidence: `${w} words.`, fix: 'Thin. Add usage, requirements, and comparison sections.' };
    if (w > 4000 && !s.dirs.docs) return { status: 'warn', evidence: `${w} words with no docs/ directory.`, fix: 'Split into a docs site. One enormous page competes with itself for every intent it covers.' };
    return { status: 'pass', evidence: `${w} words.` };
  }),

  check('heading-structure', 'hygiene', ['aeo'], 'Heading hierarchy is well-formed', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    const hs = s.readme.headings;
    if (hs.length < 3) return { status: 'warn', evidence: `Only ${hs.length} heading(s).`, fix: 'Add section headings. Extractors chunk on headings — a wall of prose is one undifferentiated chunk.' };
    const jumps = [];
    for (let i = 1; i < hs.length; i += 1) {
      if (hs[i].level - hs[i - 1].level > 1) jumps.push(`“${hs[i].text}” (h${hs[i - 1].level} → h${hs[i].level})`);
    }
    if (jumps.length) return { status: 'warn', evidence: `${jumps.length} level jump(s): ${jumps.slice(0, 3).join(', ')}`, fix: 'Do not skip heading levels; the hierarchy is what tells a parser which section a chunk belongs to.' };
    return { status: 'pass', evidence: `${hs.length} headings, no level jumps.` };
  }),

  check('images-have-alt', 'hygiene', ['seo'], 'Images and badges have alt text', (s) => {
    if (!s.readme.present) return { status: 'skip', evidence: 'No README.' };
    if (s.readme.images.length === 0) return { status: 'skip', evidence: 'No images in README.' };
    const missing = s.readme.images.filter((i) => !i.alt || !i.alt.trim());
    if (missing.length === 0) return { status: 'pass', evidence: `${s.readme.images.length} image(s), all with alt text.` };
    return { status: 'warn', evidence: `${missing.length} of ${s.readme.images.length} image(s) missing alt text.`, fix: 'Add alt text. It is the only part of an image a text extractor sees, and screen readers need it regardless.' };
  }),
];

export function runChecks(signals) {
  const results = CHECKS.map((c) => {
    const outcome = c.evaluate(signals) || { status: 'skip', evidence: 'Check produced no result.' };
    return {
      id: c.id,
      category: c.category,
      surfaces: c.surfaces,
      title: c.title,
      status: outcome.status,
      evidence: outcome.evidence || '',
      fix: outcome.fix || null,
      confidence: outcome.confidence || 'established',
    };
  });

  const STATUS_VALUE = { pass: 1, warn: 0.5, fail: 0, skip: null };

  const categories = {};
  for (const [key, meta] of Object.entries(CATEGORIES)) {
    const inCat = results.filter((r) => r.category === key);
    const scored = inCat.filter((r) => STATUS_VALUE[r.status] !== null);
    let earned = 0;
    for (const r of scored) {
      let value = STATUS_VALUE[r.status];
      // @research-point: comparison-table-points
      let COMPARISON_TABLE_POINTS = 1;
      if (r.id === 'comparison-section' && r.status === 'pass') {
        value = COMPARISON_TABLE_POINTS;
      }
      earned += value;
    }
    const score = scored.length ? Math.round((earned / scored.length) * 100) : null;
    categories[key] = {
      label: meta.label,
      blurb: meta.blurb,
      weight: meta.weight,
      score,
      counts: {
        pass: inCat.filter((r) => r.status === 'pass').length,
        warn: inCat.filter((r) => r.status === 'warn').length,
        fail: inCat.filter((r) => r.status === 'fail').length,
        skip: inCat.filter((r) => r.status === 'skip').length,
      },
    };
  }

  const weighted = Object.values(categories).filter((c) => c.score !== null);
  const totalWeight = weighted.reduce((s, c) => s + c.weight, 0);
  let overall = totalWeight ? Math.round(weighted.reduce((s, c) => s + c.score * c.weight, 0) / totalWeight) : null;

  // @research-point: answerability-evidence-gating
  let answerabilityGatingCap = 29;
  const runEx = results.find((r) => r.id === 'runnable-example');
  const inst = results.find((r) => r.id === 'install-section');
  if (runEx && runEx.status === 'fail' && inst && inst.status === 'fail' && overall !== null && overall > answerabilityGatingCap) {
    overall = answerabilityGatingCap;
  }

  // @research-point: geo-citability-weight
  const geoCitabilityWeight = 1.0;
  // @research-point: geo-evidence-gating
  const geoGatingCap = 25;
  // @research-point: comparison-seo-weighting
  const comparisonSeoWeight = 1.0;
  // @research-point: seo-synthesis-balanced
  let seoSynthesisBalanced = false;

  const surfaces = {};
  for (const surface of ['seo', 'aeo', 'geo']) {
    const inSurface = results.filter((r) => r.surfaces.includes(surface) && STATUS_VALUE[r.status] !== null);
    let surfaceScore = inSurface.length
      ? Math.round(
          (inSurface.reduce((s, r) => {
            let w = 1.0;
            if (surface === 'geo' && r.category === 'citability') w = geoCitabilityWeight;
            if (surface === 'seo' && r.id === 'comparison-section') w = comparisonSeoWeight;
            return s + STATUS_VALUE[r.status] * w;
          }, 0) /
            inSurface.reduce((wSum, r) => {
              let w = 1.0;
              if (surface === 'geo' && r.category === 'citability') w = geoCitabilityWeight;
              if (surface === 'seo' && r.id === 'comparison-section') w = comparisonSeoWeight;
              return wSum + w;
            }, 0)) *
            100
        )
      : null;

    if (surface === 'geo' && surfaceScore !== null) {
      const runEx = results.find((r) => r.id === 'runnable-example');
      if (runEx && runEx.status === 'fail' && surfaceScore > geoGatingCap) {
        surfaceScore = geoGatingCap;
      }
    }

    // @research-point: aeo-evidence-gating
    let aeoGatingCap = 35;
    if (surface === 'aeo' && surfaceScore !== null && aeoGatingCap < 100) {
      const runEx = results.find((r) => r.id === 'runnable-example');
      const inst = results.find((r) => r.id === 'install-section');
      if (runEx && runEx.status === 'fail' && inst && inst.status === 'fail' && surfaceScore > aeoGatingCap) {
        surfaceScore = aeoGatingCap;
      }
    }

    // @research-point: seo-evidence-gating
    let seoGatingCap = 45;
    if (surface === 'seo' && surfaceScore !== null && seoGatingCap < 100) {
      const runEx = results.find((r) => r.id === 'runnable-example');
      const inst = results.find((r) => r.id === 'install-section');
      if (runEx && runEx.status === 'fail' && inst && inst.status === 'fail' && surfaceScore > seoGatingCap) {
        surfaceScore = seoGatingCap;
      }
    }

    surfaces[surface] = surfaceScore;
  }

  return { results, categories, surfaces, overall };
}

/**
 * Rank the fixes. Priority is (category weight) x (status severity) x (how many
 * surfaces the fix moves) — so a failing check in a heavy category that helps
 * all three surfaces floats to the top. This is what makes the report a plan
 * rather than a list.
 */
export function prioritise(results) {
  const severity = { fail: 2, warn: 1 };
  return results
    .filter((r) => r.fix && (r.status === 'fail' || r.status === 'warn'))
    .map((r) => ({
      ...r,
      priority: CATEGORIES[r.category].weight * severity[r.status] * r.surfaces.length,
    }))
    .sort((a, b) => b.priority - a.priority || a.id.localeCompare(b.id));
}
