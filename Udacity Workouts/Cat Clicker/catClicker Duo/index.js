let like = document.querySelector(".like");
let count = document.querySelector(".count");

let like2 = document.querySelector(".like2");
let count2 = document.querySelector(".count2");

let catLiked = 0;
let createDiv = document.createElement("div");

let cat2Liked = 0;
let anotherDiv = document.createElement("div");

like.addEventListener("click", function () {
  console.log("Cat Clicked");
  catLiked++;
  //   count.innerHTML += `<p><strong>${catLiked}</p></strong?`;
  //   let createDiv = document.createElement("div");
  createDiv.innerHTML = `<p><strong>${catLiked}</p></strong>`;
  //   count.appendChild(createDiv, count);
  //   count.append(`<p><strong>${catLiked}</p></strong>`);
  console.log(catLiked);
});

like2.addEventListener("click", function () {
  cat2Liked++;
  console.log("Cat2 Liked");
  anotherDiv.innerHTML = `<p><b>${cat2Liked}</b></p>`;
});

// createDiv.innerHTML = `<p><strong>${catLiked}</p></strong>`;
count.appendChild(createDiv, count);
count2.appendChild(anotherDiv, count2);
