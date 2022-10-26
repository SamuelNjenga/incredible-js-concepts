const person = {
  name: "Lydia",
  age: 21,
};

// With a for-in loop, we can iterate through object keys, in this case name and age. 
// Under the hood, object keys are strings (if they're not a Symbol). 
for (const item in person) {
  console.log(item);
}
