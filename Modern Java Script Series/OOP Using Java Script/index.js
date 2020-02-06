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
console.log(circle.location);

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

// Looping Through Objects Properties
for (let key in anotherCircle) {
  console.log(key);
  console.log(key, anotherCircle[key]);

  if (anotherCircle[key] !== "function") {
    console.log(key, anotherCircle[key]);
  }
}

const allKeys = Object.keys(anotherCircle);
console.log(allKeys);

// Check Presence Of An Property Within A Object
if ("radius" in anotherCircle) {
  console.log("Circle Has Radius Property");
}

const anotherAttempt = new CircleConstructor(10);
// Creating Cutom Properties On The FLy.
// Using Dot Notation
anotherAttempt.location = { x: 1, y: 1 };
console.log(anotherAttempt);

// Using square Bracket Notation
const propertyName = "diameter";
anotherAttempt[propertyName] = { diameter: 2 };

console.log(anotherAttempt.diameter);

const propName = "circle area";
anotherAttempt[propName] = { area: 2.9 };

console.log(anotherAttempt);
console.log(anotherAttempt[propName]);

// Deleting Props Using Dot Notation
delete anotherAttempt.location;
console.log(anotherAttempt);

// Deleting Using Square Bracket Notation
delete anotherAttempt[propName];
console.log(anotherAttempt);

delete anotherAttempt["diameter"];
console.log(anotherAttempt);

// Javascript Functions Are Objects

CircleConstructor.call({}, 2);
//console.log(CircleConstructor.call({}, 2));
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

// Primitives Are Passed By Values
// Argument Passed By Values
let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y);

let number = 11;

function increaseCount(number) {
  number++;
  console.log(number);
}

increaseCount(number);

console.log(number);
//console.log(increaseCount(number));
increaseCount(number);

// Objects Passed By Reference
// Objects Are Copied By Their Reference
let object = { value: 10 };

function increamentCount(object) {
  object.value++;
}

increamentCount(object);
console.log(object);
console.log(object.value);

let ob = { value: 10 };
let nb = ob;

ob.value = 20;
console.log(ob);
console.log(nb);

// Closure And Scope Usage
function CircleFunction(radius) {
  this.circle_radius = radius;

  let defaultLocation = { x: 1, y: 1 };

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  let circle_diameter = { diameter: 2 };

  let computeLocation = function(factor) {
    console.log("Optimum Location " + factor);
  };

  this.draw = function() {
    // let x = 0,
    //   y = 0;
    computeLocation(0.1);
    console.log("Circle drawn");
    // console.log(x, y);
  };
  // Scope Out Of Bounds
  //console.log(x, y);

  // Getter And Setter Function
  Object.defineProperty(this, "circle_diameter", {
    get: function() {
      return circle_diameter;
    },
    set: function(value) {
      if (value.diameter === 0) {
        throw new Error("Invalid Inout");
      } else {
        circle_diameter = value;
      }
    }
  });
}

const circleExample = new CircleFunction(11);
circleExample.draw();

// Circle Object Will Have Access To Properties Or Methods Having Keyword this prependded
// Befor Declaration or Definition.
circleExample.draw();
console.log(circleExample.circle_radius);

// TO Access Function Scoped Variable We Use
console.log(circleExample.getDefaultLocation());
//console.log(circleExample.getDefaultLocation);

// Using Getters And Setters Method
console.log(circleExample.circle_diameter);
console.log(circleExample.circle_diameter.diameter);

circleExample.circle_diameter.diameter = 4;
console.log(circleExample.circle_diameter.diameter);
