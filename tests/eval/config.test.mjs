import test from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { loadConfig } from '../../eval/research/config.mjs';

test('config precedence', async (t) => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'reporise-config-test-'));
  
  try {
    await t.test('nothing configured -> defaults', () => {
      const config = loadConfig({}, tmpDir, {});
      assert.strictEqual(config.llm.provider, 'llm');
      assert.strictEqual(config.llm.model, 'gpt-4o-mini');
      assert.strictEqual(config.research.campaign, 'default');
    });

    await t.test('.env -> values loaded', () => {
      fs.writeFileSync(path.join(tmpDir, '.env'), 'LLM_MODEL=env-model\\nLLM_PROVIDER=env-prov');
      const config = loadConfig({}, tmpDir, {});
      assert.strictEqual(config.llm.model, 'env-model');
      assert.strictEqual(config.llm.provider, 'env-prov');
      fs.unlinkSync(path.join(tmpDir, '.env'));
    });

    await t.test('.env + .env.local -> .env.local wins', () => {
      fs.writeFileSync(path.join(tmpDir, '.env'), 'LLM_MODEL=env-model');
      fs.writeFileSync(path.join(tmpDir, '.env.local'), 'LLM_MODEL=local-model');
      const config = loadConfig({}, tmpDir, {});
      assert.strictEqual(config.llm.model, 'local-model');
      fs.unlinkSync(path.join(tmpDir, '.env'));
      fs.unlinkSync(path.join(tmpDir, '.env.local'));
    });

    await t.test('.env.local + process.env -> process.env wins', () => {
      fs.writeFileSync(path.join(tmpDir, '.env.local'), 'LLM_MODEL=local-model');
      const processEnv = { LLM_MODEL: 'process-model' };
      const config = loadConfig({}, tmpDir, processEnv);
      assert.strictEqual(config.llm.model, 'process-model');
      fs.unlinkSync(path.join(tmpDir, '.env.local'));
    });

    await t.test('.env.local + process.env + CLI -> CLI wins', () => {
      fs.writeFileSync(path.join(tmpDir, '.env.local'), 'CAMPAIGN_ID=local-campaign');
      const processEnv = { CAMPAIGN_ID: 'process-campaign' };
      const config = loadConfig({ campaign: 'cli-campaign' }, tmpDir, processEnv);
      assert.strictEqual(config.research.campaign, 'cli-campaign');
      fs.unlinkSync(path.join(tmpDir, '.env.local'));
    });
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});
