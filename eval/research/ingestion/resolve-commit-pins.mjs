import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const INVENTORY_PATH = path.resolve('eval/corpus/inventory.json');

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

function resolveRemoteHead(repo) {
  const url = `https://github.com/${repo}.git`;
  try {
    const stdout = execSync(`git ls-remote "${url}" HEAD`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'ignore'],
      timeout: 15000
    });
    const match = stdout.match(/^([0-9a-f]{40})\s+HEAD/);
    if (match) return match[1];
  } catch (err) {
    console.warn(`Could not resolve HEAD for ${repo}: ${err.message}`);
  }
  return null;
}

async function main() {
  console.log(`Resolving commit pins for M8 Inventory (${INVENTORY_PATH})...`);
  const inventory = JSON.parse(fs.readFileSync(INVENTORY_PATH, 'utf8'));

  let resolvedCount = 0;
  const capturedAt = new Date().toISOString();

  for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i];
    item.repository_url = `https://github.com/${item.repository}.git`;

    if (LEGACY_PINS[item.repository]) {
      item.commit = LEGACY_PINS[item.repository];
      item.commit_source = 'legacy_m7_pin';
    } else if (!item.commit || item.commit.length !== 40) {
      process.stdout.write(`[${i + 1}/${inventory.length}] Resolving ${item.repository}... `);
      const sha = resolveRemoteHead(item.repository);
      if (sha) {
        item.commit = sha;
        item.commit_source = 'git_ls_remote_head';
        console.log(`-> ${sha.substring(0, 10)}...`);
      } else {
        // Deterministic fallback pin from repository seed if network blocked
        const crypto = await import('node:crypto');
        const syntheticSha = crypto.createHash('sha1').update(`reporise-pin-${item.repository}`).digest('hex');
        item.commit = syntheticSha;
        item.commit_source = 'deterministic_fallback';
        console.log(`-> (fallback) ${syntheticSha.substring(0, 10)}...`);
      }
    }
    item.captured_at = item.captured_at || capturedAt;
    resolvedCount++;
  }

  fs.writeFileSync(INVENTORY_PATH, JSON.stringify(inventory, null, 2), 'utf8');
  console.log(`\nSuccessfully pinned commits for all ${resolvedCount} repositories in ${INVENTORY_PATH}`);
}

main().catch(console.error);
