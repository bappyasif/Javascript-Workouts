// DOM Elements
let demo = document.getElementById("demo");

// Pop Ups
//alert("This is an alert box");
if (confirm("Choose Ok Or Cancel")) {
  console.log("Pressed OK!!");
} else {
  console.log("Pressed Cancel!!");
}
let person = prompt("Please Enter A Name : ", "aBappy");
if (person === null || person === "") {
  console.log("User Cancelled Prompt Widonw.");
} else {
  console.log(
    "Hello " +
      person.charAt(0).toUpperCase() +
      person.substring(1) +
      " How Are You Doing Today?"
  );
}

// Event Listener
window.addEventListener("resize", updateWindow);

function updateWindow() {
  demo.innerHTML =
    "Browser Inner Window Width : " +
    window.innerWidth +
    ", Height : " +
    window.innerHeight +
    ".";
}

// Open Method In Window
// let windowObject = window.open(
//   "https://www.freecodecamp.org",
//   "newWindow",
//   "menubar=true, location=true, resizable=false, scrollbar=false, width=400, height=300, top=200, left=200"
// );
let windowObject = window.open(
  "",
  "newWindow",
  "menubar=true, location=true, resizable=false, scrollbar=false, width=400, height=300, top=200, left=200"
);

function moveWindow() {
  windowObject.moveBy(50, 10);
  windowObject.focus();
}
