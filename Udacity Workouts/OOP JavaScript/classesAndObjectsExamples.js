// Example Object
let room = {
  hasLights: true,
  hasWindows: 3,
  hasVeranda: 1,
  hasDoors: 2,
  hasFan: 1,
  lightsToggle: function() {
    console.log(this.hasLights);
    this.hasLights = false;
  }
};

console.log(room);

// Constructor Functions

// rather than declaring local variables,
// constructor functions persist data with the this keyword.
// onstructor functions in JavaScript should not have
// an explicit return value (i.e., there should not be return statement).
function SoftwareDeveloper() {
  this.favoriteLanguage = "JavaScript";
}

let developer = new SoftwareDeveloper();
console.log(developer.favoriteLanguage);
console.log(developer);

let engineer = new SoftwareDeveloper();
let programmer = new SoftwareDeveloper();
console.log(engineer);
console.log(programmer);

// Constructor Functions Can Have Parameters
function OtherDeveloper(name) {
  this.favoriteLanguage = "JavaScript";
  this.name = name;
}

let newDeveloer = new OtherDeveloper("aBappy");
let aDveloper = new OtherDeveloper("John Doe");
console.log(newDeveloer);
console.log(aDveloper);

function Heros(name, role) {
  this.knownAs = name;
  this.gameplayRole = role;
  this.letItBeKnown = function() {
    console.log("Game Character : " + name + " PLaying As : " + role + ".");
  };
}

let agilityHero = new Heros("sniper", "carry");
console.log(agilityHero.letItBeKnown());
Heros.prototype.greetCharacter = function() {
  console.log("Greetings " + this.knownAs);
};
console.log(agilityHero.greetCharacter());

function Sandwich(bread, meat, vegetables) {
  this.bread = bread;
  this.meat = meat;
  this.vegetables = vegetables;
}
let test = new Sandwich("wheat", ["beef", "pork"], ["latuce", "tomatoes"]);
console.log(test.meat);

// Without new Keyword Object Won't Be Instansiated,
// thus returned value will be undefined.
// let test2 = Heros("Medusa", "Carry");
// console.log(test.name);

// Seeing the Object's Constructor (instanceof)
// What if we want to see if an object was created with a
// constructor function in the first place?
// We can use the instanceof
console.log(typeof test);
console.log(test instanceof Sandwich);
