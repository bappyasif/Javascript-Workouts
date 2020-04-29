// jQuery Basics
$(document).ready(function () {
  console.log("Good Going");
  //   console.log(document);
  //   console.log($(document));

  //   $("body").text("Work Work");
  //   $("body").append("Work Work");
  //   $("body").html("<strong>Work Work</strong>");

  $("#fire").addClass("highlight");
  //   $(".solid").addClass("highlight");
  //   $(".solid, .non_solid").addClass("highlight");
  $("#container .solid").addClass("highlight");
  $("#container >>> .non_solid").addClass("highlight");
});

$(function () {
  //   $("#containerDiv input").addClass("highlightContainerDiv");
  //   $("#containerDiv input:required").addClass("highlightContainerDiv");
  $(`#containerDiv input[placeholder="Last Name"]`).addClass(
    "highlightContainerDiv"
  );
  $("#containerDiv input[placeholder*=Name]").addClass("highlightContainerDiv");
});

$(function () {
  console.log($("#findContainer").find(".hot"));
  console.log($("#findContainer").find(".hot").children());
  console.log($("#findContainer").find(".hot").children(".not_solid"));

  $("#findContainer").find(".hot").children().first().addClass("itemHighlight");

  $("#findContainer").find(".hot").children().last().addClass("itemHighlight");

  //   $("#findContainer")
  //     .find(".hot")
  //     .children(".not_solid")
  //     .addClass("itemHighlight");

  //   $("#findContainer")
  //     .find(".cold")
  //     .children(".quite_solid")
  //     .addClass("itemHighlight");

  $("#findContainer")
    .find(".cold")
    .children()
    .first()
    .next()
    .addClass("itemHighlight");

  $("#findContainer")
    .find(".cold")
    .children()
    .last()
    .prev()
    .addClass("itemHighlight");

  $("#snow").parent().addClass("itemHighlight");
  $("#snow").parents(".cold").addClass("itemHighlight");
});

$(function () {
  //   $("#findContainer02").parents("#snowDiv").addClass("itemHighlight");
  //   $("#snowDiv").parent().find(".title").addClass("itemHighlight");

  $("#snowDiv").parents(".cold").find(".title").addClass("itemHighlight");
  $("#lava").closest(".temperature").addClass("itemHIghlight");
});

$(function () {
  //   $(".box").on("click", function () {
  //     // $(this).addClass("boxHighlight");
  //     $(event.target).toggleClass("boxHighlight");
  //   });

  $(".box").on("click", ".box_button", function () {
    // $(this).addClass("boxHighlight");
    $(event.target).parent().toggleClass("boxHighlight");
  });
});

$(function () {
  $("#select_menu").on("change", function () {
    // console.log($(this).find("option").val());
    console.log($(this).find("option:selected").val());
    console.log($("#select_menu option:selected").val());
    console.log($(this).find("option:selected").text());

    let name = $(this).find("option:selected").text();
    let distance = $("#select_menu option:selected").val();
    let price = $("#select_menu option:selected").data("price");
    // console.log(price);

    if (distance) {
      $("#feedback_message").text(`You Are Signing Up For A ${name} Race 
    Which Costs ${price} To A Distance Of ${distance} KM`);
    } else {
      //   $("#feedback_message").text("");
      $("#feedback_message").empty();
    }
  });
});

$(function () {
  $("#name").on("keydown", function () {
    // console.log("Press!!");
    let name = $(this).val();
    $("#feedback_message").text("Greetings " + name);
  });

  $("#name").on("keyup", function () {
    // console.log("Press!!");
    let name = $(this).val();
    $("#feedback_message02").text("Greetings " + name);
  });

  $("a").on("click", function (event) {
    event.preventDefault();
    $("#feedback_message02").text("That Is Fine Stranger");
  });
});

// Simple Store
$(function () {
  // Clearing Working Browser Window
  $(".jQuery_basics").remove();

  // Commencing Simple Store App

  // Manually Adding
  $("#button_create_item").on("click", function () {
    // let name = $("#input_create_item").val();
    // // console.log(name);
    // $("#input_create_item").val("");
    //   let htmlTemplate = "";
    //   htmlTemplate += `
    //   <div class="item">
    //   <div class="name">${name}</div>
    //   <img src="assets/pics/02.jpg" alt="" />
    //   <div class="description">
    //     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, odio.
    //     Dicta cupiditate provident impedit soluta ratione atque nostrum
    //     necessitatibus, pariatur in deleniti nam, doloribus, omnis fugit
    //     reiciendis modi possimus tempore?
    //   </div>
    //   <div class="price">466</div>
    //   <button class="item_add">Add To Cart</button>
    //   <button class="item_remove">Remove</button>
    //   <br />
    //   <a href="#" class="more_info_link">More Info</a>
    //   <div class="more_info">Lorem ipsum dolor sit amet</div>
    // </div>
    //   `;
    //   // $("#container").append(htmlTemplate);
    //   $("#container").prepend(htmlTemplate);
  });

  // Remove Items Without Deligation
  // $("#container .item_remove").on("click", function () {
  //   // console.log("....");
  //   $(this).parent().remove();
  // });
  // Remove Items With Deligation Which Works On Newly Added Items.
  $("#container").on("click", ".item_remove", function () {
    // console.log("....");
    $(this).parent().remove();
  });

  // More Info Show / Hide
  $("#container").on("click", ".more_info_link", function (event) {
    event.preventDefault();
    // $(this).parent().find(".more_info").show();
    // $(this).parent().find(".more_info").hide();
    // $(this).parent().find(".more_info").toggle();
    // $(this).parent().find(".more_info").toggle(380);
    // $(this).parent().find(".more_info").toggle("fast");
    // $(this).parent().find(".more_info").fadeIn("slow");
    // $(this).parent().find(".more_info").fadeOut("slow");
    // $(this).parent().find(".more_info").fadeToggle("fast");
    $(this).parent().find(".more_info").slideToggle("slow");

    // Animate More Info Element Using Css Tags With Numerical Values.
    $(this)
      .animate({ opacity: 0.5, "margin-left": 10 }, "fast")
      .animate({ opacity: 1, "margin-left": 0 }, "fast");
  });
});

$(function () {
  // $.ajax("data/item.json", function (response) {
  //   console.log(response);
  // });

  $.ajax("data/item.json", {
    dataType: "json",
    contentType: "application/json",
    cache: false,
  })
    .done(function (response) {
      console.log(response);
      let items = response.items;
      console.log(items.length);
      items.forEach((item) => {
        console.log(item);
        addItem(
          item.id,
          item.name,
          item.description,
          item.price,
          item.moreInfo
        );
      });
    })
    .fail(function (request, errorType, errorMessage) {
      console.log(errorMessage);
    })
    .always(function () {
      console.log("Done");
    });

  let cart = 0;

  // Adding Dynamically
  function addItem(id, name, description, price, moreInfo) {
    let htmlTemplate = "";
    htmlTemplate += `
      <div class="item" data-id="${id}">
      <div class="name">${name}</div>
      <img src="assets/pics/02.jpg" alt="" />
      <div class="description">${description}
      </div>
      <div class="price">${price}</div>
      <button class="item_add">Add To Cart</button>
      <button class="item_remove">Remove</button>
      <br />
      <a href="#" class="more_info_link">More Info</a>
      <div class="more_info">${moreInfo}</div>
    </div>
      `;
    // $("#container").append(htmlTemplate);
    $("#container").prepend(htmlTemplate);
  }

  // Addo To Cart Functionality
  $("#container").on("click", ".item_add", function () {
    let id = $(this).parent().data("id");
    console.log(id);
    $.ajax(" http://localhost:3000/posts", {
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({ id: id }),
    }).done(function (response) {
      // console.log(response);
      if (response.message === "success") {
        let price = response.price;
        cart += price;
        console.log(price);
        $(".cart_container").text("$" + cart);
      }
    });

    // $.ajax("http://localhost:3000/posts", {
    //   type: "POST",
    //   dataType: "json",
    //   contentType: "application/json",
    //   data: {},
    // }).done(function (response) {
    //   console.log(response.message);
    // });
  });
});

// Adding Dynamically
// $(function () {
//   function addItem(name, description, price, moreInfo) {
//     let htmlTemplate = "";
//     htmlTemplate += `
//     <div class="item">
//     <div class="name">${name}</div>
//     <img src="assets/pics/02.jpg" alt="" />
//     <div class="description">${description}
//     </div>
//     <div class="price">${price}</div>
//     <button class="item_add">Add To Cart</button>
//     <button class="item_remove">Remove</button>
//     <br />
//     <a href="#" class="more_info_link">More Info</a>
//     <div class="more_info">${moreInfo}</div>
//   </div>
//     `;
//     // $("#container").append(htmlTemplate);
//     $("#container").prepend(htmlTemplate);
//   }
// });
