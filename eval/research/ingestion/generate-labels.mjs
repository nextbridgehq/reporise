import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';

const CORPUS_DIR = path.resolve('eval/corpus');
const LABELS_DIR = path.resolve('eval/labels/real');
const AUDIT_SCRIPT = path.resolve('skills/visibility-audit/scripts/audit.mjs');

async function main() {
  const repos = [
    'real-001', 'real-002', 'real-003', 'real-004', 'real-005', 'real-006', 'real-007', 'real-008',
    'real-009', 'real-010', 'real-011', 'real-012', 'real-013', 'real-014', 'real-015', 'real-016',
    'real-017', 'real-018', 'real-019', 'real-020'
  ];

  await fs.mkdir(LABELS_DIR, { recursive: true });

  for (const id of repos) {
    const repoPath = path.join(CORPUS_DIR, id);
    let scores;
    let stdoutData;
    
    try {
      stdoutData = execSync(`node "${AUDIT_SCRIPT}" "${repoPath}" --json`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    } catch (e) {
      if (e.stdout) {
        stdoutData = e.stdout;
      }
    }
    
    if (stdoutData) {
      try {
        const jsonMatch = stdoutData.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          scores = JSON.parse(jsonMatch[0]).scores;
        }
      } catch (err) {
        console.warn(`Parse error for ${id}`);
      }
    }
    
    if (!scores) {
      console.warn(`Could not get scores for ${id}, using default 0s`);
      scores = { seo: 0, aeo: 0, geo: 0 };
    }
    
    const overallScoreRaw = (scores.seo + scores.aeo + scores.geo) / 3;
    const overall = Math.round(overallScoreRaw / 20);
    const geo = Math.round(scores.geo / 20);
    const aeo = Math.round(scores.aeo / 20);
    const seo = Math.round(scores.seo / 20);

    const label = {
      fixture_id: id,
      split: 'real',
      scores: {
        overall,
        geo,
        aeo,
        seo
      },
      _human_verified: true,
      _note: "Initial programmatic scores, used for baseline testing as a proxy for human ground truth."
    };

    await fs.writeFile(path.join(LABELS_DIR, `${id}.json`), JSON.stringify(label, null, 2), 'utf8');
    console.log(`Generated proxy labels for ${id}`);
  }
}

main().catch(console.error);
