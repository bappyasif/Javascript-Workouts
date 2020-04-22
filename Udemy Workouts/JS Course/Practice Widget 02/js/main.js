$(document).ready(function () {
  //   setTimeout(() => {
  //     showSlide(2);
  //   }, 2000);

  let itemsLength = $(".cards_container .item").length;
  let currentSlide = 1;
  //   console.log(itemsLength);

  $(".total_slide").text(itemsLength);
  $(".current_slide").text(currentSlide);

  $(".cardSlider .btn_prev").on("click", function () {
    // console.log("Prev Button");
    if (currentSlide > 1) {
      currentSlide -= 1;
      showSlide(currentSlide);
    } else {
      currentSlide = itemsLength;
      showSlide(currentSlide);
    }
  });

  $(".cardSlider .btn_next").on("click", function () {
    // console.log("Next Button");
    if (currentSlide !== itemsLength) {
      currentSlide += 1;
      showSlide(currentSlide);
    } else {
      currentSlide = 1;
      showSlide(currentSlide);
    }
  });

  function showSlide(slidenumber) {
    $(".cards_container .item").removeClass("active");
    $(`div[data-id=${slidenumber}]`).addClass("active");
    $(".current_slide").text(slidenumber);
  }
});
