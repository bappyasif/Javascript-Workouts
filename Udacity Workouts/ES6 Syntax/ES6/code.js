class student {
  constructor(name, major) {
    this.name = name;
    this.major = major;
  }

  displayInfo() {
    console.log(`${this.name} is a ${this.major} student.`);
  }
}

let aBappy = new Student("aBappy", "Language");
let aSarkar = new Student("aSarkar", "Computer Engineering");

/**
 {
  "name": "es6",
  "version": "1.0.0",
  "description": "Simple app that demos transpiling ES6 code to ES5 code with Babel.",
  "main": "",
  "scripts": {
    "build": "babel ES6 -d ES5"
  },
  "author": "Richard Kalehoff",
  "license": "MIT",
  "devDependencies": {
    "babel-cli": "^6.16.0",
    "babel-preset-es2015": "^6.16.0"
  }
}
 */
