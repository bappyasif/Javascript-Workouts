$(document).ready(function () {
  $(".draggable").draggable();
  $(".droppable").droppable({
    accept: ".draggable",
    drop: function (event, ui) {
      //   console.log(ui.draggable.attr("class"));
      $(this).addClass("accepted");
    },
    out: function (event, ui) {
      $(this).removeClass("accepted");
    },
  });
});
