var executed;
var reset ;
$(document).ready(function () {



$("#fix-gif").hide();
$("#reverse-gif").hide();
$(".logo-nav").hide();


$(".wave-reveal").hide();
$(".proj-teaser").hide();

$(".see-proj-box-a").hide();
$(".see-proj-box-b").hide();
$(".see-proj-box-c").hide();


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


$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    $('.page-title').addClass('titleboom',1000, "ease")
    console.log("titleboom")
    $('.page-head').addClass('headboom', 1000, "ease")

  }
  else {
    $(".page-title").removeClass('titleboom', 1000, "ease")
    $('.page-head').removeClass('headboom', 1000, "ease")

  }
});

// var elementPosition = $('.page-title').offset();

// $(window).scroll(function(){
//   if($(window).scrollTop() > elementPosition.top){
//         $('.page-title').css('position','fixed').css('top','0');
//   } else {
//       $('.page-title').css('position','static');
//   }    
// });



$("#fix-logo").mouseenter(function (){
  $(".logo-nav").fadeIn();
})

$(".logo-nav").mouseleave(function() {
  $(".logo-nav").hide();
})



/////////////////////////////////////////////////////////////////

$(".untrnd-logo-box").mouseenter(function() {

  $(".rubb-logo").addClass('fade-logo');
  $(".upick-logo").addClass('fade-logo');

  $(".untrnd-logo-box").css('border', '0px')
  $(".hover-thumbnail").empty();
  $(".hover-blurb").empty();


  $(".hover-thumbnail").append("<img class='wave-reveal' src='assets/hover-wave-reveal-loop.gif'>");
  setTimeout(function(){
    $(".wave-reveal").hide();
    $(".hover-thumbnail").append(" <img class='proj-teaser' src='assets/scroll-sq-gif.gif' alt='untrending gif'>");
  },460)

  $(".hover-blurb").append("<p class='p-title'>UNTRENDING</p><p class='blurb-one'>Re-filtering the news to encourage users to consume stories from multiple perspectives.</p> <p class='blurb-date'>JANUARY 2019</p> <p class='blurb-two'>FULL STACK NEWS FILTER APP</p> <p class='blurb-three'>ROLE: Project Manager, Front-end Developer, UI/UX Designer</p>")

  $(".see-proj-box-a").show();
  $(".untrnd-logo").hide();
})

$(".see-proj-box-a").mouseleave(function(){
  $(".rubb-logo").removeClass('fade-logo');
  $(".upick-logo").removeClass('fade-logo');

  $(".untrnd-logo").show();
  $(".see-proj-box-a").hide();
})

/////////////////////////////////////////////////////////////////

$(".rubb-logo-box").mouseenter(function() {
  $(".untrnd-logo").addClass('fade-logo');
  $(".upick-logo").addClass('fade-logo');
 

  $(".rubb-logo-box").css('border', '0px')
  $(".hover-thumbnail").empty();
  $(".hover-blurb").empty();


  $(".hover-thumbnail").append("<img class='wave-reveal' src='assets/bin-hover-reveal.gif'>");
  setTimeout(function(){
    $(".wave-reveal").hide();
    $(".hover-thumbnail").append(" <img class='proj-teaser' src='assets/rubbish/everything.gif' alt='untrending gif'>");
  },460)
  

  $(".hover-blurb").append("<p class='p-title'>RUBBISH</p><p class='blurb-one'>Trash service for the travelers, the handicapped, the senior, and everyone else.</p> <p class='blurb-date'>FEBRUARY 2019</p> <p class='blurb-two'>FULL STACK SERVICE APP</p> <p class='blurb-three'>ROLE: Front-end Developer, UI/UX Designer</p>")
 
 
  $(".see-proj-box-b").show();
  $(".rubb-logo").hide();
})

$(".see-proj-box-b").mouseleave(function(){
  $(".untrnd-logo").removeClass('fade-logo');
  $(".upick-logo").removeClass('fade-logo');
 
  $(".rubb-logo").show();
  $(".see-proj-box-b").hide();
})




/////////////////////////////////////////////////////////////////
$(".upick-logo-box").mouseenter(function() {

  $(".rubb-logo").addClass('fade-logo');
  $(".untrnd-logo").addClass('fade-logo');
 

  $(".upick-logo-box").css('border', '0px')
  $(".hover-thumbnail").empty();
  $(".hover-blurb").empty();





  $(".hover-thumbnail").append("<img class='wave-reveal' src='assets/upick/chat-wave-reveal.gif'>");
  setTimeout(function(){
    $(".wave-reveal").hide();
    $(".hover-thumbnail").append(" <img class='proj-teaser' src='assets/upickchat.gif' alt='untrending gif'>");
  },460)

  $(".hover-blurb").append("<p class='p-title'>uPICK</p><p class='blurb-one'>We’ve all found ourselves stuck in this conversation too many times a day (especially those of us who indulge in second dinner). uPick is a multi-player game designed to pick for you!</p> <p class='blurb-date'>NOVEMBER 2018</p> <p class='blurb-two'>FRONT END APPLICATION+ FIREBASE</p> <p class='blurb-three'>ROLE: Project Manager, Front-end Developer, UI/UX Designer</p>")

  $(".see-proj-box-c").show();
  $(".upick-logo").hide();
})

$(".see-proj-box-c").mouseleave(function(){

  $(".rubb-logo").removeClass('fade-logo');
  $(".untrnd-logo").removeClass('fade-logo');

  $(".upick-logo").show();
  $(".see-proj-box-c").hide();
})



})



$(window).scroll(function() {
  if ($(window).scrollTop() > 700) {
    $("#upick-vimeo").addClass("highlight", 1000, "ease")
  }
  else {
    $("#upick-vimeo").removeClass("highlight")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 980) {
    $("#upick-chat").addClass("highlight", 1000, "ease")
  }
  else {
    $("#upick-chat").removeClass("highlight")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 2000) {
    $(".flow-pic").addClass("highlight", 1000, "ease")
  }
  else {
    $(".flow-pic").removeClass("highlight")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 2400) {
    $("#player-box").addClass("highlight", 1000, "ease")
  }
  else {
    $("#player-box").removeClass("highlight")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $("#s-a").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-a").removeClass("squiggle-boom")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 1000) {
    $("#s-b").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-b").removeClass("squiggle-boom")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 1200) {
    $("#s-c").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-c").removeClass("squiggle-boom")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 1400) {
    $("#s-d").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-d").removeClass("squiggle-boom")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 1600) {
    $("#s-e").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-e").removeClass("squiggle-boom")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 2200) {
    $("#s-f").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-f").removeClass("squiggle-boom")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 3000) {
    $("#s-g").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-g").removeClass("squiggle-boom")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 3200) {
    $("#s-h").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-h").removeClass("squiggle-boom")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 3400) {
    $("#s-i").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-i").removeClass("squiggle-boom")

  }
});










// window.onscroll = function() {myFunction()};

// var header = $("#myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }