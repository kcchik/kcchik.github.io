$(function() {

  $(".header-image").animate({
    opacity: 1
  }, 1500);

  $(".work-link").on({
    mouseenter: function() {
      $(this).find(".work-hover").css("opacity", "0.2");
    },
    mouseleave: function() {
      $(this).find(".work-hover").css("opacity", "0");
    }
  });

});
