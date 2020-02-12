console.log("Factory Functions");

// Naming Conventions:
// Pascal Notation : OneTwoThreeFour
// Camel notation : oneTwoThreeFour

// Object Literals
const newCircle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log("Circle Drawn");
  }
};

newCircle.draw();
console.log(newCircle.radius, newCircle.isVisible);

// Factory Functions To Avoid Code Repeatation Redundency.
function createCircle(radius, isVisible) {
  return {
    radius,
    draw() {
      console.log("Circle Drawn");
    },
    isVisible
  };
}

const freshCircle = createCircle(2, true);
console.log(freshCircle);
freshCircle.draw();

const circleFresh = createCircle(1, false);
console.log(circleFresh);
circleFresh.draw();

// Constructor Functions Uses Pascal Notation Naming Convention.
function CircleExample(radius, visibility) {
  this.circleRadius = radius;
  this.isVisibile = visibility;

  this.draw = function() {
    console.log("Circle Drawn");
  };
}

const anotherCircle = new CircleExample(1, true);

anotherCircle.draw();

console.log(anotherCircle);
