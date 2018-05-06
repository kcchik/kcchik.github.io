$(function() {

  $(".header").animate({
    opacity: 1
  }, 1500);

  $(".work-link").on({
    mouseenter: function() {
      $(this).find(".work-img").css("opacity", "0.7");
    },
    mouseleave: function() {
      $(this).find(".work-img").css("opacity", "1");
    }
  });

});
