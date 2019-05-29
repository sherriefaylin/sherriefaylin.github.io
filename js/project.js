

// //////////////////////
// ////////  LOGO  //////////////
// //////////////////////
var executed;
var reset ;
$(document).ready(function () {



$("#fix-gif").hide();
$("#reverse-gif").hide();
$(".logo-nav").hide();

// ////////  PROJECTS NAV  //////////////

$(".wave-reveal").hide();
$(".proj-teaser").hide();

$(".see-proj-box-a").hide();
$(".see-proj-box-b").hide();
$(".see-proj-box-c").hide();


$(".untrnd-logo-box").css('border', '0px');
$(".rubb-logo-box").css('border', '0px');
$(".upick-logo-box").css('border', '0px');
// //////////////////////// //////////////////////

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


// $(window).scroll(function() {
//   if ($(window).scrollTop() > 50) {
//     $('.page-title').addClass('titleboom',1000, "ease")
//     console.log("titleboom")
//     $('.page-head').addClass('headboom', 1000, "ease")

//   }
//   else {
//     $(".page-title").removeClass('titleboom', 1000, "ease")
//     $('.page-head').removeClass('headboom', 1000, "ease")

//   }
// });




$("#fix-logo").mouseenter(function (){
  $(".logo-nav").fadeIn();
})

$(".logo-nav").mouseleave(function() {
  $(".logo-nav").hide();
})




// //////////////////////
// ////////  PROJECT--UNTRENDING  //////////////
// //////////////////////
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


// //////////////////////
// ////////  PROJECT--RUBBISH  //////////////
// //////////////////////

$(".rubb-logo-box").mouseenter(function() {
  $(".untrnd-logo").addClass('fade-logo');
  $(".upick-logo").addClass('fade-logo');
 

  $(".rubb-logo-box").css('border', '0px')
  $(".hover-thumbnail").empty();
  $(".hover-blurb").empty();


  // $(".hover-thumbnail").append("<img class='wave-reveal' src='assets/bin-hover-reveal.gif'>");
  // setTimeout(function(){
    // $(".wave-reveal").hide();
    $(".hover-thumbnail").append(" <img class='proj-teaser' src='assets/rubbish/home-dial_6.gif'>");
  // },460)
  

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





// //////////////////////
// ////////  PROJECT--UPICK  //////////////
// //////////////////////
$(".upick-logo-box").mouseenter(function() {

  $(".rubb-logo").addClass('fade-logo');
  $(".untrnd-logo").addClass('fade-logo');
 

  $(".upick-logo-box").css('border', '0px')
  $(".hover-thumbnail").empty();
  $(".hover-blurb").empty();





  // $(".hover-thumbnail").append("<img class='wave-reveal' src='assets/upick/chat-wave-reveal.gif'>");
  // setTimeout(function(){
    $(".wave-reveal").hide();
    $(".hover-thumbnail").append(" <img class='proj-teaser' src='assets/upick/upickchatclear.gif'>");
  // },460)

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



// //////////////////////
// //////// RIGHT FIXED DIV (SUBTITLES TABLE OF CONTENTS) //////////////
// //////////////////////

$(document).ready(function () {
  $('.fix-right').hide();
})


// //////////////////////
// //////// FIX LEFT //////////////
// //////////////////////

$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    // $('.ugh-logo').addClass('fix-logo')
    $('.fix-right').show();
    $('.proj-blurb').addClass('fix-left',1000, "ease")
    $('.proj-title').css('font-size', '36px')
    $('.abstract').css('font-size', '18px')
    $('.timeline, .technology, .role').css('font-size', '12px')


  }
  else {
    $('.fix-right').hide();
    $(".proj-blurb").removeClass('fix-left', 1000, "ease")
    $('.proj-title').css('font-size', '48px')
    $('.abstract').css('font-size', '24px')
    $('.timeline, .technology, .role').css('font-size', '18px')

  }
});
// ////////////////////// ////////////////////// //////////////////////
// ////////////////////// scroll past project blurb, move to blurb to left, then move back //////////////////////
// ////////////////////// ////////////////////// //////////////////////
$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $('.proj-description').css('margin-top', '850px')


  }
  else {
    $('.proj-description').css('margin-top', '0px')

  }
});



$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $('.proj-description-bin').css('margin-top', '925px')


  }
  else {
    $('.proj-description-bin').css('margin-top', '0px')

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $('.proj-description-upick').css('margin-top', '955px')


  }
  else {
    $('.proj-description-upick').css('margin-top', '0px')

  }
});
// ////////////////////// ////////////////////// //////////////////////
// ////////////////////// ////////////////////// //////////////////////







// ////////////////////// ////////////////////// //////////////////////
// ////////////////////// upick scroll //////////////////////
// ////////////////////// ////////////////////// //////////////////////
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


////////////////////////////////////////////////////////////////////////////
/////////////////RUBBISH SCROLL///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $("#toc-1").addClass("toc-boom", 1000, "ease")
    
  }
  else {
    $("#toc-1").removeClass("toc-boom")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    $("#s-q").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-q").removeClass("squiggle-boom")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 1000) {
    $("#toc-1").removeClass("toc-boom")
    $("#toc-2").addClass("toc-boom-b", 1000, "ease")
  }
  else {
    $("#toc-2").removeClass("toc-boom-b")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $("#sign-up-block").addClass("highlight", 1000, "ease")
  }
  else {
    $("#sign-up-block").removeClass("highlight")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 1500) {
    $("#s-w").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-w").removeClass("squiggle-boom")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 1700) {
    $("#s-er").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-er").removeClass("squiggle-boom")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 2100) {
    $("#home-dial").addClass("highlight", 1000, "ease")
  }
  else {
    $("#home-dial").removeClass("highlight")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 2000) {
    $("#toc-2").removeClass("toc-boom-b")

    $("#toc-3").addClass("toc-boom-c", 1000, "ease")
  }
  else {
    $("#toc-3").removeClass("toc-boom-c")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 2600) {
    $("#s-t").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-t").removeClass("squiggle-boom")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 2700) {
    $("#s-y").addClass("squiggle-boom", 1000, "ease")
  }
  else {
    $("#s-y").removeClass("squiggle-boom")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 3000) {
    $(".set-one").addClass("highlight", 1000, "ease")
  }
  else {
    $(".set-one").removeClass("highlight")

  }
});



$(window).scroll(function() {
  if ($(window).scrollTop() > 2400) {
    $("#toc-3").removeClass("toc-boom-c")

    $("#toc-4").addClass("toc-boom", 1000, "ease")
  }
  else {
    $("#toc-4").removeClass("toc-boom")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 3000) {
    $("#toc-4").removeClass("toc-boom")

    $("#toc-5").addClass("toc-boom-b", 1000, "ease")
  }
  else {
    $("#toc-5").removeClass("toc-boom-b")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 3550) {
    $("#toc-5").removeClass("toc-boom-b")

    $("#toc-6").addClass("toc-boom-c", 1000, "ease")
  }
  else {
    $("#toc-6").removeClass("toc-boom-c")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 4300) {
    $("#toc-6").removeClass("toc-boom-c")

    $("#toc-7").addClass("toc-boom", 1000, "ease")
  }
  else {
    $("#toc-7").removeClass("toc-boom")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 5050) {
    $("#toc-7").removeClass("toc-boom")

    $("#toc-8").addClass("toc-boom-b", 1000, "ease")
  }
  else {
    $("#toc-8").removeClass("toc-boom-b")

  }
});






// // // // // // // // //// // // // // // // // //// // // // // // // // //
// // // // // // // // // INDEX PAGE TITLE (projects) // // // // 
// // // // // // // // //// // // // // // // // //// // // // // // // // //
$(document).ready(function() {

  $("#title-p").hide();
  $("#title-r").hide();
  $("#title-o").hide();
  $("#title-j").hide();
  $("#title-e").hide();
  $("#title-c").hide();
  $("#title-t").hide();
  $("#title-s").hide();

})


function titleLetters() {
  setTimeout(function() {
    $("#title-p").show();
  }, 250)

  setTimeout(function() {
    $("#title-r").show();
  }, 500)

  setTimeout(function() {
    $("#title-o").show();
  }, 750)

  setTimeout(function() {
    $("#title-j").show();
  }, 1000)

  setTimeout(function() {
    $("#title-e").show();
  }, 1250)

  setTimeout(function() {
    $("#title-c").show();
  }, 1500)

  setTimeout(function() {
    $("#title-t").show();
  }, 1750)

  setTimeout(function() {
    $("#title-s").show();
  }, 2000)

};

titleLetters();