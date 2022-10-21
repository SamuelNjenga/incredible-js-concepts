function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia"; // Within the function, we first declare the name variable with the var keyword.
  // This means that the variable gets hoisted (memory space is set up during the creation phase)
  // with the default value of undefined, until we actually get to the line where we define the variable.
  let age = 21; // Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. // They are not accessible before the line we declare (initialize) them.
  // When we try to access the variables before they are declared, JavaScript throws a ReferenceError
}

sayHi();