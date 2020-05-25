$(document).ready(function () {
  // Animate More Info Button
  $(".item_container").on("click", ".info_link", function (event) {
    // console.log("clicking..");
    event.preventDefault();
    $(this).parent().find(".more_info").fadeToggle();

    // Little Animation
    $(this)
      .animate({ opacity: 0.8, "margin-left": 20 }, "fast")
      .animate({ opacity: 1, "margin-left": 0 }, "fast");
  });

  // Remove Item
  $(".item_container").on("click", ".item_remove", function () {
    // $(this).css({ "background-color": "transparent" });
    $(this).parent().remove();
    if (!$(this).children().length) {
      $(".item_container").css({ "background-color": "transparent" });
    }
    // $(".item_container").css({ "background-color": "transparent" });
  });

  // Newsletter Checkbox
  $("#newsletter_checkbox").on("change", function () {
    if ($(this).is(":checked")) {
      $("#newsletter_frequency").fadeIn();
    } else {
      $("#newsletter_frequency").fadeOut();
    }
  });
  //   $("#newsletter_checkbox").trigger("change");

  // Form Submit
  //   $("#submit_cart").on("click", function (event) {
  //     event.preventDefault();
  //   });
  $("#cart_form").on("submit", function (event) {
    event.preventDefault();
    $("#feedback_message").text("Success");
    setTimeout(() => {
      $("#feedback_message").text("");
    }, 1100);
    //   $("#feedback_message").delay(800).fadeOut(300);
  });
});

// Adding Dynamically Through JSON
$(function () {
  $.ajax("data/item.json", {
    dataTye: "json",
    contentType: "appilication/json",
    cache: false,
  })
    .done((response) => {
      // console.log(response);
      // console.log(response.items.length);
      response.items.forEach((item) => {
        //   console.log(item);
        addItem(
          item.id,
          item.name,
          item.description,
          item.price,
          item["More Info"],
          item.src
        );
      });
    })
    .fail((errorMessage) => console.log(errorMessage))
    .always(() => console.log("Done.."));

  function addItem(id, name, description, price, moreInfo, image) {
    let htmlTemplate = "";
    htmlTemplate += `
    <div class="store_item" data-id="${id}">
      <div class="item_name">${name}</div>
      <img src=${image} />
      <div class="item_desc">${description}</div>
      <div class="item_price">${price}</div>
      <button class="item_add">Add To Cart</button>
      <button class="item_remove">Remove</button>
      <br />
      <a href="#" class="info_link">More Info</a>
      <div class="more_info">${moreInfo}</div>
    </div>
      `;
    $(".item_container").prepend(htmlTemplate);
  }

  // Add To Cart Functionality
  let cart = 0;
  $(".item_container").on("click", ".item_add", function () {
    let id = $(this).parent().data("id");
    // console.log(id);
    $.ajax("data/addToCart.json", {
      type: "GET",
      dataTye: "json",
      contentType: "application/json",
    }).done((response) => {
      // console.log(response);
      cart += response.price;
      $(".cart_container").text("Current Total : $" + cart);
      $(".cart_container")
        .animate({ "margin-left": 110 }, "fast")
        .animate({ "margin-left": 0 }, "fast")
        .animate({ "font-size": 65 }, "fast")
        .animate({ "font-size": 20 }, "fast");
    });
  });
});
