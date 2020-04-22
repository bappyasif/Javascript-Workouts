$(document).ready(function () {
  function startOverlay(id) {
    // console.log(id);
    $(".overlay-veil").fadeTo("1100", "0.85", function () {
      let overlayElement = $(`div[data-overlayItem=${id}]`);
      overlayElement.fadeIn("650");
      overlayElement.addClass("active");
    });
  }

  function closeAllOverlayElemnts() {
    $(".overlay-component").each(function () {
      if ($(this).hasClass("active")) {
        // $(".overlay-veil").fadeOut("580");
        $(this).fadeOut("560", function () {
          $(".overlay-veil").fadeOut();
          $(this).removeClass("active");
        });
      }
    });
  }

  $(".closeOverlay").click(function () {
    closeAllOverlayElemnts();
  });

  $(".overlay-item-click").click(function (event) {
    event.preventDefault();
    let overlayID = $(this).data("overlay");
    // console.log(overlayID);
    startOverlay(overlayID);
  });
});
