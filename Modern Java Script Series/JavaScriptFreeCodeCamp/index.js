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

// Variable Precedence
function localPrecedence() {
  let globalVariable = "Within Function";
  console.log(globalVariable);
}

localPrecedence();
console.log(globalVariable);

// Return Value From Function
function deductNumber(value) {
  return value - 2;
}

console.log(deductNumber(7));

function multiplyValue(number) {
  return number * 5;
}
console.log(multiplyValue(5));

let multReturned = multiplyValue(1);
console.log(multReturned);

function devideIntegers(val) {
  val /= 2; // Will Return Undefined To Console For Not Including Return Keyword.
}

console.log(devideIntegers(8)); // Logs Undefined.

// Queuee Basics.
function nextItemInLine(array, item) {
  // Adding To Existing List
  array.push(item);
  // Poping First Array Element
  return array.shift();
}

let testArray = [1, 2, 3, 4];

// Before Mutation
console.log("Before : " + JSON.stringify(testArray));
console.log("Item Shifted : " + nextItemInLine(testArray, 6));
console.log("After Mutation : " + JSON.stringify(testArray));
console.log("After Mutation : " + testArray);

// Boolean Values
function returnBoolean() {
  return true || false;
}
console.log(returnBoolean());

// If Conditionals
function ifConditionals(isTrue) {
  if (isTrue) {
    return "Yes, It Is True";
  }
  return "Nope, That Was False";
}

console.log(ifConditionals(true));

// Equality Comparator
function equalityComperator(value) {
  if (value == 12) {
    return "Equality Matched";
  }
  return "Equality Unmatched";
}
console.log(equalityComperator(12));

function strictEquality(value) {
  if (value === 7) {
    return "Number Matched";
  }
  return "Number Unmatched";
}
console.log(strictEquality(7));

function equalityCheck(val, chk) {
  if (val == chk) {
    return "Equality Checked";
  }
  return "Not Equal";
}
console.log(equalityCheck(5, "5"));

function strictEquality(value, number) {
  if (value === number) {
    return "Strictly Equal";
  }
  return "Strictly Unequal";
}
console.log(strictEquality(5, "5"));

function notEqual(number) {
  if (number != 99) {
    return "Not Equal";
  }
  return "Number Checks";
}
console.log(notEqual(99));

function strictlyInequal(value) {
  if (value !== 17) {
    return "Not Equal";
  }
  return "Strictly Equal";
}
console.log(strictlyInequal("17" /*17*/));

// Comparisons Operator
function testGreater(value) {
  if (value > 100) {
    return "Number Greater";
  }

  if (value > 10) {
    return "Number Greater Than 10";
  }

  return "Below 10";
}
console.log(testGreater(100));

function greaterThanOrEqual(value) {
  if (value >= 100) {
    return "Number Greater";
  }

  if (value >= 10) {
    return "Number Greater Than 10";
  }

  return "Below 10";
}
console.log(greaterThanOrEqual(100));

function lessThan(value) {
  if (value < 10) {
    return "Samller Number";
  }

  if (value < 5) {
    return "Smaller Than Number 5";
  }

  return "Lesser Number";
}
console.log(lessThan(9));

function lessThanOrEqual(value) {
  if (value <= 10) {
    return "Less Than Or 10";
  }

  if (value <= 5) {
    return "Less Than Or 5";
  }

  return "Lesser Number";
}
console.log(lessThanOrEqual(9));

function logicalAnd(value) {
  if (value < 50 && value > 23) {
    return "True";
  }

  return "False";
}
console.log(logicalAnd(25));

function logicalOr(value) {
  if (value < 10 || value > 20) {
    return "Outside";
  }
  return "Inside";
}
console.log(logicalOr(11));

// Else Statements
function elseStatements(value) {
  if (value > 5) {
    return "Over 5";
  } else {
    return "Below 5";
  }
}
console.log(elseStatements(7));

function elseIfs(value) {
  if (value > 10) {
    return "Over 10";
  } else if (value < 5) {
    return " Below 5";
  } else {
    return "Between 5 To 10";
  }
}
console.log(elseIfs(7));

function elseIfsSequencePrecedence(value) {
  if (value < 5) {
    return "Less Than Number 5";
  } else if (value < 10) {
    return "Less Than Number 10";
  } else {
    return "Above 10";
  }
}
console.log(elseIfsSequencePrecedence(4));

function chainingIfElseStatememts(value) {
  if (value < 5) {
    return "Tiny";
  } else if (value < 10) {
    return "Small";
  } else if (value < 15) {
    return "Big";
  } else if (value < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(chainingIfElseStatememts(24));

// Golf Game
let scoreNames = [
  "Hole-In_One",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!"
];

function golfGame(parScore, strokes) {
  if (strokes == 1) {
    return scoreNames[0];
  } else if (strokes <= parScore - 2) {
    return scoreNames[1];
  } else if (strokes == parScore - 1) {
    return scoreNames[2];
  } else if (strokes == parScore) {
    return scoreNames[3];
  } else if (strokes == parScore + 1) {
    return scoreNames[4];
  } else if (strokes == parScore + 2) {
    return scoreNames[5];
  } else if (strokes >= parScore + 3) {
    return scoreNames[6];
  } else {
    return "Check Your Score Please";
  }
}

console.log(golfGame(5, 4));

// Switch Statements
function switchStatements(value) {
  let result = "";
  switch (value) {
    case 1:
      result = "alpha";
      break;
    case 2:
      result = "beta";
      break;
    case 3:
      result = "gamma";
      break;
    case 4:
      result = "delta";
      break;
  }
  return result;
}
console.log(switchStatements(2));

function switchStatementsWithDefault(value) {
  let answer = "";
  switch (value) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "kitty";
      break;
    default:
      answer = "Tweety";
      break;
  }
  return answer;
}
console.log(switchStatementsWithDefault("b"));
