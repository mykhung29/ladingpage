$(document).ready(function () {
  $(".slider-cmt").slick({
    dots: true,
    prevArrow: $(".next-btn"),
    nextArrow: $(".pre-btn"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          prevArrow: $(""),
          nextArrow: $(""),
        },
      },
    ],
  });
});
