(function() {
  const form = document.querySelector("#search-form");
  const searchField = document.querySelector("#search-keyword");
  let searchedForText = "Sports";
  const responseContainer = document.querySelector("#response-container");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    responseContainer.innerHTML = "";
    searchedForText = searchField.value;

    let imageRequest = new XMLHttpRequest();
    let method = "GET";
    let apiQuery = `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`;
    imageRequest.open(method, apiQuery);
    imageRequest.onload = addImage;
    imageRequest.onerror = function(error) {
      requestError(error, "image");
      console.log("Somethings Wrong");
    };
    imageRequest.setRequestHeader(
      "Authorization",
      "Client-ID Y523ekZfcrFFNQKeXpbsPlQhe1zW4vGPwrASfRsfJmo"
    );
    imageRequest.send();

    function addImage() {
      // debugger;
      let htmlContent = "";
      let data = JSON.parse(this.responseText);
      let randomCalc = Math.round(Math.random() * data.results.length);
      // console.log(randomCalc);
      if (data && data.results && data.results[0]) {
        let randomImage = data.results[randomCalc];
        htmlContent = `<figure>
          <img src="${randomImage.urls.regular}" alt="${searchedForText}">
          <figcaption>${searchedForText} picture by ${randomImage.user.name}</figcaption>
      </figure>`;
      } else {
        htmlContent = `<div class="erro-no-image">No Images Been Found</div>`;
      }

      responseContainer.insertAdjacentHTML("afterbegin", htmlContent);
    }

    let articleRequest = new XMLHttpRequest();
    let methodHeader = "GET";
    let apiQueryRequest = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=TTRVejE1bR2Xl32FzwtGa0faAYc3EAGH`;
    articleRequest.onerror = function(error) {
      requestError(error, "Articles");
      console.log("Somethings Wrong");
    };
    articleRequest.onload = addArticles;
    articleRequest.open(methodHeader, apiQueryRequest);
    articleRequest.send();

    function addArticles() {
      let htmlContent = "";
      let data = JSON.parse(this.responseText);
      if (
        (data.response &&
          data.response.docs &&
          data.response.docs.length > 1 &&
          data.response.status === "OK") ||
        "ok"
      ) {
        htmlContent =
          "<ul>" +
          data.response.docs
            .map(
              article =>
                `<li class="article">
          <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
          <h4>By${article.source} ${article.keywords[0].value} ${article.news_desk}
          ${article.byline.person[0].organization}</h4>
          <p>${article.snippet}</p>
          </li>`
            )
            .join("") +
          "</ul>";
      } else {
        htmlContent = `<div class="error-no-articles">No Articles Been Found</div>`;
      }

      responseContainer.insertAdjacentHTML("beforeend", htmlContent);
    }
  });
})();
