$(document).ready(function () {
  //   $(".draggable").draggable();
  $(".draggable").draggable({
    // axis: "x",
    cancel: ".not_this",
    // containment: "parent",
    containment: ".draggable_container",
    grid: [62, 17],
    handle: ".handle",
    opacity: "0.47",
    drag: function (event, ui) {
      console.log(ui.position);
    },
  });
});
