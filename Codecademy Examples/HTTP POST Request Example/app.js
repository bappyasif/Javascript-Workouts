// Information To Reach RebrandlyAPI
let apiKey = "87bad1a7978b4444aa0160c9a624068c";
let rebrandlyUrl = "https://api.rebrandly.com/v1/links";

// DOM Elements
let inputField = document.getElementById("input");
let shortenButton = document.getElementById("button");
let responseField = document.getElementById("responseField");

// AJAX Function
let shortenURL = () => {
  let urlToShorten = inputField.value;
  let data = JSON.stringify({ destination: urlToShorten });

  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      //   console.log(xhr.response);
      //   renderResponse(xhr.response);
      //   renderShortenUrl(xhr.response);
      renderSome(xhr.response);
    }
  };
  xhr.open("POST", rebrandlyUrl);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("apikey", apiKey);
  xhr.send(data);
};

// Display Response
let displayShortenUrlResponse = event => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenURL();
};

// Adding EventListener To Button
shortenButton.addEventListener("click", displayShortenUrlResponse);
