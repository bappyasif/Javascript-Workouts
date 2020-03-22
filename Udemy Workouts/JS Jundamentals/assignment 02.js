function reverse(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    // console.log(string[i]);
    reversedString += string[i];
  }
  // console.log(string[0]);
  // console.log(reversedString);
  return reversedString;
}

// reverse("Heho");
console.log(reverse("This"));

let anArrayOfObjects = [{ radius: 5 }, { radius: 9 }];

for (let key in anArrayOfObjects) {
  console.log(key + " : " + anArrayOfObjects[key].radius);
  // retrun anArrayOfObjects[key]
}

function commparatorMethod(ob1, ob2) {
  return ob1 - ob2;
}

let sortedArray = anArrayOfObjects.sort(commparatorMethod);
console.log(sortedArray);

function diaplayArray(array) {
  for (let i in array) {
    if (array.hasOwnProperty(i)) {
      console.log(array[i]);
    }
  }
}

let arrayArgumemt = [
  1,
  undefined,
  3,
  4,
  undefined,
  undefined,
  undefined,
  undefined,
  "Sparced Value",
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12
];

diaplayArray(arrayArgumemt);

function lengthOfArray(array) {
  let count = 0;
  array.forEach(el => {
    if (el) {
      count++;
    }
  });
  return count;
  // console.log(" : " + count);
}

// lengthOfArray(arrayArgumemt);
let lengthCount = lengthOfArray(arrayArgumemt);
console.log("Array Length : " + lengthCount);

// Using Built In Functions
function revString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

console.log(revString("heyo"));

function compCheck(ob1, ob2) {
  return ob1.radius - ob2.radius;
}

console.log(anArrayOfObjects.sort(compCheck));
