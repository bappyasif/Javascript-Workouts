let modelNew = {
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

let octopusNew = {
  initFunc: function () {
    adminFormView.initFunc();
    catListView.initFunc();
    catShowCase.initFunc();
    // adminFormView.initFunc();
  },
  getCurrentCat: function () {
    return modelNew.currentCat;
  },
  getAllCats: function () {
    return modelNew.cats;
  },
  setCurrentCat: function (cat) {
    modelNew.currentCat = cat;
  },
  incrementClickCounter: function () {
    modelNew.currentCat.count++;
    catShowCase.render();
  },
};

let catListView = {
  initFunc: function () {
    // let catsListElem = document.querySelector(".cat_list");
    this.catsListElem = document.querySelector(".cat_list");
    // this.render(catsListElem);
    this.render();
  },
  render: function () {
    let cat, i, liElem, imgElem;
    let cats = octopusNew.getAllCats();
    // this.catsListElem.innerHTML = "";
    this.catsListElem.innerHTML = "";
    for (i = 0; i < cats.length; i++) {
      cat = cats[i];
      liElem = document.createElement("li");
      liElem.textContent = cat.name;
      liElem.classList.add("name_list");
      liElem.addEventListener(
        "click",
        (function (catCopy) {
          return function () {
            octopusNew.setCurrentCat(catCopy);
            catShowCase.render();
          };
        })(cat)
      );
      imgElem = document.createElement("img");
      imgElem.src = cat.src;
      imgElem.classList.add("cat_images");
      imgElem.addEventListener(
        "click",
        (function (catCopy) {
          return function () {
            octopusNew.setCurrentCat(catCopy);
            catShowCase.render();
          };
        })(cat)
      );
      this.catsListElem.append(liElem);
      this.catsListElem.append(imgElem);
      // catsListElem.append(liElem);
      // catsListElem.append(imgElem);
    }
  },
};

let catShowCase = {
  initFunc: function () {
    this.catNameElem = document.querySelector(".cat_name");
    this.catImageElem = document.querySelector(".expand_image");
    this.clickCountElem = document.querySelector(".click_count");
    this.likeBUtton = document.querySelector(".like");
    this.altags = document.querySelector(".alt_tags");
    // this.catImageElem.addEventListener("click", function () {
    //   octopusNew.incrementClickCounter();
    // });
    this.likeBUtton.addEventListener("click", function () {
      octopusNew.incrementClickCounter();
    });
    this.render();
  },
  render: function () {
    let currentCat = octopusNew.getCurrentCat();
    // console.log(currentCat);
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.src;
    this.clickCountElem.textContent = currentCat.count;
    this.altags.textContent = currentCat.alt;
  },
};

let adminFormView = {
  initFunc: function () {
    // console.log("init Func");
    let adminButton = document.querySelector("#admin");
    let adminForm = document.querySelector(".admin_form");
    this.render(adminButton, adminForm);
  },
  render: function (admin, form) {
    let name, tags, save, cancel;
    admin.addEventListener("click", function () {
      // console.log("clicking");
      form.hidden = false;
      name = document.querySelector("#name");
      tags = document.querySelector("#alt_tags");
      save = document.querySelector("#save");
      save.addEventListener("click", function (event) {
        event.preventDefault();
        let currentCat = octopusNew.getCurrentCat();
        // console.log(currentCat);

        if (name.value !== "" && tags.value !== "") {
          currentCat.name = name.value;
          currentCat.alt = tags.value;
        }

        catListView.render();
        catShowCase.render();
        form.hidden = true;
      });
      cancel = document.querySelector("#cancel");
      cancel.addEventListener("click", function () {
        form.hidden = true;
      });
    });
  },
};
// adminFormView.initFunc();
octopusNew.initFunc();
