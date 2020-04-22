let RockIt = {
  // server: "http://localhost:3004/email",

  init: function () {
    // console.log("Start Rocking!!");
    RockIt.mmenu();
    RockIt.headerScroll();
  },

  mmenu: function () {
    $("#menu").mmenu();
  },

  headerScroll: function () {
    let header = $(".header");
    // console.log($(window).scrollTop());

    // On Load
    if ($(window).scrollTop() >= 200) {
      header.toggleClass("active");
    }

    // On Scroll
    $(window).scroll(function () {
      //   console.log("Window Scrolling!!");
      if ($(window).scrollTop() >= 100) {
        header.addClass("active");
      } else {
        header.removeClass("active");
      }
    });
  },

  slider: function () {
    console.log("Slider Code");
    $(".slick_home").slick({
      prevArrow: $(".custom_prev"),
      nextArrow: $(".custom_next"),
    });

    // $(".slick_home").on("afterChange", function (
    //   event,
    //   slick,
    //   currentSlide,
    //   nextSlide
    // ) {
    //   console.log(currentSlide, slick);
    // });
  },

  homeAlbums: function () {
    $.getJSON("js/json/albums.json", function (data) {
      // console.log(data);
      let htmlTemplate = "";
      data.albums.forEach((element) => {
        htmlTemplate += `
            <li class="album_list_item">
            <div class="item_cover" style="background:url(images/bin/albums/${element.cover})"></div>
            <h4>${element.title}</h4>
            <span>${element.year}</span>
            <a href="${element.url}" target="_blank">Get This</a>
        </li>`;
      });
      // console.log(htmlTemplate);
      $(".home_albums_list").append(htmlTemplate);

      // Scroll Reveal
      ScrollReveal().reveal(".album_list_item", {
        delay: 560,
        distance: "56px",
        easing: "ease-in",
      });
    });
  },

  homeLoadEvents: function () {
    // console.log("Load Events");
    $.ajax({
      url: "http://localhost:3004/events",
      type: "GET",
      dataType: "json",
      success: function (res) {
        console.log(res);
        RockIt.homeEvents(res);
      },
      error: function (error) {
        console.log(error);
      },
    });
  },

  homeEvents: function (events) {
    let wrapper = $(".home_events_wrapper");
    let start = 0;
    let limit = 4;

    function createEvents() {
      let counter = 1;
      for (let i = start; i <= limit; i++) {
        // console.log(i);
        if (i <= events.length - 1) {
          let htmlTemplate = "";

          htmlTemplate += `
              <div class="event_item hidden element_${i}">
              <div>${events[i].date}</div>
              <div>${events[i].venue}</div>
              <div>${events[i].location}</div>
              `;
          if (events[i].status) {
            htmlTemplate += `<div class="available"><span>Available</span></div>`;
          } else {
            htmlTemplate += `<div class="available not"><span>Sold Out</span></div>`;
          }
          +`
              </div>
          `;

          // console.log(htmlTemplate);
          showEvents(htmlTemplate, counter, i);
          counter++;
        } else {
          $(".home_events_load_more_wrapper .btn").hide();
        }
      }

      // Next Wave Of Events
      start += 5;
      limit += 5;
    }

    function listenToLoad() {
      $(".home_events_load_more_wrapper .btn").on("click", function () {
        createEvents();
      });
    }

    listenToLoad();

    function showEvents(htmlTemplate, counter, index) {
      wrapper.append(htmlTemplate);

      setTimeout(() => {
        $(".element_" + index).removeClass("hidden");
      }, 290 * counter);
    }

    createEvents();
  },

  subscribeWidgetStart: function () {
    let wrapper = $(".subscribe_widget");
    let htmlTemplate = "";

    htmlTemplate += `
            <div class="subcribe_wrapper container">
                <div class="col">
                    <h3>Subscribe</h3>
                    <span>Sign Up For Newsletter</span>
                </div>
                <div class="col">
                    <div class="subscribe_input_wrapper">
                        <div>
                            <input type="text" id="subscribe_email">
                        </div>
                        <div>
                            <div class="btn">Subscribe</div>
                        </div>
                        <div class="error_wrapper"></div>
                        <div class="success_wrapper"></div>
                    </div>
                </div>
            </div>
    `;
    wrapper.append(htmlTemplate);
    RockIt.subscribeWidgetInputs();
  },

  subscribeWidgetInputs: function () {
    // let subscribeBUtton = $(".subscribe_input_wrapper .btn");
    let subscribeButton = $(".subscribe_widget .btn");

    subscribeButton.click(function () {
      let email = $("#subscribe_email");
      // console.log(email.val());

      if (validateEmail(email.val())) {
        checkUserEmailValidation(email.val());
        // console.log("Good");
      } else {
        showError("Somethings Wrong!!");
      }
    });

    function checkUserEmailValidation(email) {
      $.ajax({
        // url: RockIt.server,
        url: "http://localhost:3004/email?email_like=" + email,
        type: "GET",
        dataTyoe: "json",
        success: function (res) {
          // console.log(res);
          if (res.length <= 0) {
            addUserToEmail(email);
          } else {
            showError("This Email Already Exists");
          }
        },
      });
    }

    function addUserToEmail(email) {
      $.ajax({
        url: "http://localhost:3004/email",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({ email: email }),
        success: function (res) {
          // console.log(res);
          let success = $(".subscribe_widget .success_wrapper");
          $("#subscribe_email").val("");
          success.text("Thank You For Subscribing");
          setTimeout(() => {
            success.text("");
          }, 1100);
        },
      });
    }

    function showError(errorMessage) {
      let error = $(".subscribe_widget .error_wrapper");
      error.text(errorMessage);
      setTimeout(() => {
        error.text("");
      }, 1100);
    }

    function validateEmail(email) {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (email === "") {
        return false;
      }

      if (!regexEmail.test(email)) {
        return false;
      }

      return true;
    }
  },

  getRandomRumber: function (start, end) {
    return Math.floor(Math.random() * end) + start;
  },
  masonryConfig: [],
  masonryLimit: 5,
  masonryStartGallery: function (start, limit) {
    $.ajax({
      url: `http://localhost:3004/gallery?_start=${start}&_limit=${limit}`,
      type: "GET",
      success: function (res) {
        // console.log(res);
        RockIt.masonryRenderBlock(res);
        RockIt.masonryConfig = [start, limit];
        RockIt.masonryLimit = limit;
      },
    });
  },

  masonryRenderBlock: function (elements) {
    let wrapper = $(".gallery_masonry_grid");
    let htmlTemplate = "";

    elements.forEach(function (element) {
      htmlTemplate += `
          <div class="grid-item grid-height-${RockIt.getRandomRumber(
            1,
            5
          )}" style="background:url(images/gallery/${
        element.location_small
      })" data-image="${element.location}">
      <div></div>
          </div>
      `;
    });
    wrapper.append(htmlTemplate);
    wrapper.masonry({
      itemSelector: ".grid-item",
    });

    wrapper.oon("layoutComplete", RockIt.masonryAddBlock());
  },

  masonryAddBlock: function () {
    // console.log("Masonry Block");
    let loadButton = $(".masonry_load_more");

    loadButton.click(function () {
      let start = RockIt.masonryConfig[0] + RockIt.masonryConfig[1];
      loadButton.hide();

      $.ajax({
        url: `http://localhost:3004/gallery?_start=${start}&_limit=${RockIt.masonryLimit}`,
        type: "GET",
        success: function (res) {
          // console.log(res);
          RockIt.masonryConfig = [start, RockIt.masonryLimit];
          addNewBlock(res, loadButton);
        },
      });
    });

    function addNewBlock(elements, btn) {
      let wrapper = $(".gallery_masonry_grid");
      let htmlTemplate = "";

      elements.forEach(function (element) {
        htmlTemplate += `
            <div class="grid-item grid-height-${RockIt.getRandomRumber(
              1,
              5
            )}" style="background:url(images/gallery/${
          element.location_small
        })" data-image="${element.location}">
        <div></div>
            </div>
        `;
      });
      // Append And Reload Masonry
      let $box = $(htmlTemplate);
      wrapper.append($box).masonry("appended", box);

      if (elements.length === RockIt.masonryLimit) {
        btn.show();
      }
    }
  },

  contactForm: function () {
    // console.log("Contact Form");
    $("#contact_form").validate({
      rules: {
        contact_message: {
          required: true,
          minlength: 20,
        },
        contact_name: {
          maxlength: 110,
          required: true,
        },
        contact_email: {
          required: true,
          email: true,
        },
      },
      messages: {
        contact_message: {
          required: "Sorry, this field is required",
          minlength: "Less than 20 characters, really??",
        },
        contact_name: {
          required: "Sorry, this field is required",
          maxlength: "Sorry, only 100 characters",
        },
        contact_email: {
          required: "Sorry, this field is required",
          email: "This must be a valid email address.",
        },
      },
      submitHandler: function (form) {
        // console.log("Valid Form");
        let contact = {
          message: $("#contact_message").val(),
          name: $("#contact_name").val(),
          email: $("#contact_email").val(),
        };
        // console.log(contact);
        $.ajax({
          url: "http://localhost:3004/email",
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          data: JSON.stringify(contact),
          success: function (res) {
            // console.log(res);
            let element = $("#contact_form");
            let success = element.find(".success");

            element.find("input, textarea").val("");
            success.text("Thank you, we will check  this out soon");

            setTimeout(() => {
              success.text("");
            }, 1100);
          },
        });
      },
    });
  },
};

$(function () {
  RockIt.init();
});
