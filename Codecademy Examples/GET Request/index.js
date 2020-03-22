// Datamuse API
let datamuseApiUrl = "https://api.datamuse.com/words?";
let queryStyle = "rel_jjb=";

// DOM Elements
let inputValue = document.getElementById("input");
let submitButton = document.getElementById("button");
let responseField = document.getElementById("responseField");

// let inputValue = document.querySelector("#input");
// let submitButton = document.querySelector("#submit");
// let responseField = document.querySelector("#responseField");

// console.log(inputValue);
// console.log(submitButton);
// console.log(responseField);

// AJAX Function
let getSuggestions = () => {
  let xhr = new XMLHttpRequest();
  let wordQuery = inputValue.value;
  let endpoint = datamuseApiUrl + queryStyle + wordQuery;

  xhr.responseType = "json";
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderWordResponse(xhr.response);
      // renderRawWordsResponse(xhr.response);
    }
  };
  xhr.open("GET", endpoint);
  xhr.send();
};

let displaySuggestion = event => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

// Event Listener
submitButton.addEventListener("click", displaySuggestion);
