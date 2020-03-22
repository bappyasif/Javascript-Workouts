let renderWordResponse = res => {
  // Check Validation
  if (!res) {
    console.log(res.status);
  }

  // Another Validation
  if (!res.length) {
    responseField.innerHTML = `<p>"No Suggestions Were Found"</p>`;
    return;
  }

  // Words List
  let wordsList = [];

  // Traversing Through Response Data
  for (let i = 0; i < Math.min(res.length, 10); i++) {
    // wordsList.push(`<li>${res[i]}</li>`);
    wordsList.push(`<li>${res[i].word} : ${res[i].score}</li>`);
  }

  // Adjoining All Exisiting Words List Items In Array
  wordsList = wordsList.join("");

  responseField.innerHTML = `<p>Your Suggeested Words List : </p> <ol>${wordsList}</ol>`;

  return;
};

let renderRawWordsResponse = res => {
  if (!res || !res.length) {
    responseField.innerHTML = `<p>No Suugestion Were Found</p> ${res.status}`;
  } else {
    let trimmedResponse = res.slice(0, 10);
    let stringifyResponse = JSON.stringify(trimmedResponse);
    // for (let key in stringifyResponse) {
    //   // responseField.innerHTML += stringifyResponse[key];
    //   console.log(stringifyResponse[key]);
    // }
    responseField.innerHTML = `<p>Suggested Words : </p>${stringifyResponse}`;
  }
};
