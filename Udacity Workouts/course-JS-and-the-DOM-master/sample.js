// const myCustomDiv = document.createElement("div");

// for (let i = 1; i <= 200; i++) {
//   const newElement = document.createElement("p");
//   newElement.textContent = "This is paragraph number " + i;

//   newElement.addEventListener("click", function respondToTheClick(evt) {
//     console.log("A paragraph was clicked.");
//   });

//   myCustomDiv.appendChild(newElement);
// }

// document.body.appendChild(myCustomDiv);

// Another Version
// const myCustomDiv = document.createElement("div");

// function respondToTheClick() {
//   console.log("A paragraph was clicked.");
// }

// for (let i = 1; i <= 200; i++) {
//   const newElement = document.createElement("p");
//   newElement.textContent = "This is paragraph number " + i;

//   newElement.addEventListener("click", respondToTheClick);

//   myCustomDiv.appendChild(newElement);
// }

// document.body.appendChild(myCustomDiv);

// Version Example
let t0 = performance.now();
// const myCustomDiv = document.createElement("div");

// function respondToTheClick() {
//   console.log("A paragraph was clicked.");
// }

// for (let i = 1; i <= 200; i++) {
//   const newElement = document.createElement("p");
//   newElement.textContent = "This is paragraph number " + i;

//   myCustomDiv.appendChild(newElement);
// }

// // myCustomDiv.addEventListener("click", respondToTheClick);

// document.body.appendChild(myCustomDiv);

// myCustomDiv.addEventListener("click", respondToTheClick);

// Another Example
// let docFragment = document.createDocumentFragment();

// for (let i = 1; i < 200; i++) {
//   let newElement = document.createElement("p");
//   newElement.innerText = "This is paragraph number " + i;
//   docFragment.appendChild(newElement);
// }

// document.body.appendChild(docFragment);

document.querySelector("#content").addEventListener("click", function(event) {
  //   if (event.target.nodeName === "SPAN") {
  if (event.target.nodeName.toLowerCase() === "span") {
    console.log("A span was clicked with text " + event.target.textContent);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM Is Ready To Be Interacted With");
});

let t1 = performance.now();

// for (let i = 1; i <= 100; i++) {
//   for (let j = 1; j <= 100; j++) {
//     console.log("i and j are ", i, j);
//   }
// }

function addParagraph() {
  let paragraphEl = document.createElement("p");
  //paragraphEl.innerText = "JavaScript Is A Single Threaded Program.";
  paragraphEl.textContent = "JavaScript Is A Single Threaded Program.";
  //appendNewTexts();
  document.body.appendChild(paragraphEl);
}

function appendNewTexts() {
  let paragraphEl = document.createElement("p");
  //paragraphEl.innerText = " Isn't It Cool?!";
  paragraphEl.textContent = " Isn't It Cool?!";
  document.body.appendChild(paragraphEl);
}

addParagraph();
appendNewTexts();

let pEls = document.querySelectorAll("p");
let ThirdEl = pEls[1];
console.log(ThirdEl);

ThirdEl.addEventListener("keypress", function handleKeypress(event) {
  console.log(event);
  console.log("Third Element Was Pressed");
});

setTimeout(function sayGreetings() {
  console.log("Howdy There");
}, 1000);

// setTimeout Version
let counter = 1;
function generteParagraphs() {
  let docFragment = document.createDocumentFragment();
  for (let i = 1; i < 500; i++) {
    let paragraphEl = document.createElement("p");
    paragraphEl.textContent = "This is paragraph number " + counter;
    counter += 1;
    docFragment.appendChild(paragraphEl);
  }
  document.body.appendChild(docFragment);
  if (counter < 20000) {
    setTimeout(generteParagraphs, 0);
  }
}
generteParagraphs();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
