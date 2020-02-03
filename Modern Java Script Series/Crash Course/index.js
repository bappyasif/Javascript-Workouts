// Old School Java Script

// var names = ["Ed", "John", "Mike", "Sam"];

// Re Declaring Variable Is Not Recommended.
// var counter = 10;
// var counter = 2;
// console.log(counter);

function sayName() {
  var name = "Julliane";
  console.log(name);
}
// This Will Throw Error Saying Undefined.
console.log(name);

sayName();

var name = "Ed";
console.log("Greetings : " + name);

function getBook(book_title, book_author) {
  return {
    title: book_title,
    author: book_author
  };
}

var bookObject = getBook("Harry Potter", "JK");
console.log(bookObject);

var user = {
  name: "John Doe",
  age: 25
};

var user_nam = user.name;
console.log(user_nam);

function hiName() {
  console.log("Hola Fela");
}

var whatAge = function() {
  console.log(25);
};

hiName();
whatAge();

var sample_object = {
  name_: "aBappy",
  age: 25,
  greetPerson: function() {
    console.log(`Greetings : ${this.name_}`);
    var that = this;
    var sample_name = function() {
      console.log(`Greetings : ${this.name_} Aged : ${this.age}`);
      console.log(`Greetings : ${that.name_} Aged : ${that.age}`);
    };
    sample_name();
  }
};

sample_object.greetPerson();

function multiplyNumbers(x, y) {
  var a = x || 1;
  var b = y || 1;
  console.log(a * b);
}

multiplyNumbers();
multiplyNumbers(20, 10);

function PersonsExample(person_name, person_age, hairColor, eyeColor) {
  this.name = person_name;
  this.age = person_age;
  this.color = hairColor;
  this.eye = eyeColor;
}

PersonsExample.prototype.greetPerson = function() {
  console.log(`Greetings : ${this.name} Hair Colored : ${this.color}`);
};

const aBappy = new PersonsExample("aBappy", 26, "Brownish", "light Brownish");

console.log(aBappy);

aBappy.greetPerson();

function Bappy(occupation, hobbies, name, age, hair, eye) {
  PersonsExample.call(this, name, age, hair, eye);
  this.occupation = occupation;
  this.hobbies = hobbies;
}

Bappy.prototype = Object.create(PersonsExample.prototype);

const person = new Bappy(
  "Apprenticeship",
  "Doing Stuff",
  "aBAppy",
  26,
  "Light Browninsh",
  "Brownish"
);

person.greetPerson();

console.log("start");
function getData(data, callback) {
  setTimeout(() => {
    console.log("Retrieving Data");
    callback({ data: data });
  }, 2000);
}

getData(5, function(data) {
  console.log(data);
});
console.log("finish");

// ES6

const promise = new Promise((resolve, reject) => {
  // Asynchronous Code
  setTimeout(() => {
    resolve(500);
  }, 2000);

  setTimeout(() => {
    reject(new Error("Something Wrong"));
  }, 2000);
});

promise
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error));

class ShoppingCart {
  constructor(items, nr) {
    this.items = items;
    this.nr = nr;
  }
  sayList() {
    console.log(this.items);
  }
}

const shoppingList = new ShoppingCart(
  ["Milks", "Meats", "Pears", "Peaches"],
  4
);

console.log(shoppingList);
shoppingList.sayList();

class Product extends ShoppingCart {
  constructor(items, number, amount, cost) {
    super(items, number);
    this.amount = amount;
    this.cost = cost;
  }
}

const new_product = new Product(["Redbull", "Monster"], 2, 4, 20);

console.log(new_product);
new_product.sayList();

const shopping_list = ["Milks", "Meats", "Pears", "Peaches"];
shopping_list.forEach(prduct => {
  console.log("Product : " + prduct);
});

shopping_list.forEach((prduct, index) => {
  console.log(`Product : ${prduct} At Index : ${index}`);
});

const map_list = shopping_list.map(intem => {
  return intem + "Modified Value";
});

const filter_list = shopping_list.filter(item => {
  //return item === "Pears";
  return item !== "Meats";
});

console.log(filter_list);

console.log(map_list);

const multNumbers = (a = 1, b = 1) => {
  console.log(a * b);
};

multNumbers();
multNumbers(10, 20);

const sampleObject = {
  name: "aBappy",
  age: 25,
  greetName: function() {
    console.log(`Greetings : ${this.name}`);

    const user_details = () => {
      console.log(`Greetings : ${this.name} Aged : ${this.age}`);
    };

    user_details();
  }
};

sampleObject.greetName();

const sayLocation = () => {
  console.log("Find Out");
};

sayLocation();

const nameLocation = loc => {
  console.log(`Find ${loc}`);
};

nameLocation("Paris");

const getLocation = (loc, season) =>
  console.log(`Find ${loc} During ${season}`);

getLocation("Paris", "Summer");

const list = {
  name_: "Grocery Items",
  items: ["MIlk", "Cows"]
};

const { name_, items } = list;
console.log(items);

function showBook(book_title, book_author) {
  return {
    book_title,
    book_author
  };
}

var bookNew = showBook("Harry Potter", "JK");
console.log(bookNew);

const names = "Ed";
const age = 25;

console.log(`Greetings ${names} Aged ${age}`);

const some_array = ["Hacky Sack", "Daffle Bag"];
// This Will Cause Type Reference Error
//some_array = ["Snappy Bag"];

// Will Throw Syntax Error
let counter = 10;
//let counter = 2;
console.log(counter);

for (let i = 0; i < some_array.length; i++) {
  console.log(i);
}

// Undefined Value
console.log(i);

for (var i = 0; i < some_array.length; i++) {
  console.log(i);
}

// Available In Global Context Due To Use Of Var. Which Might Be Problematic.
console.log(i);
