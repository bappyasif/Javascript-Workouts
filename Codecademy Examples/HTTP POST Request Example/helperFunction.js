// Rendering ResponseField To Display Url Shortened Response Link
let renderResponse = res => {
  // Validation Check For Errors
  if (res.errors) {
    responseField.innerHTML = `<p>Sorry, couldn't format your URL.</p>
        <p>Try again.</p>`;
  } else {
    responseField.innerHTML = `<p>Your Shortened URL Link Is : </p> <b> ${res.shortUrl}</b>`;
  }
};

// Rendering Response Another Way
let renderShortenUrl = res => {
  if (res.errors) {
    responseField.innerHTML = `<p>Sorry, couldn't format your URL.</p>
        <p>Try again.</p>`;
  } else {
    let structuredResponse = JSON.stringify(res).replace(/,/g, ", \n");
    structuredResponse = `<pre>${structuredResponse}</pre>`;
    responseField.innerHTML = `<p>Your Complete Shortened Url Response Is : </p>
        <b>${structuredResponse}</b>`;
  }
};

// Rendering Few URL Response
let renderSome = res => {
  if (res.errors) {
    responseField.innerHTML = `<p>Sorry, couldn't format your URL.</p>
        <p><b>Try again.</b></p>`;
  } else {
    responseField.innerHTML = `<p>Your Shortened URL Is : </p><b>${res.shortUrl}</b> 
        <p>Your Url Status Is : </p><i>${res.status}</i>`;
  }
};
