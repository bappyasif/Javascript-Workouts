let lineElement = document.getElementById("line");
let attributeElement = document.getElementById("attribute");

// Inidividual Styling - This Styling Useful Beccacuse It Does Not Replaces Earlier Styling.
lineElement.style.color = "blue";
lineElement.style.background = "teal";
attributeElement.style.background = "red";
attributeElement.style.boxShadow = "2px 2px 5px 1px blue";

// Multiple Styling - Caution : It Replaces Any Inline Styling From Earlier.
lineElement.style.cssText = "color: blue; border: 2px solid black;";
attributeElement.setAttribute("style", "color:red; border: 2px solid blue;");

// To check Which Inline Styling Is In Action
console.log(lineElement.style);
console.log(lineElement.style.background);
console.log(lineElement.style.cssText);
console.log(attributeElement.style);

// To check Which Every Styling Is In Action
console.log(window.getComputedStyle(lineElement));
console.log(window.getComputedStyle(attributeElement));
