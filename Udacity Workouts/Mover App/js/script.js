function loadData() {
  var $body = $("body");
  var $wikiElem = $("#wikipedia-links");
  var $nytHeaderElem = $("#nytimes-header");
  var $nytElem = $("#nytimes-articles");
  var $greeting = $("#greeting");

  // clear out old data before new request
  $wikiElem.text("");
  $nytElem.text("");

  // load streetview

  // YOUR CODE GOES HERE!
  let street = $("#street").val();
  let city = $("#city").val();
  let address = `${street}, ${city}`;
  console.log(address);
  //   console.log(street, city);
  let apiKey = `AIzaSyD-mwqP-ATJ01twa-YEQcAZwjdUgEDskhk`;
  let signature = `v0lqtVFMyjuatTSNMjHL4YM3RJg=`;
  //   //   let clientID = `Client ID
  //   //   1011932164996-32cna36ngh7on6reuu1jq68m9ipac3ur.apps.googleusercontent.com`;
  // let url = `https://maps.googleapis.com/maps/api/streetview?location=38dilkhusha,dhaka&size=456x456&key&key=${apiKey}&signature=${signature}`;
  // let url = `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=46.414382,10.013988&heading=151.78&pitch=-0.76&key=${apiKey}&signature=${signature}`;
  // let url = `https://maps.googleapis.com/maps/api/streetview?${address}`;
  //   $body.append(`<img class="bgimg" src="${url}">`);
  // $body.append(`<img class="bgimg" src=${url}>`);
  //   //   return false;
  // $.ajax(url).done((msg) => console.log(msg));

  // var gMapsUrl =
  //   "http://maps.googleapis.com/maps/api/streetview?size=600x400&location=";
  // var gMapsUrl = `http://maps.googleapis.com/maps/api/streetview?size=600x400&api=${apiKey}&signature=${signature}&location=`;
  // var streetStr = $("#street").val();
  // var cityStr = $("#city").val();
  // var address = streetStr + "," + cityStr;
  // $body.append('<img class="bgimg" src="' + gMapsUrl + address + '">');

  // let address = $street.val() + ", " + $city.val();
  $greeting.text("So, you want to live at " + address + "?");
  let streetviewUrl =
    "http://maps.googleapis.com/maps/api/streetview?size=600x300&location=" +
    address;

  let randomMap = "https://placeimg.com/600/900/nature";
  let imgHtml = '<img class= "bgimg" src="' + randomMap + '"/>';
  $body.append(imgHtml);

  // Tnyt Articles
  let tnytUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
  let tnytKey = "&api-key=wLtAT1AQpKxyeqYmCY7vROTIdkp8IZxm";

  let articlesearchUrl = tnytUrl + city + "&sort=newest" + tnytKey;
  $.getJSON(articlesearchUrl, function () {
    console.log("request Successfull");
  })
    .done((data) => {
      console.log(data);
      let articles = data.response.docs;
      console.log(articles.length);
      $nytHeaderElem.text("New York Times Articles About : " + city);
      let htmlContent = "";

      $.each(articles, function () {
        htmlContent = `
          <a href="${this.web_url}">${this.headline.main}</a>
          <p>${this.lead_paragraph}</p>
          <h5>${this.snippet}</h5>
          <h3>From ${this.source}</h3>
      `;
        $nytElem.append(`<li class="article">${htmlContent}</li>`);
      });
    })
    .error((error) => {
      $nytHeaderElem.text("New York Times Articles Could Not Be Loaded");
    });

  // Wikipedia Searches
  let wikiUrl =
    "https://en.wikipedia.org/w/api.php?action=opensearch&callback=wikiCallback";

  let wikiRequeestTimeout = setTimeout(() => {
    $wikiElem.text("Wikipedia Request Was Undone");
  }, 8000);
  $.ajax({
    url: wikiUrl,
    // crossDomain: true,
    dataType: "jsonp",
    // callback: wikiCallback,
    data: {
      search: city,
      format: "json",
      // "Access-Control-Allow-Origin": "*",
    },
    success: function (data) {
      console.log(data);
      let names = data[1];
      let links = data[3];
      let items = [];
      $.each(names, function (index, value) {
        items.push(`<li><a href="${links[index]}">${names[index]}</li>`);
      });
      $wikiElem.append(items.join(""));
      clearTimeout(wikiRequeestTimeout);
    },
  });
  // .done((data) => {
  //   console.log(data);
  // })
  // .error((error) => console.log("Somethnigs Wrong!!"));

  return false;
}

$("#form-container").submit(loadData);

// loadData();
