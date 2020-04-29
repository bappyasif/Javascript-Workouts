// Information to reach API
const url = "https://api.datamuse.com/words";
const queryParams = "?sl=";

// Selects page elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");

// AJAX Function
let getSuggestions = () => {
  let wordQuery = inputField.value;
  let endpoint = `${url}${queryParams}${wordQuery}`;

  fetch(endpoint, { cache: "no-cache" })
    .then(
      response => {
        if (response.ok) {
          //   // console.log(response.json());
          return response.json();
          // renderJsonResponse(response);
          //   jsonResponseRendering(response);
        }
        throw new Error("Request Failed!");
      },
      networkError => {
        console.log(networkError.message);
      }
    )
    .then(jsonResponse => {
      //   renderRawResponse(jsonResponse);
      renderResponse(jsonResponse);
    });
};

// Clears previous results and display results to webpage
const displaySuggestions = event => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener("click", displaySuggestions);