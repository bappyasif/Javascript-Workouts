$(document).ready(function () {
  $(".tab_header .item").on("click", function () {
    let tabNumber = $(this).data("option");
    console.log(tabNumber);

    $(".tab_header .item").removeClass("active");
    $(this).addClass("active");

    $(".tab_container .container_item").hide();
    $(`div[data-item="${tabNumber}"]`).show();
  });

  //   $(".tab_conatiner .container_item").click(function () {
  //     // let containerNumber = $(this).data("item");
  //     // console.log(containerNumber);
  //     // $(".tab_container .container_item").removeClass("active");
  //     $(this).removeClass("active");
  //     $(this).addClass("active");
  //   });
});
