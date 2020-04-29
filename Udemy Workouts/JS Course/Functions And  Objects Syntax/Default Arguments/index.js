// ES5 Way
function cars(brand) {
  if (!brand) {
    brand = "Ford";
  }
  document.body.insertAdjacentHTML("beforeend", `<h4>My Car Is ${brand}</h4>`);
  console.log(`My Car Is ${brand}`);
}
cars("Tesla");
cars();

// ES6 Wa
function car(brand = "Ford") {
  document.body.insertAdjacentHTML("beforeend", `<h4>My Car Is ${brand}</h4>`);
  console.log(`My Car Is ${brand}`);
}
car();
car("Tesla");

function randomBrands() {
  let brands = ["Tesla", "Ford", "Audi", "Chevy"];
  return brands[Math.floor(Math.random() * brands.length)];
}

function myCar(brand = randomBrands()) {
  document.body.insertAdjacentHTML("beforeend", `<h4>My Car Is ${brand}</h4>`);
  console.log(`My Car Is ${brand}`);
}
myCar();
