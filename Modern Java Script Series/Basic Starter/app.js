console.log(123);

var life_bar = 100; // Number Type

var name_string = "Some String"; // String Type

var checkout_value = true; // Boolean type

var some_variable; // Carries Undefined

const some_constant = 100; // Constant Type
// some_constant = 50; // Re-Initializing Will Cause Type Error

let new_ways = "Newer Declaration"; // Newewr Ways Of Declaring Variable Types.

console.log(life_bar + " " + name_string + " " + checkout_value);

console.log("Using Single Block's Quote");

console.log(`Using String Template Literals ${5 + 18} ${name_string}`);

function stringManipulation() {
  console.log(new_ways.toUpperCase());
  console.log(new_ways.toLowerCase());
  console.log(new_ways.length);
  console.log(new_ways.valueOf());
}

stringManipulation();

function numberManipulation(numero_uno, numero_duo) {
  console.log(numero_uno + numero_duo);
}

numberManipulation(5, 10);

function moreString(text_reference) {
  let uppered_text = text_reference.toUpperCase();
  let lowered_text = text_reference.toLowerCase();
  console.log(uppered_text);
  console.log(lowered_text);
}

moreString("Sent Text");

const refered_fucntion = function() {
  return "Within Function Which Is Passed As An Value For A Variable.";
};

console.log(refered_fucntion());

const concise_function = () => {
  return "Concise Function";
};

console.log(concise_function());

const check_age = 20;

if (check_age >= 18) {
  console.log("You're Good To Go");
} else if (check_age < 15) {
  console.log("Too Young!!!");
} else {
  console.log("You're Not Old Enough");
}

const dice_one = 6;
const dice_two = 4;

if (dice_one === 6 && dice_two === 6) {
  console.log("You Rolled A Double");
} else {
  console.log("You Didn't");
}

const schedule_list = [
  "Wake Up",
  "Have Meal",
  "Create Content",
  "Watch Netflix"
];

console.log(schedule_list);
console.log(schedule_list.length);
console.log(schedule_list[1]);
console.log(schedule_list[schedule_list.length - 1]);

schedule_list.push("Learn Things");
schedule_list.pop();
schedule_list.shift();
schedule_list.unshift("Learn Stuff");

console.log(schedule_list.indexOf("Watch Netflix"));

function checkLength(list) {
  //return list.length <= 8;
  return list === "Have Meal";
}

function callingCheck() {
  console.log(schedule_list.findIndex(checkLength));
}

callingCheck();

const user_sample = {
  name: "Julie Doe",
  age: 23,
  relationship_status: "single",
  purchases: ["mobile", "car", "Laptops", "Vacations Voucher"],

  greetUser: function() {
    console.log(this.name);
  },

  greetPerson: () => {
    console.log(this.name);
  }
};

user_sample.greetUser();
user_sample.greetPerson(); // Anonmyous Function Does Not Have 'this' Keywrd Locally.

function userAge() {
  console.log(`${this.name} Age Is : ${this.age}`);
  console.log(`${user_sample.name} Age Is : ${user_sample.age}`);
}

userAge();

function someFunction() {
  console.log("Some Function, Already Exists In Heap Memory");
}

window.someFunction(); // Refers someFunction
console.log(this); // Refers Window

const some_names = [
  "Julie",
  "John",
  "Doe",
  "Vivian",
  "Stacy",
  "Shiksa",
  "Everie",
  "Maria"
];

for (name of some_names) {
  console.log(name);
  console.log(`Greetings ${name}`);

  if (name === "Shiksa") {
    console.log("Shiksa Goddess");
    break;
  }
}

let count = 0;
while (count < some_names.length) {
  console.log("While Loop");
  count++;
}

const greeting_text = document.querySelector(".title");
const click_button = document.querySelector(".changeColor");

greeting_text.style.color = "green";
greeting_text.style.backgroundColor = "red";

greeting_text.classList.add("change");
greeting_text.classList.remove("change");

click_button.addEventListener("click", function() {
  //alert("Clicked Activated");
  //greeting_text.classList.add("change");
  greeting_text.classList.toggle("change");
});

const user_list = document.querySelectorAll(".name-list li");
console.log(user_list);

for (user of user_list) {
  user.addEventListener("click", function() {
    console.log(this);
    this.style.color = "blue";
  });
}

const input_element = document.querySelector(".list-input");
console.log(input_element.value);

const user_lists = document.querySelector(".name-list");

const add_to_list_button = document.querySelector(".add-list-btn");
add_to_list_button.addEventListener("click", function() {
  // Create An Li Item On The Fly
  const new_li = document.createElement("li");
  //const li_content = document.createTextNode("New Node");
  const li_content = document.createTextNode(input_element.value);

  console.log(input_element);
  console.log(input_element.value);
  // Add Input Value To DOM As New Li Item
  new_li.appendChild(li_content);
  // Attaching Li To List
  user_lists.appendChild(new_li);
});
