let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b); // However, when we use the === operator, both value and type should be the same. 
// It's not: new Number() is not a number, it's an object. Both return false.
console.log(b === c);
console.log(a === c);