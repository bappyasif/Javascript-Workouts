$(document).ready(function () {
  $(document).click(function () {
    $(".button").addClass("otherButton", 1100, function () {
      $(this).removeClass("otherButton", 1100);
      console.log("done");
    });
  });

  $(document).click(function () {
    $(".button2").effect("pulsate", 1100, function () {
      console.log("done");
    });
  });

  $(document).click(function () {
    $(".button23").switchClass("button23", "otherButton2", 1100);
  });

  $(document).click(function () {
    $(".otherButton2").toggle("explode", 1100, function () {
      console.log("done..");
    });
  });

  $(document).click(function () {
    $(".otherButton").toggleClass("otherButton2", 1100, function () {
      console.log("done");
    });
  });
});
