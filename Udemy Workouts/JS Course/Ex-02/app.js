let os = "Mac"; // Or Windows.
let type = "Desktop"; // Or All in One.
let value = 100; // or 200

if (os === "Mac") {
  console.log("Incredible Mac");
} else if (os === "Windows") {
  console.log("Super Windows");
}

if (type === "Desktop") {
  console.log("It's a Desktop.");
} else if (type === "All in one") {
  console.log("It's an All in one.");
} else if (type === "Laptop") {
  console.log("It's a Laptop.");
}

switch (value) {
  case 100:
    console.log(`Price is ${value}$, awesome discount !!`);
    break;
  case 200:
    console.log(`Price is ${value}$, super deal.`);
    break;
  default:
    console.log("Price is $n/a.");
    break;
}
