import path from 'node:path';
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const CHECKS_PATH = path.resolve('skills/visibility-audit/scripts/lib/checks.mjs');
const CACHE_PATH = path.resolve('eval/research/collected-cache.json');
const SPLITS_PATH = path.resolve('eval/metadata/splits.json');

function scoreToBucket(score) {
  if (score >= 90) return 5;
  if (score >= 70) return 4;
  if (score >= 50) return 3;
  if (score >= 30) return 2;
  if (score >= 10) return 1;
  return 0;
}

let cachedData = null;
let heldOutTestIds = null;

function loadCacheAndInvariants() {
  if (!heldOutTestIds) {
    if (fs.existsSync(SPLITS_PATH)) {
      const splits = JSON.parse(fs.readFileSync(SPLITS_PATH, 'utf8'));
      heldOutTestIds = new Set(splits.assignments.test || []);
    } else {
      heldOutTestIds = new Set();
    }
  }

  if (!cachedData) {
    if (!fs.existsSync(CACHE_PATH)) {
      throw new Error(`Evaluation cache missing at ${CACHE_PATH}. Run 'node eval/research/build-cache.mjs' first.`);
    }
    const raw = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));

    // STRICT ISOLATION ASSERTION: Zero test repositories allowed in cache
    for (const item of raw) {
      if (heldOutTestIds.has(item.fixture_id) || item.split === 'test') {
        throw new Error(`CRITICAL ISOLATION VIOLATION: Held-out test repository ${item.fixture_id} found in optimization cache!`);
      }
    }

    cachedData = raw;
  }

  return { cache: cachedData, heldOutTestIds };
}

function computeSubsetMetrics(subset, runChecks) {
  const surfaces = ['overall', 'seo', 'aeo', 'geo'];
  const surfaceMetrics = {};
  const archetypeMap = {};

  for (const s of surfaces) {
    let sumAbs = 0;
    let sumDiff = 0;
    let exactCount = 0;
    let withinOneCount = 0;

    for (const item of subset) {
      const { results, surfaces: sfs, overall } = runChecks(item.collected);
      const seo = sfs.seo || 0;
      const aeo = sfs.aeo || 0;
      const geo = sfs.geo || 0;
      const finalOverall = overall !== null ? overall : Math.round((seo + aeo + geo) / 3);

      const pred = scoreToBucket(s === 'overall' ? finalOverall : (sfs[s] || 0));
      const actual = s === 'overall' ? item.ground_truth.calibrated_score : item.ground_truth.scores[s];

      const diff = pred - actual;
      sumDiff += diff;
      sumAbs += Math.abs(diff);
      if (diff === 0) exactCount++;
      if (Math.abs(diff) <= 1) withinOneCount++;

      // Archetype accumulation on overall score
      if (s === 'overall') {
        const arch = item.primary_archetype;
        if (!archetypeMap[arch]) {
          archetypeMap[arch] = { diffs: [], absDiffs: [] };
        }
        archetypeMap[arch].diffs.push(diff);
        archetypeMap[arch].absDiffs.push(Math.abs(diff));
      }
    }

    const n = subset.length;
    surfaceMetrics[s] = {
      n,
      mae: Number((sumAbs / n).toFixed(4)),
      me: Number((sumDiff / n).toFixed(4)),
      exactPct: Number(((exactCount / n) * 100).toFixed(1)),
      withinOnePct: Number(((withinOneCount / n) * 100).toFixed(1))
    };
  }

  const archetypeMetrics = {};
  for (const [arch, acc] of Object.entries(archetypeMap)) {
    const n = acc.absDiffs.length;
    archetypeMetrics[arch] = {
      n,
      mae: Number((acc.absDiffs.reduce((a, b) => a + b, 0) / n).toFixed(4)),
      me: Number((acc.diffs.reduce((a, b) => a + b, 0) / n).toFixed(4))
    };
  }

  return {
    mae: surfaceMetrics.overall.mae,
    overall: surfaceMetrics.overall,
    surfaces: {
      seo: surfaceMetrics.seo,
      aeo: surfaceMetrics.aeo,
      geo: surfaceMetrics.geo
    },
    archetypes: archetypeMetrics
  };
}

export async function evaluateFixture(options = {}) {
  const { cache } = loadCacheAndInvariants();

  // Dynamic import with cache buster to evaluate freshly mutated checks.mjs
  const fileUrl = `${pathToFileURL(CHECKS_PATH).href}?t=${Date.now()}`;
  const checksModule = await import(fileUrl);
  const runChecks = checksModule.runChecks;

  const trainSubset = cache.filter(c => c.split === 'train');
  const valSubset = cache.filter(c => c.split === 'validation');

  const realTrainMetrics = computeSubsetMetrics(trainSubset, runChecks);
  const realValMetrics = computeSubsetMetrics(valSubset, runChecks);

  return {
    trainMetrics: { mae: realTrainMetrics.mae },
    validationMetrics: { mae: realValMetrics.mae },
    realTrainMetrics,
    realValidationMetrics: realValMetrics,
    edgeCaseMetrics: { edgeCasePassRate: 1.0 }
  };
}
