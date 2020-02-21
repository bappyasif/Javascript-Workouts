// DOM Elements
let changedColor = document.getElementById("changeColor");
let usingBtn = document.getElementById("usingBtn");

// DOM Events
function changeColor(obj) {
  obj.style.color = "peru";
  changedColor.setAttribute(
    "style",
    "color: peru; border: 2px double magenta;"
  );
}

document.getElementById("usingBtn").onclick = changeNewBackgroundColor;

function changeNewBackgroundColor() {
  document.querySelector("body").style.background = "MediumOrchid";
  usingBtn.style.backgroundColor = "Orchid";
}

function removeLtterFromH1() {
  let h1Element = document.querySelector("h1");
  h1Element.textContent = h1Element.textContent.slice(0, -1); // Taking Out The Last Letter From h1 Field
}

function mOver(obj) {
  obj.innerHTML = "Get Off Me";
}

function mOut(obj) {
  obj.innerHTML = "Thank You :)";
  obj.setAttribute("style", "color:yellow; border: 2px solid red;");
}
