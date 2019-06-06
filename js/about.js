// //////////////////////
// ////////  LOGO  //////////////
// //////////////////////
var executed;
var reset;


// var mobileNavClick
$(document).ready(function () {
  $("#about-me").hide();
  $("#see-tran").hide();
  $("#close-mob-nav").hide();
  $("#fix-gif").hide();
  $("#reverse-gif").hide();
  $(".logo-nav").hide();
  // mobileNavClick === false;


  // function resetLogo() {

  //   if (!reset) {
  //     $("#reverse-gif").show();

  //     // setTimeout(function() {
  //     $("#reverse-gif").hide();
  //     $("#fix-logo").fadeIn();
  //     // }, 1700)
  //   }
  // }



  // function activateLogo() {
  //   if (!executed) {
  //     $("#fix-logo").fadeOut();
  //     $("#fix-gif").show();

  //     // setTimeout(function () {
  //     $("#fix-gif").hide();
  //     // }, 1700)

  //   }
  // }


  // $(window).scroll(function () {
  //   if ($(window).scrollTop() > 50) {

  //     activateLogo();
  //     console.log("pls")
  //     executed = true;
  //     reset = false;
  //   }
  //   else {
  //     resetLogo();
  //     executed = false;
  //     reset = true
  //     console.log("boom")
  //   }
  // });






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

// $("#fix-logo").click(function () {
//   clickLogo === true
//   $(".logo-nav").fadeIn();

// })

// if (clickLogo === true) {
//   $("#fix-logo").click(function () {
//     clickLogo === false
//     $(".logo-nav").fadeOut();
  
//   })
// }




// // // // // // // // // // // // // // // // // // // // // 
// PAGE TITLE
// // // // // // // // // // // // // // // // // // // // // 



// function name() {

//       setTimeout(function() {
//         $("#name-a").show();
//       }, 1000)

//       setTimeout(function() {
//         $("#name-b").show();
//       }, 2000)

//       setTimeout(function() {
//         $("#name-c").show();
//       }, 3000)

//     }
//   name();


var shown = false; 
// blob and subtitle function
$(document).ready(function () {
//  button





  $(".trans-text").hide();

  $("#sub-2").hide();
  $("#sub-3").hide();
  $("#sub-4").hide();
  $("#sub-5").hide();
  $("#sub-6").hide();
  $("#sub-7").hide();
  $("#sub-8").hide();
  $("#sub-9").hide();
  $("#sub-10").hide();
  $("#sub-11").hide();
  $("#sub-12").hide();
  $("#sub-13").hide();
  $("#sub-14").hide();
  $("#sub-15").hide();
  $("#sub-16").hide();


  // $("#blob-1").hide();
  // $("#blob-2").hide(); 
  //  $("#blob-3").hide();
  //  $("#blob-4").hide();
  //  $("#blob-5").hide();




setTimeout(function () {
  $("#sub-1").hide();
  $("#sub-2").show();
  // $(".cherry-valentine").hide();
  $("#blob-1").hide();

}, 2000)

setTimeout(function () {
  $("#sub-2").hide();
  $("#sub-3").show();
  // $(".cherry-valentine").hide();
  $("#blob-2").hide();

}, 4000)

setTimeout(function () {
  $("#sub-3").hide();
  $("#sub-4").show();
  // $(".cherry-valentine").hide();
  $("#blob-3").hide();

}, 6000)
setTimeout(function () {
  $("#sub-4").hide();
  $("#sub-5").show();
  // $(".cherry-valentine").hide();
  $("#blob-4").hide();

}, 8000)
setTimeout(function () {
  $("#sub-5").hide();
  $("#sub-6").show();
  // $(".cherry-valentine").hide();
  $("#blob-5").hide();

}, 10000)

setTimeout(function () {
  $("#sub-6").hide();
  $("#sub-7").show();
  // $(".cherry-valentine").hide();
  $("#blob-6").hide();

}, 12000)
setTimeout(function () {
  $("#sub-7").hide();
  $("#sub-8").show();
  // $(".cherry-valentine").hide();
  $("#blob-7").hide();

}, 15000)
setTimeout(function () {
  $("#sub-8").hide();
  $("#sub-9").show();
  // $(".cherry-valentine").hide();
  $("#blob-8").hide();

}, 18000)
setTimeout(function () {
  $("#sub-9").hide();
  $("#sub-10").show();
  // $(".cherry-valentine").hide();
  $("#blob-9").hide();

}, 20000)
setTimeout(function () {
  $("#sub-10").hide();
  $("#sub-11").show();
  // $(".cherry-valentine").hide();
  $("#blob-10").hide();

}, 22000)
setTimeout(function () {
  $("#sub-11").hide();
  $("#sub-12").show();
  // $(".cherry-valentine").hide();
  $("#blob-11").hide();

}, 24000)
setTimeout(function () {
  $("#sub-12").hide();
  $("#sub-13").show();
  // $(".cherry-valentine").hide();
  $("#blob-12").hide();

}, 26000)
setTimeout(function () {
  $("#sub-13").hide();
  $("#sub-14").show();
  // $(".cherry-valentine").hide();
  $("#blob-13").hide();

}, 28000)
setTimeout(function () {
  $("#sub-14").hide();
  $("#sub-15").show();
  // $(".cherry-valentine").hide();
  $("#blob-14").hide();

}, 30000)
setTimeout(function () {
  $("#sub-15").hide();
  $("#sub-16").show();
  // $(".cherry-valentine").hide();
  $("#blob-15").hide();

}, 32000)



setTimeout(function () {

if (shown === false) {
 
  $(".trans-text").show();
  $("#transcribe").hide();
  $(".subtitles").hide();
  $("#about-me").show();

} 

}, 32000)




$("#transcribe").mouseenter(function() {
  $("#i-dont-have-time").hide();
  $("#see-trans").show();

})
$("#transcribe").mouseleave(function() {
  $("#i-dont-have-time").show();
  
  $("#see-trans").hide();
})
$("#transcribe").click( function() {
  console.log("transcribe")
  $("#about-me").show();
  $("#transcribe").hide();
  $(".trans-text").show();
  $(".blob-fill").hide();
  $(".subtitles").hide();
  // $(".cherry-valentine").css('transform', 'scale(1.1)')
  shown === true
})





})




