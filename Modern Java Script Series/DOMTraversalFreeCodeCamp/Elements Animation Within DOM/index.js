// DOM Elements
let containerDiv = document.getElementById("containerDiv");
let animationDiv = document.getElementById("animationDiv");
let itemDiv = document.getElementById("itemDiv");
let animationElement = document.getElementById("animationElement");
// Event Function
function whichMove() {
  let position = 0;
  let countID = setInterval(frameMovement, 10);
  function frameMovement() {
    if (position === 350) {
      // container 400 - box 50
      clearInterval(countID);
    } else {
      position++;
      animationDiv.style.top = position + "px";
      //animationDiv.style.backgroundColor = "black";
      //console.log(animationDiv.style.top);
      animationDiv.style.left = position + "px";
      //animationDiv.style.backgroundColor = "teal";
      //animationDiv.style.backgroundColor = "white";
      //console.log(animationDiv.style.left);
    }
  }
}

// Animation Method From WebAPI
itemDiv.animate(
  [
    { transform: "scale(1)", background: "red", opacity: 1, offset: 0 },
    {
      transform: "scale(.5) rotate(270deg)",
      background: "blue",
      opacity: 0.5,
      offset: 0.2
    },
    {
      transform: "scale(1) rotate(0deg)",
      background: "red",
      opacity: 1,
      offset: 1
    }
  ],
  {
    duration: 2000,
    easing: "ease-in-out",
    delay: 10,
    iterations: Infinity,
    direction: "alternate",
    fill: "forwards"
  }
);

// Request Animation Frame Method
animationElement.setAttribute(
  "style",
  "background: blue; position: relative; width: 50px; height: 50px; top: 50px;"
);

// Variable Initialized
let start;
let stopId;
let progress;
let toggle = false;

function step(timeStamp) {
  if (!start || progress > 400) start = timeStamp;
  progress = (timeStamp - start) / 10 + 50;
  animationElement.style.top = progress + "px";
  //console.log(animationElement.style.top);
  stopId = window.requestAnimationFrame(step);
  //console.log(stopId);
}

function toggleAnimation() {
  if (!toggle) {
    toggle = true;
    window.requestAnimationFrame(step);
  } else {
    toggle = false;
    cancelAnimationFrame(stopId);
  }
}
