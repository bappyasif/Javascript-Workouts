console.log("Object Cloning");

const circle = {
  radius: 1,
  draw() {
    console.log("Circle Drawn");
  }
};

circle.draw();

const anotherCircle = {};
for (let key in circle) {
  anotherCircle[key] = circle[key];
}
console.log(anotherCircle);

const exampleCircle = Object.assign({ color: "Green" }, circle);
console.log(exampleCircle);

const anotherExample = { ...circle };
console.log(anotherExample);
