let renderResponse = res => {
  if (res.errors) {
    responseField.innerHTML = `<p> Please Try Another Url </p> `;
  } else {
    responseField.innerHTML = `<p> Your Shorten URL Is : </p> <b>${res.shortUrl}</b>`;
  }
};

let renderRawResponse = res => {
  if (res.errors) {
    responseField.innerHTML = `<p> Please Try Another Url </p> `;
  } else {
    // responseField.innerHTML = JSON.stringify(res);
    // responseField.innerHTML = `<pre>${JSON.stringify(res)}</pre`;
    let structuredResponse = JSON.stringify(res).replace(/,/g, ",\n");
    responseField.innerHTML = `<pre>${structuredResponse}</pre>`;
  }
};
