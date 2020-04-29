let products = [
  { name: "iPad", category: "gadget" },
  { name: "Sony 3D Holographic", category: "TV" },
  { name: "E26R", category: "blender" },
  { name: "Android TV", category: "TV" },
  { name: "iPhone XR", category: "Mobile Phone" },
];

let tvProducts = products.filter((item) => item.category === "TV");
console.log(tvProducts);

// With New Select Tag
tvProducts.forEach((item) => {
  let sel = document.createElement("select");
  let opt = document.createElement("option");

  let divEl = document.querySelector("div");

  if (item.category === "TV") {
    opt.text = item.name;
    sel.add(opt, null);
    sel.add(opt, null);
    divEl.append(sel);
  }
});

// With Existing Select Tag
tvProducts.forEach((item) => {
  let sel = document.querySelector("select");
  let opt = document.createElement("option");
  if (item.category === "TV") {
    opt.text = item.name;
    sel.add(opt, null);
  }
});

products = [
  { name: "iPad", category: "gadget", price: 200, quantity: 20 },
  { name: "Sony 3D Holographic", category: "TV", price: 600, quantity: 1 },
  { name: "E26R", category: "blender", price: 110, quantity: 04 },
  { name: "Android TV", category: "TV", price: 260, quantity: 11 },
  { name: "iPhone XR", category: "Mobile Phone", price: 400, quantity: 40 },
];

tvProducts = products.filter(
  (item) => item.category === "TV" && item.quantity > 1 && item.price > 200
);
console.log(tvProducts);

// With New Select Tag
tvProducts.forEach((item) => {
  let sel = document.createElement("select");
  let opt = document.createElement("option");

  let divEl = document.querySelector("div");

  if (item.category === "TV") {
    opt.text = item.name;
    sel.add(opt, null);
    sel.add(opt, null);
    divEl.append(sel);
  }
});
