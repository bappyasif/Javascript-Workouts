let model = {
  currentCat: null,
  cats: [
    { name: "Dorili", src: "/Proper MVO/catsPics/01.Jpg", count: 0 },
    { name: "Doloris", src: "/Proper MVO/catsPics/02.Jpg", count: 0 },
    { name: "Darleen", src: "/Proper MVO/catsPics/03.png", count: 0 },
    { name: "Dineary", src: "/Proper MVO/catsPics/04.Jpg", count: 0 },
  ],
};

let octopus = {
  init: function () {
    // model.currentCat = model.cats[0];
    catListView.init();
    catShowCaseView.init();
  },
  getCats: function () {
    return model.cats;
  },
  getCat: function () {
    return model.currentCat;
  },
  setCurrentCat: function (cat) {
    model.currentCat = cat;
  },
  incrementCounter: function () {
    model.currentCat.count++;
    catShowCaseView.render();
  },
};

// console.log(octopus.getCats());

let catListView = {
  init: function () {
    this.catList = document.querySelector(".cat_list");
    this.render();
  },
  render: function () {
    let cat, i, liEl, imgEl;
    let cats = octopus.getCats();
    this.catList.innerHTML = "";
    for (i = 0; i < cats.length; i++) {
      cat = cats[i];
      liEl = document.createElement("li");
      liEl.textContent = cat.name;
      liEl.classList.add("name_list");

      imgEl = document.createElement("img");
      imgEl.src = cat.src;
      imgEl.classList.add("cat_images");

      liEl.addEventListener(
        "click",
        (function (catCopy) {
          return function () {
            octopus.setCurrentCat(catCopy);
            catShowCaseView.render();
          };
        })(cat)
      );

      imgEl.addEventListener(
        "click",
        (function (catCopy) {
          return function () {
            octopus.setCurrentCat(catCopy);
            catShowCaseView.render();
          };
        })(cat)
      );
      this.catList.append(liEl);
      this.catList.append(imgEl);
    }
  },
};

let catShowCaseView = {
  init: function () {
    this.catElem = document.querySelector(".showcase_cat");
    this.catNameElem = document.querySelector(".cat_name");
    this.catImageElem = document.querySelector(".expand_image");
    this.countElem = document.querySelector(".click_count");
    this.catImageElem.addEventListener("click", function () {
      octopus.incrementCounter();
    });
    this.render();
  },
  render: function () {
    let currentCat = octopus.getCat();
    this.catImageElem.src = currentCat.src;
    this.catNameElem.textContent = currentCat.name;
    this.countElem.textContent = currentCat.count;
  },
};

octopus.init();
