console.log("Cat Clicker With MVO");

(function () {
  let model = {
    cats: [
      { src: "/Another Tryout/catsPics/01.jpeg", clicked: 0 },
      { src: "/Another Tryout/catsPics/02.jpg", clicked: 0 },
      { src: "/Another Tryout/catsPics/03.png", clicked: 0 },
      { src: "/Another Tryout/catsPics/04.jpg", clicked: 0 },
    ],
    incrementCounter: function (index) {
      return ++this.cats[index].clicked;
    },
  };

  let octopus = {
    init: function () {
      view.init();
    },
    allCats: function (ul, clickCount, expandedImage) {
      for (let i = 0; i < model.cats.length; i++) {
        // console.log(model.cats.length);
        // return model.cats[i].src;
        // console.log(model.cats[i].src);
        let catEl = document.createElement("img");
        catEl.src = model.cats[i].src;
        catEl.classList.add("image_list");
        ul.appendChild(catEl, ul);
        catEl.addEventListener("click", function (event) {
          expandedImage.src = catEl.getAttribute("src");
          let countDisplay = model.incrementCounter(i);
          // console.log(model.incrementCounter(i));
          // view.render();
          // clickClount.textContent = "";
          clickCount.textContent = countDisplay;
        });
      }
    },
  };

  let view = {
    init: function () {
      let ul = document.querySelector("ul");
      let cat01 = document.createElement("img");
      this.showCats(ul);
      // this.render(ul, cat01);
    },
    showCats: function (ul) {
      let clickClount = document.querySelector(".count");
      let expandedImage = document.querySelector(".showcase_cat");
      octopus.allCats(ul, clickClount, expandedImage);
      // for (let i = 0; i < model.cats.length; i++) {
      //   // console.log(model.cats.length);
      //   // return model.cats[i].src;
      //   // console.log(model.cats[i].src);
      //   let catEl = document.createElement("img");
      //   catEl.src = model.cats[i].src;
      //   catEl.classList.add("image_list");
      //   ul.appendChild(catEl, ul);
      //   catEl.addEventListener("click", function (event) {
      //     expandedImage.src = catEl.getAttribute("src");
      //     let countDisplay = model.incrementCounter(i);
      //     // console.log(model.incrementCounter(i));
      //     // view.render();
      //     // clickClount.textContent = "";
      //     clickClount.textContent = countDisplay;
      //   });
      // }
    },
    // render: function (ul, cat01) {},
  };

  // console.log(model.count);
  // view.init();
  // console.log(view.showCats());
  octopus.init();
})();
