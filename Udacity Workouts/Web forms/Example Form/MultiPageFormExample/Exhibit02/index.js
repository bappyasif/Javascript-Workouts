$("form.multi-form a.next").click(function () {
  $("fieldset.active")
    .removeClass("active")
    .next("fieldset")
    .addClass("active");
});

$("form.multi-form a.prev").click(function () {
  $("fieldset.active")
    .removeClass("active")
    .prev("fieldset")
    .addClass("active");
});
