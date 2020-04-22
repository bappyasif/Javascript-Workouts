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
  var $street = $("#street");
  var $city = $("#city");
  let city = $("#city");
  var address = $street.val() + ", " + $city.val();
  $greeting.text("So, you want to live at " + address + "?");

  let streetviewUrl =
    "http://maps.googleapis.com/maps/api/streetview?size=600x400&key=AIzaSyDD0kimuU42vNiVMd8vjLhsSQJOwW1-bzk&signature=BJQYn6nOKyUeeMgg9rhWOGkdR4c=&location=" +
    address +
    "";
  $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

  let tnytUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
  let tnytKey = "&api-key=wLtAT1AQpKxyeqYmCY7vROTIdkp8IZxm";
  let articlesearchUrl = tnytUrl + city + "&sort=newest" + tnytKey;

  $.getJSON(articlesearchUrl)
    .done((data) => {
      console.log(data);
      $nytHeaderElem.text("New York Times Articles About : " + city);
      let articles = data.response.docs;
      let htmlContent = "";
      $.each(articles, function () {
        htmlContent = `
          <a href="${this.web_url}">${this.headline.main}</a>
          <h4>${this.snippet}</h4>
          <p>${this.lead_paragraph}</p>
          <h6>${this.source}</h6>
      `;
        $nytElem.append(`<li class="article">${htmlContent}</li>`);
        // debugger;
      });
    })
    .error((error) => {
      $nytHeaderElem.text("New York Times Articles Could Not Be Loaded");
    });

  // let wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch";
  // $.ajax({
  //   url: wikiUrl,
  //   // crossOrigin: true,
  //   dataType: "jsonp",
  //   data: {
  //     search: city,
  //     format: "json",
  //   },
  //   success: function (data) {
  //     console.log(data);
  //   },
  // });

  let wikiUrl =
    "http://en.wikipedia.org/w/api.php?action=opensearch&callback=wikiCallback";
  $.ajax({
    url: wikiUrl,
    dataType: "jsonp",
    // callback: wikiCallback,
    // method: "GET",
    // crossDomain: true,
    // crossOrigin: true,
    data: {
      search: city,
      format: "json",
    },
    success: function (data) {
      console.log(data);
    },
  });

  // let wikiRequestTimeout = setTimeout(() => {
  //   $wikiElem.text("Wikipedia Request Was Undone");
  // }, 8000);
  // let wikiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&callback=wikiCallback`;
  // $.ajax({
  //   url: wikiUrl,
  //   dataType: "jsonp",
  //   data: {
  //     search: city,
  //     format: "json",
  //   },
  //   success: function (data) {
  //     console.log(data);
  //     let names = data[1];
  //     let links = data[3];
  //     let items = [];
  //     $.each(links, function (index, value) {
  //       items.push(`<li><a href="${value}">${names[index]}</li>`);
  //     });
  //     // $.each(names, function (index) {
  //     //   items.push(`<li><a href="${links[index]}">${names[index]}</li>`);
  //     // });
  //     $wikiElem.append(items.join(""));
  //     clearTimeout(wikiRequestTimeout);
  //   },
  // });

  // let wikiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&callback=wikiCallback`;
  // $.ajax({
  //   url: wikiUrl,
  //   dataType: "jsonp",
  //   data: {
  //     search: $city,
  //     format: "json",
  //   },
  //   success: function (data) {
  //     console.log(data);
  //     let names = data[1];
  //     let links = data[3];
  //     let items = [];
  //     $.each(links, function (index, value) {
  //       items.push(`<li><a href="${value}">${names[index]}</a></li>`);
  //     });
  //     $wikiElem.append(items.join(""));
  //     clearTimeout(wikiRequestTimeout);
  //   },
  // });

  return false;
}
$("#form-container").submit(loadData);
