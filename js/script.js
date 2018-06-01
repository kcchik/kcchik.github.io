$(function() {

  $(".header").animate({
    opacity: 1
  }, 1500);
  
  $(".bio").animate({
    marginTop: '-=400px'
  }, 800);

  $("#resume").on({
    mouseenter: function() {
      $(".popup").animate({
        bottom: "0"
      }, 150);
    },
    mouseleave: function() {
      $(".popup").animate({
        bottom: "-200px"
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
