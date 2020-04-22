(function () {
  const form = document.querySelector("#search-form");
  const searchField = document.querySelector("#search-keyword");
  let searchedForText;
  const responseContainer = document.querySelector("#response-container");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    responseContainer.innerHTML = "";
    searchedForText = searchField.value;

    // let myInit = {
    //   method: "GET",
    //   headers: {
    //     Authorization: "Client-ID Y523ekZfcrFFNQKeXpbsPlQhe1zW4vGPwrASfRsfJmo",
    //   },
    // };
    // fetch(
    //   `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
    //   myInit
    // ).then((response) => {
    //   debugger;
    // });

    let apiReuest = new Request(
      `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
    );

    fetch(
      // `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
      apiReuest,
      {
        headers: {
          // method: "GET",
          Authorization:
            "Client-ID Y523ekZfcrFFNQKeXpbsPlQhe1zW4vGPwrASfRsfJmo",
        },
      }
    )
      .then((response) => {
        // debugger;
        console.log(response);
        return response.json();
      })
      .then(addImage)
      .catch((error) => requestError(error, "images"));

    function addImage(data) {
      console.log(data);
      // debugger;
      let htmlContent = "";
      let randomCalc = Math.floor(Math.random() * data.results.length);
      let randomPicture = data.results[randomCalc];

      if (randomPicture) {
        htmlContent = `<figure>
            <img src="${randomPicture.urls.small}" alt="${searchedForText}">
            <figcaption>${searchedForText} Snapshot Taken By ${randomPicture.user.name}</figcaption>
        </figure>`;
      } else {
        htmlContent = `Unfortunately No Images Found`;
      }
      responseContainer.insertAdjacentHTML("afterbegin", htmlContent);
    }

    apiReuest = new Request(
      `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=TTRVejE1bR2Xl32FzwtGa0faAYc3EAGH`
    );
    fetch(
      // `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=TTRVejE1bR2Xl32FzwtGa0faAYc3EAGH`
      apiReuest,
      { mode: "cors" }
    )
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        console.log(response.status, response.statusText);
        throw new Error("Network- Error");
      })
      .then((jsonData) => {
        console.log(jsonData);
        return jsonData;
      })
      .then(addArticle)
      .catch((error) => requestError(error, "articles"));

    // fetch(
    //   `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=TTRVejE1bR2Xl32FzwtGa0faAYc3EAGH`
    // )
    //   .then((response) => response.json())
    //   .then(addArticle)
    //   .then((response) => Promise.reject(new Error("bad articles")))
    //   .catch((e) => requestError(e, "articles"));

    function addArticle(data) {
      console.log(data);
      let htmlContent = "";
      if (
        (data.response.docs.length > 1 && data.response.status === "OK") ||
        "ok"
      ) {
        let articles = data.response.docs;
        console.log(articles);
        htmlContent = `<ul>
            ${articles.map(
              (article) => `<li class="article">
                <h2><a href="${article.web_urls}">${article.headline.main}</a></h2>
                <h4>By ${article.source}</h4>
                <p>${article.snippet}</p>
            </li>`
            )}
        </ul>`;
      } else {
        htmlContent = `Unfortunately No Articles Found`;
      }
      responseContainer.insertAdjacentHTML("beforeend", htmlContent);
    }

    function requestError(error, part) {
      console.log(error);
      responseContainer.insertAdjacentHTML(
        "beforeend",
        `<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`
      );
    }
  });
})();
