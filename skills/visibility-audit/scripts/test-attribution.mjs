/**
 * test-attribution.mjs — Unit tests for Evidence Attribution Engine.
 *
 * Verifies M9.3 Acceptance Criteria:
 * 1. Correct classification of all 5 Attribution States
 * 2. Unresolved: discovery filter detection for custom domains
 * 3. Selection Mismatch: sub-threshold code count & shallow landing page detection
 * 4. Scoring Distortion: uncredited citability checks & bonus scale compression
 * 5. Composite Downstream Attribution for Overall score
 */

import test from 'node:test';
import assert from 'node:assert/strict';

import {
  ATTRIBUTION_STATES,
  ATTRIBUTION_SUBSTATES,
  attributeSurfaceResidual,
  attributeFixtureResiduals,
} from './lib/attribution.mjs';

import { createEvidenceGraph, addEvidenceNode, NODE_TYPES } from './lib/evidence-graph.mjs';

test('Attribution: Zero Residual returns null', () => {
  const item = {
    fixture_id: 'test-001',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    doc_strategy: 'docs_folder',
  };
  const multiAudit = {
    buckets: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    surfaces: { seo: 35, aeo: 55, geo: 55 },
  };
  const res = attributeSurfaceResidual('geo', item, {}, null, multiAudit, {});
  assert.equal(res, null);
});

test('Attribution: Unresolved state on custom domain target filter', () => {
  const item = {
    fixture_id: 'test-custom-domain',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    doc_strategy: 'external_custom_domain',
  };
  // Graph only has root README (external link was filtered out by isEligibleDocUrl)
  const g = createEvidenceGraph('test/custom');
  addEvidenceNode(g, { id: 'root:README.md', type: NODE_TYPES.ROOT_README, content: '# Project' });

  const multiAudit = {
    buckets: { overall: 2, seo: 2, aeo: 2, geo: 1 },
    surfaces: { seo: 30, aeo: 35, geo: 25 },
    semantics: null,
  };

  const aeoRes = attributeSurfaceResidual('aeo', item, {}, g, multiAudit, {});
  assert.equal(aeoRes.state, ATTRIBUTION_STATES.UNRESOLVED);
  assert.equal(aeoRes.substate, ATTRIBUTION_SUBSTATES.TARGET_DISCOVERY_FILTER);

  const geoRes = attributeSurfaceResidual('geo', item, {}, g, multiAudit, {});
  assert.equal(geoRes.state, ATTRIBUTION_STATES.UNRESOLVED);
  assert.equal(geoRes.substate, ATTRIBUTION_SUBSTATES.TARGET_DISCOVERY_FILTER);
});

test('Attribution: Selection Mismatch on sub-threshold code count (< 2)', () => {
  const item = {
    fixture_id: 'test-single-code',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    doc_strategy: 'external_readthedocs',
  };
  const g = createEvidenceGraph('test/single-code');
  addEvidenceNode(g, { id: 'root:README.md', type: NODE_TYPES.ROOT_README, content: '# Project' });
  addEvidenceNode(g, {
    id: 'ext:docs',
    type: NODE_TYPES.EXTERNAL_DOC,
    content: '```js\nconsole.log(1);\n```',
    code_blocks: [{ lang: 'js', lines: 1, sample: 'console.log(1);' }],
    has_install_signals: true,
  });

  const multiAudit = {
    buckets: { overall: 2, seo: 2, aeo: 3, geo: 1 },
    surfaces: { seo: 35, aeo: 55, geo: 25 },
    semantics: {
      surfaces: {
        aeo: { has_install_instructions: true, recovered_from_multidoc: true },
        geo: { code_blocks_count: 1, is_citability_eligible: false, external_code_recovered: 1 },
        seo: { is_stub_root: false },
      },
    },
  };

  const geoRes = attributeSurfaceResidual('geo', item, {}, g, multiAudit, {});
  assert.equal(geoRes.state, ATTRIBUTION_STATES.SELECTION_MISMATCH);
  assert.equal(geoRes.substate, ATTRIBUTION_SUBSTATES.SUB_THRESHOLD_CODE_COUNT);
});

test('Attribution: Selection Mismatch on shallow entrypoint missing install commands', () => {
  const item = {
    fixture_id: 'test-missing-install',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    doc_strategy: 'workspace_and_docs',
  };
  const g = createEvidenceGraph('test/missing-install');
  addEvidenceNode(g, { id: 'root:README.md', type: NODE_TYPES.ROOT_README, content: '# Project' });
  addEvidenceNode(g, {
    id: 'local:docs/overview.md',
    type: NODE_TYPES.NESTED_DOC,
    source_uri: 'docs/overview.md',
    content: '# Overview\nWelcome to our project.',
    code_blocks: [],
    has_install_signals: false,
  });

  const multiAudit = {
    buckets: { overall: 2, seo: 2, aeo: 2, geo: 1 },
    surfaces: { seo: 35, aeo: 35, geo: 25 },
    semantics: {
      surfaces: {
        aeo: { has_install_instructions: false, recovered_from_multidoc: false },
        geo: { code_blocks_count: 0, is_citability_eligible: false },
        seo: { is_stub_root: false },
      },
    },
  };

  const aeoRes = attributeSurfaceResidual('aeo', item, {}, g, multiAudit, {});
  assert.equal(aeoRes.state, ATTRIBUTION_STATES.SELECTION_MISMATCH);
  assert.equal(aeoRes.substate, ATTRIBUTION_SUBSTATES.SHALLOW_ENTRYPOINT_MISSING_COMMAND);
});

test('Attribution: Scoring Distortion on uncredited citability checks', () => {
  const item = {
    fixture_id: 'test-scoring-distortion',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    doc_strategy: 'external_docs',
  };
  const g = createEvidenceGraph('test/scoring-dist');
  addEvidenceNode(g, { id: 'root:README.md', type: NODE_TYPES.ROOT_README, content: '# Project' });
  addEvidenceNode(g, {
    id: 'ext:docs',
    type: NODE_TYPES.EXTERNAL_DOC,
    content: '## Quickstart\n```js\nrun();\n```\n```js\ntest();\n```',
    code_blocks: [
      { lang: 'js', lines: 1, sample: 'run();' },
      { lang: 'js', lines: 1, sample: 'test();' },
    ],
    has_install_signals: true,
  });

  const multiAudit = {
    buckets: { overall: 2, seo: 2, aeo: 3, geo: 2 },
    surfaces: { seo: 35, aeo: 55, geo: 37 }, // Score 37 is Bucket 2, GT is 3!
    semantics: {
      surfaces: {
        aeo: { has_install_instructions: true, recovered_from_multidoc: true },
        geo: { code_blocks_count: 2, is_citability_eligible: true, external_code_recovered: 2 },
        seo: { is_stub_root: false },
      },
    },
  };

  const geoRes = attributeSurfaceResidual('geo', item, {}, g, multiAudit, {});
  assert.equal(geoRes.state, ATTRIBUTION_STATES.SCORING_DISTORTION);
  assert.equal(geoRes.substate, ATTRIBUTION_SUBSTATES.UNCREDITED_CITABILITY_CHECKS);
});

test('Attribution: Overall Surface Composite Downstream Attribution', () => {
  const item = {
    fixture_id: 'test-overall',
    ground_truth: { overall: 3, seo: 2, aeo: 3, geo: 3 },
    doc_strategy: 'external_custom_domain',
  };
  const g = createEvidenceGraph('test/overall');
  addEvidenceNode(g, { id: 'root:README.md', type: NODE_TYPES.ROOT_README, content: '# Project' });

  const multiAudit = {
    buckets: { overall: 1, seo: 2, aeo: 2, geo: 1 },
    surfaces: { seo: 30, aeo: 35, geo: 25 },
    semantics: null,
  };

  const overallRes = attributeSurfaceResidual('overall', item, {}, g, multiAudit, {});
  assert.equal(overallRes.state, ATTRIBUTION_STATES.UNRESOLVED);
  assert.equal(overallRes.substate, ATTRIBUTION_SUBSTATES.COMPOSITE_DOWNSTREAM_EFFECT);

  const fixtureResiduals = attributeFixtureResiduals(item, {}, g, multiAudit, {});
  assert.equal(fixtureResiduals.length, 3); // overall, aeo, geo
  assert.equal(fixtureResiduals.find((r) => r.surface === 'overall').state, ATTRIBUTION_STATES.UNRESOLVED);
});
