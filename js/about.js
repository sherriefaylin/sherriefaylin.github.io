
var executed;
var reset;

$(document).ready(function () {
  var executed;
var reset ;
$(document).ready(function () {



$("#fix-gif").hide();

$(".logo-nav").hide();



function resetLogo() {
 
  if (!reset) {
    $("#reverse-gif").show();
    
    // setTimeout(function() {
      $("#reverse-gif").hide();
      $("#fix-logo").fadeIn();
    // }, 1700)
  }
}



function activateLogo() {
  if (!executed) {
  $("#fix-logo").fadeOut();
  $("#fix-gif").show();

  // setTimeout(function () {
    $("#fix-gif").hide();
  // }, 1700)

  }
}
  
  
$(window).scroll(function() {
  if ($(window).scrollTop() > 25) {

    activateLogo();
    console.log("pls")
    executed = true;
    reset = false;
  }
  else {
    resetLogo();
    executed = false;
    reset = true
      console.log("boom")
  }
});






$("#fix-logo").mouseenter(function (){
  $(".logo-nav").fadeIn();
})

$(".logo-nav").mouseleave(function() {
  $(".logo-nav").hide();
})

});





});








