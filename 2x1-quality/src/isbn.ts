export function checkISBN(isbn: string) {
  
  let filteredValue = ''

  for (let i = 0; i < isbn.length; i++) {
    const ch = isbn[i];
    if (ch !== '-') {
      filteredValue += ch
    }
  }

  const singleChars = filteredValue.split('')

  const normalized: number[] = [];

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
