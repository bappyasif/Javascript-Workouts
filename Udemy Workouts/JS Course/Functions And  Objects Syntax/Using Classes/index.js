// Using ES5
function Car() {}
let carObj = new Car();

Car.prototype.status = "Brand New";
Car.prototype.wheels = 4;
Car.prototype.available = function () {
  console.log("Car Available");
};

console.log(carObj.status);
console.log(carObj.available());

console.log(carObj);
console.log(carObj.__proto__);

// Using ES6
class CarClass {
  constructor() {
    this.status = "Brand New";
    (this.wheels = 4),
      (this.available = function () {
        console.log("Car Available");
      });
  }

  otherFunction01() {
    console.log("CarClass Exclusive ");
  }
}
let carInstance = new CarClass();
// console.log(carInstance);

let carNew = new CarClass();
carNew.color = "Midnight Blue";
console.log(carNew);
console.log(carInstance);

class NewCar {
  //   constructor(options) {
  //     this.status = options.status;
  //     this.wheels = options.wheels;
  //     this.available = options.available;
  //   }
  constructor({ status, wheels, available }) {
    this.status = status;
    this.wheels = wheels;
    this.available = available;
  }
}

let carObject = new NewCar({
  status: "Brand New",
  wheels: 4,
  available: () => console.log("Car Available"),
});

console.log(carObject);

class GM extends CarClass {
  constructor() {
    super();
  }

  otherFunction02() {
    console.log("GM Exclusive ");
  }
}

let carGM = new GM();
carGM.color = "Midnight Blue";
console.log(carGM);
console.log(carGM.otherFunction01());
console.log(carGM.otherFunction02());
console.log(carNew);
console.log(carGM);
