console.log("Cat Clicker");

(function () {
  let model = {
    cats: [
      { name: "Snaazy", img: "/Another Tryout//catsPics/01.jpeg", count: 0 },
      { name: "Snuuzy", img: "/Another Tryout//catsPics/02.jpg", count: 0 },
      { name: "Sneezy", img: "/Another Tryout//catsPics/03.png", count: 0 },
      { name: "Snoozy", img: "/Another Tryout/catsPics/04.jpg", count: 0 },
    ],
    incrementCounter: function (index) {
      return ++this.cats[index].count;
    },
  };

  let octopus = {
    init: function () {
      view.init();
    },

    renderModel: function (imageLi, expandImage, clickedCount) {
      for (let i = 0; i < model.cats.length; i++) {
        let imgDiv = document.createElement("img");
        imgDiv.src = model.cats[i].img;
        imgDiv.classList.add("image_list");
        imageLi.appendChild(imgDiv, imageLi);
        imgDiv.addEventListener("click", function (event) {
          //   console.log("clicking..");
          expandImage.src = imgDiv.getAttribute("src");
          let catClicked = model.incrementCounter(i);
          clickedCount.textContent = catClicked;
        });
      }
    },
  };

  let view = {
    init: function () {
      //   //   let imgDiv = document.createElement("img");
      //   //   let nameDiv = document.createElement("div");
      //   let liDiv = document.querySelector("ul");
      //   //   let name = document.querySelector("cat_name");
      //   let expandImage = document.querySelector(".showcase_cat");
      //   let clickCounter = document.querySelector(".count");

      //   for (let i = 0; i < model.cats.length; i++) {
      //     let imgDiv = document.createElement("img");
      //     let nameDiv = document.createElement("div");

      //     nameDiv.textContent = model.cats[i].name;
      //     console.log(nameDiv.textContent);
      //     // liDiv.appendChild(nameDiv, liDiv);
      //     imgDiv.src = model.cats[i].img;
      //     imgDiv.classList.add("image_list");
      //     liDiv.appendChild(imgDiv, liDiv);

      //     imgDiv.addEventListener("click", function () {
      //       expandImage.src = imgDiv.getAttribute("src");
      //       let clickCount = model.incrementCounter(i);
      //       clickCounter.textContent = clickCount;
      //     });
      //   }

      //   let liDiv = document.querySelector("li");
      //   //   console.log(liDiv.querySelector("h2").textContent);
      //   for (let i = 0; i < model.cats.length; i++) {
      //     let nameDiv = document.createElement("h2");
      //     nameDiv.textContent = model.cats[i].name;
      //     liDiv.appendChild(nameDiv, liDiv);
      //   }

      this.renderCats();
    },
    renderCats: function () {
      let imageLi = document.querySelector("li");
      let expandImage = document.querySelector(".showcase_cat");
      let clickedCount = document.querySelector(".count");
      //   console.log(imageLi.querySelector("img").src);
      octopus.renderModel(imageLi, expandImage, clickedCount);
    },
  };
  octopus.init();
})();

// octopus.init();
