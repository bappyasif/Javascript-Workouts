(function() {
  const form = document.querySelector("#search-form");
  const searchField = document.querySelector("#search-keyword");
  let searchedForText = "forrests";
  const responseContainer = document.querySelector("#response-container");

  //   searchedForText = searchField.value;

  responseContainer.innerHTML = "";
  //   searchedForText = searchField.value;

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    // responseContainer.innerHTML = "";
    searchedForText = searchField.value;

    // // TNYT Articles
    // event.preventDefault();
    // responseContainer.innerHTML = "";
    // searchedForText = searchField.value;
    // let articleRequest = new XMLHttpRequest();
    // articleRequest.onload = addArticles;
    // articleRequest.open(
    //   "GET",
    //   `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=TTRVejE1bR2Xl32FzwtGa0faAYc3EAGH`
    // );
    // function addArticles() {
    //   let htmlContent = "";
    //   let data = JSON.parse(this.responseText);
    //   // let firstArticle = data.results[0];
    //   if (
    //     data.response &&
    //     data.response.docs &&
    //     data.response.docs.length > 1
    //   ) {
    //     // htmlContent = `<ul>${data.response.docs
    //     //   .map(article => {
    //     //     `<li class="article">
    //     //   <h2><a href="${article.web.url}">${article.heaadline.main}</a></h2>
    //     //   <p>${article.snippet}</p>
    //     //   </li>
    //     //   `;
    //     //   })
    //     //   .join("")}</ul>`;
    //     htmlContent =
    //       "<ul>" +
    //       data.response.docs
    //         .map(
    //           article =>
    //             `<li class="article">
    //           <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
    //           <p>${article.snippet}</p>
    //         </li>`
    //         )
    //         .join("") +
    //       "</ul>";
    //   } else {
    //     htmlContent = `<div class="error-no-articles">No Articles Been Found</div>`;
    //   }

    let unsplashRequest = new XMLHttpRequest();
    unsplashRequest.open(
      "GET",
      `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
    );
    unsplashRequest.onload = addImage;
    unsplashRequest.onerror = function(error) {
      requestError(error, "image");
    };
    unsplashRequest.setRequestHeader(
      "Authorization",
      "Client-ID Y523ekZfcrFFNQKeXpbsPlQhe1zW4vGPwrASfRsfJmo"
    );
    unsplashRequest.send();
    //   searchedForText = searchField.value;

    function addImage() {
      // debugger;
      let htmlContent = "";
      let data = JSON.parse(this.responseText);
      let firstImage = data.results[0];

      if (data && data.results && data.results[0]) {
        htmlContent = `<figure>
              <img src="${firstImage.urls.regular}" alt="${searchedForText}">
              <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
          </figure>`;
      } else {
        htmlContent = `<div class="error-no-image">No Images Are Available</div>`;
      }
      responseContainer.insertAdjacentHTML("afterbegin", htmlContent);
    }
  });

  //   form.addEventListener("submit", addImage);
  form.addEventListener("submit", function(event) {
    // TNYT Articles
    event.preventDefault();
    // responseContainer.innerHTML = "";
    searchedForText = searchField.value;
    let articleRequest = new XMLHttpRequest();
    articleRequest.onload = addArticles;
    articleRequest.open(
      "GET",
      `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=TTRVejE1bR2Xl32FzwtGa0faAYc3EAGH`
    );
    articleRequest.send();

    function addArticles() {
      let htmlContent = "";
      let data = JSON.parse(this.responseText);
      // let firstArticle = data.results[0];
      if (
        data.response &&
        data.response.docs &&
        data.response.docs.length > 1
      ) {
        // htmlContent = `<ul>${data.response.docs
        //   .map(article => {
        //     `<li class="article">
        //   <h2><a href="${article.web.url}">${article.heaadline.main}</a></h2>
        //   <p>${article.snippet}</p>
        //   </li>
        //   `;
        //   })
        //   .join("")}</ul>`;
        htmlContent =
          "<ul>" +
          data.response.docs
            .map(
              article =>
                `<li class="article">
              <h2><a href="${article.web_url}">${article.headline.main}</a></h2>
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
