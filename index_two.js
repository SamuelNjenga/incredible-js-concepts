// Since the variable i in the first loop was declared using the var keyword, this value was global.
// During the loop, we incremented the value of i by 1 each time, using the unary operator ++.
// By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

// Variable i was declared using the let keyword:
// variables declared with the let (and const) keyword are block-scoped (a block is anything between { }).
// During each iteration, i will have a new value, and each value is scoped inside the loop
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
