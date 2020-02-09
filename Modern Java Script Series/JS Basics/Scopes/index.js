console.log("Variables Scopes");

const color = "Green";

{
  const someMessage = "Heyo";
  console.log(someMessage);
}

//console.log(someMessage);
console.log(color);

function greetPerson() {
  const someMessage = "Heya";

  if (true) {
    const anotherMessage = "Chachachahcha";
  }

  //console.log(anotherMessage);
  console.log(color);
}

greetPerson();

function greetAnother() {
  const someMessage = "Heya";

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // Precedence Over Global Declaration.
  let color = "Yellow";
  //console.log(i);
  console.log(color);
}

greetAnother();

// Var Creates Function Scoped Variables.
// Let Creates Block Scoped Variables.
function variableScoping() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

variableScoping();

// Var Keywoorded Variables Are Attached To window Object Of Browser.
// Let Keyworded Variables Are Not Attached With browsers Window Object.
var newColor = "Aqua";
let age = 26;

function scopedVariables() {
  for (let i = 0; i < 5; i++) {
    if (true) {
      //console.log(i);
      let newColor = "Blue";
      console.log(newColor);
    }
  }

  // Avoid Using Global Variables And Var Variabls To A Mininmum.
  console.log(newColor);
}

scopedVariables();
