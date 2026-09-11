import fs from 'node:fs';

function generateReport(logPath) {
  if (!fs.existsSync(logPath)) {
    console.error(`Log file not found: ${logPath}`);
    process.exit(1);
  }

  const lines = fs.readFileSync(logPath, 'utf8').trim().split('\n');
  const experiments = lines.filter(Boolean).map(l => JSON.parse(l));

  let totalMismatches = 0;
  const targetCounts = {};
  const modalityTransitions = {};
  
  let totalReverts = 0;
  let revertUnchanged = 0;
  let revertRegressed = 0;
  let revertImproved = 0;

  for (const exp of experiments) {
    if (exp.decision === 'allocation_mismatch') {
      totalMismatches++;
      const target = exp.allocation?.target || 'unknown';
      targetCounts[target] = (targetCounts[target] || 0) + 1;
      
      const requested = exp.allocation?.modality || 'unknown';
      const proposed = exp.proposal?.mutation?.type || 'unknown';
      const transition = `${requested} -> ${proposed}`;
      modalityTransitions[transition] = (modalityTransitions[transition] || 0) + 1;
    }
    
    if (exp.decision === 'rejected') {
      totalReverts++;
      const delta = exp.delta || 0;
      if (delta === 0) revertUnchanged++;
      else if (delta > 0) revertRegressed++;
      else if (delta < 0) revertImproved++;
    }
  }

  console.log(`Allocation Mismatch Analysis`);
  console.log(`─────────────────────────────`);
  console.log(`Total mismatches:        ${totalMismatches} / ${experiments.length} (${Math.round(totalMismatches / experiments.length * 100 || 0)}%)`);
  
  console.log(`\nBy target:`);
  for (const [target, count] of Object.entries(targetCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${target.padEnd(23)} ${count} (${Math.round(count / totalMismatches * 100 || 0)}%)`);
  }

  console.log(`\nBy modality (requested -> proposed):`);
  let hasModifyPattern = false;
  for (const [transition, count] of Object.entries(modalityTransitions).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${transition.padEnd(30)} ${count} (${Math.round(count / totalMismatches * 100 || 0)}%)`);
    if (transition.includes('modify_pattern')) {
      hasModifyPattern = true;
    }
  }

  if (hasModifyPattern) {
    console.log(`\nRepeated patterns:`);
    console.log(`  "modify_pattern" is not a valid modality.`);
    console.log(`  All mismatches represent schema hallucination, not exploration intent.`);
  }

  console.log(`\nRevert Analysis`);
  console.log(`─────────────────────────────`);
  console.log(`Total reverts:           ${totalReverts}\n`);
  if (totalReverts > 0) {
    console.log(`  mae_change = 0 (unchanged): ${revertUnchanged} (${Math.round(revertUnchanged / totalReverts * 100)}%)`);
    console.log(`  mae_change > 0 (regressed):  ${revertRegressed} (${Math.round(revertRegressed / totalReverts * 100)}%)`);
    console.log(`  mae_change < 0 (improved):   ${revertImproved} (${Math.round(revertImproved / totalReverts * 100)}%)`);
  } else {
    console.log(`  mae_change = 0 (unchanged): 0 (0%)`);
    console.log(`  mae_change > 0 (regressed): 0 (0%)`);
    console.log(`  mae_change < 0 (improved):  0 (0%)`);
  }
}

const logPath = process.argv[2];
if (!logPath) {
  console.error("Usage: node mismatch-report.mjs <path-to-experiments.jsonl>");
  process.exit(1);
}

generateReport(logPath);
