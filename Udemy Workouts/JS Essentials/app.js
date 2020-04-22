let setButton = document.getElementById("button");
let modifyDiv = document.getElementById("modify");
let setButton2 = document.getElementById("button2");

setButton.addEventListener("click", clickEvent);
setButton2.addEventListener("click", setBorder);

function clickEvent(event) {
  console.log("Set Clicked");
  let elements = document.getElementsByName("cssProperty");
  console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    let cssValues = elements[i].value;
    let cssProperties = elements[i].getAttribute("id");
    console.log(cssProperties, cssValues);
    modifyDiv.style[cssProperties] = cssValues;
  }
  // setBorder(modifyDiv);
}

function setBorder() {
  let elements = document.getElementsByName("borderProperty");
  console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    let cssProperties = elements[i].getAttribute("id");
    let cssValues = elements[i].value;
    console.log(cssProperties, cssValues);
    modifyDiv.style[cssProperties] += cssValues;
  }
}
