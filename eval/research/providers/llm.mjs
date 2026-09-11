import { getCurrentStatePrompt } from '../context.mjs';
import { redactError } from '../secrets.mjs';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * @implements {import('../strategy-interface.mjs').StrategyProvider}
 */
export class LLMStrategyProvider {
  constructor(config = {}) {
    this.apiKey = config.apiKey || '';
    this.model = config.model || 'gpt-4o-mini';
    this.baseUrl = (config.baseUrl || 'https://api.openai.com/v1').replace(/\/$/, '');
    
    // Syntactic URL validation before network request
    try {
      new URL(this.baseUrl);
    } catch (e) {
      throw new Error(`Invalid LLM_BASE_URL: ${this.baseUrl}`);
    }
    
    // The generic provider metadata contract
    this.metadata = {
      provider: config.provider || 'llm',
      model: this.model,
      endpoint: this.baseUrl
    };
  }

  async propose(context) {
    // 1. Configuration Validation (delayed until execution)
    if (!this.apiKey) {
      throw new Error(`ERROR: LLM_API_KEY is required for provider "${this.metadata.provider}".`);
    }

    const prompt = getCurrentStatePrompt(context.allocationPolicy, context.allocation);
    
    // Backoff variables
    let retries = 3;
    let delay = 2000; // 2 seconds

    while (retries > 0) {
      // 2. Timeout Handling
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 90000); // 90 seconds timeout
      
      let response;
      try {
        response = await fetch(`${this.baseUrl}/chat/completions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`
          },
          body: JSON.stringify({
            model: this.model,
            messages: [{ role: 'user', content: prompt }],
            response_format: { type: 'json_object' }
          }),
          signal: controller.signal
        });
      } catch (e) {
        if (e.name === 'AbortError') {
          throw new Error('LLM API Error: Request timed out after 90 seconds');
        }
        throw new Error(`LLM API Error: Network or fetch failure (${redactError(e.message)})`);
      } finally {
        clearTimeout(timeoutId);
      }

      // 3. Response Validation
      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        
        if (response.status === 429) {
          retries--;
          if (retries === 0) {
            throw new Error(`LLM API Error: 429 Too Many Requests. Retries exhausted.`);
          }
          console.log(`Rate limited by API (429). Retrying in ${delay}ms...`);
          await sleep(delay);
          delay *= 2; // exponential backoff
          continue; // retry
        }

        throw new Error(`LLM API Error: ${response.status} ${response.statusText} ${errorText}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      
      if (!content) {
        throw new Error('LLM returned no content in choices[0].message.content');
      }

      // 4. JSON Parsing
      try {
        return JSON.parse(content);
      } catch (e) {
        throw new Error('LLM returned invalid JSON structure');
      }
    }
  }
}
