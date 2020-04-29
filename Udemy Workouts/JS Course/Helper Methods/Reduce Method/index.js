// Example 01
let previous = 200;
let current = [
  { expense: "Guitar", amount: 200 },
  { expense: "Mic", amount: 100 },
  { expense: "Strap", amount: 110 },
  { expense: "Wifi Speaker", amount: 110 },
];

let totalSum = current.reduce((accum, next) => {
  return accum + next.amount;
}, 0);
console.log(totalSum);

totalSum = current.reduce((accum, next) => {
  return accum + next.amount;
}, previous);
console.log(totalSum);

// Example 02
let users = [
  { name: "Fiona", lastName: "Florence", age: 23 },
  { name: "Gloria", lastName: "Genski", age: 25 },
  { name: "Halsey", lastName: "Holmes", age: 26 },
  { name: "Ingrid", lastName: "Ilena", age: 24 },
];

let names = users.reduce((start, next) => {
  start.push(next.name);
  return start;
}, []);
console.log(names);

let lastNames = users.reduce((start, next) => {
  start.push(next.lastName + " " + next.age);
  return start;
}, []);
console.log(lastNames);
