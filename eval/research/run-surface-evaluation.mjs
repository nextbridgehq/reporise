import { runLoop } from './runner.mjs';
import { GeoPilotStrategyProvider } from './providers/geo-evaluation-provider.mjs';
import { evaluateFixture } from './evaluate.mjs';
import fs from 'node:fs';
import path from 'node:path';

console.log('======================================================================');
console.log('  REPORISE SURFACE EVALUATION: P0 GEO HYPOTHESES EXPLORATION');
console.log('======================================================================\n');

const provider = new GeoPilotStrategyProvider();
const iterations = provider.candidates.length;

const runConfig = {
  campaign: 'm8.6-larger-corpus-optimization',
  targetPriority: 'P0_geo_evidence_quality',
  allocationPolicy: 'fixed'
};

async function main() {
  console.log(`Starting ${iterations}-iteration controlled bounded pilot...`);
  console.log(`Candidate Hypotheses: ${iterations}`);
  console.log(`Target: P0 GEO Evidence Quality (F04)`);
  console.log(`Isolation Invariant: Real Test (N=24) strictly sealed.\n`);

  const report = await runLoop(iterations, provider, runConfig);

  console.log('\n======================================================================');
  console.log('  PILOT EXECUTION COMPLETE');
  console.log('======================================================================');
  console.log(`Iterations:          ${report.iterations}`);
  console.log(`Accepted:            ${report.stats.accepted}`);
  console.log(`Rejected:            ${report.stats.rejected}`);
  console.log(`Baseline Val MAE:    ${report.initialMae.toFixed(4)}`);
  console.log(`Final Val MAE:       ${report.finalMae.toFixed(4)}`);
  console.log(`Baseline Val GEO:    ${report.initialGeoMae.toFixed(4)}`);
  console.log(`Final Val GEO:       ${report.finalGeoMae.toFixed(4)}`);

  // Evaluate full metrics on Train and Validation
  const finalEval = await evaluateFixture();
  console.log('\nFinal Split-Level Metrics:');
  console.log('Validation:');
  console.log(`  Overall MAE: ${finalEval.realValidationMetrics.mae.toFixed(4)} (ME: ${finalEval.realValidationMetrics.overall.me.toFixed(4)})`);
  console.log(`  SEO MAE:     ${finalEval.realValidationMetrics.surfaces.seo.mae.toFixed(4)} (ME: ${finalEval.realValidationMetrics.surfaces.seo.me.toFixed(4)})`);
  console.log(`  AEO MAE:     ${finalEval.realValidationMetrics.surfaces.aeo.mae.toFixed(4)} (ME: ${finalEval.realValidationMetrics.surfaces.aeo.me.toFixed(4)})`);
  console.log(`  GEO MAE:     ${finalEval.realValidationMetrics.surfaces.geo.mae.toFixed(4)} (ME: ${finalEval.realValidationMetrics.surfaces.geo.me.toFixed(4)})`);
  console.log('Train:');
  console.log(`  Overall MAE: ${finalEval.realTrainMetrics.mae.toFixed(4)} (ME: ${finalEval.realTrainMetrics.overall.me.toFixed(4)})`);
  console.log(`  SEO MAE:     ${finalEval.realTrainMetrics.surfaces.seo.mae.toFixed(4)} (ME: ${finalEval.realTrainMetrics.surfaces.seo.me.toFixed(4)})`);
  console.log(`  AEO MAE:     ${finalEval.realTrainMetrics.surfaces.aeo.mae.toFixed(4)} (ME: ${finalEval.realTrainMetrics.surfaces.aeo.me.toFixed(4)})`);
  console.log(`  GEO MAE:     ${finalEval.realTrainMetrics.surfaces.geo.mae.toFixed(4)} (ME: ${finalEval.realTrainMetrics.surfaces.geo.me.toFixed(4)})`);

  // Write pilot report
  const pilotReport = {
    campaign: runConfig.campaign,
    target: runConfig.targetPriority,
    timestamp: new Date().toISOString(),
    iterations: report.iterations,
    stats: report.stats,
    metrics: {
      baseline: {
        validation: {
          overall_mae: report.initialMae,
          geo_mae: report.initialGeoMae
        }
      },
      final: {
        validation: finalEval.realValidationMetrics,
        train: finalEval.realTrainMetrics
      }
    }
  };

  const reportPath = path.resolve('docs/evaluation/data/surface-evaluation.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(pilotReport, null, 2), 'utf8');
  console.log(`\nPilot report written to ${reportPath}`);
}

main().catch(err => {
  console.error('Fatal error in pilot:', err);
  process.exit(1);
});
