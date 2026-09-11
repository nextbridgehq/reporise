/**
 * provenance.mjs — Cryptographic Provenance & Integrity Engine for RepoRise.
 *
 * Computes and verifies SHA-256 digests for:
 * 1. Frozen scoring engine and multi-document components.
 * 2. Automated test suite suites.
 * 3. Benchmark registry inventories and manifests.
 * 4. Runtime environment metadata.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = resolve(__dirname, '../../../../');

export const PROVENANCE_PATH = join(ROOT_DIR, 'benchmarks/PROVENANCE.json');

export const ENGINE_FILES = [
  'skills/visibility-audit/scripts/lib/checks.mjs',
  'skills/visibility-audit/scripts/lib/collect.mjs',
  'skills/visibility-audit/scripts/lib/resolver.mjs',
  'skills/visibility-audit/scripts/lib/evidence-graph.mjs',
  'skills/visibility-audit/scripts/lib/evidence-semantics.mjs',
  'skills/visibility-audit/scripts/lib/multi-audit.mjs',
  'skills/visibility-audit/scripts/lib/attribution.mjs',
  'skills/visibility-audit/scripts/lib/adapters.mjs',
];

export const TEST_FILES = [
  'skills/visibility-audit/scripts/test.mjs',
  'skills/citation-probe/scripts/test-probe.mjs',
  'skills/visibility-audit/scripts/test-resolver.mjs',
  'skills/visibility-audit/scripts/test-semantics.mjs',
  'skills/visibility-audit/scripts/test-attribution.mjs',
];

export const BENCHMARK_MANIFESTS = [
  'benchmarks/registry.json',
  'benchmarks/single-document/metadata.json',
  'benchmarks/single-document/inventory.json',
  'benchmarks/single-document/human-gold-manifest.json',
  'benchmarks/multi-document/metadata.json',
  'benchmarks/multi-document/resolution-v1.0.0.json',
  'benchmarks/multi-document/scoring-v1.0.0.json',
  'benchmarks/certification/certification-v1.0.0.json',
];

export function computeFileSha256(relPath) {
  const fullPath = join(ROOT_DIR, relPath);
  if (!existsSync(fullPath)) {
    throw new Error(`File not found for SHA-256 calculation: ${relPath}`);
  }
  const content = readFileSync(fullPath);
  return createHash('sha256').update(content).digest('hex');
}

function getGitRev(args) {
  try {
    return execFileSync('git', args, { cwd: ROOT_DIR, encoding: 'utf8' }).trim();
  } catch {
    return 'unknown';
  }
}

export function generateProvenanceManifest() {
  const pkg = JSON.parse(readFileSync(join(ROOT_DIR, 'package.json'), 'utf8'));

  const engineHashes = {};
  for (const f of ENGINE_FILES) {
    engineHashes[f] = computeFileSha256(f);
  }

  const testHashes = {};
  for (const f of TEST_FILES) {
    testHashes[f] = computeFileSha256(f);
  }

  const benchmarkHashes = {};
  for (const f of BENCHMARK_MANIFESTS) {
    benchmarkHashes[f] = computeFileSha256(f);
  }

  const provenance = {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    name: 'RepoRise Cryptographic Provenance Manifest',
    version: '1.0.0',
    generated_at: new Date().toISOString(),
    environment: {
      package_version: pkg.version,
      node_version: process.version,
      platform: process.platform,
      arch: process.arch,
      git_commit: getGitRev(['rev-parse', 'HEAD']),
      git_commit_short: getGitRev(['rev-parse', '--short', 'HEAD']),
      git_tag: getGitRev(['describe', '--tags', '--always']),
    },
    invariants: {
      m8_engine_commit: 'v0.1.0',
      m9_engine_commit: '3743940',
      checks_mjs_sha256: engineHashes['skills/visibility-audit/scripts/lib/checks.mjs'],
    },
    digests: {
      engine_components: engineHashes,
      test_suites: testHashes,
      benchmark_manifests: benchmarkHashes,
    },
  };

  writeFileSync(PROVENANCE_PATH, JSON.stringify(provenance, null, 2), 'utf8');
  return provenance;
}

export function verifyProvenanceManifest() {
  if (!existsSync(PROVENANCE_PATH)) {
    return { verified: false, error: 'PROVENANCE.json does not exist. Run --generate first.' };
  }

  const manifest = JSON.parse(readFileSync(PROVENANCE_PATH, 'utf8'));
  const mismatches = [];
  let checkedCount = 0;

  const checkCategory = (category, hashes) => {
    for (const [file, expectedHash] of Object.entries(hashes || {})) {
      checkedCount++;
      try {
        const actualHash = computeFileSha256(file);
        if (actualHash !== expectedHash) {
          mismatches.push({
            file,
            category,
            expected: expectedHash,
            actual: actualHash,
            status: 'DRIFT_DETECTED',
          });
        }
      } catch (err) {
        mismatches.push({
          file,
          category,
          expected: expectedHash,
          error: err.message,
          status: 'FILE_MISSING',
        });
      }
    }
  };

  checkCategory('engine_components', manifest.digests.engine_components);
  checkCategory('test_suites', manifest.digests.test_suites);
  checkCategory('benchmark_manifests', manifest.digests.benchmark_manifests);

  return {
    verified: mismatches.length === 0,
    total_checked: checkedCount,
    mismatches,
    manifest_info: {
      generated_at: manifest.generated_at,
      git_commit: manifest.environment.git_commit_short,
      git_tag: manifest.environment.git_tag,
    },
  };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const isVerify = process.argv.includes('--verify');
  if (isVerify) {
    console.log('Verifying cryptographic provenance against PROVENANCE.json...');
    const res = verifyProvenanceManifest();
    if (!res.verified) {
      console.error('PROVENANCE VERIFICATION FAILED!');
      console.error(JSON.stringify(res, null, 2));
      process.exit(1);
    } else {
      console.log(`[PASS] All ${res.total_checked} files match cryptographic digests.`);
      console.log(`Manifest created at ${res.manifest_info.generated_at} on ${res.manifest_info.git_tag}`);
    }
  } else {
    console.log('Generating cryptographic provenance manifest...');
    const prov = generateProvenanceManifest();
    console.log(`Wrote provenance manifest with SHA-256 digests to ${PROVENANCE_PATH}`);
  }
}
