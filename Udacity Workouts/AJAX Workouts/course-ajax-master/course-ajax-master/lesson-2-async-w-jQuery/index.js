(function () {
  const form = document.querySelector("#search-form");
  const searchField = document.querySelector("#search-keyword");
  let searchedForText;
  const responseContainer = document.querySelector("#response-container");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    responseContainer.innerHTML = "";
    searchedForText = searchField.value;
    let apiQuery = `https://api.unsplash.com/search/photos?page=${Math.floor(
      Math.random() * 11
    )}&query=${searchedForText}`;
    $.ajax({
      url: apiQuery,
      headers: {
        Authorization: "Client-ID Y523ekZfcrFFNQKeXpbsPlQhe1zW4vGPwrASfRsfJmo",
      },
    })
      .done(addImage)
      .fail((error) => requestError(error, "Image's"));

    function addImage(images) {
      let htmlContent = "";
      let radomCalc = Math.floor(Math.random() * images.results.length);
      let randomPicture = images.results[radomCalc];
      if (images && images.results && images.results[0] && randomPicture) {
        htmlContent = `<figure>
                <img src="${randomPicture.urls.regular}" alt="${searchedForText}">
                <figcaption>${searchedForText} snapshot taken by ${randomPicture.user.name}</figcaption>
          </figure>`;
      } else {
        htmlContent = `<div class="error-no-images">No Images Were Found</div>`;
      }
      responseContainer.insertAdjacentHTML("afterbegin", htmlContent);
    }

    let articleQuery = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=TTRVejE1bR2Xl32FzwtGa0faAYc3EAGH`;
    $.ajax({ url: articleQuery })
      .done(addArticles)
      .fail((error) => requestError(error, "Articles"));

    function addArticles(articles) {
      let htmlContent = "";
      let data = articles.response.docs;
      if (
        (articles.response &&
          data &&
          articles.response.length > 1 &&
          articles.response.status === "OK") ||
        "ok"
      ) {
        htmlContent = `<ul>
                ${data
                  .map(
                    (article) => `<li class="article">
                        <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
                        <h4>${article.source}</h4>
                        <p>${article.snippet}</p>
                </li>`
                  )
                  .join("")}
          </ul>`;
      } else {
        htmlContent = `<div class="error-no-articles">No Articles Were Found</div>`;
      }
      responseContainer.insertAdjacentHTML("beforeend", htmlContent);
    }

    function requestError(error, part) {
      console.log(error);
      responseContainer.insertAdjacentHTML(
        "beforeend",
        `<p class="network-warning">No ${part} Been Found</p>`
      );
    }
  });
})();
