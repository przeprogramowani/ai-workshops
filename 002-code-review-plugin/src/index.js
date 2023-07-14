import "dotenv/config";
import { Configuration, OpenAIApi } from "openai";
import { SYSTEM_MESSAGE, CODE_SNIPPET } from "./prompts.js";
import { createLoader, cancelLoader } from "./utils.js";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

createLoader("Pobieram odpowiedź z GPT-4");

const completion = await openai.createChatCompletion({
  model: "gpt-4-0613",
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

cancelLoader();

console.log(completion.data.choices[0].message.content);