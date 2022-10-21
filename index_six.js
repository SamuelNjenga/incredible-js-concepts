let c = { greeting: "Hey!" }; 
let d;

d = c; // In JavaScript, all objects interact by reference when setting them equal to each other.
// First, variable c holds a value to an object. 
// Later, we assign d with the same reference that c has to the object.
c.greeting = "Hello";
console.log(c.greeting);
console.log(d.greeting);

let a = "sam";
let b = a;
a = "njenga";
console.log(b);
