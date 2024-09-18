import "dotenv/config";

import OpenAI from 'openai';

import { SYSTEM_MESSAGE, CODE_SNIPPET } from "./prompts";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const stream = await openai.chat.completions.create({
  model: "gpt-4-1106-preview",
  stream: true,
  messages: [
    { role: "system", content: SYSTEM_MESSAGE },
    {
      role: "user",
      content: `
        Przeprowadź Code Review następującego fragmentu kodu:

        ${CODE_SNIPPET}

        Oceń go wg kryteriów złożoności, czytelności oraz reużywalności.

        Do każdego kryterium dodaj ocenę od 1 do 10, gdzie 10 to maksymalna oczekiwana wartość.
      `,
    },
  ]
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}