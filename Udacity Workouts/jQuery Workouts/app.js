/*
For this quiz, use a jQuery tag selector to grab all of the <li>s on the page!
*/

// Start with this variable! (don't delete it!)
var listElements;

listElements = $("li"); // your code goes here!
console.log(listElements);

/*
For this quiz, use a jQuery class selector to grab all of the elements of class 'article-item' on the page!
*/

// don't change this variable!
var articleItems;

articleItems = $(".article-item"); // your code goes here!
console.log(articleItems);

/*
For this quiz, use a jQuery class selector to grab all the element with id 'nav' on the page!
*/

// don't change this variable!
var nav;

nav = $("#nav"); // your code goes here!

/*
For this quiz, use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

// Start with these variable!
var articleList, h1, kids, parents;

articleList = $(".article-list");
// console.log(`::${articleList}::`);

h1 = articleList.siblings(); // Your code goes here!

kids = articleList.children(); // Your code goes here!

parents = articleList.parents(); // Your code goes here!

/*
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/

// don't change this variable!
var featuredArticle;

// featuredArticle = $(".article-item").toggleClass("featured", false); // your code starts here!
// featuredArticle = $(".featured");
// featuredArticle.toggleClass("featured");

// console.log($(".article-item featured").value);

/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

// your code goes here!

// article2 = $(".featured")
//   .toggleClass("featured")
//   .next()
//   .toggleClass("featured");

// article2 = $(".featured").toggleClass("featured");
// article3 = article2.next().toggleClass("featured");

article2 = $(".featured");
article3 = article2.next();
article2.toggleClass("featured");
article3.toggleClass("featured");

/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;

// navList = $(".nav-item").attr("a"); // your code goes here!
// console.log(navList);

// navList = $("li a").first().attr("href", "#01");
// console.log(navList);

navList = $(".nav-list");
let firstItem = navList.children().first();
let findLink = firstItem.find("a");
findLink.attr("href", "#1");

/*  
For this quiz, change the font-size of all the article-items to 20px!

You must use jQuery's css() method!
*/

// Start with this variable!
var articleItems;

articleItems = $(".article-item").css("fontSize", "20px"); // your code goes here!

/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/

$("#input").on("change", function () {
  var val;
  //   val = $(".articles h1").text($("input").val()); // Your code goes here!
  val = $("#input").val();
  let h1 = $(".articles").children("h1");
  h1.text(val);
});

/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

// articleItems = $(".bold").remove(); // your code goes here!
// articleItems = $(".bold").parent().remove(); // your code goes here!

articleItems = $(".article-list");
let ul = articleItems.find("ul");
// ul.remove();
ul.children().remove(".bold");

// Adding Elements
let firstArticleItem;
firstArticleItem = $(".article-list li").first();
// firstArticleItem = $(".article-list").first();
// firstArticleItem.append(`<p>Appended TEXT</p>`);
firstArticleItem.append(`<img src="http://placekitten.com/350/150">`);
firstArticleItem.prepend(`<img src="http://placekitten.com/350/150">`);

$(`<h4>Inserted After</h4>`).insertAfter(firstArticleItem);
$(`<h4>Inserted Before</h4>`).insertBefore(firstArticleItem);

/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
// let family1 = $("#family1");
// $(`<div id="family2"><h1>Family2</h1></div>`).insertAfter(family1);
// $(`<div id="bruce"><h2>Bruce</h2></div>`).insertAfter($("#family2 h1"));
// $(`<div id="madison"><h3>Madison</h3></div>`).insertAfter($("#bruce h2"));
// $(`<div id="hunter"><h3>Hunter</h3></div>`).insertAfter($("#bruce h2"));

let family1 = $("#family1");
let family2 = $(`<div id="family2"><h1>Family2</h1></div>`);
let bruce = $(`<div id="bruce"><h2>Bruce</h2></div>`);
let madison = $(`<div id="madison"><h3>Madison</h3></div>`);
let hunter = $(`<div id="hunter"><h3>Hunter</h3></div>`);

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);

/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// Your code goes here!
// $(".article-list li p").each(function (index) {
//   console.log($(this).text().length);
//   let length = $(this).text().length;
//   $(this).append(length);
// });

function numberAdder() {
  let text = $(this).text();
  let length = text.length;
  $(this).text(text + " :: " + length);
}

$("p").each(numberAdder);

/*
For this quiz, use jQuery to set up an event listener. Your event listener must:
    1. listen to the #my-button element
    2. listen for a `click` event
    3. perform the following actions when the button is clicked:
        a. remove the #my-button element from the DOM
        b. add the `success` class to the body
*/
let targetElement = $("#my-button");
targetElement.on("click", function (event) {
  // targetElement.parent().addClass("success");
  targetElement.remove();
  $("body").addClass("success");
  $("body").prepend(`<div class="success">jQuery Is Pretty Cool</div>`);
  //   $("body").text("jQuery Is Pretty Cool");
  // $(".success").css("color", "coral");
  $("body .success").css("color", "coral");
});

$(".article-list").on("click", function (event) {
  $(event.target).css("color", "cyan");
});

$("#myAnchor").on("click", function (event) {
  event.preventDefault();
  console.log("You clicked a link!");
  console.log("Key Code : " + event.keyCode);
  console.log("Event Type : " + event.type);
  console.log("node Name : " + event.target.nodeName);
});

$("body").on("click", ".articles ul", function (event) {
  $(evt.target).css("background", "red");
});

$(".articles").on("click", "ul li", function (event) {
  $(event.target).css("fontSize", "47px");
});
