console.log("Cat Clicker");
let catElements = document.querySelectorAll("li");

let firstCat = document.getElementById("firstCat");
console.log(document.querySelectorAll("img")[0].getAttribute("src"));
console.log(document.getElementById("name1").textContent);
console.log(firstCat.getElementsByTagName("div")[0].innerText);

// let firstCat = document.getElementById("firstCat");
// firstCat.addEventListener("click", function (event) {
//   //   this.className = "displayArea";
//   console.log(this);
// });

// document.getElementsByTagName("li").addEventListener("clcik", function (event) {
//   console.log(this);
// });

function clickEvent(imgs) {
  //   let displayArea = document.getElementById("displayArea");
  let displayArea = document.querySelector(".displayArea");
  let imgDiv = document.getElementById("imageUrl");
  //   imgDiv.src = imgs.src;
  //   imgDiv.getAttribute("src") = imgs.src;
  //   console.log(imgDiv.getAttribute("src"));
  //   console.log(imgs.src);
  //   imgs.src = imgDiv.src;
  //   imgs.className = "displayArea";
  let expandImage = document.getElementById("expandedImg");
  expandImage.src = imgs.src;
  //   expandImage.parentElement.style.display = "block";
}
