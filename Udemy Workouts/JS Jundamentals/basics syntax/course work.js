// DOM Elements
let text1 = document.getElementById("txt1");
let text2 = document.getElementById("txt2");
let picsDisplay = document.getElementById("picsContainer");
let canvasDiv = document.getElementById("canvas");
let inputElement = document.getElementById("inputBox");
let textBoxes = document.getElementById("textBoxes");
let formElement = document.getElementById("form");
let button = document.getElementById("button");

// Slider Array
let pictures = [
  "https://upload.wikimedia.org/wikipedia/commons/2/24/%D0%A0%D0%B5%D0%BA%D0%B0_%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D0%94%D0%BE%D0%BD%D0%B5%D1%86._%D0%9A%D0%BE%D1%80%D0%BE%D0%BF%D0%BE%D0%B2%D0%BE3.JPG",
  "http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Phalangium_opilio_MHNT_Profil.jpg/800px-Phalangium_opilio_MHNT_Profil.jpg",
  "http://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Tyto_alba_-_Cetrer%C3%ADa_-_01.jpg/1024px-Tyto_alba_-_Cetrer%C3%ADa_-_01.jpg",
  "http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Phalangium_opilio_MHNT_Profil.jpg/800px-Phalangium_opilio_MHNT_Profil.jpg"
];

function usingCanvas() {
  let ctx = canvasDiv.getContext("2d");
  drawText(ctx);
  drawLine(ctx);
  drawCircle(ctx);
  drawLinearGradient(ctx);
  drawCircularGradient(ctx);
  drawStroke(ctx);
  canvasImage(ctx);
}

function canvasImage(ctx) {
  let imgs = new Image();
  imgs.src = "./pics/flower.svg";
  ctx.drawImage(imgs, 83, 17);
}

function drawText(ctx) {
  ctx.font = "20px Arial";
  ctx.fillText("Hello Canvas", 20, 20);
}

function drawStroke(ctx) {
  ctx.font = "30px Arial";
  ctx.strokeText("Hello Canvas", 80, 120);
}

function drawLine(ctx) {
  ctx.moveTo(0, 0);
  ctx.lineTo(506, 254);
  ctx.stroke();
}

function drawCircle(ctx) {
  ctx.beginPath();
  ctx.arc(40, 30, 22, 0, 5 * Math.PI);
  ctx.stroke();
}

function drawLinearGradient(ctx) {
  // Create Gradient
  let gradient = ctx.createLinearGradient(120, 20, 200, 20);
  gradient.addColorStop(0, "blue");
  gradient.addColorStop(1, "white");

  // Fill Gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(100, 20, 180, 29);
}

function drawCircularGradient(ctx) {
  //   // Create Gradient
  //   let gradient = ctx.createRadialGradient(255, 50, 75, 90, 40, 20);
  //   gradient.addColorStop(0, "coral");
  //   gradient.addColorStop(1, "white");

  //   // Fill Gradient
  //   ctx.fillStyle = gradient;
  //   ctx.fillRect(100, 49, 35, 35);
  // Create Gradient
  let gradient = ctx.createRadialGradient(55, 50, 50, 90, 66, 10);
  gradient.addColorStop(0, "green");
  gradient.addColorStop(1, "white");

  // Fill Gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(10, 56, 100, 90);
}

button.addEventListener("click", usingCanvas);

function addElement() {
  let appendTextSpanNode = document.createElement("span");
  appendTextSpanNode.textContent = "Added Text";
  textBoxes.appendChild(appendTextSpanNode);
}

function insertElement() {
  let insertInput = document.createElement("input");
  formElement.insertBefore(insertInput, inputElement);
}

function changeBgColor(event) {
  //   event.target.style.backgroundColor = "blue";
  this.style.backgroundColor = "green";
}

function loadEvents() {
  text1.onclick = changeBgColor;
  text2.onclick = changeBgColor;
  inputElement.onclick = changeBgColor;
  //   picsDisplay.getElementsByTagName("img")[0].src = pictures[0];
  changePicture(0);
  //   changePictureUsingInterval(0);
  addElement();
  insertElement();
}

function changePicture(index) {
  picsDisplay.getElementsByTagName("img")[0].src =
    pictures[index % pictures.length];
  setTimeout(() => {
    // pictures[index + 1];
    changePicture(index + 1);
  }, 2000);
}

function changePictureUsingInterval(index) {
  picsDisplay.getElementsByTagName("img")[0].src =
    pictures[index % pictures.length];
  setInterval(() => {
    changePictureUsingInterval(index + 1);
  }, 2000);
}

window.addEventListener("load", loadEvents);
