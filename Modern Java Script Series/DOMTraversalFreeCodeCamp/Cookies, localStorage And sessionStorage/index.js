localStorage.setItem("breakfast", "Sccrambled Eggs And Coffee");
console.log(localStorage.getItem("breakfast"));

sessionStorage.setItem("electrolytes", "Glaxose D");
console.log(sessionStorage.getItem("electrolytes"));

// Both Local And Session Storage Keeps A Record For New Keys.
// If Values Get Changed They Overwrite Exisiting Value.

// Remove Storage
localStorage.removeItem("breakfast"); // Clears Individually
//localStorage.clear(); // Clears All
sessionStorage.clear();

// Adding Cookies
document.cookie = "hello=true"; // Without Expiration
document.cookie =
  "doSometingONlyOnce=true; expires=Sat, 22 Feb 2020 20:01:01 GMT"; // With Expiration
document.cookie =
  "doAnotherOnlyOnce=true; expires=Sat, 22 Feb 2020 20:01:01 GMT; path=/"; // Path Root

// Logging Cookies
console.log(document.cookie); // No Individual Access, Have To Access Them All

// Deleting Cookies
document.cookie = "doSometingONlyOnce=; expires=Sat, 21 Feb 2020 20:01:01 GMT"; // Provide An Expiration Date Which Is Already Passed.

// Browser History
// alert(window.history.length); // Current Opened Window History
//console.log(window.history.length);
// history.back(); // Takes Back to Previous, If There Is Any. Use turn_off_js=true To Avoid Infinite Loop Using Codepen
// history.go(-3);
// history.go(3);
// history.replaceState("aBappy Here", null, "unicycle.html");
// console.log(history.state);

//history.pushState(null, null, "freeCodeCamp");
