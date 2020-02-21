// DOM Elemnets
let p1Element = document.getElementById("p1");
let p2Element = document.getElementById("p2");
let div1Element = document.getElementById("div1");

// DOM Nodes
let paragraph1Element = document.createElement("p");
let textNode = document.createTextNode("Up Abobe The World So High");
paragraph1Element.appendChild(textNode);

let paragraph2Element = document.createElement("p");
let paragraph3Element = document.createElement("p");

// Adding It To DOM
div1Element.appendChild(paragraph1Element);
//div1Element.appendChild(textNode); // Apparantly, This Works As Well.

paragraph2Element.innerHTML = "Like A Diamond In The Sky";
//div1Element.appendChild(paragraph2Element);
div1Element.insertBefore(paragraph2Element, p1Element);

// Replacing Element
paragraph3Element.innerHTML = "When The Blazing Sun Is Gone";
div1Element.replaceChild(paragraph3Element, p1Element);

// Removing Element
div1Element.removeChild(paragraph3Element);
div1Element.removeChild(paragraph2Element);
