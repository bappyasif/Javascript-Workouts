$(document).ready(function () {
  $("#selectable").selectable({
    filter: ".available",
    selected: function (event, ui) {
      console.log(ui.selected.innerText);
    },
  });
});
