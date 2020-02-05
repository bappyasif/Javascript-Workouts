console.log("Hello JS");
// Creating Objects
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("Draw Circle");
  }
};

circle.draw();

// Factory Function
function createCircle(radius) {
  return {
    radius,
    location: {
      x: 1,
      y: 1
    },
    draw: function() {
      console.log("Drawn Circle");
    }
  };
}

const drawCircle = new createCircle(1);
//console.log(drawCircle.draw());
drawCircle.draw();

// Constructor Function
function CircleConstructor(radius) {
  console.log("this ", this);
  this.radius = radius;
  this.draw = function() {
    console.log("Circle Constructed");
  };
}

const anotherCircle = new CircleConstructor(1);
//console.log(anotherCircle.draw());
anotherCircle.draw();

// Javascript Functions Are Objects

CircleConstructor.call({}, 1);
CircleConstructor.apply({}, [1, 2, 3, 4]);

const CircleObject = new Function(
  "radius",
  `
    this.radius = radius;
    this.draw = function() {
    console.log("Circle Constructed");
    }
`
);

const anotherObject = new CircleObject(1);
