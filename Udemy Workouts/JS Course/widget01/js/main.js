$(document).ready(function () {
  $(".tab_header .item").click(function () {
    let tabOption = $(this).data("option");
    console.log(tabOption);

    $(".tab_header .item").removeClass("active");
    $(this).addClass("active");
    $(".tab_container p").remove();

    $(".tab_container .container_item").hide();
    $(`div[data-item=${tabOption}]`).show();
  });
});
