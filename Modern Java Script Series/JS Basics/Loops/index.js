console.log("Javascript Loops");

// DOM Elements
const forLoops = document.querySelector(".loop-output");

const whileLoop = document.querySelector(".while-output");

// For
// While
// Do .. While
// For .. In
// For .. Of

for (let i = 1; i <= 5; i++) {
  console.log("Hello World!!", i);
  if (i % 2 !== 0) {
    console.log(i);
    forLoops.innerHTML += `<b>${i}</b>`;
  }
}

let counter = 0;
while (counter <= 5) {
  console.log("While Loop");
  whileLoop.innerHTML += `<div>${counter}</div>`;
  counter++;
}

do {
  console.log("Do While");
  counter += 2;
  whileLoop.innerHTML += `</b> ${counter}</b>`;
} while (counter < 11);

const exampleArray = ["1", "2", "3", "4", "5", "6"];

for (let element in exampleArray) {
  forLoops.innerHTML += ` <b>${element}</b> `;
  console.log(element + " : " + exampleArray[element]);
}

for (let element of exampleArray) {
  if (exampleArray[element] !== undefined) {
    forLoops.innerHTML += ` <b>${element}</b> `;
    console.log(element + " : " + exampleArray[element]);
  }
  //console.log(element.length);
}

const sampleText = "Javascript";
//var i = 0;

for (let i of sampleText) {
  //document.write(i + "<br >");
  forLoops.innerHTML += ` <b>${i}</b> `;
  console.log(i);
}

// DOM Elements
//const forLoops = document.querySelector(".loop-output");
//forLoops.innerHTML = "1 2 3 4";
console.log(forLoops);
