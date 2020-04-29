// Using ES5
let createCharacter = function (name, power, friend) {
  return {
    name: name,
    power: power,
    getFriend: function () {
      return friend;
    },
  };
};

let character = createCharacter("Wonder Woman", "Fly", "Gal Gadot");
console.log(character.getFriend());

// Using ES6
createCharacter = function (name, power, friend) {
  return {
    name,
    power,
    getFriend() {
      return friend;
    },
  };
};

character = createCharacter("Wonder Woman", "Fly", "Gal Gadot");
console.log(character.getFriend());

// Using Arrow
createCharacter = (name, power, friend) => {
  return {
    name,
    power,
    getFriend() {
      return friend;
    },
  };
};

character = createCharacter("Wonder Woman", "Fly", "Gal Gadot");
console.log(character.getFriend());
