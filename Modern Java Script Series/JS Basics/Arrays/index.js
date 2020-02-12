console.log(" JS Arrays");

let selectedColors = ["green", "red"];

selectedColors[2] = "blue";

selectedColors[3] = 4;

console.log(selectedColors);
console.log(selectedColors[0]);

console.log(typeof selectedColors);
console.log(selectedColors.length);

for (let key in selectedColors) {
  console.log(key);
  console.log(`${key} in index ${selectedColors[key]}`);

  if (typeof selectedColors[key] !== "number") {
    //console.log(`${key} in index ${selectedColors[key]}`);
    console.log("Not Number");
  }
}

// Array Filters
const sampleArray = [1, -1, 2, 3];

const filteredArray = sampleArray.filter(function(value) {
  return value >= 0;
});

console.log(filteredArray);

const filteredExample = sampleArray.filter(value => value >= 0);

console.log(filteredExample);

// const anotherExample = sampleArray.filter((value, index) => {
//   if (value >= 0) {
//     //index = sampleArray.indexof(value);
//     return value;
//     //return index;
//     //return sampleArray.findIndex(value);
//   }
// });

let indexs = [];
const anotherExample = sampleArray.filter((number, index) => {
  if (number >= 0) {
    return indexs.push(index);
  }
});

console.log(anotherExample);

//console.log(anotherExample);

// const anotherExample = sampleArray.filter(function(value, index) {
//   for (index in sampleArray) {
//     return value >= 0 + sampleArray[index];
//   }
// });

// console.log(anotherExample);

// Array Reduce
let accumulator = 0;
for (let num of sampleArray) {
  accumulator += num;
}
console.log(accumulator);

// a = 0, c = 1, a = 1
// a =1, c = -1, a = 0
// a = 0, c = 2, a = 2
// a = 2, c = 3, a = 5
const reducedArray = sampleArray.reduce((accumValue, currValue) => {
  return accumValue + currValue;
}, 0);

console.log(reducedArray);

// a =1, c = -1, a = 0
// a = 0, c = 2, a = 2
// a = 2, c = 3, a = 5
const anotherReduced = sampleArray.reduce((accum, curr) => {
  return accum + curr;
});

console.log(anotherReduced);

const anotherSample = sampleArray.reduce((acVal, cuVal) => acVal + cuVal);

console.log(anotherSample);

// Map Array
const mappedArray = sampleArray.map(element => `<li>${element}</li>`);
console.log(mappedArray);
const htmlJoining = mappedArray.join("");
console.log(htmlJoining);
const htmlJoiningWithUL = "<ul>" + mappedArray.join("") + "</ul>";
console.log(htmlJoiningWithUL);

const filteredMapped = filteredExample.map(value => {
  // const object = { element: value };
  // return object;
  return (object = { element: value });
});

console.log(filteredMapped);

// const concisedMapped = filteredExample.map(element => { value : element})
const concisedMapped = filteredExample.map(element => ({ value: element }));
console.log(concisedMapped);

const chainingExample = sampleArray
  .filter(value => value >= 0)
  .map(element => ({ value: element }))
  .filter(object => object.value > 1)
  .map(object => object.value);
// .map(object => object.value > 1)
console.log(chainingExample);
