// DOM Events
function changeColor(obj) {
  obj.style.color = "peru";
}

document.getElementById("usingBtn").onclick = changeNewBackgroundColor;

function changeNewBackgroundColor() {
  document.querySelector("body").style.background = "MediumOrchid";
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
}
