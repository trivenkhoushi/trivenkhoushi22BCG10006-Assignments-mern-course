// Task 1: Declare age and check if adult
let age = 25;
let isAdult = age >= 18; // true if age is 18 or more
console.log("Is Adult:", isAdult);

// Task 2: Perform operations on x and y
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log("Addition:", addition);         // 15
console.log("Multiplication:", multiplication); // 50
console.log("Modulus:", modulus);           // 0

// Task 3: Check if a number is even or odd
let n = 7;
let result = (n % 2 === 0) ? "Even" : "Odd";
console.log("The number is:", result); // "Odd"

// Task 4: Store numbers 1 to 5 in an array using a for loop
let numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
console.log("Array:", numbers); // [1, 2, 3, 4, 5]

// Task 5: Define a function to return the square of a number
function square(num) {
  return num * num;
}

console.log("Square of 4:", square(4)); // 16
