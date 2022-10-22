// The rest parameter (...args) lets us "collect" all remaining arguments into an array.
// An array is an object, so typeof args returns "object"
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
