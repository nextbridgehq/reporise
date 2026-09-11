#!/usr/bin/env node
/**
 * test.mjs — zero-dependency test harness.
 *
 * Builds throwaway fixture repos in a temp directory and asserts that the
 * audit reaches the right verdicts. The point is not coverage for its own
 * sake: an audit that scores wrong sends the user to fix the wrong thing, so
 * the checks that decide a score need to be pinned.
 */

import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { audit } from './audit.mjs';
import { loadConfig, resolveFetch, resolveEngines } from './lib/adapters.mjs';

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed += 1;
    process.stdout.write(`  ✓ ${name}\n`);
  } catch (err) {
    failed += 1;
    process.stdout.write(`  ✗ ${name}\n    ${err.message}\n`);
  }
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg || 'assertion failed');
}

function statusOf(result, id) {
  const r = result.results.find((x) => x.id === id);
  if (!r) throw new Error(`No check with id "${id}"`);
  return r.status;
}

function makeRepo(files) {
  const dir = mkdtempSync(join(tmpdir(), 'reporise-fixture-'));
  for (const [rel, content] of Object.entries(files)) {
    const full = join(dir, rel);
    mkdirSync(join(full, '..'), { recursive: true });
    writeFileSync(full, content);
  }
  return dir;
}

const cleanup = [];
function fixture(files) {
  const dir = makeRepo(files);
  cleanup.push(dir);
  return dir;
}

// --------------------------------------------------------------- fixtures

const BARE = fixture({
  'index.js': 'module.exports = {};',
});

const WEAK = fixture({
  'README.md': `# thing

This project does stuff.

## Install
\`\`\`
npm i thing
\`\`\`

See [the docs](./docs/guide.md).
`,
  'package.json': JSON.stringify({ name: 'thing', version: '1.0.0' }),
});

const STRONG = fixture({
  'README.md': `# Loopguard

Loopguard is a runtime loop-detection library for LLM agents that halts
repeating tool-call cycles before they burn a budget.

## Requirements

Node 18+. Tested against v18.0.0, v20.0.0 and v22.0.0.

| Runtime | Supported |
| --- | --- |
| Node 18 | yes |
| Node 22 | yes |

## Installation

\`\`\`bash
npm install loopguard
\`\`\`

## How do I guard an agent loop?

\`\`\`ts
import { guard } from 'loopguard';

const g = guard({ window: 5 });
for (const step of agent) {
  if (g.check(step)) break;
}
\`\`\`

## When to use this

Use it for long-running autonomous agents. Do not use it for single-shot
completions, where the overhead buys nothing.

## Alternatives

| Tool | Focus |
| --- | --- |
| Loopguard | runtime detection |
| other-lib | static analysis |

## FAQ

### Why did my loop not trigger?

Because the window is too small.

## License

MIT
`,
  'LICENSE': 'MIT License',
  'CHANGELOG.md': '# Changelog\n\n## 1.0.0\n- initial',
  'CITATION.cff': 'cff-version: 1.2.0',
  'package.json': JSON.stringify({
    name: 'loopguard',
    version: '1.0.0',
    description: 'Runtime loop-detection for LLM agents that halts repeating tool-call cycles before they burn a budget.',
    keywords: ['llm', 'agent', 'loop-detection', 'guardrail', 'observability', 'ai'],
    homepage: 'https://example.com',
    repository: 'https://github.com/x/loopguard',
  }),
  'docs/guide.md': '# Guide',
  'docs/api.md': '# API',
  'examples/basic.ts': 'console.log(1);',
});

// ------------------------------------------------------------------ tests

process.stdout.write('\ncollect + checks\n');

test('bare repo scores low and flags a missing README', () => {
  const r = audit(BARE);
  assert(statusOf(r, 'readme-present') === 'fail', 'expected readme-present to fail');
  assert(r.overall < 40, `expected low overall score, got ${r.overall}`);
});

test('checks depending on the README skip rather than fail when absent', () => {
  const r = audit(BARE);
  assert(statusOf(r, 'question-headings') === 'skip', 'expected skip, not a guessed failure');
});

test('skipped checks are excluded from the score, not counted as zero', () => {
  const r = audit(BARE);
  assert(r.categories.answerability.score === null, 'answerability should be unscored with no README');
});

test('weak README flags the filler opener', () => {
  const r = audit(WEAK);
  assert(statusOf(r, 'definitional-opening') === 'warn', 'expected "This project" to be flagged');
});

test('weak README flags the missing comparison section', () => {
  assert(statusOf(audit(WEAK), 'comparison-section') === 'fail');
});

test('broken relative links are detected', () => {
  const r = audit(WEAK);
  assert(statusOf(r, 'no-broken-links') === 'fail', 'docs/guide.md does not exist in the weak fixture');
});

test('untagged code fences are flagged', () => {
  assert(statusOf(audit(WEAK), 'runnable-example') === 'warn');
});

test('strong README passes identity checks', () => {
  const r = audit(STRONG);
  assert(statusOf(r, 'definitional-opening') === 'pass', 'expected "Loopguard is a ..." to pass');
  assert(statusOf(r, 'one-line-description') === 'pass');
  assert(statusOf(r, 'license-file') === 'pass');
});

test('strong README passes answerability and citability checks', () => {
  const r = audit(STRONG);
  assert(statusOf(r, 'install-section') === 'pass');
  assert(statusOf(r, 'question-headings') === 'pass');
  assert(statusOf(r, 'faq-section') === 'pass');
  assert(statusOf(r, 'comparison-section') === 'pass');
  assert(statusOf(r, 'when-to-use') === 'pass');
  assert(statusOf(r, 'version-stamped-facts') === 'pass');
});

test('strong repo outscores weak repo outscores bare repo', () => {
  const s = audit(STRONG).overall;
  const w = audit(WEAK).overall;
  const b = audit(BARE).overall;
  assert(s > w && w > b, `expected strong(${s}) > weak(${w}) > bare(${b})`);
});

test('manifest keywords are read from package.json', () => {
  assert(statusOf(audit(STRONG), 'manifest-keywords') === 'pass');
});

test('missing manifest produces skip, not fail', () => {
  const dir = fixture({ 'README.md': '# x\n\nx is a thing that does y for z developers.\n' });
  assert(statusOf(audit(dir), 'manifest-keywords') === 'skip');
});

test('surface scores are computed for all three surfaces', () => {
  const r = audit(STRONG);
  for (const s of ['seo', 'aeo', 'geo']) {
    assert(typeof r.surfaces[s] === 'number', `${s} score missing`);
  }
});

test('fix list is ranked and every entry carries a fix', () => {
  const r = audit(WEAK);
  const ranked = r.topFixes;
  assert(ranked.length > 0, 'expected ranked fixes');
  for (let i = 1; i < ranked.length; i += 1) {
    assert(ranked[i - 1].priority >= ranked[i].priority, 'fixes out of priority order');
  }
});

test('README text is stripped from the written artifact', () => {
  const r = audit(STRONG);
  assert(r.signals.readme.text === undefined, 'raw README text should not be duplicated into audit.json');
  assert(r.signals.readme.wordCount > 0, 'but derived signals should survive');
});

process.stdout.write('\nadapters\n');

test('default config resolves with no API keys', () => {
  const cfg = loadConfig({});
  assert(resolveFetch(cfg).id === 'websearch');
  assert(resolveEngines(cfg)[0].id === 'claude');
});

test('unimplemented drivers throw a clear error rather than degrading silently', () => {
  let threw = false;
  try {
    resolveFetch(loadConfig({ fetch: 'exa' }));
  } catch (err) {
    threw = /not implemented/i.test(err.message);
  }
  assert(threw, 'expected an explicit "not implemented" error');
});

test('unknown config keys are rejected', () => {
  let threw = false;
  try {
    loadConfig({ nonsense: true });
  } catch {
    threw = true;
  }
  assert(threw);
});

// ----------------------------------------------------------------- teardown

for (const dir of cleanup) rmSync(dir, { recursive: true, force: true });

process.stdout.write(`\n${passed} passed, ${failed} failed\n`);
process.exit(failed ? 1 : 0);
