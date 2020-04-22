console.log("Cat Clicker");

let expandedImage = document.querySelector(".expanded_image");
let catName = document.querySelector(".cat_name");

let clickCount = document.querySelector(".count");
let imagesArray = document.querySelectorAll("li");

let count = {
  img1: 0,
  img2: 0,
  img3: 0,
  img4: 0,
  img5: 0,
};

function handleClicks(item) {
  let clcikedElement = item.target.getAttribute("id");
  // console.log(clcikedElement);
  count[clcikedElement]++;
  // updateCount(clcikedElement);
  updateCount();
}

function updateCount() {
  let counts = document.getElementById("counts");
  counts.innerHTML = `
      First Cat : ${count.img1} clicks
      Second Cat : ${count.img2} clicks
      Third Cat : ${count.img3} clicks
      Fourth Cat : ${count.img4} clicks
      Fifth Cat : ${count.img5} clicks
      `;
  // console.log(clickCount);
  // if (count[item] === 1) counts.innerHTML = `First Cat : ${count.img1} clicks`;
  // if (count[item] === 2) counts.innerHTML = `First Cat : ${count.img2} clicks`;
}

let firstCat = document.getElementById("img1");
let SecondCat = document.getElementById("img2");
let thirdCat = document.getElementById("img3");
let fourthCat = document.getElementById("img4");
let fifthCat = document.getElementById("img5");

firstCat.onclick = handleClicks;
SecondCat.onclick = handleClicks;
thirdCat.onclick = handleClicks;
fourthCat.onclick = handleClicks;
fifthCat.onclick = handleClicks;

for (let i = 0; i < imagesArray.length; i++) {
  imagesArray[i].addEventListener("click", function () {
    expandedImage.src = this.querySelector("img").getAttribute("src");
    catName.textContent = this.querySelector(".name").textContent;
  });
}
