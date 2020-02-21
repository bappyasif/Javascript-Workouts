// DOM Manipulation
let div1Element = document.getElementById("div1");
let unicycleElements = document.getElementsByClassName("unicycle");
let unicycleElement = div1Element.getElementsByClassName("unicycle");
let paragraphElements = document.getElementsByTagName("p");
let div1Paragraphs = div1Element.getElementsByTagName("p");
let queryUnicycle = document.querySelector(".unicycle"); // Returns Element Matches First
let queryDiv2 = document.querySelector("#div2");
let queryAll = document.querySelectorAll(".unicycle, #div2"); // If Just Use .unicycle Reult Will Be DIfferent.
let div2Element = document.getElementById("div2");
let div2Paragraphs = div2Element.getElementsByTagName("p");
// Assigning Values To DOM Elements
let text = `<h1>Hello World</h1>;`;

//div1Element.innerHTML = text;

queryUnicycle.innerHTML = text;

for (let i = 0; i < div2Paragraphs.length; i++) {
  //div2Paragraphs[i].innerText = text;
  div2Paragraphs[i].innerHTML = text;
}

// for (let i = 0; i < queryAll.length; i++) {
//   queryAll[i].innerHTML = text;
// }

// For Cross Site Attack Protection Use textContent Instead Of innerHTML
//queryUnicycle.textContent = text;

// for (let i = 0; i < unicycleElements.length; i++) {
//   unicycleElements[i].textContent = text;
// }

// for (let i = 0; i < paragraphElements.length; i++) {
//   paragraphElements[i].textContent = `<h2>New Paragraph</h2>`;
// }

// for (let i = 0; i < div1Paragraphs.length; i++) {
//   div1Paragraphs[i].textContent = `<h2>New Paragraph</h2>`;
// }

//queryDiv2.textContent = `<h2>New Paragraph</h2>`;
