/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import {GoogleGenAI} from '@google/genai';

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

const response = await ai.models.generateContentStream({
  model: 'gemini-2.0-flash',
  contents: 'hello?',
});
for await (const chunk of response) {
  document.body.textContent += chunk.text;
}
