// Regular functions cannot be stopped mid-way after invocation. 
// However, a generator function can be "stopped" midway, and later continue from where it stopped. 
// Every time a generator function encounters a yield keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t return the value, it yields the value.

function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
