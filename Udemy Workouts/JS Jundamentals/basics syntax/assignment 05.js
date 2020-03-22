let canvas = document.getElementById("canvas");
let button = document.getElementById("button");

let pictures = [
  "https://upload.wikimedia.org/wikipedia/commons/2/24/%D0%A0%D0%B5%D0%BA%D0%B0_%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D0%94%D0%BE%D0%BD%D0%B5%D1%86._%D0%9A%D0%BE%D1%80%D0%BE%D0%BF%D0%BE%D0%B2%D0%BE3.JPG",
  //   "https://upload.wikimedia.org/wikipedia/commons/b/b7/D%C3%BClmen%2C_Dernekamp%2C_Holzskulptur_-M%C3%A4rchenpfad-_--_2015_--_7332.jpg",
  "http://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Megachile_incerta_male_1.jpg/1024px-Megachile_incerta_male_1.jpg",
  "http://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Tyto_alba_-_Cetrer%C3%ADa_-_01.jpg/1024px-Tyto_alba_-_Cetrer%C3%ADa_-_01.jpg",
  "http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Phalangium_opilio_MHNT_Profil.jpg/800px-Phalangium_opilio_MHNT_Profil.jpg"
];

function changeBgColor(event) {
  // this.style.backgroundColor = "blue";
  event.target.style.backgroundColor = "blue";
}

function loadElements(event) {
  document.getElementById("id_name").onclick = changeBgColor;
  document.getElementById("txt1").onclick = changeBgColor;
  document.getElementById("txt2").onclick = changeBgColor;
  // document
  //   .getElementById("image_canvas")
  //   .getElementsByTagName("img")[0].src = pictures[0];
  changePicture(0);
}

function changePicture(index) {
  document.getElementById("image_canvas").getElementsByTagName("img")[0].src =
    pictures[index % pictures.length];
  setTimeout(() => {
    changePicture(index + 1);
    // fadeIn();
    fadeInOpacityEstimator();
  }, 2000);
  // setInterval(() => {
  //   fadeIn();
  //   changePicture(index + 1);
  // }, 2000);
}

function addElement() {
  let appendEl = document.createElement("span");
  appendEl.textContent = "Another Text";
  document.getElementById("texts").appendChild(appendEl);
  insertElement();
}

function insertElement() {
  let formContent = document.createElement("input");
  let beforContent = document.getElementById("id_name");
  document.getElementById("form").insertBefore(formContent, beforContent);
}

function fadeInOpacityEstimator() {
  for (let i = 0; i <= 1; i += 0.01) {
    i = Math.round(i * 100) / 100;
    setTimeout("setOpacity(" + i + ")", i * 1000);
  }
}

function setOpacity(opacity) {
  let canvas = document.getElementById("image_canvas");
  canvas.style.opacity = opacity;
}

function usingCanvas() {
  let ctx = canvas.getContext("2d");
  drawCircle(ctx);
  drawLine(ctx);
  drawText(ctx);
  strokeText(ctx);
  linearGradient(ctx);
  circularGradient(ctx);
  generatePictures(ctx);

  //   let canvasEvents = [
  //     drawLine(ctx),
  //     drawCircle(ctx),
  //     drawText(ctx),
  //     strokeText(ctx),
  //     linearGradient(ctx),
  //     circularGradient(ctx),
  //     generatePictures(ctx)
  //   ];

  //   setTimeout(canvasItem => {
  //     canvasEvents(canvasItem + 1);
  //   }, 1000);
}

function drawLine(ctx) {
  ctx.moveTo(0, 0);
  ctx.lineTo(900, 506);
  ctx.stroke();
}

function drawCircle(ctx) {
  ctx.beginPath();
  ctx.arc(290, 250, 180, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawText(ctx) {
  ctx.font = "30px Arial";
  ctx.fillText("Hello World", 320, 50);
}

function strokeText(ctx) {
  ctx.font = "30px Arial";
  ctx.strokeText("Hello Canvas", 550, 80);
}

function linearGradient(ctx) {
  // Create Gardient
  let gradient = ctx.createLinearGradient(50, 20, 200, 0);
  gradient.addColorStop(0, "blue");
  gradient.addColorStop(1, "white");

  // Fill Gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(20, 90, 350, 80);
}

function circularGradient(ctx) {
  // Create Gradient
  let gradient = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
  gradient.addColorStop(0, "green");
  gradient.addColorStop(1, "white");

  // Fill Gradient
  ctx.fillStyle = gradient;
  ctx.fillRect(10, 10, 150, 80);
}
function generatePictures() {
  let ctx = document.getElementById("canvas").getContext("2d");
  let imgs = new Image();
  // imgs.src = "./pics/unsplash.jpg";
  imgs.src = "./pics/flower.svg";
  ctx.drawImage(imgs, 10, 10);
}

button.addEventListener("click", usingCanvas);
window.addEventListener("load", loadElements);

/**
 
      let pictures = [
        "https://upload.wikimedia.org/wikipedia/commons/2/24/%D0%A0%D0%B5%D0%BA%D0%B0_%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D0%94%D0%BE%D0%BD%D0%B5%D1%86._%D0%9A%D0%BE%D1%80%D0%BE%D0%BF%D0%BE%D0%B2%D0%BE3.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/b/b7/D%C3%BClmen%2C_Dernekamp%2C_Holzskulptur_-M%C3%A4rchenpfad-_--_2015_--_7332.jpg"
      ];

      function changeBgColor(event) {
        // this.style.backgroundColor = "blue";
        event.target.style.backgroundColor = "blue";
      }

      function load() {
        document.getElementById("id_name").onclick = changeBgColor;
        document.getElementById("txt1").onclick = changeBgColor;
        document.getElementById("txt2").onclick = changeBgColor;
        // document
        //   .getElementById("image_canvas")
        //   .getElementsByTagName("img")[0].src = pictures[0];
        changePicture(0);
        addElement();
        canvasContext();
        // generatePictures();
      }

      

      function changePicture(index) {
        document
          .getElementById("image_canvas")
          .getElementsByTagName("img")[0].src =
          pictures[index % pictures.length];
        setTimeout(() => {
          changePicture(index + 1);
          // fadeIn();
          fadeInOpacityEstimator();
        }, 2000);
        // setInterval(() => {
        //   fadeIn();
        //   changePicture(index + 1);
        // }, 2000);
      }

      window.addEventListener("load", load);

      function fadeIn() {
        let canvas = document.getElementById("image_canvas");
        // canvas.style.opacity = "0";
        canvas.style.transition = "opacity 1s";
        // canvas.style.opacity = "0";
      }

      function canvasContext() {
        canvasCtx = document.getElementById("canvas").getContext("2d");
        // canvasCtx.fillRect(0, 0, 900, 506);
        // canvasCtx.fillStyle = "#FF0000";
        drawLine(canvasCtx);
        drawCircle(canvasCtx);
        drawText(canvasCtx);
        strokeText(canvasCtx);
        linearGradient(canvasCtx);
        circularGradient(canvasCtx);
      }

      
 */
