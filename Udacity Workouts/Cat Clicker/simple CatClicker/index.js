let like = document.querySelector(".like");
let count = document.querySelector(".count");

let catLiked = 0;
let createDiv = document.createElement("div");

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

// createDiv.innerHTML = `<p><strong>${catLiked}</p></strong>`;
count.appendChild(createDiv, count);
