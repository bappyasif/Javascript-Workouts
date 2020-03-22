// Datamuse API Query Information
let apiURL = "https://api.datamuse.com/words";
let queryParams = "?rel_jjb=";

// DOM Elements
let inputField = document.getElementById("input");
let submitButton = document.getElementById("button");
let responseField = document.getElementById("responseField");

// AJAX Function
let getSuggestions = () => {
  // Get User Word Query
  let wordQuery = inputField.value;
  let endpoint = apiURL + queryParams + wordQuery;

  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      //   return xhr.response();
      renderRawResponse(xhr.response);
      //   renderResponse(xhr.response);
      //   renderRawJsonResponse(xhr.response);
    }
  };
  xhr.open("GET", endpoint);
  xhr.send();
};

// Displaying Response
let displayResponse = event => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  //   getSuggestions();
  //   getWords();
  getAsyncGetRequest();
};

// Using Fetch
let getWords = () => {
  // Get User Word Query
  let wordQuery = inputField.value;
  let endpoint = apiURL + queryParams + wordQuery;

  fetch(endpoint)
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
      //   console.log(jsonResponse);
      // renderRawResponse(jsonResponse);
      // renderResponse(jsonResponse);
      renderRawJsonResponse(jsonResponse);
    });
};

// Using Async
let getAsyncGetRequest = async () => {
  // Get User Word Query
  let wordQuery = inputField.value;
  let endpoint = apiURL + queryParams + wordQuery;

  try {
    let response = await fetch(endpoint);
    if (response.ok) {
      //   return response.json();
      let jsonResponse = await response.json();
      //   renderRawResponse(jsonResponse);
      renderResponse(jsonResponse);
      //   renderRawJsonResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

// Event Listener
submitButton.addEventListener("click", displayResponse);
