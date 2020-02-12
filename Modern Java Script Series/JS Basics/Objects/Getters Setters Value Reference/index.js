console.log("Getters Setters Value Reference Types");

const personExample = {
  firstName: "Julia",
  lastName: "Augusta",
  //   fullName() {
  //     return `${this.firstName} ${personExample.lastName}`;
  //   },
  // Getters => Access Properties
  // Uses get In front Of Funtion
  get fullName() {
    return `${this.firstName} ${personExample.lastName}`;
  },
  // Setters => Mutate them
  // Uses set In front Of Funtion
  set fullName(name) {
    const nameParts = name.split(" ");
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  }
};

//console.log(personExample.fullName());
console.log(personExample.fullName);

console.log((personExample.fullName = "Halsey Rose"));

personExample.fullName = "Stacey Jane";

console.log(personExample);

// Value Types : Primitives Are Coppied By Values
// Number, String, Boolean, Symbol, Undefined, Null

// First Example :
let someValue = 10;
let anotherValue = someValue;

console.log(anotherValue);
someValue = 20;
console.log(someValue);

// Second Example :
let someNumber = 11;
function increaseCount(someNumber) {
  return someNumber++;
}
const result = increaseCount(someNumber);
console.log(someNumber);
console.log(result);

// Reference Types : Objects Are Copied By Reference
// Function, Object And Array.

// First Example :
let someObject = { value: 10 };
let anotherObject = someObject;

console.log(anotherObject.value);
someObject.value = 20;
console.log(anotherObject.value);

// Second Example :
let anotherNumber = { value: 11 };
function increaseCounter(object) {
  return object.value++;
}
increaseCounter(anotherNumber);
console.log(anotherNumber.value);
console.log(increaseCounter(anotherNumber));
