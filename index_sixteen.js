// When testing equality, primitives are compared by their value,
// while objects are compared by their reference.
// JavaScript checks if the objects have a reference to the same location in memory.

// The two objects that we are comparing don't have that:
// the object we passed as a parameter refers to a different location in memory than the object we used
// in order to check equality.

function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
