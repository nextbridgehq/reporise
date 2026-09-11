/**
 * attribution.mjs — Evidence Attribution Engine for RepoRise M9.3.
 *
 * M9 Track: Multi-Document Evidence Resolution
 * Milestone M9.3: Multi-Document Error Attribution & Evidence Analysis.
 *
 * Implements the 5-State Evidence Attribution Matrix:
 * 1. MISSING_EVIDENCE: Evidence does not exist in repo or linked ecosystem.
 * 2. UNRESOLVED: Evidence exists, but was not resolved (e.g. depth > 1, custom domain whitelist drop).
 * 3. REJECTED_SEMANTICS: Resolved into graph, but discarded/capped by Semantics layer.
 * 4. SELECTION_MISMATCH: Resolved in graph, but sample selected was non-representative or sub-threshold.
 * 5. SCORING_DISTORTION: Evidence resolved, accepted, and attributed, but scored inaccurately by heuristics.
 *
 * STRICT INVARIANT: Diagnostic and attribution only. Zero parameter or heuristic tuning.
 */

export const ATTRIBUTION_STATES = {
  MISSING_EVIDENCE: 'missing_evidence',
  UNRESOLVED: 'unresolved',
  REJECTED_SEMANTICS: 'rejected_semantics',
  SELECTION_MISMATCH: 'selection_mismatch',
  SCORING_DISTORTION: 'scoring_distortion',
};

export const ATTRIBUTION_SUBSTATES = {
  // UNRESOLVED substates
  TARGET_DISCOVERY_FILTER: 'target_discovery_filter',
  DEPTH_LIMITATION: 'depth_limitation',
  UNSUPPORTED_FORMAT: 'unsupported_format',
  UNREACHABLE_OR_OFFLINE: 'unreachable_or_offline',

  // REJECTED_SEMANTICS substates
  INFLATION_CAP_EXCEEDED: 'inflation_cap_exceeded',
  UNTRUSTED_PROVENANCE_TIER: 'untrusted_provenance_tier',
  SEMANTIC_DEDUPLICATION_DROPPED: 'semantic_deduplication_dropped',

  // SELECTION_MISMATCH substates
  SHALLOW_ENTRYPOINT_MISSING_COMMAND: 'shallow_entrypoint_missing_command',
  SUB_THRESHOLD_CODE_COUNT: 'sub_threshold_code_count',
  ZERO_CODE_LANDING_PAGE: 'zero_code_landing_page',
  MISSING_INSTALL_REQUIREMENT: 'missing_install_requirement',

  // SCORING_DISTORTION substates
  UNCREDITED_CITABILITY_CHECKS: 'uncredited_citability_checks',
  BONUS_SCALE_COMPRESSION: 'bonus_scale_compression',
  COMPOSITE_DOWNSTREAM_EFFECT: 'composite_downstream_effect',
  SUBSTITUTION_CEILING_PINNED: 'substitution_ceiling_pinned',
};

/**
 * Classifies a single surface prediction residual into the 5-State Attribution Matrix.
 *
 * @param {string} surface - 'overall' | 'seo' | 'aeo' | 'geo'
 * @param {object} item - Fixture inventory item (with ground_truth, doc_strategy, etc.)
 * @param {object} collected - Raw collected repository observation
 * @param {object} evidenceGraph - Cross-document evidence graph
 * @param {object} multiAudit - Result of runMultiAudit(collected, evidenceGraph)
 * @param {object} baselineAudit - Result of runChecks(collected)
 * @returns {object|null} Attribution record or null if pred === gt
 */
export function attributeSurfaceResidual(surface, item, collected, evidenceGraph, multiAudit, baselineAudit) {
  const gt = item.ground_truth[surface];
  const pred = multiAudit.buckets[surface];
  if (pred === gt) return null;

  const diff = pred - gt;
  const nodes = evidenceGraph?.nodes || [];
  const resolvedNodes = nodes.filter((n) => n.resolution_status === 'resolved');
  const externalOrNestedNodes = resolvedNodes.filter((n) => n.type !== 'root_readme');
  const semantics = multiAudit.semantics;

  // --- SEO SURFACE ATTRIBUTION ---
  if (surface === 'seo') {
    if (semantics?.surfaces.seo.is_stub_root && multiAudit.surfaces.seo <= 40 && gt > 2) {
      return {
        state: ATTRIBUTION_STATES.SCORING_DISTORTION,
        substate: ATTRIBUTION_SUBSTATES.SUBSTITUTION_CEILING_PINNED,
        reason: 'Guard C (Substitution Ceiling) pinned SEO to Bucket 2 because root README is a stub.',
        context: { isStubRoot: true, gt, pred, seoScore: multiAudit.surfaces.seo },
      };
    }
    return {
      state: ATTRIBUTION_STATES.SCORING_DISTORTION,
      substate: ATTRIBUTION_SUBSTATES.BONUS_SCALE_COMPRESSION,
      reason: `SEO bucket ${pred} differed from ground truth ${gt}.`,
      context: { gt, pred, seoScore: multiAudit.surfaces.seo },
    };
  }

  // --- AEO SURFACE ATTRIBUTION ---
  if (surface === 'aeo') {
    // Check 1: Target Discovery Filtering
    if (nodes.length <= 1) {
      return {
        state: ATTRIBUTION_STATES.UNRESOLVED,
        substate: ATTRIBUTION_SUBSTATES.TARGET_DISCOVERY_FILTER,
        reason: 'External doc link on custom domain was filtered out by resolver discovery heuristic (lacked /docs path or docs. prefix).',
        context: { totalNodes: nodes.length, docStrategy: item.doc_strategy },
      };
    }

    // Check 2: Entrypoint lacked install commands
    const hasInstall = externalOrNestedNodes.some((n) => n.structural_summary?.has_install_signals);
    if (!hasInstall) {
      return {
        state: ATTRIBUTION_STATES.SELECTION_MISMATCH,
        substate: ATTRIBUTION_SUBSTATES.SHALLOW_ENTRYPOINT_MISSING_COMMAND,
        reason: `Resolved target entrypoint (${externalOrNestedNodes.map((n) => n.source_uri).join(', ')}) lacked install commands; commands reside in sub-pages.`,
        context: { resolvedUris: externalOrNestedNodes.map((n) => n.source_uri) },
      };
    }

    // Check 3: Semantics rejection
    if (!semantics?.surfaces.aeo.recovered_from_multidoc) {
      return {
        state: ATTRIBUTION_STATES.REJECTED_SEMANTICS,
        substate: ATTRIBUTION_SUBSTATES.UNTRUSTED_PROVENANCE_TIER,
        reason: 'Install signals were present in graph but rejected or uncredited by AEO semantics layer.',
        context: { installSourceTier: semantics?.surfaces.aeo.install_source_tier },
      };
    }

    // Check 4: Scoring distortion
    return {
      state: ATTRIBUTION_STATES.SCORING_DISTORTION,
      substate: ATTRIBUTION_SUBSTATES.BONUS_SCALE_COMPRESSION,
      reason: `Recovered install commands, but boosted score (${multiAudit.surfaces.aeo}) remained below Ground Truth bucket ${gt}.`,
      context: { aeoScore: multiAudit.surfaces.aeo, gt, pred },
    };
  }

  // --- GEO SURFACE ATTRIBUTION ---
  if (surface === 'geo') {
    // Check 1: Target Discovery Filtering
    if (nodes.length <= 1) {
      return {
        state: ATTRIBUTION_STATES.UNRESOLVED,
        substate: ATTRIBUTION_SUBSTATES.TARGET_DISCOVERY_FILTER,
        reason: 'External doc link on custom domain was filtered out by resolver discovery heuristic; repository remained single-document.',
        context: { totalNodes: nodes.length, docStrategy: item.doc_strategy },
      };
    }

    const totalRawCodeBlocks = externalOrNestedNodes.reduce(
      (sum, n) => sum + (n.structural_summary?.code_blocks_count || 0),
      0
    );

    // Check 2: Zero code landing page
    if (totalRawCodeBlocks === 0) {
      return {
        state: ATTRIBUTION_STATES.SELECTION_MISMATCH,
        substate: ATTRIBUTION_SUBSTATES.ZERO_CODE_LANDING_PAGE,
        reason: `Resolved target entrypoint (${externalOrNestedNodes.map((n) => n.source_uri).join(', ')}) contained 0 code blocks; examples reside deeper in doc tree.`,
        context: { resolvedUris: externalOrNestedNodes.map((n) => n.source_uri) },
      };
    }

    const totalEffectiveCode = semantics?.surfaces.geo.code_blocks_count || 0;

    // Check 3: Sub-threshold code count (< 2)
    if (totalEffectiveCode < 2) {
      return {
        state: ATTRIBUTION_STATES.SELECTION_MISMATCH,
        substate: ATTRIBUTION_SUBSTATES.SUB_THRESHOLD_CODE_COUNT,
        reason: `Resolved target contained 1 code block, but is_citability_eligible requires >= 2 code blocks and install instructions, failing citability gating.`,
        context: { totalEffectiveCode, hasInstall: semantics?.surfaces.aeo.has_install_instructions },
      };
    }

    // Check 4: Missing install requirement for citability
    if (!semantics?.surfaces.aeo.has_install_instructions) {
      return {
        state: ATTRIBUTION_STATES.SELECTION_MISMATCH,
        substate: ATTRIBUTION_SUBSTATES.MISSING_INSTALL_REQUIREMENT,
        reason: `Resolved target had ${totalEffectiveCode} code blocks, but lacked install instructions, failing citability eligibility.`,
        context: { totalEffectiveCode },
      };
    }

    // Check 5: Scoring Distortion (bonus scale compression / uncredited citability checks)
    return {
      state: ATTRIBUTION_STATES.SCORING_DISTORTION,
      substate: ATTRIBUTION_SUBSTATES.UNCREDITED_CITABILITY_CHECKS,
      reason: `Runnable code was recovered and eligible (score ${multiAudit.surfaces.geo}, Bucket ${pred}), but adapter capped bonus at +12 and left 6 other citability checks uncredited, preventing reach to Bucket ${gt}.`,
      context: {
        geoScore: multiAudit.surfaces.geo,
        gt,
        pred,
        codeRecovered: semantics?.surfaces.geo.external_code_recovered,
      },
    };
  }

  // --- OVERALL SURFACE ATTRIBUTION ---
  if (surface === 'overall') {
    const aeoAttr = attributeSurfaceResidual('aeo', item, collected, evidenceGraph, multiAudit, baselineAudit);
    const geoAttr = attributeSurfaceResidual('geo', item, collected, evidenceGraph, multiAudit, baselineAudit);

    const dominantState = geoAttr?.state || aeoAttr?.state || ATTRIBUTION_STATES.SCORING_DISTORTION;
    const contributingSurfaces = [
      geoAttr ? `GEO (${geoAttr.state}::${geoAttr.substate})` : null,
      aeoAttr ? `AEO (${aeoAttr.state}::${aeoAttr.substate})` : null,
    ].filter(Boolean);

    return {
      state: dominantState,
      substate: ATTRIBUTION_SUBSTATES.COMPOSITE_DOWNSTREAM_EFFECT,
      reason: `Overall residual (${diff > 0 ? '+' : ''}${diff}) was a composite downstream effect driven by: ${contributingSurfaces.join(' and ')}.`,
      context: {
        dominantState,
        aeoState: aeoAttr?.state || 'exact',
        geoState: geoAttr?.state || 'exact',
        diff,
      },
    };
  }

  return null;
}

/**
 * Attributes all residuals across all surfaces for a single repository fixture.
 */
export function attributeFixtureResiduals(item, collected, evidenceGraph, multiAudit, baselineAudit) {
  const residuals = [];
  const surfaces = ['overall', 'seo', 'aeo', 'geo'];

  for (const s of surfaces) {
    const attr = attributeSurfaceResidual(s, item, collected, evidenceGraph, multiAudit, baselineAudit);
    if (attr) {
      residuals.push({
        surface: s,
        pred_bucket: multiAudit.buckets[s],
        actual_bucket: item.ground_truth[s],
        delta: multiAudit.buckets[s] - item.ground_truth[s],
        state: attr.state,
        substate: attr.substate,
        reason: attr.reason,
        context: attr.context,
      });
    }
  }

  return residuals;
}
