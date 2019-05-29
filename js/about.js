// // // // // // // // // // // // // // // // // // // // // 
// LOGO 
// // // // // // // // // // // // // // // // // // // // // 


var executed;
var reset ;
$(document).ready(function () {

  //  //  //  //  //  // NAME 
    $("#name-a").hide()
    $("#name-b").hide()
    $("#name-c").hide()
  //  //  //  //  //  //

$("#fix-gif").hide();
$("#reverse-gif").hide();
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
  if ($(window).scrollTop() > 50) {

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
});



// // // // // // // // // // // // // // // // // // // // // 
// PAGE TITLE
// // // // // // // // // // // // // // // // // // // // // 



function name() {
  
      setTimeout(function() {
        $("#name-a").show();
      }, 1000)

      setTimeout(function() {
        $("#name-b").show();
      }, 2000)

      setTimeout(function() {
        $("#name-c").show();
      }, 3000)
    
    }
  name();

