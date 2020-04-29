// Excercise 01
let paintings = [
  { painting: "Mona lisa", width: 200, height: 200 },
  { painting: "The scream", width: 400, height: 600 },
  { painting: "The last supper", width: 600, height: 700 },
];

let newArray = paintings.map(
  (painting) => `${painting.painting} is ${painting.width} x ${painting.height}`
);
console.log(newArray);
document.body.insertAdjacentHTML("afterend", `<h4>${newArray}</h4>`);

newArray.forEach((painting) => {
  let select = document.getElementById("options");
  select.insertAdjacentHTML("afterbegin", `<option>${painting}</optiion>`);
});

// Excercise 02
let cars = [
  { name: "Ford", price: 200 },
  { name: "Nissan", price: 400 },
  { name: "Chevy", price: 600 },
];

// Way 01
let currrencyArray = cars.map(
  (car) => `${car.name} is ${car.price * car.price} rupies`
);
console.log(currrencyArray);

currrencyArray.forEach((item) =>
  document.body.insertAdjacentHTML("beforeend", `<li><b>${item}</b></li>`)
);

// Way 02
let priceArray = cars.map(
  (car) => `${car.name} is ${convertCurrency(car.price)} Taka Only!!`
);

function convertCurrency(price) {
  return price * 88;
}

priceArray.forEach((item) =>
  document.body.insertAdjacentHTML("beforeend", `<ul><li>${item}</li></ul>`)
);

// Way 03
priceArray = cars.map((car) => {
  let priceConversion = car.price * 88;
  return `${car.name} is ${priceConversion} Taka Only!!`;
});

priceArray.forEach((item) =>
  document.body.insertAdjacentHTML("beforeend", `<ol><li>${item}</li></ol>`)
);
