let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let mappedArray = [];

// for (let i in numbers) {
//   mappedArray.push(numbers[i] * 10);
// }
// console.log(mappedArray);

numbers.map((number) => mappedArray.push(number * 10));
console.log(mappedArray);
document.body.insertAdjacentHTML("beforeend", `<h4>${mappedArray}</h4>`);

let newArray = numbers.map((number) => number * 20);
console.log(newArray);
document.body.insertAdjacentHTML(
  "beforeend",
  `<div><h4>${newArray}</h4></div>`
);

let users = [
  { user: "Margaret Magnolly", age: 23, eyes: "green", ethinicity: "european" },
  { user: "Naomi Nelly", age: 22, eyes: "brown", ethinicity: "asian" },
  { user: "Odonnel Oprah", age: 26, eyes: "blue", ethinicity: "euro asian" },
  { user: "Percela Prestine", age: 26, eyes: "blue", ethinicity: "latina" },
];

let namesArray = users.map((obj) => obj.user);
console.log(namesArray);
document.body.insertAdjacentHTML(
  "beforeend",
  `<div><h4>${namesArray}</h4></div>`
);

namesArray.forEach((name) => {
  let select = document.querySelector("select");
  select.insertAdjacentHTML(
    "afterbegin",
    `
        <option>${name}</option>
    `
  );
});
