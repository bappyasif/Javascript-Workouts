$(document).ready(function () {
  $(".dialog").dialog({
    title: "Dialog Widget",
    click: function () {
      $(this).dialog("close");
    },
  });

  //   $("ui-spinner").spinner();
  $("#spinner").spinner({
    icons: { down: "ui-icon-triangle-1-s", up: "custom-up-icon" },
    max: 11,
    min: 0,
    step: 2,
    disabled: false,
  });
});
