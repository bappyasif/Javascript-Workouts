function value(name, age) {
  return `Name Is : ${name} And Age Is : ${age}`;
}
console.log(value("aBappy", "22"));

let valueRefactored = (name, age) => {
  return `Name Is : ${name} And Age Is : ${age}`;
};
console.log(valueRefactored("aBappy", "22"));
document.body.insertAdjacentHTML(
  "beforeend",
  `<h4>${valueRefactored("aBappy", "22")}</h4>`
);

let totalSum = (x, y) => x + y;
console.log(totalSum(5, 9));
document.body.insertAdjacentHTML("beforeend", `<h4>${totalSum(5, 9)}</h4>`);

let sumTotal = (x) => x + 10;
console.log(sumTotal(7));
document.body.insertAdjacentHTML("beforeend", `<h4>${sumTotal(7)}</h4>`);

let cars = {
  brands: ["Tesla", "Audi", "Ford", "BMW"],
  category: "Sport Cars",
  message: function () {
    this.brands.forEach((brand) => {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<h4>${brand} Is A ${this.category}</h4>`
      );
      console.log(`${brand} Is A ${this.category}`);
    });
    // for (let brand in this.brands) {
    //   console.log(`${brand} Is A ${this.category}`);
    //   return `${brand} Is A ${this.category}`;
    // }
  },
  messageES5: function () {
    let $this = this;
    return this.brands.map(function (brand) {
      //   console.log(`${brand} Is A ${this.category}`);
      console.log(`${brand} Is A ${$this.category}`);
    });
  },
  messageArrow: function () {
    return this.brands.forEach((brand) => {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<h4>${brand} Is A ${this.category}</h4>`
      );
      console.log(`${brand} Is A ${this.category}`);
    });
  },
};
cars.message();
cars.messageES5();
cars.messageArrow();
// console.log(cars.message());
