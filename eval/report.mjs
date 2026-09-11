import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Generates a formatted Markdown evaluation report from computed benchmark metrics.
 * 
 * @param {object} metrics - Computed metrics object (e.g., mae, rmse, spearman, f1, categories)
 * @param {object} [options={}] - Additional report options (e.g., title, timestamp, notes, baseline)
 * @returns {string} Markdown formatted report
 */
export function generateReport(metrics = {}, options = {}) {
  const title = options.title || 'Evaluation Report';
  const lines = [];

  lines.push(`# ${title}\n`);

  if (options.timestamp || options.commit || options.notes) {
    if (options.timestamp) lines.push(`- **Timestamp:** ${options.timestamp}`);
    if (options.commit) lines.push(`- **Commit:** ${options.commit}`);
    if (options.notes) lines.push(`- **Notes:** ${options.notes}`);
    lines.push('');
  }

  const mae = metrics.mae !== undefined ? metrics.mae : (metrics.overallMAE !== undefined ? metrics.overallMAE : 0);
  const rmse = metrics.rmse !== undefined ? metrics.rmse : 0;
  const spearman = metrics.spearman !== undefined ? metrics.spearman : 0;

  lines.push(`- MAE: ${mae}`);
  lines.push(`- RMSE: ${rmse}`);
  lines.push(`- Spearman: ${spearman}`);

  if (metrics.f1 !== undefined) {
    lines.push(`- F1: ${metrics.f1}`);
  }

  if (metrics.categories && typeof metrics.categories === 'object' && Object.keys(metrics.categories).length > 0) {
    lines.push('\n## Category Breakdown\n');
    lines.push('| Category | MAE | RMSE | Spearman | F1 |');
    lines.push('| --- | --- | --- | --- | --- |');

    for (const [catName, catData] of Object.entries(metrics.categories)) {
      if (typeof catData === 'object' && catData !== null) {
        const catMae = catData.mae !== undefined ? catData.mae : '-';
        const catRmse = catData.rmse !== undefined ? catData.rmse : '-';
        const catSpearman = catData.spearman !== undefined ? catData.spearman : '-';
        const catF1 = catData.f1 !== undefined ? catData.f1 : '-';
        lines.push(`| ${catName} | ${catMae} | ${catRmse} | ${catSpearman} | ${catF1} |`);
      } else if (typeof catData === 'number') {
        lines.push(`| ${catName} | ${catData} | - | - | - |`);
      }
    }
  }

  return lines.join('\n');
}

// CLI handler if run directly
const isMain = process.argv[1] && (
  path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url)) ||
  process.argv[1].endsWith('report.mjs')
);

if (isMain) {
  const fileArg = process.argv[2];
  if (fileArg && fs.existsSync(fileArg)) {
    try {
      const data = JSON.parse(fs.readFileSync(fileArg, 'utf8'));
      const report = generateReport(data.metrics || data, data.options || {});
      console.log(report);
    } catch (err) {
      console.error(`Error generating report from ${fileArg}:`, err.message);
      process.exitCode = 1;
    }
  } else {
    // Default output when run without file
    console.log(generateReport({ mae: 0, rmse: 0, spearman: 0 }));
  }
}
