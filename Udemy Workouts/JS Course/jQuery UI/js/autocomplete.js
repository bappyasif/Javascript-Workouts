$(document).ready(function () {
  let list = ["Tesla", "Ford", "Chevy", "Honda"];
  $("#tags").autocomplete({
    source: list,
    minLength: 2,
  });
});
