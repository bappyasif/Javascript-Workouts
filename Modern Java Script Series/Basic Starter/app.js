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
