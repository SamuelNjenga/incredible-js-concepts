const person = { name: "Lydia" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21)); // With both, we can pass the object to which we want the this keyword to refer to. However, .call is also executed immediately!
console.log(sayHi.bind(person, 21)); // .bind. returns a copy of the function, but with a bound context! It is not executed immediately.