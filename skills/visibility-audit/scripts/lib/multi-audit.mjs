/**
 * multi-audit.mjs — Multi-Document Scoring Adapter for RepoRise M9.2.
 *
 * Consumes the Cross-Document Evidence Graph via the Evidence Semantics Layer.
 *
 * Implements the 5 Regression Risk Guardrails:
 * 1. Guard A (Inflation Defense): Enforces caps on external code blocks and headings.
 * 2. Guard B (Deduplication): Redundant signals are deduplicated in evidence-semantics.
 * 3. Guard C (Substitution Guard): Stub root READMEs receive only nominal SEO link points.
 * 4. Guard D (Overreach Guard): Hop depth = 1 maintained from resolver.
 * 5. Guard E (Fail-Closed): Unreachable targets produce 0 score contribution.
 *
 * Preserves 100% backward compatibility: when no evidence graph is provided,
 * returns exact baseline scoring output.
 */

import { runChecks, prioritise } from './checks.mjs';
import { synthesizeSurfaceEvidence, PROVENANCE_TIERS } from './evidence-semantics.mjs';

export function scoreToBucket(score) {
  if (score === null || score === undefined) return 0;
  if (score >= 90) return 5;
  if (score >= 70) return 4;
  if (score >= 50) return 3;
  if (score >= 30) return 2;
  if (score >= 10) return 1;
  return 0;
}

/**
 * Executes a multi-document visibility audit.
 *
 * @param {object} collected - Raw repository observation from collect.mjs
 * @param {object|null} evidenceGraph - Optional cross-document evidence graph
 */
export function runMultiAudit(collected, evidenceGraph = null) {
  // 1. Run baseline single-document audit on working tree / root README
  const baselineAudit = runChecks(collected);

  if (!evidenceGraph || !evidenceGraph.nodes || evidenceGraph.nodes.length <= 1) {
    // If no multi-document graph exists (only root README), return pure baseline
    return {
      mode: 'single_document_baseline',
      audit: baselineAudit,
      semantics: null,
      surfaces: baselineAudit.surfaces,
      overall: baselineAudit.overall,
      buckets: {
        overall: scoreToBucket(baselineAudit.overall),
        seo: scoreToBucket(baselineAudit.surfaces.seo),
        aeo: scoreToBucket(baselineAudit.surfaces.aeo),
        geo: scoreToBucket(baselineAudit.surfaces.geo),
      },
    };
  }

  // 2. Synthesize Evidence Semantics with Provenance Awareness
  const semantics = synthesizeSurfaceEvidence(evidenceGraph);
  const { aeo, geo, seo } = semantics.surfaces;

  // Clone baseline surfaces to adjust based on provenance semantics
  const adjustedSurfaces = { ...baselineAudit.surfaces };

  // --- AEO SCORING SYNTHESIS ---
  // If root lacked install/quickstart, but P1 (local docs) or P2 (verified docs) provided it:
  if (aeo.recovered_from_multidoc) {
    // Relax the AEO gating cap (35) proportionally based on provenance tier
    const currentAeo = adjustedSurfaces.aeo || 0;
    const boost = aeo.install_source_tier === PROVENANCE_TIERS.P1_LOCAL_DOCS ? 25 : 20;
    adjustedSurfaces.aeo = Math.min(100, Math.max(currentAeo, 35 + boost));
  }

  // --- GEO SCORING SYNTHESIS ---
  // If root lacked runnable code blocks, but P1 or P2 provided verified code blocks:
  if (geo.recovered_from_multidoc && geo.is_citability_eligible) {
    // Relax the GEO gating cap (25) with inflation-protected credit
    const currentGeo = adjustedSurfaces.geo || 0;
    const baseUncapped = Math.max(currentGeo, 25);
    const isRichExampleSet = geo.external_code_recovered >= 2;
    const codeBonus = isRichExampleSet
      ? 20 + Math.min(15, (geo.external_code_recovered - 1) * 5)
      : 12;
    const docsBonus = geo.has_docs_surface && isRichExampleSet ? 5 : 0;
    adjustedSurfaces.geo = Math.min(100, baseUncapped + codeBonus + docsBonus);
  }

  // --- SEO SCORING SYNTHESIS (Guard C: Substitution Guardrail) ---
  // Stub root READMEs (<30 words) CANNOT score high SEO merely by linking to docs
  if (seo.is_stub_root) {
    // Cap SEO score at 40 (Bucket 2 maximum) to defend organic repository search discoverability
    adjustedSurfaces.seo = Math.min(40, (adjustedSurfaces.seo || 0) + seo.seo_bonus_points);
  } else if (seo.has_nested_workspace_docs || seo.has_verified_external_docs_link) {
    adjustedSurfaces.seo = Math.min(100, (adjustedSurfaces.seo || 0) + seo.seo_bonus_points);
  }

  // --- OVERALL SCORING SYNTHESIS ---
  // Harmonize overall score from adjusted surfaces: SEO(30%) + AEO(35%) + GEO(35%)
  const nonNullSurfaces = Object.entries(adjustedSurfaces).filter(([_, v]) => v !== null);
  let adjustedOverall = baselineAudit.overall;
  if (nonNullSurfaces.length > 0) {
    const weightedSum =
      (adjustedSurfaces.seo || 0) * 0.3 +
      (adjustedSurfaces.aeo || 0) * 0.35 +
      (adjustedSurfaces.geo || 0) * 0.35;
    adjustedOverall = Math.round(weightedSum);
  }

  // Enforce Stub Root Overall ceiling (cannot exceed Bucket 2 if root is an uninformative stub)
  if (seo.is_stub_root && adjustedOverall > 45) {
    adjustedOverall = 45;
  }

  return {
    mode: 'multi_document_graph',
    audit: baselineAudit,
    semantics,
    surfaces: adjustedSurfaces,
    overall: adjustedOverall,
    buckets: {
      overall: scoreToBucket(adjustedOverall),
      seo: scoreToBucket(adjustedSurfaces.seo),
      aeo: scoreToBucket(adjustedSurfaces.aeo),
      geo: scoreToBucket(adjustedSurfaces.geo),
    },
  };
}
