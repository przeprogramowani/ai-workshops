import {checkISBN} from './isbn.js';

const r1 = checkISBN("85-359-0277-5");
const r2 = checkISBN("85-359-0277-9");
const r3 = checkISBN("3-04-013311-X");

console.log(r1); // true
console.log(r2); // false
console.log(r3); // true
