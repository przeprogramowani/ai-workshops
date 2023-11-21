# 🙅🏻‍♀️ SPOILER ALERT! 👮‍♂️

## Code Review Plugin

Funkcja dla GPT-4:

```js
export const CODE_REVIEW_FORMATTER = {
  name: "processCodeReviewScore",
  description:
    "Funkcja przetwarzająca kryteria oceny w procesie Code Review kodu JavaScript",
  parameters: {
    type: "object",
    properties: {
      complexity: {
        type: "object",
        properties: {
          score: {
            type: "number",
            description:
              "Ocena złożoności kodu, gdzie 1 oznacza kod złożony i przesadnie skomplikowany, a 10 oznacza kod łatwy w zrozumieniu",
          },
          description: {
            type: "string",
            description: "Krótki opis wyjaśniający ocenę w kategorii złożoność",
          },
        },
      },
      readability: {
        type: "object",
        properties: {
          score: {
            type: "number",
            description:
              "Ocena czytelności kodu, gdzie 1 oznacza kod nieczytelny lub trudny w zrozumieniu a 10 oznacza kod czytelny i dobrze sformatowany",
          },
          description: {
            type: "string",
            description: "Krótki opis wyjaśniający ocenę w kategorii czytelność",
          },
        },
      },
      reusability: {
        type: "object",
        properties: {
          score: {
            type: "number",
            description:
              "Ocena reużywalności kodu, gdzie 1 oznacza kod trudny to ponownego wykorzystania, a 10 oznacza kod łatwy do wykorzystania w innym serwisie lub bibliotece",
          },
          description: {
            type: "string",
            description: "Krótki opis wyjaśniający ocenę w kategorii reużywalność",
          },
        },
      },
    },
    required: ["complexity", "readability", "reusability"],
  },
};
```