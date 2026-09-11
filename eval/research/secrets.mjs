/**
 * Utilities for redacting API keys and sensitive configuration from logs and outputs.
 */

export function redactConfig(config) {
  const safeConfig = JSON.parse(JSON.stringify(config));
  if (safeConfig.llm) {
    if (safeConfig.llm.apiKey) {
      safeConfig.llm.apiKey = 'configured';
    } else {
      safeConfig.llm.apiKey = 'missing';
    }
  }
  return safeConfig;
}

export function redactError(errorMessage) {
  if (!errorMessage) return errorMessage;
  // Naive regex to strip anything looking like key=...
  return errorMessage.replace(/([?&])key=[^&\s]+/, '$1key=REDACTED')
                     .replace(/Bearer\s+[^\s"']+/, 'Bearer REDACTED');
}
