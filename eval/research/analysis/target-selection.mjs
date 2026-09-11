import fs from 'node:fs';
import path from 'node:path';

const historyFile = 'eval/research/.experiments.jsonl';
const proposalsDir = 'eval/research/proposals';

function loadHistory() {
  if (!fs.existsSync(historyFile)) return [];
  const lines = fs.readFileSync(historyFile, 'utf8').trim().split('\n');
  return lines.map(l => {
    try {
      return JSON.parse(l);
    } catch {
      return null;
    }
  }).filter(Boolean);
}

function loadProposals() {
  if (!fs.existsSync(proposalsDir)) return [];
  const files = fs.readdirSync(proposalsDir).filter(f => f.endsWith('.json'));
  return files.map(f => {
    try {
      return JSON.parse(fs.readFileSync(path.join(proposalsDir, f), 'utf8'));
    } catch (e) {
      return null;
    }
  }).filter(Boolean);
}

function analyze() {
  const history = loadHistory();
  let proposals = loadProposals();

  // Sort proposals by experiment_id to get the latest 20
  proposals.sort((a, b) => {
    const timeA = parseInt(a.experiment_id.split('-')[1]);
    const timeB = parseInt(b.experiment_id.split('-')[1]);
    return timeA - timeB;
  });

  const m74Proposals = proposals.slice(-20);
  
  const stats = {
    campaign: "m7-004",
    iterations: m74Proposals.length,
    targets: {}
  };

  for (const propFile of m74Proposals) {
    const prop = propFile.proposal;
    const target = prop.target || prop.research_point;
    if (!target) continue;

    if (!stats.targets[target]) {
      stats.targets[target] = {
        attempts: 0,
        accepted: 0,
        rejected: 0,
        duplicates: 0,
        rationales: [],
        mutations: []
      };
    }

    const t = stats.targets[target];
    t.attempts++;
    if (prop.target_selection_rationale) {
      t.rationales.push(prop.target_selection_rationale);
    }
    t.mutations.push(prop.mutation?.value || prop.value || prop.pattern);

    // Look up in history
    const exp = history.find(e => e.id === propFile.experiment_id);
    if (!exp) {
      // It was filtered out by the duplicate checker (continue before push)
      t.duplicates++;
    } else {
      if (exp.decision === 'accepted') t.accepted++;
      else t.rejected++;
    }
  }

  // Calculate Novelty (semantic duplicates vs exact)
  // For each target, look at the mutations array and find semantic overlap
  // We'll just leave it for the human report for now, but save raw strings to JSON
  return stats;
}

const result = analyze();
fs.mkdirSync('eval/research/analysis', { recursive: true });
fs.writeFileSync('eval/research/analysis/target-selection.json', JSON.stringify(result, null, 2));
console.log('Analysis written to target-selection.json');
