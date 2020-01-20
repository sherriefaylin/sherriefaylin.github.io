
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
//     $('.page-head').addClass('headboom')

//   }
//   else {
//     $(".page-title").removeClass('titleboom')
//     $('.page-head').removeClass('headboom')

//   }
// });




$("#fix-logo").mouseenter(function (){
  $(".logo-nav").fadeIn();
})

$(".logo-nav").mouseleave(function() {
  $(".logo-nav").hide();
})



function indexMediaQuery() {

// //////////////////////
// ////////  PROJECT--UNTRENDING  //////////////
// //////////////////////
$(".untrnd-logo-box").mouseenter(function() {

  $(".rubb-logo").addClass('fade-logo');
  $(".upick-logo").addClass('fade-logo');

  $(".untrnd-logo-box").css('border', '0px')
  $(".hover-thumbnail").empty();
  $(".hover-blurb").empty();


  // $(".hover-thumbnail").append("<img class='wave-reveal' src='assets/hover-wave-reveal-loop.gif'>");
  // setTimeout(function(){
  //   $(".wave-reveal").hide();
    $(".hover-thumbnail").append(" <img class='proj-teaser' src='assets/scroll-sq-gif.gif' alt='untrending gif'>");
  // },460)

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


}

if ($(window).width() >= 768){	
  indexMediaQuery();
}

// if ($(window).width() <=768){	
//   indexMediaQuery();
// }

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
function mediaquery() {

$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    // $('.ugh-logo').addClass('fix-logo')
    $('.fix-right').show();
    $('.proj-blurb').addClass('fix-left',1000, "ease")
    $('.proj-blurb').css('width','250px', "ease")
    $('.proj-title').css('font-size', '36px')
    $('.abstract').css('font-size', '18px')
    $('.timeline, .technology, .role').css('font-size', '12px')


  }
  else {
    $('.fix-right').hide();
    $('.proj-blurb').css('width','500px', "ease")

    $(".proj-blurb").removeClass('fix-left')
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

}




// function mediaquery2() {

//   $(window).scroll(function() {
//     if ($(window).scrollTop() > 800) {
//       // $('.ugh-logo').addClass('fix-logo')
//       $('.fix-right').show();
      
  
  
//     }
//     else {
//       $('.fix-right').hide();
    
//     }
//   });
 
  
//   }
  


if ($(window).width() >= 992){	
  mediaquery();
}


// if ($(window).width() >= 768){	
//   mediaquery2();
// }


// ////////////////////// ////////////////////// //////////////////////
// ////////////////////// ////////////////////// //////////////////////







// ////////////////////// ////////////////////// //////////////////////
// ////////////////////// upick scroll //////////////////////
// ////////////////////// ////////////////////// //////////////////////


// TABLE OF CONTENTS SCROLL
/////// 1.

$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $("#upick-toc-1").addClass("toc-boom")
    
  }
  else {
    $("#upick-toc-1").removeClass("toc-boom")

  }
});
/////// 2.
$(window).scroll(function() {
  if ($(window).scrollTop() > 1100) {
    $("#upick-toc-1").removeClass("toc-boom")

    $("#upick-toc-2").addClass("toc-boom-b")
    
  }
  else {
    $("#upick-toc-2").removeClass("toc-boom-b")

  }
});
/////// 3.
$(window).scroll(function() {
  if ($(window).scrollTop() > 1900) {
    $("#upick-toc-2").removeClass("toc-boom-b")

    $("#upick-toc-3").addClass("toc-boom-c")
    
  }
  else {
    $("#upick-toc-3").removeClass("toc-boom-c")

  }
});
/////// 4.
$(window).scroll(function() {
  if ($(window).scrollTop() > 2300) {
    $("#upick-toc-3").removeClass("toc-boom-c")

    $("#upick-toc-4").addClass("toc-boom")
    
  }
  else {
    $("#upick-toc-4").removeClass("toc-boom")

  }
});
/////// 5.
$(window).scroll(function() {
  if ($(window).scrollTop() > 2900) {
    $("#upick-toc-4").removeClass("toc-boom")

    $("#upick-toc-5").addClass("toc-boom-b")
    
  }
  else {
    $("#upick-toc-5").removeClass("toc-boom-b")

  }
});
/////// 6.
$(window).scroll(function() {
  if ($(window).scrollTop() > 4300) {
    $("#upick-toc-5").removeClass("toc-boom-b")

    $("#upick-toc-6").addClass("toc-boom-c")
    
  }
  else {
    $("#upick-toc-6").removeClass("toc-boom-c")

  }
});
/////// 7.
$(window).scroll(function() {
  if ($(window).scrollTop() > 5200) {
    $("#upick-toc-6").removeClass("toc-boom-c")

    $("#upick-toc-7").addClass("toc-boom")
    
  }
  else {
    $("#upick-toc-7").removeClass("toc-boom")

  }
});


// $(window).scroll(function() {
//   if ($(window).scrollTop() > 700) {
//     $("#upick-vimeo").addClass("highlight")
//   }
//   else {
//     $("#upick-vimeo").removeClass("highlight")

//   }
// });


$(window).scroll(function() {
  if ($(window).scrollTop() > 980) {
    $("#upick-chat").addClass("highlight")
  }
  else {
    $("#upick-chat").removeClass("highlight")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 2100) {
    $(".flow-pic").addClass("highlight")
  }
  else {
    $(".flow-pic").removeClass("highlight")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 3000) {
    $("#player-box").addClass("highlight")
  }
  else {
    $("#player-box").removeClass("highlight")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 4000) {
    $(".set-10").addClass("highlight")
  }
  else {
    $(".set-10").removeClass("highlight")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 4900) {
    $(".set-11").addClass("highlight")
  }
  else {
    $(".set-11").removeClass("highlight")

  }
});

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 800) {
//     $("#s-a").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-a").removeClass("squiggle-boom")

//   }
// });


// $(window).scroll(function() {
//   if ($(window).scrollTop() > 1000) {
//     $("#s-b").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-b").removeClass("squiggle-boom")

//   }
// });


// $(window).scroll(function() {
//   if ($(window).scrollTop() > 1200) {
//     $("#s-c").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-c").removeClass("squiggle-boom")

//   }
// });

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 1400) {
//     $("#s-d").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-d").removeClass("squiggle-boom")

//   }
// });

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 1600) {
//     $("#s-e").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-e").removeClass("squiggle-boom")

//   }
// });

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 2200) {
//     $("#s-f").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-f").removeClass("squiggle-boom")

//   }
// });

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 3000) {
//     $("#s-g").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-g").removeClass("squiggle-boom")

//   }
// });

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 3200) {
//     $("#s-h").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-h").removeClass("squiggle-boom")

//   }
// });


// $(window).scroll(function() {
//   if ($(window).scrollTop() > 3400) {
//     $("#s-i").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-i").removeClass("squiggle-boom")

//   }
// });


////////////////////////////////////////////////////////////////////////////
/////////////////RUBBISH SCROLL///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $("#toc-1").addClass("toc-boom")
    
  }
  else {
    $("#toc-1").removeClass("toc-boom")

  }
});


// $(window).scroll(function() {
//   if ($(window).scrollTop() > 600) {
//     $("#s-q").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-q").removeClass("squiggle-boom")

//   }
// });


$(window).scroll(function() {
  if ($(window).scrollTop() > 1000) {
    $("#toc-1").removeClass("toc-boom")
    $("#toc-2").addClass("toc-boom-b")
  }
  else {
    $("#toc-2").removeClass("toc-boom-b")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 1100) {
    $("#sign-up-block").addClass("highlight")
  }
  else {
    $("#sign-up-block").removeClass("highlight")

  }
});


// $(window).scroll(function() {
//   if ($(window).scrollTop() > 1500) {
//     $("#s-w").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-w").removeClass("squiggle-boom")

//   }
// });


// $(window).scroll(function() {
//   if ($(window).scrollTop() > 1700) {
//     $("#s-er").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-er").removeClass("squiggle-boom")

//   }
// });


$(window).scroll(function() {
  if ($(window).scrollTop() > 2100) {
    $("#home-dial").addClass("highlight")
  }
  else {
    $("#home-dial").removeClass("highlight")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 2000) {
    $("#toc-2").removeClass("toc-boom-b")

    $("#toc-3").addClass("toc-boom-c")
  }
  else {
    $("#toc-3").removeClass("toc-boom-c")

  }
});

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 2600) {
//     $("#s-t").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-t").removeClass("squiggle-boom")

//   }
// });

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 2700) {
//     $("#s-y").addClass("squiggle-boom")
//   }
//   else {
//     $("#s-y").removeClass("squiggle-boom")

//   }
// });


$(window).scroll(function() {
  if ($(window).scrollTop() > 3000) {
    $(".set-one").addClass("highlight")
  }
  else {
    $(".set-one").removeClass("highlight")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 4000) {
    $(".set-2").addClass("highlight")
  }
  else {
    $(".set-2").removeClass("highlight")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 4600) {
    $("#prof-pic").addClass("highlight")
  }
  else {
    $("#prof-pic").removeClass("highlight")

  }
});



$(window).scroll(function() {
  if ($(window).scrollTop() > 2400) {
    $("#toc-3").removeClass("toc-boom-c")

    $("#toc-4").addClass("toc-boom")
  }
  else {
    $("#toc-4").removeClass("toc-boom")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 3000) {
    $("#toc-4").removeClass("toc-boom")

    $("#toc-5").addClass("toc-boom-b")
  }
  else {
    $("#toc-5").removeClass("toc-boom-b")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 3550) {
    $("#toc-5").removeClass("toc-boom-b")

    $("#toc-6").addClass("toc-boom-c")
  }
  else {
    $("#toc-6").removeClass("toc-boom-c")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 4300) {
    $("#toc-6").removeClass("toc-boom-c")

    $("#toc-7").addClass("toc-boom")
  }
  else {
    $("#toc-7").removeClass("toc-boom")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 5050) {
    $("#toc-7").removeClass("toc-boom")

    $("#toc-8").addClass("toc-boom-b")
  }
  else {
    $("#toc-8").removeClass("toc-boom-b")

  }
});

////////////////////////////////////////////////////////////////////////////
/////////////////untrending SCROLL///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


// TABLE OF CONTENTS SCROLL
/////// 1.

$(window).scroll(function() {
  if ($(window).scrollTop() > 800) {
    $("#untrnd-toc-1").addClass("toc-boom")
    
  }
  else {
    $("#untrnd-toc-1").removeClass("toc-boom")

  }
});
/////// 2.
$(window).scroll(function() {
  if ($(window).scrollTop() > 1100) {
    $("#untrnd-toc-1").removeClass("toc-boom")

    $("#untrnd-toc-2").addClass("toc-boom-b")
    
  }
  else {
    $("#untrnd-toc-2").removeClass("toc-boom-b")

  }
});
/////// 3.
$(window).scroll(function() {
  if ($(window).scrollTop() > 1600) {
    $("#untrnd-toc-2").removeClass("toc-boom-b")

    $("#untrnd-toc-3").addClass("toc-boom-c")
    
  }
  else {
    $("#untrnd-toc-3").removeClass("toc-boom-c")

  }
});
/////// 4.
$(window).scroll(function() {
  if ($(window).scrollTop() > 2300) {
    $("#untrnd-toc-3").removeClass("toc-boom-c")

    $("#untrnd-toc-4").addClass("toc-boom")
    
  }
  else {
    $("#untrnd-toc-4").removeClass("toc-boom")

  }
});
/////// 5.
$(window).scroll(function() {
  if ($(window).scrollTop() > 2600) {
    $("#untrnd-toc-4").removeClass("toc-boom")

    $("#untrnd-toc-5").addClass("toc-boom-b")
    
  }
  else {
    $("#untrnd-toc-5").removeClass("toc-boom-b")

  }
});
/////// 6.
$(window).scroll(function() {
  if ($(window).scrollTop() > 3500) {
    $("#untrnd-toc-5").removeClass("toc-boom-b")

    $("#untrnd-toc-6").addClass("toc-boom-c")
    
  }
  else {
    $("#untrnd-toc-6").removeClass("toc-boom-c")

  }
});
/////// 7.
$(window).scroll(function() {
  if ($(window).scrollTop() > 5500) {
    $("#untrnd-toc-6").removeClass("toc-boom-c")

    $("#untrnd-toc-7").addClass("toc-boom")
    
  }
  else {
    $("#untrnd-toc-7").removeClass("toc-boom")

  }
});





$(window).scroll(function() {
  if ($(window).scrollTop() > 1800) {
    $("#untrnd-s-a").addClass("highlight")
    
  }
  else {
    $("#untrnd-s-a").removeClass("highlight")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 2500) {
    $("#spectrum-gif").addClass("highlight")
    
  }
  else {
    $("#spectrum-gif").removeClass("highlight")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 3500) {
    $("#figure-eye").addClass("highlight")
    
  }
  else {
    $("#figure-eye").removeClass("highlight")

  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 3700) {
    $("#pers-block").addClass("highlight")
    
  }
  else {
    $("#pers-block").removeClass("highlight")

  }
});


$(window).scroll(function() {
  if ($(window).scrollTop() > 4300) {
    $("#flow-chart").addClass("highlight")
    
  }
  else {
    $("#flow-chart").removeClass("highlight")

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