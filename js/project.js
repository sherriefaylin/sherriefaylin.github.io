var executed;
var reset ;
$(document).ready(function () {



$("#fix-gif").hide();
$("#reverse-gif").hide();
$(".logo-nav").hide();


$(".wave-reveal").hide();
$(".proj-teaser").hide();

$(".see-proj-box").hide();

function resetLogo() {
 
  if (!reset) {
    $("#reverse-gif").show();
    
    setTimeout(function() {
      $("#reverse-gif").hide();
      $("#fix-logo").show();
    }, 1700)
  }
}



function activateLogo() {
  if (!executed) {
  $("#fix-logo").hide();
  $("#fix-gif").show();

  setTimeout(function () {
    $("#fix-gif").hide();
  }, 1700)

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




$(".untrnd-logo-box").mouseenter(function() {
  $(".untrnd-logo-box").css('border', '0px')
  $(".hover-thumbnail").empty();
  $(".hover-blurb").empty();


  $(".hover-thumbnail").append("<img class='wave-reveal' src='assets/hover-wave-reveal-loop.gif'>");
  setTimeout(function(){
    $(".wave-reveal").hide();
    $(".hover-thumbnail").append(" <img class='proj-teaser' src='assets/scroll-sq-gif.gif' alt='untrending gif'>");
  },480)

  $(".hover-blurb").append("<p class='blurb-one'>Re-filtering the news to encourage users to consume stories from multiple perspectives.</p> <p class='blurb-date'>JANUARY 2019</p> <p class='blurb-two'>FULL STACK NEWS FILTER APP</p> <p class='blurb-three'>ROLE: Project Manager, Front-end Developer, UI/UX Designer</p>")

  $(".see-proj-box").show();
  $(".untrnd-logo").hide();
})

$(".untrnd-logo-box").mouseleave(function(){

  $(".untrnd-logo").show();
  $(".see-proj-box").hide();
})




$(".upick-logo-box").mouseenter(function() {
  $(".upick-logo-box").css('border', '0px')
  $(".hover-thumbnail").empty();
  $(".hover-blurb").empty();


  $(".hover-thumbnail").append("<img class='wave-reveal' src='assets/hover-wave-reveal-loop.gif'>");
  setTimeout(function(){
    $(".wave-reveal").hide();
    $(".hover-thumbnail").append(" <img class='proj-teaser' src='assets/scroll-sq-gif.gif' alt='untrending gif'>");
  },480)

  $(".hover-blurb").append("<p> placeholder </p>")

  $(".see-proj-box").show();
  $(".upick-logo").hide();
})

$(".upick-logo-box").mouseleave(function(){

  $(".upick-logo").show();
  $(".see-proj-box").hide();
})














  



})