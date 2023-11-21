# Testowanie z Asystentem AI

## Uruchom zdalnie

![](../_resources/img/fork-quality.png)

1. Otwórz [projekt na replit.com](https://replit.com/@przeprogramowan/ISBNTesting)
2. Kliknij w przycisk "Fork" aby utworzyć kopię na twoim koncie
3. W razie potrzeby zaloguj się na swoje konto na replit.com i kontynuuj pracę

## Uruchom lokalnie

```bash
npm install
npm test
npm start
```

Testy stworzone przy pomocy biblioteki [Jest - zobacz dokumentację](https://jestjs.io/docs/getting-started)

## Zadanie

W pliku `index.ts` znajduje się przykładowy kod zgłoszony do Code Review. Na podstawie informacji ze szkolenia przejdź przez kolejne kroki procesu Code Review wspomaganego przez asystenta AI. Uzupełnij brakujące testy.

### Logika biznesowa

Książki są identyfikowane przez numery ISBN-10. Numery te zwykle zawierają myślniki, i przykładowo wyglądają tak: 99921-58-10-7

Na ISBN-10 składa się 9 cyfr (od 0 do 9) oraz jeden znak kontrolny (cyfra lub X). Znak kontrolny X reprezentuje liczbę 10. 

Algorytm weryfikujący wygląda następująco:
`(x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) % 11 == 0`

### Przykład
ISBN: `85-359-0277-5`
`(8 * 10 + 5 * 9 + 3 * 8 + 5 * 7 + 9 * 6 + 0 * 5 + 2 * 4 + 7 * 3 + 7 * 2 + 5 * 1) % 11 == 0`

Algorytm potwierdza poprawność tego ISBN-10.

### Cel zadania
W oparciu o zaprezentowany powyżej algorytm, napisz funkcję sprawdzającą przekazany w formie stringa ISBN.

Funkcja powinna obsłużyć ISBN zarówno z myślnikami, jak i bez myślników.
