// ITUNES URL
// https://itunes.apple.com/search?term=ARTIST&entity=album

function MusicDB() {
  this.init = () => {
    console.log("Strting Program");
    this.search();
  };

  this.search = () => {
    let $this = this;
    let form = document.querySelector("#form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let inputValue = document.querySelector("#search_input").value;
      form.reset();
      $this.getData(inputValue);
    });
  };

  this.getData = (input) => {
    let xhr = new XMLHttpRequest();
    let url = `https://itunes.apple.com/search?term=${input}&entity=album`;
    let method = "GET";
    xhr.open(method, url);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // console.log(JSON.parse(xhr.response));
        this.showList(JSON.parse(xhr.response));
      } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
        console.log("Somethings Wrong");
      }
    };
    xhr.send();
    let container = document.querySelector("#album_list_container");
    container.innerHTML = "";
  };

  this.showList = (ob) => {
    console.log(ob);
    let container = document.querySelector("#album_list_container");
    let htmlTemplate = "";
    let notMatch = document.querySelector("#not_match");
    if (ob.results.length > 0) {
      //   notMatch.style.display = "none";
      ob.results.map(
        (album) =>
          (htmlTemplate += `
      <div class="col-sm-4 album_item">
      <div class="item_thmb" style="background: url(${album.artworkUrl100});"></div>
      <div class="item_title">${album.collectionName}</div>
      <div class="item_price"><span>Price : </span>${album.collectionPrice} ${album.currency}</div>
      <a href="${album.artistViewUrl}" target="_blank">Artist Profile</a>
      <a href="${album.collectionViewUrl}" target="_blank">Buy Now!!</a>
    </div>
      `)
      );
      container.innerHTML = "";
      container.insertAdjacentHTML("afterbegin", htmlTemplate);
    } else {
      notMatch.style.display = "block";
    }
  };
}

let musicdb = new MusicDB();
musicdb.init();
