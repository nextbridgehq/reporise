import fs from 'node:fs';
import path from 'node:path';

export function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  const env = {};
  content.split('\n').forEach(line => {
    // Ignore comments and empty lines
    if (line.trim().startsWith('#') || line.trim() === '') return;
    
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      let key = match[1];
      let value = match[2] || '';
      // Strip quotes if present
      if (value.length > 0 && (value.charAt(0) === '"' || value.charAt(0) === "'") && value.charAt(0) === value.charAt(value.length - 1)) {
        value = value.substring(1, value.length - 1);
      }
      env[key] = value.trim();
    }
  });
  return env;
}

export function loadConfig(cliOptions = {}, cwd = process.cwd(), processEnv = process.env) {
  const dotEnv = parseEnvFile(path.join(cwd, '.env'));
  const dotEnvLocal = parseEnvFile(path.join(cwd, '.env.local'));

  // Precedence: CLI > processEnv > .env.local > .env > defaults
  const resolve = (key, cliValue, defaultVal) => {
    if (cliValue !== undefined) return cliValue;
    if (processEnv[key] !== undefined) return processEnv[key];
    if (dotEnvLocal[key] !== undefined) return dotEnvLocal[key];
    if (dotEnv[key] !== undefined) return dotEnv[key];
    return defaultVal;
  };

  return {
    llm: {
      provider: resolve('LLM_PROVIDER', cliOptions.provider, 'llm'),
      apiKey: resolve('LLM_API_KEY', undefined, resolve('OPENAI_API_KEY', undefined, '')),
      baseUrl: resolve('LLM_BASE_URL', undefined, 'https://api.openai.com/v1'),
      model: resolve('LLM_MODEL', undefined, 'gpt-4o-mini')
    },
    research: {
      campaign: resolve('CAMPAIGN_ID', cliOptions.campaign, 'default')
    }
  };
}
