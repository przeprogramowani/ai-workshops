# Code Review Plugin

W pliku `index.js` znajduje się kod dzięki któremu przeprowadzisz Code Review z wykorzystaniem API GPT-4. Aktualna implementacja to pierwszy krok do stworzenia zautomatyzowanego plugin Code Review, którego możesz zintegrować z pipelinem CI/CD.

## Wymagania

* [Node 20](https://nodejs.org/en)
* Dodanie klucza do API OpenAI w pliku `.env` ([Utwórz klucz](https://platform.openai.com/account/api-keys))

## Instalacja

`npm install`

## Uruchomienie

`npm start`

## Twoje zadanie

Spraw, aby odpowiedź uzyskana z API GPT-4 była poprawnie sformatowana (JSON). Wykorzystaj do tego `function calling` - https://platform.openai.com/docs/guides/gpt/function-calling