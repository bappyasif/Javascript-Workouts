let model = {
  data: [
    { name: "Dorili", src: "/Another Approach/catsPics/01.Jpeg", count: 0 },
    { name: "Doloris", src: "/Another Approach/catsPics/02.Jpg", count: 0 },
    { name: "Darleen", src: "/Another Approach/catsPics/03.png", count: 0 },
    { name: "Dineary", src: "/Another Approach/catsPics/04.Jpg", count: 0 },
  ],

  incrementCounter: function (index) {
    return ++this.data[index].count;
  },
};

let octopus = {
  init: function () {
    view.init();
  },
  renderCats: function (allCats) {
    for (let i = 0; i < model.data.length; i++) {
      //   console.log(model.data[i].name);
      let nameEl = document.createElement("h2");
      let liCats = document.createElement("li");
      nameEl.textContent = model.data[i].name;
      liCats.append(nameEl);
      //   //   allCats.append(nameEl);
      //   //   document.body.append(liCats);
      allCats.append(liCats);

      //   liCats.textContent = nameEl.textContent;
      //   allCats.append(liCats);

      nameEl.addEventListener("click", function () {
        let imageDiv = document.querySelector(".expand_image");
        let nameDiv = document.querySelector(".cat_name");
        let countDiv = document.querySelector(".click_count");

        imageDiv.src = model.data[i].src;
        nameDiv.textContent = model.data[i].name;
        countDiv.textContent = model.incrementCounter(i);
        // countDiv.textContent = "";
        // imageDiv.addEventListener("click", function () {
        //   //   countDiv.textContent = "";
        //   countDiv.textContent = model.incrementCounter(i);
        // });
      });
    }
  },
};

let view = {
  init: function () {
    // let nameEl = document.createElement("h2");
    let allCats = document.querySelector(".cat_list");
    octopus.renderCats(allCats);
  },
};

octopus.init();
