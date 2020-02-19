let p1Element = document.getElementById("myP1");
let div1Element = document.getElementById("myDiv1");
let p2Element = document.getElementById("myP2");
let div2Element = document.getElementById("myDiv2");

// var myP = document.getElementById("myP");
// var myDiv = document.getElementById("myDiv");
// var myP2 = document.getElementById("myP2");
// var myDiv2 = document.getElementById("myDiv2");

p1Element.addEventListener("click", function() {
  div1Element.style.background = "lightblue";
});

console.log(p1Element);

// myP.addEventListener("click", function() {
//   myDiv.style.background = "lightblue";
// });

//console.log("yo");

// p1Element.onclick = function() {
//   div1Element.style.background = "lightblue";
// };

//myP.onclick = function(){ myDiv.style.background = "lightblue" };

p1Element.addEventListener("click", changeText);

function changeText() {
  p2Element.textContent = "Cornell Publication";
}
