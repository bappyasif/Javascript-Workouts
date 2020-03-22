// Information to reach API
const url = "https://api.datamuse.com/words?";
//const queryParams = 'rel_rhy=';
const queryParams = "rel_jjb=";
const additionalParams = "&topics=";

// Selecting page elements
const inputField = document.querySelector("#input");
const topicField = document.querySelector("#topic");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");

// AJAX Function
const getSuggestions = () => {
  let wordQuery = inputField.value;
  let topicQuery = topicField.value;
  let endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;

  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  };

  xhr.open("GET", endpoint);
  xhr.send();
};

// Clear previous results and display results to webpage
const displaySuggestions = event => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener("click", displaySuggestions);
