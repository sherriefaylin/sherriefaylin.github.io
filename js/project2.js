

$(document).ready(function () {
    $("#aa-cap").hide();
    $("#pos-cap").hide();
    $("#rub-cap").hide();
    $("#untrnd-cap").hide();
    $("#upick-cap").hide();

  
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

  
  
  
  

    // mouseenter caption animation

    $("#aa-img").mouseenter(function () {
        $("#aa-cap").fadeIn();


        $("#aa-img").mousemove(function (event) {
            $("#aa-img").css('opacity','25%');
            $("#aa-cap").offset({
                left: event.pageX + 15,
                top: event.pageY - 15

            })

        })
    })


    $("#aa-img").mouseleave(function () {
        $("#aa-cap").hide();
        $("#aa-img").css('opacity','100%');

    })


    $("#pos-img").mouseenter(function () {
        $("#pos-cap").fadeIn();
        $("#pos-img").css('opacity','25%');


        $("#pos-img").mousemove(function (event) {

            $("#pos-cap").offset({
                left: event.pageX + 15,
                top: event.pageY - 15

            })

        })
    })


    $("#pos-img").mouseleave(function () {
        $("#pos-cap").hide();
        $("#pos-img").css('opacity','100%');

    })


    $("#rub-img").mouseenter(function () {
        $("#rub-cap").fadeIn();
        $("#rub-img").css('opacity','25%');


        $("#rub-img").mousemove(function (event) {

            $("#rub-cap").offset({
                left: event.pageX + 15,
                top: event.pageY - 15

            })

        })
    })


    $("#rub-img").mouseleave(function () {
        $("#rub-cap").hide();
        $("#rub-img").css('opacity','100%');

    })
    $("#untrnd-img").mouseenter(function () {
        $("#untrnd-cap").fadeIn();
        $("#untrnd-img").css('opacity','25%');



        $("#untrnd-img").mousemove(function (event) {

            $("#untrnd-cap").offset({
                left: event.pageX + 15,
                top: event.pageY - 15

            })

        })
    })


    $("#untrnd-img").mouseleave(function () {
        $("#untrnd-cap").hide();
        $("#untrnd-img").css('opacity','100%');

    })
    $("#upick-img").mouseenter(function () {
        $("#upick-cap").fadeIn();
        $("#upick-img").css('opacity','25%');


        $("#upick-img").mousemove(function (event) {

            $("#upick-cap").offset({
                left: event.pageX + 15,
                top: event.pageY - 15

            })

        })
    })


    $("#upick-img").mouseleave(function () {
        $("#upick-cap").hide();
        $("#upick-img").css('opacity','100%');

    })




});
