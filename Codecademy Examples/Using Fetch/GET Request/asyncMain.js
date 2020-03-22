// Information to reach API
const url = "https://api.datamuse.com/words";
const queryParams = "?sl=";

// Selects page elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");

// AJAX Function
let getSuggestions = async () => {
  let wordQuery = inputField.value;
  let endpoint = `${url}${queryParams}${wordQuery}`;

  try {
    let response = await fetch(endpoint, { cache: "no-cache" });
    if (response.ok) {
      let jsonResponse = await response.json();
      //   renderRawResponse(jsonResponse);
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
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
