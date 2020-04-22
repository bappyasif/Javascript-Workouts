var products = [
  { name: "Iphone", price: 200 },
  { name: "Motorola", price: 70 },
  { name: "Samsung", price: 150 },
  { name: "Sony", price: 98 },
  { name: "Windows pone", price: 10 },
];

let htmlTemplate = "";
products.forEach((obj) => {
  if (obj.price < 100) {
    htmlTemplate += `<div class="product"><h1>${obj.name}</h1>
  <strong>Price: $ ${obj.price} <span>On Sale!!</span></strong></div>`;
  } else {
    htmlTemplate += `<div class="product"><h1>${obj.name}</h1>
    <strong>Price: $ ${obj.price}</strong></div>`;
  }
});

document.body.insertAdjacentHTML("beforeend", htmlTemplate);

let anotherTemplate = "";

products.forEach((product) => {
  function discout() {
    if (product.price < 100) {
      return `<span>On sale !!</span>`;
    }
    return "";
  }
  anotherTemplate += `
    <div class="product">
    <h1>${product.name}</h1>
    <strong>Price: $ ${product.price} </strong>
    ${discout()}
  </div>
    `;
});

document.body.insertAdjacentHTML("beforeend", anotherTemplate);
