import fs from 'fs';
import path from 'path';

export function scoreFixture(fixtureId, productionCollect, productionChecks) {
  console.log(`Scoring ${fixtureId}...`);
  return { overall: 4 }; // Placeholder for actual scoring logic hooking into reporise
}
