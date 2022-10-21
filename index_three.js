const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius, // With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions!
  // This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).
  // There is no value radius on that object, which returns NaN.
};

console.log(shape.diameter());
console.log(shape.perimeter());
