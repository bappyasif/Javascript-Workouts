// API Information
let url = "https://api.rebrandly.com/v1/links";
let apiKey = "87bad1a7978b4444aa0160c9a624068c";

// DOM Elements
let inputValue = document.getElementById("input");
let submitButton = document.getElementById("button");
let responseField = document.getElementById("responseField");
// let urlToShorten = inputValue.value;

// AJAX Function
let shortenUrlUsingXHR = () => {
  let urlToShorten = inputValue.value;
  let data = JSON.stringify({ destination: urlToShorten });
  let xhr = new XMLHttpRequest();

  xhr.responseType = "json";
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      //   console.log(xhr.response());
      //   renderRawResponse(xhr.response);
      renderResponse(xhr.response);
    }
  };
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("apikey", apiKey);
  xhr.send(data);
};

let urlShortenWithFetch = () => {
  let urlToShorten = inputValue.value;
  let data = JSON.stringify({ destination: urlToShorten });
  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json", apikey: apiKey },
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
      //   renderResponse(jsonResponse);
      renderRawResponse(jsonResponse);
    });
};

let urlShortenAsyncAwait = async () => {
  let urlToShorten = inputValue.value;
  let data = JSON.stringify({ destination: urlToShorten });
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json", apikey: apiKey },
      body: data
    });

    if (response.ok) {
      let jsonResponse = await response.json();
      //   renderResponse(jsonResponse);
      renderRawResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

// Display Response
let displayResponse = event => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  //   shortenUrlUsingXHR();
  urlShortenAsyncAwait();
  //   urlShortenWithFetch();
};

// Event Listener
submitButton.addEventListener("click", displayResponse);

/**
 // Copied Methods
let usingFetch = () => {
  let urlToShorten = inputValue.value;
  let data = JSON.stringify({ destination: urlToShorten });

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      apikey: apiKey
    },
    body: data
  })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request Failed");
      },
      networkError => {
        console.log(networkError.message);
      }
    )
    .then(jsonResponse => {
      renderRawResponse(jsonResponse);
    });
};

let usingAsync = async () => {
  let urlToShorten = inputValue.value;
  let data = JSON.stringify({ destination: urlToShorten });

  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        apiKey: apiKey
      },
      body: data
    });
    if (response.ok) {
      let jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};
 **/
