// ITUNES URL
// https://itunes.apple.com/search?term=ARTIST&entity=album

function Musicdb() {
  this.init = () => {
    this.search();
  };

  this.search = () => {
    let $this = this;
    let form = document.querySelector("#form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let inputValue = document.querySelector("#input_search").value;
      console.log(inputValue);
      form.reset();
      $this.getData(inputValue);
    });
  };

  this.getData = (artist) => {
    let httpRequest = new XMLHttpRequest();
    let url = `https://itunes.apple.com/search?term=${artist}&entity=album`;
    let method = "GET";
    httpRequest.open(method, url);
    httpRequest.onreadystatechange = () => {
      if (
        httpRequest.readyState === XMLHttpRequest.DONE &&
        httpRequest.status === 200
      ) {
        // console.log(httpRequest.response);
        // console.log(JSON.parse(httpRequest.response));
        this.showArtist(JSON.parse(httpRequest.response));
      } else if (
        httpRequest.readyState === XMLHttpRequest.DONE &&
        httpRequest.status !== 200
      ) {
        console.log("Somethings Wrong");
      }
    };
    httpRequest.send();
    let container = document.querySelector("#album_list_container");
    container.innerHTML = "";
  };

  this.showArtist = (ob) => {
    console.log(ob);
    let container = document.querySelector("#album_list_container");
    let htmlTemplate = "";
    let notMatch = document.querySelector("#not_match");
    if (ob.results.length > 0) {
      notMatch.style.display = "none";
      ob.results.map(
        (album) =>
          (htmlTemplate += `
      <div class="col-sm-3 album_item">
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

let musicdb = new Musicdb();
musicdb.init();
