/* 
Multi-line 
Comment 
*/
console.log("Hello Free Code Camp"); // In-line Comment

// Data Types : Undefined, Null, String, Symbols, Numbers, Objects, Arrays.
// Variables : var, const, let

const unMutable = "On Change Type Error";

//unMutable = "New Value Assignment Will Cause TypeError";

let mutable = "Can Be Changed At Will";

mutable = 8;

// Value Assignment In Variables
var number;
console.log(number);
var another = 4;
console.log(another);
number = another;
console.log(number);
console.log(
  "Const Data Type Is " + unMutable + " " + "Other Types : " + mutable
);

// Naming Conventions : camelCasing(camelNotation), PascalCasing(PascalNotation).

// Arithmatic Expressions : Add, Substract, Multiply, Devide, Incrementing, Decrementing
// Decimal Numbers, Finding Remainders (%) - To Find A Nummber Being Even Or Odd.
// Compund Assignment With Augmented Addition ( += ), Compund Assignment With Augmented Subtraction ( -= )
// Compund Assignment With Augmented Multiplication ( *= ), // Compund Assignment With Augmented Division ( /= )

// Escaping Literal Quotes In Strings
let escapingLiterals = "inside Quotes 'Inside Nested ' ";
console.log(escapingLiterals);

escapingLiterals = `Using Backtics "It's Simple" And 'Customizable Easily', Hi ${0 +
  5}`;

console.log(escapingLiterals);

// Escape Sequences In Strings.
/**
 * Single Quote \'
 * Double Quote \"
 * Backslash \\
 * New Line \n
 * Carriage Return \r
 * Tab \t
 * Backspace \b
 * Form Feed \f
 */

let escapingSequences = "First Line\n\t\\Second Line\n\t\t\\Third Line";
console.log(escapingSequences);

// Concatenate Strings :
let exampleString = "Before Adjoins";
exampleString += " With Adjoins";

console.log(exampleString);

let anotherString = "Learning Javascript";
let sampleString = " Is Worthwhile";

anotherString += sampleString;
console.log(anotherString);

// String Usage :
console.log(anotherString.length);
console.log(anotherString[1]);

let exStr = "Some Strings";
exStr[0] = "s";
exStr = "some string";
console.log(exStr);

console.log(exStr[3]);
console.log(exStr[exStr.length - 1]);
console.log(exStr[exStr.length - 2]);

// Word Blanks (Madlibs Game)
function wordBlanks(noun, adjective, verb, adVerb) {
  let resultingScentence = "";
  resultingScentence +=
    "The " + adjective + " " + noun + " " + verb + " " + adVerb + " To Store";
  return resultingScentence;
}

//wordBlanks("Dog", "Big", "Ran", "Quickly");
console.log(wordBlanks("Dog", "Big", "Ran", "Quickly"));
console.log(wordBlanks("Bike", "Slick", "Reached", "Easily"));

// Arrays :
let exampleArray = ["Daisy Lydic", 26];
console.log(exampleArray);
console.log(exampleArray[0]);
console.log(exampleArray[1]);

exampleArray[0] = "Kate Nessy";
console.log(exampleArray[0]);

let nestedArray = [
  ["The Universe", 42],
  ["Everthing Is", 101010]
];

console.log(nestedArray);
console.log(nestedArray[(0, 0)]);
console.log(nestedArray[(1, 1)][0]);
console.log(nestedArray[(1, 0)][1]);

let anotherNested = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12]]];
console.log(anotherNested);
console.log(anotherNested[0][1]);
console.log(anotherNested[2][1]);
console.log(anotherNested[3][0][0]);

let exArray = ["Scarlett Johanssen", "AG", "Fiesty"];
exArray.push(["Jessica Rosay", 26]);
exArray.push(["John Doe", 35]);

console.log(exArray);

exArray.pop();
console.log(exArray);

console.log(exArray[0]);
console.log(exArray[3][1]);
console.log(exArray[3][0]);

let anArray = ["Hanna", "J", ["Kitty"]];
//console.log(anArray);
anArray.shift();
anArray.shift();
anArray.unshift("H");
anArray.unshift("Leila");
console.log(anArray);

let shoppingList = [
  ["Cereal", 3],
  ["Milk", 2],
  ["Pears", 4],
  ["Juice", 2],
  ["Eggs", 12]
];

console.log(shoppingList);
console.log(shoppingList[0]);
console.log(shoppingList[0][1]);
console.log(shoppingList[0][0]);

// Functions
function reusableCodes() {
  console.log("Howdy Ya'll");
  //return "Howdy Ya'll";
}

reusableCodes();
reusableCodes();

function withArgs(val, num) {
  console.log(val - num);
  //return val - num;
}
withArgs(8, 1);
//console.log(withArgs(8, 1));

let globalVariable = 10;

function variableScoping() {
  // As not Using Varable Keyword Javascript Will Keep It In Global Context.
  unintentionalGlobal = 11;
  //let unintentionalGlobal = 11;
}

function variableScope() {
  let outputString = "";
  if (typeof globalVariable != "undefined") {
    outputString += "Global Variable Value Is : " + globalVariable;
  }
  if (typeof unintentionalGlobal != "undefined") {
    outputString += " \nGLobal Variable : " + unintentionalGlobal;
  }

  console.log(outputString);
}

variableScoping();
variableScope();

function localScoping() {
  let localVariable = 8;
  console.log(localVariable);
}

localScoping();
//console.log(localVariable);
