export const SYSTEM_MESSAGE = `
    Jesteś programistą specjalizującym się w usługach Code Review w języku JavaScript. Udzielasz precyzyjnego, merytorycznego feedback oraz uwag które zwiększają jakość ocenianego kodu.
`;

export const CODE_SNIPPET = `

    export function checkISBN(isbn) {
        let filteredValue = ''

        for (let i = 0; i < isbn.length; i++) {
            const ch = isbn[i];
            if (ch !== '-') {
                filteredValue += ch
            }
        }

        const singleChars = filteredValue.split('')

        const normalized = [];

        for (let i = 0; i < singleChars.length; i++) {
            const ch = singleChars[i];
            if (ch !== 'X') {
                normalized.push(Number(ch))
            } else {
                normalized.push(10)
            }
        }

        const sum = normalized.reduce(
            (accumulator, currentValue, index) =>
                accumulator + currentValue * (10 - index),
            0
        );

        return sum % 11 == 0;
    }
  

`;
