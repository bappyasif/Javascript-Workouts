(function () {
  const form = document.querySelector("#search-form");
  const searchField = document.querySelector("#search-keyword");
  let searchedForText;
  const responseContainer = document.querySelector("#response-container");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    responseContainer.innerHTML = "";
    searchedForText = searchField.value;
    fetch(
      `https://api.unsplash.com/search/photos?page=${Math.floor(
        Math.random() * 11
      )}&query=${searchedForText}`,
      {
        headers: {
          Authorization:
            "Client-ID Y523ekZfcrFFNQKeXpbsPlQhe1zW4vGPwrASfRsfJmo",
        },
      }
    )
      .then((response) => response.json())
      .then(addImage)
      .catch((error) => requestError(error, "Image's"));

    function addImage(images) {
      let htmlContent = "";
      let randomCalc = Math.floor(Math.random() * images.results.length);
      let randomPicture = images.results[randomCalc];
      if (randomPicture && images && images.results && images.results[0]) {
        htmlContent = `<figure>
                <img src="${randomPicture.urls.small}" alt="${searchedForText}">
                <figcaption>${searchedForText} snapshot captured By ${randomPicture.user.name}</figcaption>
          </figure>`;
      } else {
        htmlContent = `<div class="error-no-images">No Images Were Found</div>`;
      }
      responseContainer.insertAdjacentHTML("afterbegin", htmlContent);
    }

    fetch(
      `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=TTRVejE1bR2Xl32FzwtGa0faAYc3EAGH`
    )
      .then((response) => response.json())
      .then(addArticles)
      .catch((error) => requestError(error, "Articles"));

    function addArticles(articles) {
      let htmlContent = "";
      let data = articles.response.docs;
      if (
        (articles.response.docs.length > 1 &&
          articles.response.status === "OK") ||
        "ok"
      ) {
        htmlContent = `<ul>
                ${data
                  .map(
                    (article) => `<li class="article">
                        <h2><a href="${article.web_urls}">${article.headline.main}</a></h2>
                        <h4>By ${article.source}</h4>
                        <p>${article.snippet}</p>
                </li>`
                  )
                  .join("")}
          </ul>`;
      } else {
        htmlContent = `<div class="error-no-articles">Unfortunately No Articles Found</div>`;
      }

      responseContainer.insertAdjacentHTML("beforeend", htmlContent);
    }

    function requestError(error, part) {
      console.log(error);
      responseContainer.insertAdjacentHTML(
        "beforeend",
        `<p class="network-warning">So No ${part} Found</p>`
      );
    }
  });
})();
