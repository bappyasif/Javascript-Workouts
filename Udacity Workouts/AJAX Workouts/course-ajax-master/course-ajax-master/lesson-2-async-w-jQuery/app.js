/* eslint-env jquery */

(function () {
  const form = document.querySelector("#search-form");
  const searchField = document.querySelector("#search-keyword");
  let searchedForText;
  const responseContainer = document.querySelector("#response-container");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    responseContainer.innerHTML = "";
    searchedForText = searchField.value;
    let apiQuery = `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`;
    // $.ajax({ url: apiQuery }).done(addImage);

    $.ajax({
      url: apiQuery,
      headers: {
        Authorization: "Client-ID Y523ekZfcrFFNQKeXpbsPlQhe1zW4vGPwrASfRsfJmo",
      },
    })
      .done(addImage)
      .fail(function (error) {
        requestError(error, "image");
      });

    function addImage(images) {
      let htmlContent = "";
      //   let data = JSON.parse(this.responseText);
      let randomCalc = Math.round(Math.random() * images.results.length);
      //   let randomPicture = images.results[randomCalc];
      if (images && images.results && images.results[0]) {
        let randomPicture = images.results[randomCalc];
        htmlContent = `<figure>
                <img src="${randomPicture.urls.regular}" alt="${searchedForText}">
                <figcaption>${searchedForText} picture by ${randomPicture.user.name}</figcaption> 
            </figure>`;
      } else {
        htmlContent = `<div class="error-no-image">No Images Been Found</div>`;
      }
      responseContainer.insertAdjacentHTML("afterbegin", htmlContent);
    }
    function requestError(error, part) {
      console.log(error);
      console.log(part);
    }
    let articleQuery = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=TTRVejE1bR2Xl32FzwtGa0faAYc3EAGH`;

    $.ajax({
      url: articleQuery,
    })
      .done(addArticles)
      .fail(function (error) {
        requestError(error, "articles");
      });

    function addArticles(articles) {
      let htmlContent = "";
      console.log(articles.response.length);
      if (
        (articles.response &&
          articles.response.docs &&
          articles.response.length > 1 &&
          articles.response.status === "OK") ||
        "ok"
      ) {
        let data = articles.response.docs;
        htmlContent =
          "<ul>" +
          data
            .map(
              (article) => `<li class="article">
              <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
              <h4>By${article.source}</h4>
              <p>${article.snippet}</p>
          `
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
