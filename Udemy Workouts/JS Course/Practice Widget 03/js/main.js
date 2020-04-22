$(document).ready(function () {
  function startOverlay(id) {
    // console.log(id);
    $(".overlay-veil").fadeTo("470", "0.8", function () {
      let element = $(`div[data-overlayItem=${id}]`);
      element.fadeIn("350");
      element.addClass("active");
    });
  }

  function closeAllOverlays() {
    $(".overlay-component").each(function () {
      if ($(this).hasClass("active")) {
        // $(".overlay-veil").fadeOut();
        $(this).fadeOut("350", function () {
          $(".overlay-veil").fadeOut();
          $(this).removeClass("active");
        });
      }
    });
  }

  $(".closeOverlay").on("click", function () {
    closeAllOverlays();
  });

  $(".overlay-item-click").on("click", function (event) {
    event.preventDefault();
    let overlayID = $(this).data("overlay");

    startOverlay(overlayID);
  });
});
