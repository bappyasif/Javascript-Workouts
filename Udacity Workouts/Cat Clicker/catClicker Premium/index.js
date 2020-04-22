console.log("Cat Clicker");

let expandedImage = document.querySelector(".expanded_image");
let catName = document.querySelector(".cat_name");

let clickCount = document.querySelector(".count");
let imagesArray = document.querySelectorAll("li");
// console.log(imagesArray);

// let counter = 0;

for (let i = 0; i < imagesArray.length; i++) {
  let currentCat = imagesArray[i];
  // let currentCount =
  imagesArray[i].addEventListener(
    "click",
    (function (curr) {
      return function () {
        // counter++;
        expandedImage.src = curr.querySelector("img").getAttribute("src");
        catName.textContent = curr.querySelector(".name").textContent;
        // clickCount.textContent = counter;
        // console.log(this);
      };
    })(currentCat)
  );
}

// clickCount.textContent = counter;

let namesArray = document.querySelectorAll(".name");
console.log(namesArray);

for (let i = 0; i < namesArray.length; i++) {
  let count = 0;
  let name = namesArray[i];

  let clickedCount = document.createElement("div");
  clickedCount.textContent = count;

  // name.addEventListener("click", (function() {

  // })())
}
