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

  $(".work-0").on({
    mouseenter: function() {
      $(this).find(".work-logo").animate({
        opacity: "0"
      }, "fast", function() {
        $(".work-0").find(".work-logo").hide();
        $(".work-0").find(".work-description").show();
        $(".work-0").find(".work-description").animate({
          opacity: "1"
        });
      });
    },
    mouseleave: function() {
      $(this).find(".work-description").animate({
        opacity: "0"
      }, "fast", function() {
        $(".work-0").find(".work-description").hide();
        $(".work-0").find(".work-logo").show();
        $(".work-0").find(".work-logo").animate({
          opacity: "1"
        }, "fast");
      });
    }
  });

  $(".work-1").on({
    mouseenter: function() {
      $(this).find(".work-logo").animate({
        opacity: "0"
      }, function() {
        $(".work-1").find(".work-logo").hide();
        $(".work-1").find(".work-description").show();
        $(".work-1").find(".work-description").animate({
          opacity: "1"
        });
      });
    },
    mouseleave: function() {
      $(this).find(".work-description").animate({
        opacity: "0"
      }, "fast", function() {
        $(".work-1").find(".work-description").hide();
        $(".work-1").find(".work-logo").show();
        $(".work-1").find(".work-logo").animate({
          opacity: "1"
        });
      });
    }
  });

  $(".work-2").on({
    mouseenter: function() {
      $(this).find(".work-logo").animate({
        opacity: "0"
      }, function() {
        $(".work-2").find(".work-logo").hide();
        $(".work-2").find(".work-description").show();
        $(".work-2").find(".work-description").animate({
          opacity: "1"
        });
      });
    },
    mouseleave: function() {
      $(this).find(".work-description").animate({
        opacity: "0"
      }, "fast", function() {
        $(".work-2").find(".work-description").hide();
        $(".work-2").find(".work-logo").show();
        $(".work-2").find(".work-logo").animate({
          opacity: "1"
        }, "fast");
      });
    }
  });

});
