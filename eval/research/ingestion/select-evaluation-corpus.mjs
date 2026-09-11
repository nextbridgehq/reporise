import fs from 'node:fs';
import path from 'node:path';

// Target archetype counts for N=120
const TARGET_COUNTS = {
  cli: 10,
  library: 12,
  framework: 10,
  sdk: 12,
  devtool: 10,
  webapp: 10,
  docs: 8,
  monorepo: 8,
  devops: 12,
  data_ml: 14,
  plugin: 7,
  small_project: 7
};

// Stratified split targets per archetype
// [Train, Validation, Test]
const TARGET_SPLITS = {
  cli: [6, 2, 2],
  library: [7, 3, 2],
  framework: [6, 2, 2],
  sdk: [7, 2, 3],
  devtool: [6, 2, 2],
  webapp: [6, 2, 2],
  docs: [5, 1, 2],
  monorepo: [5, 2, 1],
  devops: [7, 3, 2],
  data_ml: [9, 3, 2],
  plugin: [4, 1, 2],
  small_project: [4, 1, 2]
};

// Mapping of M7 legacy repos to keep fixture IDs consistent
const M7_LEGACY = {
  'eslint/eslint': 'real-001',
  'prettier/prettier': 'real-002',
  'BurntSushi/ripgrep': 'real-003',
  'sharkdp/bat': 'real-004',
  'lodash/lodash': 'real-005',
  'expressjs/express': 'real-006',
  'requests/requests': 'real-007',
  'moment/moment': 'real-008',
  'facebook/react': 'real-009',
  'vuejs/core': 'real-010',
  'django/django': 'real-011',
  'huggingface/transformers': 'real-012',
  'langchain-ai/langchain': 'real-013',
  'ollama/ollama': 'real-014',
  'docker/compose': 'real-015',
  'hashicorp/terraform': 'real-016',
  'twbs/bootstrap': 'real-017',
  'microsoft/TypeScript': 'real-018',
  'sindresorhus/awesome': 'real-019',
  'jesseduffield/lazygit': 'real-020'
};

const LEGACY_PINS = {
  'eslint/eslint': '6b6f70a1a0c7eb163013d3957bdcd653b6eb4c01',
  'prettier/prettier': '52829385b00c93a9712a4f40f0653df341a46979',
  'BurntSushi/ripgrep': 'e0129bcce5b5b19ea5d31536b9e3a6ccff39ff2e',
  'sharkdp/bat': '6b0d952a23395d985a9df61a5b46e382ce6a8779',
  'lodash/lodash': 'c358aa0c310467b7e80f9bb49ecceef02b1f09d8',
  'expressjs/express': '59a8c14838b0fb60b54fc17342880753f090ccff',
  'requests/requests': '0a7fb0d97034c7a52efcde1bcdd275ff0d1a4da6',
  'moment/moment': '6338b36fa2d2a4192b152ce8aeebe84f7243c516',
  'facebook/react': 'c0c6b16d1232840ad09efb46ba12f38d3f6696db',
  'vuejs/core': '7de31f1f9ecba2725e16543b35eb65ffb44fb7f8',
  'django/django': '7be0e495fdbd260fde253a6e877401d4a0deed7a',
  'huggingface/transformers': '992a76f2b7fef1e505cc2b2ffc87340d8bf7b75b',
  'langchain-ai/langchain': '369e59ed6e5117ee2cc55ad9c54e7d446b5a03cb',
  'ollama/ollama': 'd7486eec0854d68e0dcf45f5df8dc0e6e7fb63a3',
  'docker/compose': '0c76ce8f041ffdf5c76db35fb4cde17fccf63f58',
  'hashicorp/terraform': '633854990d7bd1c62f03f7a659cced65f32997c6',
  'twbs/bootstrap': '5f4e64f2604ed8be4cc891b0fc29fa3a91217e6e',
  'microsoft/TypeScript': 'c4e33552086a978f830c7b74bd4f3050117070ef',
  'sindresorhus/awesome': 'cf6697850ee85f1c4e7ab53bfcb057053e198083',
  'jesseduffield/lazygit': 'a4fa8a75eefeb31bfbce6cce7545935cc597ffc3'
};

function main() {
  const poolPath = path.resolve('eval/corpus/candidates-pool.json');
  const pool = JSON.parse(fs.readFileSync(poolPath, 'utf8'));

  const outputPath = path.resolve('eval/corpus/inventory.json');
  let existingPins = {};
  if (fs.existsSync(outputPath)) {
    try {
      const prev = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
      for (const item of prev) {
        if (item.commit && item.commit.length === 40) {
          existingPins[item.repository] = {
            commit: item.commit,
            commit_source: item.commit_source,
            repository_url: item.repository_url,
            captured_at: item.captured_at
          };
        }
      }
    } catch {}
  }

  // Ensure twbs/bootstrap in pool
  if (!pool.find(r => r.repository === 'twbs/bootstrap')) {
    pool.push({
      candidate_id: 'cand-017',
      repository: 'twbs/bootstrap',
      primary_archetype: 'library',
      readme_characteristics: ['char_standard', 'char_install_config'],
      language: 'javascript',
      license: 'MIT',
      stars_tier: 'flagship_50k_plus',
      proposed_split: 'train'
    });
    fs.writeFileSync(poolPath, JSON.stringify(pool, null, 2), 'utf8');
  }

  // Group candidates by archetype
  const byArch = {};
  for (const arch of Object.keys(TARGET_COUNTS)) {
    byArch[arch] = [];
  }

  for (const cand of pool) {
    if (byArch[cand.primary_archetype]) {
      byArch[cand.primary_archetype].push(cand);
    }
  }

  const selected = [];
  let nextId = 21;

  for (const arch of Object.keys(TARGET_COUNTS)) {
    const targetN = TARGET_COUNTS[arch];
    const [trainTarget, valTarget, testTarget] = TARGET_SPLITS[arch];
    const available = byArch[arch];

    // Priority to legacy M7 repos
    const legacyRepos = available.filter(c => M7_LEGACY[c.repository]);
    const otherRepos = available.filter(c => !M7_LEGACY[c.repository]);
    const candidates = [...legacyRepos, ...otherRepos];

    if (candidates.length < targetN) {
      console.error(`Not enough candidates for archetype ${arch}: have ${candidates.length}, need ${targetN}`);
      process.exit(1);
    }

    const archSelected = candidates.slice(0, targetN);

    // Assign splits according to stratified quotas
    let trainAssigned = 0;
    let valAssigned = 0;
    let testAssigned = 0;

    for (const repo of archSelected) {
      let split = 'train';
      if (trainAssigned < trainTarget) {
        split = 'train';
        trainAssigned++;
      } else if (valAssigned < valTarget) {
        split = 'validation';
        valAssigned++;
      } else {
        split = 'test';
        testAssigned++;
      }

      const fixtureId = M7_LEGACY[repo.repository] || `real-${nextId.toString().padStart(3, '0')}`;
      if (!M7_LEGACY[repo.repository]) nextId++;

      const pinData = existingPins[repo.repository] || {};
      const commit = LEGACY_PINS[repo.repository] || pinData.commit || null;
      const commit_source = LEGACY_PINS[repo.repository] ? 'legacy_m7_pin' : (pinData.commit_source || 'git_ls_remote_head');

      selected.push({
        fixture_id: fixtureId,
        repository: repo.repository,
        primary_archetype: repo.primary_archetype,
        readme_characteristics: repo.readme_characteristics,
        language: repo.language,
        license: repo.license,
        stars_tier: repo.stars_tier,
        split: split,
        repository_url: pinData.repository_url || `https://github.com/${repo.repository}.git`,
        commit: commit,
        commit_source: commit_source,
        captured_at: pinData.captured_at || new Date().toISOString()
      });
    }
  }

  // Sort strictly by fixture_id
  selected.sort((a, b) => {
    const numA = parseInt(a.fixture_id.replace('real-', ''), 10);
    const numB = parseInt(b.fixture_id.replace('real-', ''), 10);
    return numA - numB;
  });

  console.log(`Selected ${selected.length} repositories for M8 Corpus.`);
  fs.writeFileSync(outputPath, JSON.stringify(selected, null, 2), 'utf8');
  console.log(`Saved inventory to ${outputPath}`);
}

main();
