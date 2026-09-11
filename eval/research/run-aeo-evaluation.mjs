import { runLoop } from "./runner.mjs";
import { AeoPilotStrategyProvider } from "./providers/aeo-evaluation-provider.mjs";
import { evaluateFixture } from "./evaluate.mjs";
import fs from "node:fs";
import path from "node:path";

console.log("======================================================================");
console.log("  REPORISE SURFACE EVALUATION: P1 AEO CONVERSATIONAL & PROSE HYPOTHESES");
console.log("======================================================================\n");

const provider = new AeoPilotStrategyProvider();
const iterations = provider.candidates.length;

const runConfig = {
  campaign: "m8.6-larger-corpus-optimization",
  targetPriority: "P1_aeo_narrative_prose",
  allocationPolicy: "fixed"
};

async function main() {
  console.log(`Starting ${iterations}-iteration controlled bounded pilot...`);
  console.log(`Candidate Hypotheses: ${iterations}`);
  console.log(`Target: P1 AEO Conversational & Narrative Prose Disconnect (F01)`);
  console.log(`Isolation Invariant: Real Test (N=24) strictly sealed.\n`);

  const initialEval = await evaluateFixture();
  const report = await runLoop(iterations, provider, runConfig);

  console.log("\n======================================================================");
  console.log("  PILOT EXECUTION COMPLETE");
  console.log("======================================================================");
  console.log(`Iterations:          ${report.iterations}`);
  console.log(`Accepted:            ${report.stats.accepted}`);
  console.log(`Rejected:            ${report.stats.rejected}`);
  console.log(`Baseline Val AEO:    ${initialEval.realValidationMetrics.surfaces.aeo.mae.toFixed(4)}`);
  console.log(`Final Val AEO:       ${report.finalAeoMae !== undefined ? report.finalAeoMae.toFixed(4) : "see below"}`);
  console.log(`Baseline Val Overall:${initialEval.realValidationMetrics.mae.toFixed(4)}`);
  console.log(`Final Val Overall:   ${report.finalMae.toFixed(4)}`);

  // Evaluate full metrics on Train and Validation
  const finalEval = await evaluateFixture();
  console.log("\nFinal Split-Level Metrics:");
  console.log("Validation:");
  console.log(`  Overall MAE: ${finalEval.realValidationMetrics.mae.toFixed(4)} (ME: ${finalEval.realValidationMetrics.overall.me.toFixed(4)})`);
  console.log(`  SEO MAE:     ${finalEval.realValidationMetrics.surfaces.seo.mae.toFixed(4)} (ME: ${finalEval.realValidationMetrics.surfaces.seo.me.toFixed(4)})`);
  console.log(`  AEO MAE:     ${finalEval.realValidationMetrics.surfaces.aeo.mae.toFixed(4)} (ME: ${finalEval.realValidationMetrics.surfaces.aeo.me.toFixed(4)})`);
  console.log(`  GEO MAE:     ${finalEval.realValidationMetrics.surfaces.geo.mae.toFixed(4)} (ME: ${finalEval.realValidationMetrics.surfaces.geo.me.toFixed(4)})`);
  console.log("  Archetypes:");
  for (const [arch, acc] of Object.entries(finalEval.realValidationMetrics.archetypes)) {
    console.log(`    ${arch.padEnd(14)}: MAE ${acc.mae.toFixed(4)} (ME: ${acc.me.toFixed(4)})`);
  }
  console.log("Train:");
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
        validation: initialEval.realValidationMetrics,
        train: initialEval.realTrainMetrics
      },
      final: {
        validation: finalEval.realValidationMetrics,
        train: finalEval.realTrainMetrics
      }
    }
  };

  const reportPath = path.resolve("docs/evaluation/data/aeo-evaluation.json");
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(pilotReport, null, 2), "utf8");
  console.log(`\nPilot report written to ${reportPath}`);
}

main().catch(err => {
  console.error("Fatal error during pilot:", err);
  process.exit(1);
});
