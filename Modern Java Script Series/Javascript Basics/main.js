// Console Log
console.log("Hello Java Script World");

// Variable Naming Convention Standards
// Can Not Use Reserved Keywords
// Meaningful Naming
// Can Not Start With A Number
// Can Not Contain A Space Or Hyphen
// Case Sensitive

let firstName = "aBappy";
let lastName = "bSarkar";

console.log(firstName + " " + lastName);

// Constant Elemnts
const interestRate = 4.7;
console.log(interestRate);
// TypeAssignment Error
// interestRate = 4.9;
// console.log(interestRate);

// Primitive Types Values
// String
let someName = "John Doe";
// Number
let someNumber = 26;
// Boolean
let isApproaved = true;
// Undeffined
let userName = undefined;
// Null
let selectedColor = null;

// Reference Types Values
// Object
let person = {
  name: "aBappy",
  age: 26
};
// Dot Notation
console.log(person.name);
person.age = 29;
console.log(person.age);
// Bracket Notation
person["name"] = "Julliane Houghe";
console.log(person.name);
console.log(person["name"]);

console.log(person);

// Array
let selectedColors = ["red", "green", "blue", "opaque"];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[3] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

// Function
function greetPerson(name, age) {
  console.log("Yo Yo");
  console.log("Greetings " + name + " " + "Aged : " + age);
}

//greetPerson();
greetPerson("aBappy", 26);

function returnSquare(number) {
  return number * number;
}

let squaredNumber = returnSquare(5);

console.log(squaredNumber);
console.log(returnSquare(4));
