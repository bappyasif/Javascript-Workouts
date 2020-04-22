let expandImage = document.getElementById("expandImage");
let catName = document.getElementById("nameProp");
let likeTag = document.getElementById("like");
let counterTag = document.getElementById("countProp");
let imagesArray = document.querySelectorAll("li");
// let counter = 0;

for (let i = 0; i < imagesArray.length; i++) {
  let num = imagesArray[i];
  imagesArray[i].addEventListener(
    "click",
    (function (num) {
      return function () {
        // console.log(event.target);
        let catImage = num.querySelector("img").getAttribute("src");
        // console.log(catImage);
        expandImage.src = catImage;

        let nameTag = num.querySelector("p").textContent;
        // console.log(nameTag);
        catName.textContent = nameTag;

        let countTag = num.querySelector("div");
        let counter = 0;

        likeTag.addEventListener(
          "click",
          (function (tag) {
            // counterTag.textContent = "Count : " + counter;
            return function () {
              counter++;
              counterTag.textContent = "Count : " + counter;
              tag.textContent = counterTag.textContent;
              // tag.textContent = "Count : "+counter;
              // tag.textContent = counter;
            };
          })(countTag)
        );
        counterTag.textContent = "Count : " + counter;

        //
      };
    })(num)
  );
}

// let countTags = document.querySelectorAll("#count");
// // console.log(countTag);
// let counter = 0;

// for (let i = 0; i < countTags.length; i++) {
//   let num = countTags[i];

//   likeTag.addEventListener(
//     "click",
//     (function (curr) {
//       return function () {
//         counter++;
//         counterTag.textContent = "Count : " + counter;
//         curr.textContent = counterTag.textContent;
//       };
//     })(num)
//   );
// }
