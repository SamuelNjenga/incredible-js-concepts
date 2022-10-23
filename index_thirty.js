const numbers = [1, 2, 3];
numbers[10] = 11; // When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of undefined
console.log(numbers);
