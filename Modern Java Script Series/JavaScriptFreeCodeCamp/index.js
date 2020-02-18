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

function sequntialSizes(value) {
  var answer = "";

  switch (value) {
    case 1:
    case 2:
    case 3:
      answer = "Low Range";
      break;

    case 4:
    case 5:
    case 6:
      answer = "Mid Range";
      break;

    case 7:
    case 8:
    case 9:
      answer = "High Range";
      break;
  }
  return answer;
}

console.log(sequntialSizes(8));

function chainToSwitchStatements(value) {
  let answer = "";

  switch (value) {
    case "bob":
      answer = "Bob Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There Is No Number #01";
      break;
    case 99:
      answer = "Missed By This Much";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}

console.log(chainToSwitchStatements(99));

// Returning Values
function concisedReturn(value, number) {
  return value < number;
  // if(value < number) {
  //   return true;
  // } else {
  //   return false;
  // }
}
console.log(concisedReturn(10, 15));

function returningEarly(value, number) {
  if (value < 0 || number < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(value) + Math.sqrt(number), 2));
}
console.log(returningEarly(-2, 2));

// Card Counting Black Jack
let count = 0;
function countingCards(card) {
  // Low Cards Count Decreases
  // High Cards Count Increases
  // Mid Cards Count Unchanged
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    // case 7:
    // case 8:
    // case 9:
    //   count = count;
    //   break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  // If Count Positive Bet High
  // If Count Negative Bet Low
  let checkBet = "Hold";
  if (count > 0) {
    checkBet = "Place Bet";
  }

  return count + " " + checkBet;
}

countingCards(2);
countingCards(3);
countingCards("K");
countingCards("K");
countingCards("A");

console.log(countingCards(4));

// Creating Objects
let samplePet = {
  name: "Goody",
  legs: 4,
  tails: 1,
  friends: ["For Life"]
};

console.log(samplePet);
console.log(samplePet.name);

samplePet.name = "goody goody";
console.log(samplePet);
console.log(samplePet.name);

samplePet.bark = "woof woof";
console.log(samplePet);

delete samplePet.bark;
console.log(samplePet);

let sampleObject = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
  tattoes: "symbols"
};
let hatValue = sampleObject.hat;
console.log(hatValue);
let shirtValue = sampleObject.shirt;
console.log(shirtValue);

let bracketNotation = {
  "an entree": "asparagus",
  "side dish": "mixed salads",
  "main dish": "elk steak",
  "savory drinks": "red wine"
};
let entreValue = bracketNotation["an entree"];
console.log(entreValue);
let drinksValue = bracketNotation["savory drinks"];
console.log(drinksValue);

let anotherBracket = {
  17: "Huxley",
  16: "Montana",
  19: "Unitas",
  11: "Springer"
};
let playerNumber = 11;
let newPlayer = anotherBracket[playerNumber];
console.log(newPlayer);

anotherBracket[14] = "Staely";
console.log(anotherBracket);

delete anotherBracket[14];
console.log(anotherBracket);

function phoneticsLookup(value) {
  let result = "";

  let lookup = {
    alpha: "anemas",
    bravo: "brover",
    charlie: "Chis",
    delta: "doppelganger",
    echo: "energize",
    foxtort: "fanny"
  };

  // switch (value) {
  //   case "alpha":
  //     result = "anemas";
  //     break;
  //   case "bravo":
  //     result = "Brover";
  //     break;
  //   case "charlie":
  //     result = "Chis";
  //     break;
  //   case "delta":
  //     result = "doppelganger";
  //     break;
  //   case "echo":
  //     result = "energize";
  //     break;
  //   case "foxtort":
  //     result = "fanny";
  //     break;
  // }

  result = lookup[value];
  return result;
}

console.log(phoneticsLookup("bravo"));
console.log(phoneticsLookup("foxtort"));

let testObject = {
  gift: "Stallion",
  pet: "Bald Eagle",
  cars: "Tesla",
  bed: "Bouncy Bed"
};

function checkObject(checkProp) {
  if (testObject.hasOwnProperty("gift")) {
    return testObject.gift;
    //return testObject[gift];
  } else {
    return "Not Found";
  }
  //return "Edit Code";
}

console.log(checkObject("gift"));

let objectsArray = [
  {
    artist: "Billy Joel",
    title: "piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP", "Records"],
    gold: true
  },
  {
    artist: "Bappy Sarkar",
    title: "Space Shooter",
    release_year: 2009,
    formats: ["Youtube", "Vimeo"],
    gold: false
  }
];
console.log(objectsArray);
console.log(objectsArray[1]);
console.log(objectsArray[1].artist);
console.log(objectsArray[0].formats[0]);

let exampleObjects = {
  car: {
    interior: {
      "glove box": "maps",
      passanger_seats: "crumbs"
    },
    exterior: {
      trunk: "jack"
    }
  }
};
let gloveboxContent = exampleObjects.car.interior["glove box"];
console.log(gloveboxContent);

let plantsObject = [
  {
    type: "flowers",
    plants: ["roses", "tulips", "baileys", "marigold"]
  },
  {
    type: "trees",
    plants: ["sequoia", "pine", "birch", "oak"]
  }
];
console.log(plantsObject);
console.log(plantsObject[0].type);
console.log(plantsObject[0].plants[0]);
console.log(plantsObject[1].plants[1]);

let exampleCollection = {
  "25648": {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["let It Rock", "You Give Love A Bad Name"]
  },
  "25649": {
    album: "1999",
    artist: "Price",
    tracks: ["1999", "Little Red Corvette"]
  },
  "1245": {
    artist: "Robert Palmer",
    tracks: []
  },
  "5439": {
    album: "ABBA Gold"
  }
};

let collectionCopy = JSON.parse(JSON.stringify(exampleCollection));

function updateRecords(id, prop, value) {
  // If Blank Delete Property
  if (value === "") {
    delete exampleCollection[id][prop];
  } else if (prop === "tracks") {
    // If An Array Property Add To List, When Empty Create An Array.
    exampleCollection[id][prop] = exampleCollection[id][prop] || [];
    exampleCollection[id][prop].push(value);
  } else {
    // Set Property Value Argument
    exampleCollection[id][prop] = value;
  }
  return exampleCollection;
}

console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(5439, "tracks", "Test"));

// Iteration Types
let pushedArray = [];
let ai = 0;
while (ai < 4) {
  pushedArray.push(ai);
  ai++;
}
console.log(pushedArray);

for (let i = 1; i < 6; i++) {
  pushedArray.push(i);
}
console.log(pushedArray);

let evenNumbers = [];
for (let i = 0; i < 10; i + 2) {
  evenNumbers.push(i);
}
console.log(evenNumbers);

let oddNumbers = [];
for (let i = 1; i < 10; i += 2) {
  oddNumbers.push[i];
}
console.log(oddNumbers);

let arrayExample = [9, 10, 11, 12];
let arrayTotal = 0;
for (let i = 0; i < arrayExample.length; i++) {
  arrayTotal += arrayExample[i];
}
console.log(arrayTotal);

let arrayNested = [
  [1, 2],
  [3, 4],
  [5, 6, 7]
];
let product = 1;
for (let i = 0; i < arrayNested.length; i++) {
  for (let j = 0; j < arrayNested[i].length; j++) {
    product *= arrayNested[i][j];
  }
}
console.log(product);

let arraySetup = [];
let i = 10;
do {
  arraySetup.push(i);
  i++;
} while (i < 5);
console.log(i, arraySetup);

// Profile Lookup
let contactsArray = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "4649794313",
    likes: ["coding", "pizza", "brownies"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "4634234213",
    likes: ["coding", "Magic", "Hagrid"]
  },
  {
    firstName: "Super",
    lastName: "Woman",
    number: "463686213",
    likes: ["Adventure", "Flying", "Justice"]
  },
  {
    firstName: "Sherlocck",
    lastName: "Homes",
    number: "46356464613",
    likes: ["Adventure", "Justice", "Intriguing Cases"]
  },
  {
    firstName: "Kristen",
    lastName: "Holmes",
    number: "46352422613",
    likes: ["JavaScript", "Gaming", "Tutorials"]
  }
];

function lookupProfile(name, prop) {
  // If Name Does Not Match With Array Objects
  // Returns No Such Name Or No Such Property.
  for (let i = 0; i < contactsArray.length; i++) {
    if (contactsArray[i].firstName === name) {
      return contactsArray[i][prop] || "No Such Property Exist";
    }
  }
  return "No Such Contact Names";
}

let lookupAkira = lookupProfile("Kristen", "likes");
console.log(lookupAkira);

// Generate Random Fraction Numbers
function randomFractions(value) {
  return Math.random() * value;
}
console.log(randomFractions(2));

function randomlyGeneratedWholeNumber(value) {
  return Math.floor(Math.random() * value);
}
console.log(randomlyGeneratedWholeNumber(2));

function randomWholeNumbersInRange(maxRange, minRange) {
  return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
}
console.log(randomWholeNumbersInRange(4, 2));

// ParseInt Function
function convertStringToIntegeer(string) {
  return parseInt(string);
}
console.log(convertStringToIntegeer("56"));

function convertRadixToInteger(string) {
  return parseInt(string, 2); // 2 represents number base which is binary here.
}
console.log(convertRadixToInteger("1010101"));

// Ternery Operator
function checkEqual(a, b) {
  return a === b ? true : false;
}
console.log(checkEqual(2, 2));

function multipleConditionedTernaryOperator(number) {
  return number > 0
    ? "Positive Number"
    : number < 0
    ? "Negative Nummber"
    : "Number Zero";
}
console.log(multipleConditionedTernaryOperator(10));

// Difference Between Var And Let Keywords.

// let does not allow to declare same variable twice, whereas var does.
// Use Keyword "use strict" at the begining of function or codes to catch
// coding mistakes such as using variable without declaring it and as such.
var catName = "Kitty";
var quote;

var catName = "Katja";
function catTalk() {
  catName = "Seniora";
  quote = catName + "Says Meow!";
}
catTalk();

let newCatName = "Seniora";
let newQuote;

catName = "Katja";
function catTalk() {
  catName = "Skitty";
  newQuote = catName + "Says Meow!";
  return newQuote;
}
console.log(catTalk());

function checkScope() {
  "use strict";
  var i = "Function Scope";

  if (true) {
    i = "Block Scope";
    console.log(i);
  }

  console.log(i);
  return i;
}
checkScope();

function checkScopeWithLet() {
  "use strict";
  let i = "Function Scope";

  if (true) {
    let i = "Block Scope";
    console.log(i);
  }

  console.log(i);
  return i;
}
checkScopeWithLet();

function checkScopeWithLetInBlock() {
  "use strict";
  //let i = "Function Scope";

  if (true) {
    let i = "Block Scope";
    console.log(i);
  }

  console.log(i);
  return i;
}
checkScopeWithLetInBlock();

function checkScopeWithVarInBlock() {
  "use strict";
  //let i = "Function Scope";

  if (true) {
    var i = "Block Scope";
    console.log(i);
  }

  console.log(i);
  return i;
}
checkScopeWithVarInBlock();

// Read-Only Variable With Const Keyword
function printManyTimes(string) {
  "use strict";
  const SENTENCE = string + " Is Cool";
  //scentence = string + "Is Amazing";
  for (let i = 0; i < string.length; i += 2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");

const initArray = [5, 7, 2];
function reassignArrayWithConst() {
  "use strict";
  initArray = [1, 5, 7];
}
reassignArrayWithConst();

function editArrayWithConst() {
  "use strict";
  //initArray = [2, 5, 7];
  initArray[0] = 2;
  initArray[1] = 5;
  initArray[2] = 8;
}
editArrayWithConst();

// Prevent Object Data Mutation
function freezeObject() {
  "use strict";
  const MATH_CONSTANT = {
    PI: 3.14
  };

  try {
    MATH_CONSTANT.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANT.PI;
}
const PI_CONSTANT = freezeObject();
console.log(PI_CONSTANT);

function freezeObjectWithFreeze() {
  "use strict";
  const MATH_CONSTANT = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANT);

  try {
    MATH_CONSTANT.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANT.PI;
}
const A_PI_CONSTANT = freezeObjectWithFreeze();
console.log(A_PI_CONSTANT);

// Anonymous Or Arrow Functions
const arrowFunction = () => new Date();
console.log(arrowFunction);

// let argsConcat = (arg1, arg2) => {
//   return arg1.concat(arg2);
// }
let argsConcat = (arg1, arg2) => arg1.concat(arg2);
console.log(argsConcat([1, 2, 3], [4, 5, 6]));

// Higher-Order Functions (Such As Map, Filter, Reduce, IndexOf and so on)
const arrayOfRealNumbers = [4, 5.6, -9.8, 42, 6, 8.34, -2];
const squareList = array => {
  const squaredAndPositiveIntegers = array.filter(
    number => Number.isInteger(number) && number > 0
  ); /*.map(num=>num*num)*/
  const mappedNumbers = squaredAndPositiveIntegers.map(num => num * num);
  //return mappedNumbers;
  //return squaredAndPositiveIntegers;
  return squaredAndPositiveIntegers + " : " + mappedNumbers;
};
const sqrdIntegers = squareList(arrayOfRealNumbers);
console.log(sqrdIntegers);

const incrementValueHigherorderFunction = (function() {
  return function incerementValue(number, value = 1) {
    return number + value;
  };
})();
console.log(incrementValueHigherorderFunction(5, 2));
console.log(incrementValueHigherorderFunction(2));

// Without Using Rest Arguments
const sum = (function() {
  return function sumUp(a, b, c) {
    const args = [a, b, c];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3));

// While Using Rest Arguments
const sumingValues = (function() {
  return function sumUp(...args) {
    //const args = [a,b,c];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sumingValues(1, 2, 3, 4));

//Without Using Spread Operator
const arrMonths = ["JAN", "FEB", "MAR", "APR"];
let arrCopied;
(function() {
  arrCopied = arrMonths;
  arrMonths[0] = "January";
})();
console.log(arrCopied);

//With Using Spread Operator
const arrayMonths = ["JAN", "FEB", "MAR", "APR"];
let arrayCopied;
(function() {
  arrayCopied = [...arrayMonths];
  arrMonths[0] = "January";
})();
console.log(arrayCopied);

// Destructing Assignement
let voxel = { x: 3.16, y: 7.4, z: 6.54 };

// var voxel_x = voxel.x;
// var voxel_y = voxel.y;
// var voxel_z = voxel.z;

const { x: a, y: b, z: c } = voxel; // a = 3.6, b = 7.4, c = 6.54
console.log(a, b, c);

const AVG_TEMP = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTomorrow(avgTemp) {
  "use strict";
  //const tempOfTomorrow = undefined;
  const { tomorrow: tempOfTomorrow } = avgTemp;
  return tempOfTomorrow;
}

console.log(getTempOfTomorrow(AVG_TEMP));

// Destructuring Assignment
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTomorrow(forecast) {
  "use strict";
  const {
    tomorrow: { max: maxOfTomorrowForecase }
  } = forecast;
  return maxOfTomorrowForecase;
}

console.log(getMaxOfTomorrow(LOCAL_FORECAST));

const [z, x] = [1, 2, 3, 4];
console.log(z, x);

const [z, x, , y] = [1, 2, 3, 4];
console.log(z, x, y);

let a = 8,
  b = 6;
(() => {
  "use strict";
  [a, b] = [b, a];
})();
console.log(a);
console.log(b);

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwoElelemnts(list) {
  //const [a, b, ...array] = list;
  const [, , ...array] = list; // Removing First Two Elements By Using Two Commas
  return array;
}
const arrExample = removeFirstTwoElelemnts(source);
console.log(arrExample);
console.log(source);

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const avergeScore = (function() {
  //return function(entireObject) {
  return function({ max, min }) {
    //return (entireObject.max + entireObject.min) / 2.0;
    return (max + min) / 2.0;
  };
})();
console.log(stats);
console.log(avergeScore);

// Strings With Template Literals
const person = {
  name: "Lilian Johoba",
  age: 29
};
const greetingPerson = `Hello ${person.name}! 
 ${person.age} Years Old`;
console.log(greetingPerson);

const resultObject = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "lineebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(array) {
  const resultDisplay = [];
  for (let i = 0; i < array.length; i++) {
    resultDisplay.push(`<li class="text-warning">${array[i]}</li>`);
  }
  return resultDisplay;
}
const newResultDisplayArray = makeList(resultObject.success);
console.log(newResultDisplayArray);

const cratePerson = (namePassed, agePassed, genderPassed) => {
  return {
    name: namePassed,
    age: agePassed,
    gender: genderPassed
  };
};
console.log(cratePerson("Katty Perry", 29, "Female"));

const cratePersonWithFields = (namePassed, agePassed, genderPassed) => ({
  name,
  age,
  gender
});
console.log(cratePersonWithFields("Taylor Aift", 29, "Female"));

const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

const anotherBicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
anotherBicycle.setGear(3);
console.log(anotherBicycle.gear);

// Class Constructor Function Syntax
let spaceShuttle = function(planet) {
  this.targetPlanet = planet;
};
let zeus = new spaceShuttle("Jupitar");
console.log(zeus.targetPlanet);

class newShuttle {
  constructor(planet) {
    this.targetPlanet = planet;
  }
}
let prometheus = new newShuttle("Astroid Belt");
console.log(prometheus.targetPlanet);

function carryingClass() {
  class Vegetable {
    constructor(vegetableName) {
      this.name = vegetableName;
    }
  }
  return Vegetable;
}
const VegetableClass = carryingClass();
const vegetableCabbage = new VegetableClass("Cabbage");
console.log(vegetableCabbage.name);

// Getters And Setters Methods
class Book {
  constructor(authorName) {
    this.author = authorName;
  }

  get writer() {
    return this._author;
  }

  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const newBook = new Book("David Hume");
console.log(newBook.author);

function makeClass() {
  class Thermostat {
    constructor(temp) {
      //this._temperature = temp;
      this._temperature = (5 / 9) * (temp - 32);
    }
    get temperature() {
      return this._temperature;
    }
    set temperature(newTemp) {
      this._temperature = newTemp;
    }
  }
  return Thermostat;
}
const ThermostatObject = makeClass();
const thermos = new ThermostatObject(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

// Differences Between Import And Require Methods.
export const capitalizeString = string => string.toUpperCase();

import { capitalizeString } from "./string_functions.js";
const capitalized = capitalizeString("Hello!!");
console.log(capitalized);

import * as capitalizedString from "another_export";
const anotherCapitalized = capitalizedString("hello!!");
console.log(anotherCapitalized);

import subtract from "another_export";
subtract(2, 2);
