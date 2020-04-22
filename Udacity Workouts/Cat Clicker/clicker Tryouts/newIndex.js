// let count = 0;

function changeImage(imgs) {
  //   console.log(imgs);
  //   console.log(event.target);
  let expandImage = document.getElementById("expandImage");
  expandImage.src = event.target.getAttribute("src");

  //   console.log(event.target.getElementById("count"));

  let catName = document.getElementById("nameProp");
  //   catName.textContent = imgs.querySelector("p").textContent;
  // console.log(event.target.querySelector("p").textContent);

  // console.log(imgs.querySelectorAll("li")[0].querySelector("p").textContent);

  let imagesArray = document.querySelectorAll("li");
  for (let i = 0; i < imagesArray.length; i++) {
    // console.log(imagesArray[i].querySelector("img").getAttribute("src"));
    let imgTags = imagesArray[i].querySelector("img");
    let nameTag = imagesArray[i].querySelector("p").textContent;
    // let countTag = document.createElement("div");
    // countTag.textContent = "Count";
    // imgTags.appendChild(countTag, imgTags);
    let countTag = imagesArray[i].querySelector("#count").textContent;
    console.log(nameTag, countTag);

    catName.textContent = " Cat Name : " + nameTag;

    let counter = 0;

    let likeTag = document.getElementById("like");
    let counterTag = document.getElementById("countProp");

    console.log(likeTag);
    likeTag.addEventListener(
      "click",
      (function (imgs) {
        return function () {
          counter++;
          // countTag = counter;
          counterTag.textContent = "Count : " + counter;
          // countTag = counterTag;
          // console.log(countTag.valueOf());
          // countTag.concat = counterTag.textContent;
        };
        // countTag.concat = counterTag.textContent;
      })(imagesArray)
    );
    // countTag.concat = counterTag.textContent;
  }
  // console.log(imagesArray);
}

// let counter = 0;
// let likeTag = document.getElementById("like");
// let countTag = document.getElementById("countProp");
// likeTag.addEventListener("click", function () {
//   counter++;
//   console.log(counter);
//   countTag.textContent = "Count : " + counter;
// });
