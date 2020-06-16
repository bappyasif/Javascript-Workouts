$("section.form a.next").click(function () {
  console.log("....");
  $("fieldset.active")
    .removeClass("active")
    .next("fieldset")
    .addClass("active");
  radioButtons();
});

$("section.form a.prev").click(function () {
  $("fieldset.active")
    .removeClass("active")
    .prev("fieldset")
    .addClass("active");
  prevButton();
});

function radioButtons() {
  console.log("..????..");

  let buttons = $("section.form input:radio");
  let selectedIndex = buttons.index(buttons.filter(":checked"));
  selectedIndex += 2;
  $('.form input[type="radio"]:nth-of-type(' + selectedIndex + ")").prop(
    "checked",
    true
  );

  // console.log($("section.form input:radio").prop("checked", true));
  // var radioButtons = $("section.form input:radio:checked");
  // console.log(radioButtons);
  // radioButtons.prop("checked", false);

  // let buttons = $("section.form input:radio");
  // for (let i = 0; i < buttons.length; i++) {
  //   // $("section.form input:radio"[i]).prop("checked", true);
  //   buttons[i].prop("checked", true);
  // }
  // $("section.form input:radio"[1]).prop("checked", true);
  // console.log(radioButtons.index($("section.form input:radio")));
  // let checkedIndex = radioButtons.index($("section.form input:radio"));
  // console.log(checkedIndex);
  // checkedIndex++;
  // console.log(checkedIndex);
  // radioButtons.index($("section.form input:radio")).prop("checked", true);

  // radioButtons.prop("checked", false);
  // $('section.form input[type="radio"]:nth-of-type(' + checkedIndex + ")").prop(
  //   "checked",
  //   true
  // );
  // radioButtons.is("checked", false);
  // var selectedIndex = radioButtons.index(radioButtons.filter(":checked"));
  // var selectedIndex = radioButtons.index(radioButtons.prop("checked", true));
  // console.log(selectedIndex);
  // selectedIndex = selectedIndex + 1;
  // console.log(selectedIndex);

  // $("section.form input:radio")
  // $('section.form input[type="radio"]:nth-of-type(' + selectedIndex + ")").prop(
  //   "checked",
  //   true
  // );
}

function prevButton() {
  let buttons = $("section.form input:radio");
  let selectedIndex = buttons.index(buttons.filter(":checked"));
  // selectedIndex += 2;
  $('.form input[type="radio"]:nth-of-type(' + selectedIndex + ")").prop(
    "checked",
    true
  );
}
