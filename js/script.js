$(function() {

  $(".header").animate({
    opacity: 1,
  }, 1500);

  $("#resume").on({
    mouseenter: function() {
      $(".popup").animate({
        bottom: "0"
      }, 150);
    },
    mouseleave: function() {
      $(".popup").animate({
        bottom: "-250px"
      }, 150);
    }
  });

  $(".work-link").on({
    mouseenter: function() {
      $(this).find(".work-img").animate({
        opacity: 0.7
      }, 150);
    },
    mouseleave: function() {
      $(this).find(".work-img").animate({
        opacity: 1
      }, 150);
    }
  });

});
