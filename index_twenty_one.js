const obj = { 1: "a", 2: "b", 3: "c" }; // All object keys (excluding Symbols) are strings under the hood,
// even if you don't type it yourself as a string.
const set = new Set([1, 2, 3, 4, 5]); // It doesn't work that way for a set.
// There is no '1' in our set: set.has('1') returns false

console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1));
console.log(set.has("1"));
console.log(set.has(1));
