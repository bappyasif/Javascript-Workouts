// Information to reach API
const apiKey = "87bad1a7978b4444aa0160c9a624068c";
const url = "https://api.rebrandly.com/v1/links";

// Some page elements
const inputField = document.querySelector("#input");
const shortenButton = document.querySelector("#shorten");
const responseField = document.querySelector("#responseField");

// AJAX Functions
let shortenUrl = async () => {
  let urlToShorten = inputField.value;
  let data = JSON.stringify({ destination: urlToShorten });

  try {
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json", apikey: apiKey },
      body: data
    });

    if (response.ok) {
      let jsonResponse = await response.json();
      //   renderRawResponse(jsonResponse);
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
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
