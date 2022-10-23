function sayHi() {
  return (() => 0)(); // The sayHi function returns the returned value of the immediately invoked function expression (IIFE). This function returned 0, which is type "number"
}

console.log(typeof sayHi());
