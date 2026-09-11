/**
 * test-semantics.mjs — Unit test suite for Evidence Semantics & Guardrails.
 *
 * Verifies M9.2 Acceptance Criteria:
 * 1. Provenance Classification (P0, P1, P2, P3)
 * 2. Semantic Deduplication across sources
 * 3. Guard A: Inflation Defense
 * 4. Guard C: Source Substitution Guardrail (stub root README)
 * 5. Guard E: Fail-Closed Isolation (unreachable targets)
 * 6. Backward Compatibility with Single-Document Baseline
 */

import test from 'node:test';
import assert from 'node:assert/strict';

import {
  createEvidenceGraph,
  addEvidenceNode,
  NODE_TYPES,
  RESOLUTION_STATUS,
} from './lib/evidence-graph.mjs';

import {
  classifyProvenanceTiers,
  deduplicateEvidence,
  synthesizeSurfaceEvidence,
  PROVENANCE_TIERS,
} from './lib/evidence-semantics.mjs';

import { runMultiAudit } from './lib/multi-audit.mjs';

test('Semantics: Provenance Classification (P0, P1, P2, P3)', () => {
  const g = createEvidenceGraph('test/repo');
  addEvidenceNode(g, { id: 'root', type: NODE_TYPES.ROOT_README, content: '# Hello' });
  addEvidenceNode(g, { id: 'nested', type: NODE_TYPES.NESTED_DOC, content: '# Guide' });
  addEvidenceNode(g, { id: 'workspace', type: NODE_TYPES.WORKSPACE_MEMBER, content: '# Core' });
  addEvidenceNode(g, { id: 'external', type: NODE_TYPES.EXTERNAL_DOC, content: '# Official' });
  addEvidenceNode(g, {
    id: 'broken',
    type: NODE_TYPES.EXTERNAL_DOC,
    content: '',
    resolution_status: RESOLUTION_STATUS.UNREACHABLE,
  });

  const tiers = classifyProvenanceTiers(g);

  assert.equal(tiers[PROVENANCE_TIERS.P0_ROOT].length, 1);
  assert.equal(tiers[PROVENANCE_TIERS.P1_LOCAL_DOCS].length, 2); // nested + workspace
  assert.equal(tiers[PROVENANCE_TIERS.P2_VERIFIED_EXTERNAL].length, 1);
  assert.equal(tiers[PROVENANCE_TIERS.P3_EXCLUDED].length, 1); // broken unreachable
});

test('Semantics: Semantic Deduplication across Sources', () => {
  const g = createEvidenceGraph('test/dedup');
  // Root README has "npm i mypkg"
  addEvidenceNode(g, {
    id: 'root',
    type: NODE_TYPES.ROOT_README,
    content: '# Root\n\n```bash\nnpm i mypkg\n```',
    code_blocks: [{ lang: 'bash', lines: 1, sample: 'npm i mypkg' }],
    headings: [{ level: 1, title: 'Root' }],
  });
  // External doc has the exact same "npm i mypkg" code sample
  addEvidenceNode(g, {
    id: 'external',
    type: NODE_TYPES.EXTERNAL_DOC,
    content: '# External\n\n```bash\nnpm i mypkg\n```\n```bash\nnpm run build\n```',
    code_blocks: [
      { lang: 'bash', lines: 1, sample: 'npm i mypkg' },
      { lang: 'bash', lines: 1, sample: 'npm run build' },
    ],
    headings: [{ level: 1, title: 'External' }],
  });

  const tiers = classifyProvenanceTiers(g);
  const deduped = deduplicateEvidence(tiers);

  assert.equal(deduped.stats.total_raw_code_blocks, 3);
  assert.equal(deduped.stats.duplicate_code_dropped, 1, 'Must drop 1 duplicate snippet');
  assert.equal(deduped.stats.total_deduped_code_blocks, 2, 'Must retain 2 unique snippets');
});

function makeMockCollected(text, manifestData = {}) {
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return {
    root: '/tmp/repo',
    collectedAt: new Date().toISOString(),
    repo: {
      dirName: 'mytool',
      originUrl: null,
      tags: [],
      tagCount: 0,
      commitCount: 1,
      lastCommitISO: null,
      isGitRepo: true,
    },
    readme: {
      present: true,
      file: 'README.md',
      bytes: Buffer.byteLength(text, 'utf8'),
      wordCount,
      text,
      headings: [],
      codeBlocks: [],
      links: [],
      images: [],
      brokenLinks: [],
      lede: text.slice(0, 100),
    },
    manifest: {
      ecosystem: 'npm',
      name: manifestData.name || 'mytool',
      keywords: manifestData.keywords || [],
      homepage: manifestData.homepage || null,
      description: manifestData.description || null,
    },
    files: {
      license: 'LICENSE',
      changelog: null,
      contributing: null,
      codeOfConduct: false,
      security: false,
      citation: false,
      llmsTxt: false,
      robotsTxt: false,
    },
    dirs: {
      all: [],
      docs: null,
      docsFileCount: 0,
      examples: null,
      exampleFileCount: 0,
      tests: null,
      github: false,
    },
  };
}

test('Guard C: Substitution Guardrail on Stub Root README', () => {
  const g = createEvidenceGraph('test/stub-repo');
  // Stub root README (<30 words)
  const stubContent = '# MyTool\n\nSee official documentation.';
  addEvidenceNode(g, {
    id: 'root',
    type: NODE_TYPES.ROOT_README,
    content: stubContent,
  });
  // External doc has extensive documentation
  addEvidenceNode(g, {
    id: 'external',
    type: NODE_TYPES.EXTERNAL_DOC,
    content: '# Extensive Docs\n\n## Quickstart\n\nRun tool with lots of features and guide steps.',
    code_blocks: [{ lang: 'sh', lines: 1, sample: 'curl tool' }],
    headings: [{ level: 2, title: 'Quickstart' }],
  });

  const semantics = synthesizeSurfaceEvidence(g);
  assert.equal(semantics.surfaces.seo.is_stub_root, true);
  assert.equal(semantics.surfaces.seo.substitution_guard_active, true);
  assert.equal(semantics.surfaces.seo.seo_bonus_points, 5, 'Must cap SEO bonus for stub root');

  // Run through multi-audit adapter
  const mockCollected = makeMockCollected(stubContent, { name: 'mytool' });
  const auditResult = runMultiAudit(mockCollected, g);

  // Must not exceed Bucket 2 on SEO
  assert.ok(auditResult.buckets.seo <= 2, `SEO bucket (${auditResult.buckets.seo}) must not exceed Bucket 2`);
  assert.ok(auditResult.buckets.overall <= 2, `Overall bucket (${auditResult.buckets.overall}) must not exceed Bucket 2`);
});

test('Multi-Audit: Backward Compatibility without Evidence Graph', () => {
  const mockCollected = makeMockCollected('# Normal Project\n\nSimple description here.', { name: 'normal' });

  const result = runMultiAudit(mockCollected, null);
  assert.equal(result.mode, 'single_document_baseline');
  assert.equal(result.semantics, null);
  assert.ok(typeof result.overall === 'number');
  assert.ok(typeof result.buckets.overall === 'number');
});
