let renderRawResponse = res => {
  if (!res || !res.length) {
    responseField.innerHTML = `<p><b>Please Try Another Word</b></p>`;
  } else {
    let trimmedResponse = res.slice(0, 12);
    let stringifyResponse = JSON.stringify(trimmedResponse);
    //   responseField.innerHTML = `<pre>${stringifyResponse}</pre>`;
    responseField.innerHTML = `<text>${stringifyResponse}</text>`;
  }
};

let renderResponse = res => {
  if (!res) {
    responseField.innerHTML = `<p><b>${res.status}</b></p>`;
  }
  if (!res.length) {
    responseField.innerHTML = `<p><b>There Are No Suggested Words For This Query</b></p>`;
  }

  let wordArray = [];
  for (let i = 0; i < Math.min(res.length, 12); i++) {
    // wordArray.push(`${res[i].word}`);
    wordArray.push(`<li>${res[i].word}</li>`);
  }
  //   responseField.innerHTML = `<p><b>Your Suggested Words Are : </b></p> ${wordArray}`;
  responseField.innerHTML = `<p><b>Your Suggested Words Are : </b></p> <ul>${wordArray}</ul>`;
  return;
};

let renderRawJsonResponse = res => {
  let rawJson = {};
  for (let key in res) {
    rawJson[key] = res[key];
  }
  //   let stringifyJson = JSON.stringify(rawJson);
  let stringifyJson = JSON.stringify(rawJson).replace(/,/g, ", \n");
  responseField.innerHTML = `<pre>${stringifyJson}</pre>`;
};
