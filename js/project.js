
var executed;
var reset ;
$(document).ready(function () {



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






$("#fix-logo").mouseenter(function (){
  $(".logo-nav").fadeIn();
})

$(".logo-nav").mouseleave(function() {
  $(".logo-nav").hide();
})




$("#aa-cap").mouseenter(function() {
  $("#aa-cap").css('opacity', '25%')
})

$("#aa-cap").mouseleave(function() {
  $("#aa-cap").css('opacity', '100%')
})

$("#pos-cap").mouseenter(function() {
  $("#pos-cap").css('opacity', '25%')
})

$("#pos-cap").mouseleave(function() {
  $("#pos-cap").css('opacity', '100%')
})

$("#rub-cap").mouseenter(function() {
  $("#rub-cap").css('opacity', '25%')
})

$("#rub-cap").mouseleave(function() {
  $("#rub-cap").css('opacity', '100%')
})

$("#untrnd-cap").mouseenter(function() {
  $("#untrnd-cap").css('opacity', '25%')
})

$("#untrnd-cap").mouseleave(function() {
  $("#untrnd-cap").css('opacity', '100%')
})

$("#upick-cap").mouseenter(function() {
  $("#upick-cap").css('opacity', '25%')
})

$("#upick-cap").mouseleave(function() {
  $("#upick-cap").css('opacity', '100%')
})



});




