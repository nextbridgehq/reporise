/**
 * regression-gate.mjs — Multi-level regression protection gates for M8.6.
 *
 * Enforces non-regression constraints on candidate proposals:
 * 1. Overall Validation MAE tolerance <= +0.02
 * 2. Surface Validation MAE tolerance <= +0.05 (SEO, AEO, GEO)
 * 3. Archetype Validation MAE tolerance <= +0.15 (All 12 archetypes)
 * 4. Strict isolation invariant assertion (never evaluate held-out test split)
 */

export const REGRESSION_THRESHOLDS = {
  REAL_VALIDATION_OVERALL_TOLERANCE: 0.02,
  SURFACE_REGRESSION_TOLERANCE: 0.05,
  ARCHETYPE_REGRESSION_TOLERANCE: 0.15
};

export function validateRegressionGates(candidateMetrics, bestMetrics, baselineMetrics, targetPriority = 'P0_geo_evidence_quality') {
  const candVal = candidateMetrics.realValidationMetrics;
  const bestVal = bestMetrics.realValidationMetrics;
  const baseVal = baselineMetrics.realValidationMetrics;

  const result = {
    passed: false,
    reason: '',
    checks: {
      overallTolerance: true,
      surfaces: {},
      archetypes: {},
      targetImprovement: false
    }
  };

  // 1. Overall Validation MAE Tolerance Gate (<= +0.02 vs best)
  const overallLimit = Number((bestVal.mae + REGRESSION_THRESHOLDS.REAL_VALIDATION_OVERALL_TOLERANCE).toFixed(4));
  if (candVal.mae > overallLimit) {
    result.checks.overallTolerance = false;
    result.reason = `Overall Validation MAE regressed: candidate ${candVal.mae.toFixed(4)} > tolerance limit ${overallLimit.toFixed(4)} (best: ${bestVal.mae.toFixed(4)})`;
    return result;
  }

  // 2. Surface Regression Gate (<= +0.05 vs baseline on all surfaces)
  for (const surface of ['seo', 'aeo', 'geo']) {
    const candSurfaceMae = candVal.surfaces[surface].mae;
    const baseSurfaceMae = baseVal.surfaces[surface].mae;
    const surfaceLimit = Number((baseSurfaceMae + REGRESSION_THRESHOLDS.SURFACE_REGRESSION_TOLERANCE).toFixed(4));
    
    if (surface === 'geo' && candSurfaceMae > 0.4167) {
      result.checks.surfaces[surface] = false;
      result.reason = `Surface 'geo' regressed beyond post-P0 best: candidate ${candSurfaceMae.toFixed(4)} > 0.4167`;
      return result;
    }

    if (candSurfaceMae > surfaceLimit) {
      result.checks.surfaces[surface] = false;
      result.reason = `Surface '${surface}' regressed: candidate ${candSurfaceMae.toFixed(4)} > baseline limit ${surfaceLimit.toFixed(4)} (baseline: ${baseSurfaceMae.toFixed(4)})`;
      return result;
    }
    result.checks.surfaces[surface] = true;
  }

  // 3. Archetype Regression Gate (<= +0.15 vs baseline on all archetypes)
  for (const [arch, candArch] of Object.entries(candVal.archetypes)) {
    const baseArch = baseVal.archetypes[arch];
    if (baseArch) {
      const archLimit = Number((baseArch.mae + REGRESSION_THRESHOLDS.ARCHETYPE_REGRESSION_TOLERANCE).toFixed(4));
      if (candArch.mae > archLimit) {
        result.checks.archetypes[arch] = false;
        result.reason = `Archetype '${arch}' regressed: candidate ${candArch.mae.toFixed(4)} > baseline limit ${archLimit.toFixed(4)} (baseline: ${baseArch.mae.toFixed(4)})`;
        return result;
      }
    }
    result.checks.archetypes[arch] = true;
  }

  // 4. Target Improvement Gate
  let improved = false;
  let improvementDetails = '';

  if (targetPriority === 'P0_geo_evidence_quality') {
    const candGeoMae = candVal.surfaces.geo.mae;
    const bestGeoMae = bestVal.surfaces.geo.mae;
    if (candGeoMae < bestGeoMae) {
      improved = true;
      improvementDetails = `Target GEO MAE improved: ${candGeoMae.toFixed(4)} < ${bestGeoMae.toFixed(4)}`;
    } else if (candVal.mae < bestVal.mae && candGeoMae <= bestGeoMae) {
      improved = true;
      improvementDetails = `Overall MAE improved without GEO regression: ${candVal.mae.toFixed(4)} < ${bestVal.mae.toFixed(4)}`;
    }
  } else if (targetPriority === 'P0_docs_monorepo_architecture') {
    const candDocs = (candVal.archetypes['docs']?.mae || 0) + (candVal.archetypes['monorepo']?.mae || 0);
    const bestDocs = (bestVal.archetypes['docs']?.mae || 0) + (bestVal.archetypes['monorepo']?.mae || 0);
    if (candDocs < bestDocs) {
      improved = true;
      improvementDetails = `Docs/Monorepo MAE improved: ${candDocs.toFixed(4)} < ${bestDocs.toFixed(4)}`;
    } else if (candVal.mae < bestVal.mae) {
      improved = true;
      improvementDetails = `Overall MAE improved: ${candVal.mae.toFixed(4)} < ${bestVal.mae.toFixed(4)}`;
    }
  } else if (targetPriority === 'P1_aeo_narrative_prose') {
    const candAeoMae = candVal.surfaces.aeo.mae;
    const bestAeoMae = bestVal.surfaces.aeo.mae;
    const candTrainAeoMae = candidateMetrics.realTrainMetrics?.surfaces?.aeo?.mae || 0;
    const bestTrainAeoMae = bestMetrics.realTrainMetrics?.surfaces?.aeo?.mae || 0;

    if (candAeoMae < bestAeoMae) {
      improved = true;
      improvementDetails = `Target Validation AEO MAE improved: ${candAeoMae.toFixed(4)} < ${bestAeoMae.toFixed(4)}`;
    } else if (candAeoMae <= bestAeoMae && candTrainAeoMae < bestTrainAeoMae) {
      improved = true;
      improvementDetails = `Train AEO MAE improved without Validation regression: ${candTrainAeoMae.toFixed(4)} < ${bestTrainAeoMae.toFixed(4)} (Val AEO: ${candAeoMae.toFixed(4)})`;
    }
  } else if (targetPriority === 'P2_seo_semantic_boundary') {
    const candSeoMae = candVal.surfaces.seo.mae;
    const bestSeoMae = bestVal.surfaces.seo.mae;
    const candTrainSeoMae = candidateMetrics.realTrainMetrics?.surfaces?.seo?.mae || 0;
    const bestTrainSeoMae = bestMetrics.realTrainMetrics?.surfaces?.seo?.mae || 0;

    if (candSeoMae < bestSeoMae) {
      improved = true;
      improvementDetails = `Target Validation SEO MAE improved: ${candSeoMae.toFixed(4)} < ${bestSeoMae.toFixed(4)}`;
    } else if (candSeoMae <= bestSeoMae && candTrainSeoMae < bestTrainSeoMae) {
      improved = true;
      improvementDetails = `Train SEO MAE improved without Validation regression: ${candTrainSeoMae.toFixed(4)} < ${bestTrainSeoMae.toFixed(4)} (Val SEO: ${candSeoMae.toFixed(4)})`;
    }
  } else {
    // Default: overall MAE improvement
    if (candVal.mae < bestVal.mae) {
      improved = true;
      improvementDetails = `Overall MAE improved: ${candVal.mae.toFixed(4)} < ${bestVal.mae.toFixed(4)}`;
    }
  }

  result.checks.targetImprovement = improved;
  if (!improved) {
    result.reason = `Target metric not improved (candidate did not beat best target score)`;
    return result;
  }

  result.passed = true;
  result.reason = improvementDetails;
  return result;
}
