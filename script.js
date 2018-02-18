$(function() {

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".header").css("background-position", "center -" + (scroll*0.5) + "px");
  });

  $(".name").animate({
    opacity: 1,
  }, 1500);

  $(".header-link").animate({
    opacity: 1,
  }, 1500);

  $(".link").on({
    mouseenter: function() {
      $(this).find(".work-overlay").css("opacity", "0.2");
    },
    mouseleave: function() {
      $(this).find(".work-overlay").css("opacity", "0");
    }
  });

});
