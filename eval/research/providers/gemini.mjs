import { GoogleGenAI } from '@google/genai';
import { getCurrentStatePrompt, getJSONSchema } from '../context.mjs';

export class LLMStrategyProvider {
  constructor(config) {
    this.model = config.model || 'gemini-2.5-flash';
    this.apiKey = config.apiKey;
    if (!this.apiKey) throw new Error('No API key');
    this.ai = new GoogleGenAI({ apiKey: this.apiKey });
    this.metadata = { provider: 'gemini', model: this.model, endpoint: 'google.genai' };
  }

  async propose(context) {
    let retries = 15;
    while (retries > 0) {
      try {
        const prompt = getCurrentStatePrompt(context);
        const schema = getJSONSchema();

        const response = await this.ai.models.generateContent({
          model: this.model,
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: schema,
            temperature: 0.7
          }
        });

        const text = response.text;
        if (!text) {
          console.log('Empty response (likely safety filter). Retrying...');
          retries--;
          continue; 
        }
        
        const proposal = JSON.parse(text);
        if (!proposal.target) { retries--; continue; }
        
        return proposal;
      } catch (err) {
        console.log(\API Error: \\);
        const delay = Math.pow(2, Math.min(6, 15 - retries)) * 2000;
        await new Promise(r => setTimeout(r, delay));
        retries--;
      }
    }
    throw new Error('LLM error: Max retries exhausted');
  }
}
