let cars = [
  { brand: "Tesla", price: 700, available: 8, type: "Electric Car" },
  { brand: "Nissan", price: 500, available: 7, type: "Sedan" },
  { brand: "Ford", price: 800, available: 6, type: "Muscle Car" },
  { brand: "Porsche", price: 600, available: 4, type: "Sport Car" },
];

let search = document.querySelector(".search");
search.addEventListener("click", function () {
  let price = parseInt(document.getElementById("price").value);
  let type = document.getElementById("type").value;

  //   console.log(price, type);

  let results = getResults(price, type);

  if (results) {
    console.log(`Found ${results.brand} for ${results.price}`);
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h4>Found ${results.brand} for ${results.price}</h4>`
    );
  } else {
    console.log("Found None");
    document.body.insertAdjacentHTML("beforeend", `<h4>Found None</h4>`);
  }
});

function getResults(price, type) {
  return cars.find((car) => {
    return car.price < price && car.available > 0 && car.type === type;
  });
}
