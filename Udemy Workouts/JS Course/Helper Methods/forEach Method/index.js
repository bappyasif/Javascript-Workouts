let artists = ["Katty", "Perry", "Loren", "Grey"];

console.log("Using forEach : ");
document.body.insertAdjacentHTML("beforeend", "<h4>Using forEach : </h4>");

let htmlTemplate = "";
let anotherTemplate = "";

artists.forEach((artist) => {
  console.log(artist);

  document.body.insertAdjacentHTML(
    "beforeend",
    ` <div>Hello <strong>${artist}</strong></div>`
  );

  htmlTemplate += document.body.insertAdjacentHTML(
    "beforeend",
    ` <div>Wooza <strong>${artist}</strong></div>`
  );

  anotherTemplate += `<div>Amazing <strong>${artist}</strong></div>`;
});

document.body.insertAdjacentHTML("beforeend", anotherTemplate);

document.body.insertAdjacentHTML("beforeend", `<h4>Another ForEach</h4>`);

let purchases = [
  { product: "Razor Laptop", number: 2, amount: 1120 },
  { product: "Sound System", number: 3, amount: 210 },
];
let total = 0;
purchases.forEach((obj) => {
  total += obj.number * obj.amount;
  console.log(
    `Buying ${obj.product} ${obj.number} for ${obj.amount * obj.number}`
  );
  document.body.insertAdjacentHTML(
    "beforeend",
    `<h6>Buying ${obj.product} ${obj.number} for ${
      obj.amount * obj.number
    }</h6>`
  );
});
console.log(`Total Amount : ${total}`);
document.body.insertAdjacentHTML(
  "beforeend",
  `<h4>Total Amount : ${total}</h4>`
);
