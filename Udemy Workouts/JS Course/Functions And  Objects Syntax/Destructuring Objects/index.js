// Destructuring Object

// Using ES5
var user = {
  name: "Molly",
  lastname: "Meleny",
  age: 26,
};

var fname = user.name;
var lname = user.lastname;
var uage = user.age;

console.log(fname, lname, uage);

// Using ES6

// let { name } = user;
// let { lastname } = user;
// let { age } = user;

// De-Structured
let { name, lastname, age } = user;
console.log(name, name, age);

let message = (user) => {
  console.log(`My Friend Name Is ${user.name} Age ${user.age}`);
};
message(user);

// De-Structured
message = ({ user }, greet) => {
  console.log(`My Friend Name Is ${name} Age ${age} ${greet}`);
};
message(user, "Hello");

// Destructuring Arrays
let cars = ["RoadStar", "Camero", "Nova", "A8"];
// console.log(cars[3]);
let [roadStar, camero, nova, a8] = cars;
console.log(roadStar, camero, nova, a8);
let [rs, ...rest] = cars;
console.log(rs, rest);

let users = [
  { fName: "Freya", lastname: "Flora", uAge: 23, ethinicity: "Euro Asian" },
  { fName: "Gloria", lastname: "Garnes", uAge: 24, ethinicity: "Asian" },
  { fName: "Harleen", lastname: "Husk", uAge: 25, ethinicity: "European" },
  { fName: "Ilena", lastname: "ires", uAge: 26, ethinicity: "Latina" },
];
console.log(users[0].fName);
let [{ fName, uAge }] = users;
console.log(fName, uAge);
console.log(fName, uAge);
for (let { lastname, uAge } of users) {
  console.log(lastname, uAge);
}
let [, , , { ethinicity }] = users;
console.log(ethinicity);

let names = {
  users: ["Monalisa", "Nikki", "Olena", "Percella"],
};
let {
  users: [, , , aName],
} = names;
console.log(aName);

// Functions Destructuring
function createCar(brand, year) {
  console.log(brand, year);
}
createCar("RoadStar", "P10D");

function carFactory({ color, type, brand, year }) {
  console.log(`${brand} ${type} ${year} ${color}`);
}

let carOb = {
  type: "Sports Car",
  color: "Carbon Matted",
  year: 2020,
  brand: "Ford",
};

carFactory(carOb);
