function loadData() {
  var $body = $("body");
  var $wikiElem = $("#wikipedia-links");
  var $nytHeaderElem = $("#nytimes-header");
  var $nytElem = $("#nytimes-articles");
  var $greeting = $("#greeting");

  // clear out old data before new request
  $wikiElem.text("");
  $nytElem.text("");

  var streetStr = $("#street").val();
  var cityStr = $("#city").val();
  var address = streetStr + ", " + cityStr;

  $greeting.text("So, you want to live at " + address + "?");

  // load streetview
  var streetviewUrl =
    "http://maps.googleapis.com/maps/api/streetview?size=600x400&location=" +
    address +
    "";
  $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

  // load nytimes

  // YOUR CODE GOES HERE!
  let tnytUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
  //   tnytUrl +=
  //     "?" +
  //     $.param({
  //       "api-key": "wLtAT1AQpKxyeqYmCY7vROTIdkp8IZxm",
  //       glocations: `${cityStr}`,
  //       page: 0,
  //     });
  let tntyKey = "&api-key=wLtAT1AQpKxyeqYmCY7vROTIdkp8IZxm";
  let articleSearchUrl = tnytUrl + cityStr + "$sort=newset" + tntyKey;

  //   $.getJSON(tnytUrl, function (data) {
  //     console.log(data);
  //   });
  $.getJSON(articleSearchUrl)
    .done(function (data) {
      console.log(data);
      $nytHeaderElem.text("New York Times Articles About : " + cityStr);
      let articles = data.response.docs;
      $.each(articles, function () {
        let articleLink = `<a href="${this.web_url}">${this.headline.main}</a>`;
        let articleLead = `<p>${this.lead_paragraph}</p>`;
        let articleSnippet = `<p>${this.snippet}</p>`;
        let articleSource = `<h4>${this.source}</h4>`;
        $nytElem.append(`<li class="article">${articleLink}
                ${articleLead}
                ${articleSnippet}
                ${articleSource}
        </li>`);
      });
    })
    .error((error) => {
      $nytHeaderElem.text("New York Times Articles Could Not Be Loaded");
    });

  // let wikiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&callback=wikiCallback`;
  let wikiRequestTimeout = setTimeout(function () {
    $wikiElem.text("Wikipedia Request Was Undone");
  }, 8000);

  let wikiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch`;
  $.ajax({
    url: wikiUrl,
    dataType: "jsonp",
    data: {
      search: cityStr,
      format: "json",
    },
    success: function (data) {
      console.log(data);
      let names = data[1];
      let links = data[3];
      let items = [];
      $.each(links, function (index, value) {
        items.push(`<li><a href="${value}">${names[index]}</li>`);
      });
      // $.each(names, function (index) {
      //   items.push(`<li><a href="${links[index]}">${names[index]}</li>`);
      // });
      $wikiElem.append(items.join(""));
      clearTimeout(wikiRequestTimeout);
    },
  });
  // let request = $.ajax({
  //   url: wikiUrl,
  //   method: "GET",
  //   dataType: "jsonp",
  //   // "Access-Control-Allow-Origin": true,
  //   // jsonp: true,
  //   // jsonpCallback: getWiki,
  // });

  // request.done((data) => console.log(JSON.parse(data)));

  // function getWiki(jsonResponse) {
  //   console.log(jsonResponse);
  // }

  return false;
}

$("#form-container").submit(loadData);
