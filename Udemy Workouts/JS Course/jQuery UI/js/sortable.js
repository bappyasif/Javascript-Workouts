$(document).ready(function () {
  $("#sortable").sortable();
  $(".trigger").click(function () {
    let list = $("#sortable").sortable("toArray");
    console.log(list);
  });
});
