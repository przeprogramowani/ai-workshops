# Code Review Plugin

## Uruchom zdalnie

![](../_resources/img/fork-code-review.png)

1. Otwórz [projekt na replit.com](https://replit.com/@przeprogramowan/GPTCodeReview)
2. Kliknij w przycisk "Fork" aby utworzyć kopię na twoim koncie
3. W razie potrzeby zaloguj się na swoje konto na replit.com i kontynuuj pracę

## Zadanie

W pliku `index.js` znajduje się kod dzięki któremu przeprowadzisz Code Review z wykorzystaniem API GPT-4. Aktualna implementacja to pierwszy krok do stworzenia zautomatyzowanego plugin Code Review, którego możesz zintegrować z pipelinem CI/CD.

Spraw, aby odpowiedź uzyskana z API GPT-4 była poprawnie sformatowana (JSON). Wykorzystaj do tego `function calling` - https://platform.openai.com/docs/guides/gpt/function-calling

### Wymagania

* [Node 20](https://nodejs.org/en)
* Dodanie klucza do API OpenAI w pliku `.env` ([Utwórz klucz](https://platform.openai.com/account/api-keys))

### Instalacja

`npm install`

### Uruchomienie

`npm start`
