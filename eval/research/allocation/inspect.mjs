import { allocateNextExperiment } from './allocator.mjs';
import { MUTATION_POINTS } from '../registry.mjs';
import fs from 'node:fs';

const historyPath = new URL('../.experiments.jsonl', import.meta.url);
let history = [];
if (fs.existsSync(historyPath)) {
  const lines = fs.readFileSync(historyPath, 'utf8').trim().split('\n');
  history = lines.filter(Boolean).map(l => JSON.parse(l));
}

const allocation = allocateNextExperiment(history, MUTATION_POINTS, history.length);

console.log("M7.5 Adaptive Allocation Preview\n");
console.log(`Selected:\n${allocation.target} × ${allocation.modality}\n`);
console.log(`Reason:\n${allocation.reason}\n`);
console.log(`Exploration:\n${allocation.exploration}\n`);
console.log(`Score:\n${allocation.opportunity_score.toFixed(3)}\n`);
console.log(`Statistics:\n${JSON.stringify(allocation.statistics, null, 2)}\n`);
