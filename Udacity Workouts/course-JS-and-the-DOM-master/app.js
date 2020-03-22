let tryingElement = document.querySelector("h6.text-center");
//tryingElement.cssText = "color:green; background-color:orange; font-size:4em";
//tryingElement.style.color = "Green";
//tryingElement.setAttribute = ("style", "color:green; background-color:orange");
tryingElement.style.fontSize = "2em";
// tryingElement.style.cssText =
//   "color:green; background-color:orange; font-size:2em";
// tryingElement.setAttribute(
//   "style",
//   "color:green; font-size:2em; background-color:aqua;"
// );

tryingElement.addEventListener("click", function() {
  console.log("Got Clicked!!");

  //document.querySelector("h1.white.mb-half").style.backgroundColor = "teal";
  //document.querySelector("h1.white.mb-half").style["font-size"] = "2em";
  //document.querySelector("h1.white.mb-half").style.fontSize = "2em";
  tryingElement.setAttribute(
    "style",
    "color:green; font-size:2em; background-color:aqua;"
  );
});
// They have their own distinct listener functions...
// they do not refer to the exact same function
tryingElement.removeEventListener("click", function() {
  console.log("Click Done");
});

// They Have Exact Same Event Listener Function For Both Methods,
// That's Why It Works.
tryingElement.addEventListener("click", clickMethod);

function clickMethod() {
  console.log("Element Clicked");
  tryingElement.setAttribute(
    "style",
    "color:aqua; font-size:3em; background-color:green;"
  );
}

tryingElement.removeEventListener("click", clickMethod);

// document.body.addEventListener("keypress", function() {
//   console.log("Removing First Node Child");
//   document.querySelector("#contain-all").firstElementChild.remove();
// });

// Event Phases
// the capturing phase
// the at target phase
// and the bubbling phase

// By default, when .addEventListener() is called with only two arguments,
// the method defaults to using the bubbling phase.

document.addEventListener("click", function() {
  console.log("The document was clicked");
});

document.body.addEventListener("click", function() {
  console.log("The document body was clicked");
});

// it should invoke the listener earlier, during the capturing phase!
document.addEventListener(
  "click",
  function() {
    console.log("The document was captured");
  },
  true
);

// let items = document.querySelector(".hero__module");
// let el = items[1];
// //console.log(items);
// el.addEventListener("click", function(event) {
//   console.log("You Clicked 2nd Element");
// });

document.addEventListener("click", function(ev) {
  console.log(ev);
});

let items = document.querySelectorAll(".hero__module--container");
let el = items[1];
console.log(items);
// el.addEventListener("keypress", function(event) {
//   console.log("You Clicked 2nd Element");
// });

const links = document.querySelectorAll("a");
const thirdLink = links[2];
console.log(thirdLink);
// thirdLink.addEventListener("click", function(event) {
//   event.preventDefault();
//   console.log("Look, We didn't navigate to a new page!");
// });
