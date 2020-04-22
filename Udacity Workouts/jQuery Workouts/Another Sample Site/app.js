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
  //   $(".success").css("color", "coral");
  $("body .success").css("color", "coral");
  console.log(event);
});

$(".articles ul").on("click", function (evt) {
  $(evt.target).css("color", "cyan");
});

$("#myAnchor").on("click", function (evt) {
  evt.preventDefault();
  console.log("You clicked a link!");
  console.log("Key Code : " + evt.keyCode);
  console.log("Event Type : " + evt.type);
  console.log("node Name : " + evt.target.nodeName);
  console.log("Which Event : " + evt.which);
});

$("body").on("click", ".articles ul", function (evt) {
  $(evt.target).css("background", "red");
});

$(".articles").on("click", "ul li", function (evt) {
  $(evt.target).css("fontSize", "47px");
});
