$(document).ready(function () {
  let cardsLength = $(".cards_container .item").length;
  let currentSlide = 1;

  $(".current_slide").text(currentSlide);
  $(".total_slide").text(cardsLength);

  $(".cardSlider .btn_prev").click(function () {
    // console.log("Prev button");
    if (currentSlide > 1) {
      currentSlide -= 1;
      showSlide(currentSlide);
    } else {
      currentSlide = cardsLength;
      //   currentSlide = 1;
      showSlide(currentSlide);
    }
  });

  $(".cardSlider .btn_next").click(function () {
    // console.log("Next Button");
    if (currentSlide !== cardsLength) {
      currentSlide += 1;
      showSlide(currentSlide);
    } else {
      currentSlide = 1;
      showSlide(currentSlide);
    }
  });

  function showSlide(slideNumber) {
    $(".cards_container .item").removeClass("active");
    $(`div[data-id=${slideNumber}]`).addClass("active");
    $(".current_slide").text(slideNumber);
  }
});
