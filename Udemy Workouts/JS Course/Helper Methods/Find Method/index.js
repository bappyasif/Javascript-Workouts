// Example 01
let brands = ["Apple", "Sony", "Tesla", "Samsung", "Samsung"];

let findSamsung = brands.find((brand) => brand === "Samsung");
console.log(findSamsung);
document.body.insertAdjacentHTML("beforeend", `<h4>${findSamsung}</h4>`);

// Example 02
brands = [
  { name: "Apple", id: 01 },
  { name: "Sony", id: 02 },
  { name: "Tesla", id: 03 },
  { name: "Samsung", id: 04 },
  { name: "Samsung", id: 05 },
];

findSamsung = brands.find((brand) => {
  if (brand.name === "Samsung") {
    return brand.name;
  }
});

console.log(findSamsung);
document.body.insertAdjacentHTML(
  "beforeend",
  `<h4>${findSamsung.name} , ID : ${findSamsung.id}</h4>`
);
