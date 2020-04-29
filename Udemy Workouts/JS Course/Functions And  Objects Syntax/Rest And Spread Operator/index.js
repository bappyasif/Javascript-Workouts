// Rest Operator

// Using ES5
function args(arg1, arg2, arg3, arg4) {
  let arguments = [arg1, arg2, arg3, arg4];
  console.log(arguments);
}

args();
args("1", "2", 3, 4);

// Using ES6
function argsNew(...args) {
  //   console.log(arguments);
  //   console.log(arguments[0]);
  //   console.log(arguments[1]);
  console.log(`${args[0]} ${args[1]} ${args[2]} ${args[3]}`);
}
argsNew();
argsNew("1", whoDat(), 3, 4);

function whoDat() {
  console.log("Who's There??");
}

// Spread Operator

// Using ES5
let brands = ["Tesla", "Ford"];
let moreBrands = ["Chevy", "AUdi"];

let newArray = brands.concat(moreBrands);
newArray.push("Porsche");
document.body.insertAdjacentHTML("beforeend", `<h4>${newArray}</h4>`);
console.log(newArray);

// Using ES6
newArray = ["Porsche", ...brands, ...moreBrands, "BMW"];
document.body.insertAdjacentHTML("beforeend", `<h4>${newArray}</h4>`);
console.log(newArray);

let liCars = [];
newArray.forEach((car) => liCars.push(`<li>${car}</li>`));
// console.log(liCars.toString().split(", ").join("").replace(/,/g, ""));
// document.body.insertAdjacentHTML("beforeend", `<h4>${liCars}</h4>`);
document.body.insertAdjacentHTML(
  "beforeend",
  `<h4>${liCars.toString().split(", ").join("").replace(/,/g, "")}</h4>`
);
