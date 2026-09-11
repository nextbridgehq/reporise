#!/usr/bin/env node
/**
 * reporise audit — offline repository visibility audit.
 *
 * Usage:
 *   node scripts/audit.mjs [path] [options]
 *
 * Options:
 *   --json            Print the full audit JSON to stdout instead of markdown
 *   --out <dir>       Where to write artifacts (default: <path>/.reporise)
 *   --no-write        Print only; write nothing to disk
 *   --quiet           Suppress the human summary on stderr
 *   --fail-under <n>  Exit 1 if the overall score is below n (for CI)
 *   --help
 *
 * Exit codes: 0 ok · 1 below threshold · 2 usage or runtime error
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { collect } from './lib/collect.mjs';
import { validateSignals } from './lib/signal-schema.mjs';
import { runChecks, prioritise } from './lib/checks.mjs';
import { renderMarkdown } from './lib/report.mjs';
import { loadConfig } from './lib/adapters.mjs';

const VERSION = '0.1.0';

function parseArgs(argv) {
  const opts = { path: '.', json: false, out: null, write: true, quiet: false, failUnder: null };
  const rest = [];
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--json') opts.json = true;
    else if (a === '--no-write') opts.write = false;
    else if (a === '--quiet') opts.quiet = true;
    else if (a === '--help' || a === '-h') opts.help = true;
    else if (a === '--version' || a === '-v') opts.version = true;
    else if (a === '--out') opts.out = argv[++i];
    else if (a === '--fail-under') opts.failUnder = Number(argv[++i]);
    else if (a.startsWith('--')) throw new Error(`Unknown option: ${a}`);
    else rest.push(a);
  }
  if (rest.length > 1) throw new Error(`Expected at most one path, got ${rest.length}.`);
  if (rest.length === 1) opts.path = rest[0];
  return opts;
}

const HELP = `reporise v${VERSION} — offline repository visibility audit (SEO / AEO / GEO)

Usage:
  npx reporise [path] [options]
  reporise [path] [options]

Arguments:
  path              Path to repository root (default: .)

Options:
  --json            Print full audit JSON to stdout instead of markdown
  --out <dir>       Artifact output directory (default: <path>/.reporise)
  --no-write        Print report to stdout only; do not write files to disk
  --quiet           Suppress human summary on stderr (useful for CI/scripting)
  --fail-under <n>  Exit with code 1 if overall score is below n (for CI quality gates)
  -v, --version     Show version number
  -h, --help        Show this help message

Exit codes:
  0  Pass (and overall score >= --fail-under if specified)
  1  Overall score below --fail-under threshold
  2  Usage error or runtime failure

Writes .reporise/audit.json and .reporise/audit.md. Zero dependencies, offline by design.`;

export function audit(rootPath, config = {}) {
  const signals = validateSignals(collect(rootPath));
  const { results, categories, surfaces, overall } = runChecks(signals);
  // The full README text is useful during collection but bloats the artifact
  // and duplicates a file already on disk, so it is dropped before writing.
  const { text, ...readmeWithoutText } = signals.readme;
  return {
    version: VERSION,
    generatedAt: new Date().toISOString(),
    config: loadConfig(config),
    signals: { ...signals, readme: readmeWithoutText },
    results,
    categories,
    surfaces,
    overall,
    topFixes: prioritise(results).slice(0, 5).map((r) => ({ id: r.id, title: r.title, status: r.status, priority: r.priority })),
  };
}

function main() {
  let opts;
  try {
    opts = parseArgs(process.argv.slice(2));
  } catch (err) {
    process.stderr.write(`${err.message}\n\n${HELP}\n`);
    process.exit(2);
  }

  if (opts.help) {
    process.stdout.write(`${HELP}\n`);
    return;
  }
  if (opts.version) {
    process.stdout.write(`${VERSION}\n`);
    return;
  }

  let userConfig = {};
  const rootResolved = resolve(opts.path);
  const configPath = join(rootResolved, 'reporise.config.json');
  if (existsSync(configPath)) {
    try {
      userConfig = JSON.parse(readFileSync(configPath, 'utf8'));
    } catch (err) {
      process.stderr.write(`Could not parse ${configPath}: ${err.message}\n`);
      process.exit(2);
    }
  }

  let result;
  try {
    result = audit(opts.path, userConfig);
  } catch (err) {
    process.stderr.write(`reporise: ${err.message}\n`);
    process.exit(2);
  }

  const markdown = renderMarkdown(result);

  if (opts.write) {
    const outDir = opts.out ? resolve(opts.out) : join(resolve(opts.path), '.reporise');
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'audit.json'), `${JSON.stringify(result, null, 2)}\n`);
    writeFileSync(join(outDir, 'audit.md'), markdown);
    if (!opts.quiet) process.stderr.write(`Wrote ${join(outDir, 'audit.json')} and audit.md\n`);
  }

  process.stdout.write(opts.json ? `${JSON.stringify(result, null, 2)}\n` : `${markdown}\n`);

  if (!opts.quiet) {
    const top = result.topFixes.map((f) => `  ${f.status === 'fail' ? '✗' : '!'} ${f.title}`).join('\n');
    process.stderr.write(
      `\nOverall ${result.overall}%  (SEO ${result.surfaces.seo}% · AEO ${result.surfaces.aeo}% · GEO ${result.surfaces.geo}%)\nTop fixes:\n${top}\n`
    );
  }

  if (opts.failUnder !== null && result.overall < opts.failUnder) {
    process.stderr.write(`\nScore ${result.overall}% is below --fail-under ${opts.failUnder}.\n`);
    process.exit(1);
  }
}

// Compare resolved URLs, not filename suffixes: a sibling file named
// test-audit.mjs would satisfy an endsWith() check and run main() on import.
const invokedDirectly = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (invokedDirectly) main();
