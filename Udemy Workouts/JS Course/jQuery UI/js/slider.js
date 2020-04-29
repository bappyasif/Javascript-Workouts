$(document).ready(function () {
  $("#slider").slider({
    min: 10,
    max: 10000,
    step: 200,
    range: true,
    change: function (event, ui) {
      //   console.log(ui.value);
      console.log(ui.values[0]);
      console.log(ui.values[1]);
    },
  });
});
