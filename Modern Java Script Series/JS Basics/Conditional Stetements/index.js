console.log("Conditionals Statements");

// Hour Check
// If Between 6AM to 12 PM : Good Noon
// If Between 12PM And 6PM : Good Afternoon
// Otherwise Good Evening!!

let hour = 18;

if (hour >= 6 && hour < 12) {
  console.log("Good Morning!!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon!!");
  // } else if (hour >= 18 && hour < 24) {
  //   console.log("Good Evening");
  // } else {
  //  console.log("Good Night");
} else {
  console.log("Good Evening!!");
}

// Switch Cases

let choose_option = "Continental";

switch (choose_option) {
  case "Continental":
    console.log("You Have Chosen " + choose_option);
    break;
  default:
    console.log(`You Have Chosen ${choose_option}`);
    break;
}

// DOM Elements
let select_options = document.querySelector(".select-option");

let options_chosed = document.querySelector(".choose-options");

let form_element = document.getElementById("selectOptions");

//let chosed_element = document.querySelector("chosedOption");

let options_selected = select_options.value;

// console.log(options_selected);
// select_options.addEventListener("input", function(event)

form_element.addEventListener("input", function() {
  //event.preventDefault();
  let options_selected = select_options.value;
  //options_chosed.innerHTML = options_selected;
  //chosed_element.innerHTML = select_options.value;
  //options_chosed.textContent = options_selected;
  //options_chosed.textContent = event.target.value;
  console.log(options_selected);
});
