$(function() {
  $(".header").slideDown("slow");
  $(".col-md-4").on({
    mouseenter: function() {
      $(this).find(".logo").animate({
        height: "+=10px"
      }, "fast");
      $(this).find(".worktitle").css("color", "#339baf");
    },
    mouseleave: function() {
      $(this).find(".logo").animate({
        height: "-=10px"
      }, "fast");
      $(this).find(".worktitle").css("color", "#2d3b46");
    }
  });
});
