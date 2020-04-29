let model = {
  currentCat: null,
  cats: [
    {
      name: "Dorili",
      src: "/Proper MVO/catsPics/01.Jpg",
      count: 0,
      alt: "Adorable Cat",
    },
    {
      name: "Doloris",
      src: "/Proper MVO/catsPics/02.Jpg",
      count: 0,
      alt: "Adorable Cat",
    },
    {
      name: "Darleen",
      src: "/Proper MVO/catsPics/03.png",
      count: 0,
      alt: "Adorable Cat",
    },
    {
      name: "Dineary",
      src: "/Proper MVO/catsPics/04.Jpg",
      count: 0,
      alt: "Adorable Cat",
    },
  ],
};

let octopus = {
  init: function () {
    // model.currentCat = model.cats[0];
    catListView.init();
    catShowCaseView.init();
    adminView.init();
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

let adminView = {
  init: function () {
    // console.log("adminButton");
    let adminButton = document.querySelector("#admin");
    let adminForm = document.querySelector(".admin_form");
    this.render(adminButton, adminForm);
  },
  render: function (admin, form) {
    let name, cancel, save, alt;
    admin.addEventListener("click", function () {
      // console.log("Clicking....");
      form.hidden = false;
      // form.classList.remove("hidden");
      name = document.querySelector("#name");
      alt = document.querySelector("#alt_tag");
      save = document.querySelector("#save");
      save.addEventListener("click", function (event) {
        event.preventDefault();
        // console.log(name.value);
        let currentCat = octopus.getCat();
        // console.log(currentCat);
        currentCat.name = name.value;
        currentCat.alt = alt.value;
        console.log(currentCat.alt);
        // console.log(currentCat.name);
        // catListView.init();
        catListView.render();
        catShowCaseView.render();
        form.hidden = true;
      });
      cancel = document.querySelector("#cancel");
      cancel.addEventListener("click", function () {
        form.hidden = true;
      });
    });
  },
};

console.log(adminView.init());
octopus.init();
