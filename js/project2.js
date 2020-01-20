$(document).ready(function () {
    // $("#about-me").hide();
    $("#see-tran").hide();
    $("#close-mob-nav").hide();
    $("#fix-gif").hide();
    $("#reverse-gif").hide();
    $(".logo-nav").hide();
  
  
  
    $("#fix-logo").mouseenter(function () {
      $("#fix-logo").hide();
      $(".logo-nav").fadeIn();
    })
  
    $(".logo-nav").mouseleave(function () {
      $("#fix-logo").show();
      $(".logo-nav").hide();
    })
});