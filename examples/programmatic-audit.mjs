/**
 * Programmatic audit example using RepoRise.
 *
 * When installed from npm in your project:
 *   import { audit } from 'reporise';
 *
 * When running directly from the local repository clone:
 */
import { audit } from '../skills/visibility-audit/scripts/audit.mjs';

// Run an offline visibility audit on a target repository path
const result = audit('.');

console.log(`Repository    : ${result.signals.repo.dirName}`);
console.log(`Overall Score : ${result.overall}%`);
console.log(`Surface Scores: SEO=${result.surfaces.seo}% · AEO=${result.surfaces.aeo}% · GEO=${result.surfaces.geo}%\n`);

console.log('Top Prioritized Fixes:');
if (result.topFixes.length === 0) {
  console.log('  None! All citable and retrieval signals are optimal.');
} else {
  for (const fix of result.topFixes) {
    const symbol = fix.status === 'fail' ? '✗' : '!';
    console.log(`  ${symbol} [${fix.id}] ${fix.title} (Priority: ${fix.priority})`);
  }
}
