let user = ["Aniston", "Katty"];
let price = [20, 12, 5, 4];
let products = ["Potatoes", "Apples", "Tomattoes", "Lemons"];

for (let i = 0; i < user.length; i++) {
  for (let j = 0; j < products.length; j++) {
    if (user[i] === "Katty") {
      console.log(`${user[i]} bought : ${products[j]} = ${price[j] - 3}`);
    } else {
      console.log(`${user[i]} bought : ${products[j]} = ${price[j]}`);
    }
    // if (i === 1) {
    //   console.log(`${user[i]} bought : ${products[j]} = ${price[j] - 3}`);
    // } else {
    //   console.log(`${user[i]} bought : ${products[j]} = ${price[j]}`);
    // }
  }
}
