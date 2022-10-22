function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = () => {
  return `${firstName} ${lastName}`;
};

const lydia = new Person("Lydia", "Hallie");

const sarah = Person("Sarah", "Smith");

console.log(lydia.getFullName());
console.log(sarah);
