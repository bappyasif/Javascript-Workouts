// Information to reach API
const apiKey = "87bad1a7978b4444aa0160c9a624068c";
const url = "https://api.rebrandly.com/v1/links";

// Some page elements
const inputField = document.querySelector("#input");
const shortenButton = document.querySelector("#shorten");
const responseField = document.querySelector("#responseField");

// AJAX Function
let shortenUrl = () => {
  let urlToShorten = inputField.value;
  let data = JSON.stringify({ destination: urlToShorten });

  fetch(url, {
    headers: { "Content-type": "application/json", apikey: apiKey },
    method: "POST",
    body: data
  })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request Failed!");
      },
      networkError => {
        console.log(networkError.message);
      }
    )
    .then(jsonResponse => {
      renderResponse(jsonResponse);
    });
};

// Clear page and call AJAX functions
const displayShortUrl = event => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton.addEventListener("click", displayShortUrl);
