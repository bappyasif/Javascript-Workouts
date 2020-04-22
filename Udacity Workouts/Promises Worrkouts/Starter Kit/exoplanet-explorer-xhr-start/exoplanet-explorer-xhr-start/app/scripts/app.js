/*
Instructions:
(1) Wrap an XHR in a Promise in the get() function below. See: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
  (a) Resolve on load and reject on error.
(2) If the XHR resolves, use addSearchHeader to add the search header to the page.
(3) If the XHR fails, console.log the error and pass 'unknown' to addSearchHeader
 */

// Inline configuration for jshint below. Prevents `gulp jshint` from failing with quiz starter code.
/* jshint unused: false */

(function(document) {
  "use strict";

  var home = null;

  /**
   * Helper function to show the search query.
   * @param {String} response - The unparsed JSON response from get.
   */
  function addSearchHeader(response) {
    try {
      response = JSON.parse(response).query; // you'll be moving this line out of here in the next quiz!
    } catch (e) {
      // it's 'unknown', so leave it alone
    }
    home.innerHTML = '<h2 class="page-title">query: ' + response + "</h2>";
  }

  /**
   * XHR wrapped in a promise.
   * @param  {String} url - The URL to fetch.
   * @return {Promise}    - A Promise that resolves when the XHR succeeds and fails otherwise.
   */
  function get(url) {
    return fetch(url, {
      method: "GET"
    });
  }

  function getJSON(url) {
    console.log("sent : " + url);
    return get(url).then(response => {
      if (url === "data/planets/kepler-62f.json") {
        return new Promise(resolve => {
          setTimeout(() => {
            console.log("recieved : " + url);
            resolve(response.json());
          }, 1000);
        });
      } else {
        console.log("recieved : " + url);
        return response.json();
      }
    });
  }

  function createPlanetThumb(data) {
    return new Promise(resolve => {
      let planet = document.createElement("planet-thumb");
      for (let content in data) {
        planet[content] = data[content];
      }
      home.appendChild(planet);
      console.log(data.pl_name);
      resolve();
    });
  }

  window.addEventListener("WebComponentsReady", function() {
    home = document.querySelector('section[data-route="home"]');
    /*
    Uncomment the next line you're ready to start chaining and testing!
    You'll need to add a .then and a .catch. Pass the response to addSearchHeader on resolve or
    pass 'unknown' to addSearchHeader if it rejects.
     */

    /**
      This is a three step process: BONUS EXCERCISE

      Create an array of network requests that are executing in parallel.
      Attach a Promisified version of createPlanetThumb to each request in order to render thumbnails.
      Create a sequence of Promises, each of which is a request and thumbnail rendering. I imagine it like this (each '-->' is a .then):
      [ (request --> render) --> (request --> render) --> (request --> render) --> ... ]
      
      .map takes care of the parallel requests part and .forEach chains the 
      requests into a sequence.

      */

    // get("../data/earth-like-results.json");
    getJSON("../data/earth-like-results.json")
      .then(response => {
        console.log(response.results);
        addSearchHeader(response.query);
        return response;
      })
      .then(response => {
        let sequence = Promise.resolve();
        let arrayOfExecutingPromises = response.results.map(result => {
          return getJSON(result);
        });
        arrayOfExecutingPromises.forEach(request => {
          sequence = sequence.then(() => {
            return request.then(data => {
              createPlanetThumb(data);
            });
          });
        });

        // return Promise.all(arrayOfExecutingPromises).then(data => {
        //   sequence = sequence.then(() => {
        //     createPlanetThumb(data);
        //   });
        // });
      });
  });
})(document);
