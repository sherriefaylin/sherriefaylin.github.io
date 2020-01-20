
var executed;
var reset;

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

  // if (mobileNavClick === false) {
 $("#three-lines").click(function() {
    $(".logo-nav").fadeIn();
    $("#fix-logo").hide();
    $("#three-lines").fadeOut();
    $("#close-mob-nav").fadeIn();

    // mobileNavClick === true
  })
  // } else {
    $("#close-mob-nav").click(function() {
    $(".logo-nav").hide();
    $("#fix-logo").fadeIn();
    $("#three-lines").show();
    $("#close-mob-nav").fadeOut();
    // mobileNavClick === false
  })
  // }




});








