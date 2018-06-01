$(function() {
  
  $(".bio").animate({
    marginTop: '-=400px'
  }, 800);

  $("#resume").on({
    mouseenter: function() {
      $(".popup").animate({
        bottom: "0"
      }, 350);
    },
    mouseleave: function() {
      $(".popup").animate({
        bottom: "-200px"
      }, 350);
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
