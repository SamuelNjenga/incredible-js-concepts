let person = { name: "Lydia" };

const members = [person];

person = null; // We are only modifying the value of the person variable, and not the first element in the array, since that element has a different (copied) reference to the object. 
// The first element in members still holds its reference to the original object

console.log(members);
