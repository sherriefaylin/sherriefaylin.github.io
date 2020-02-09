

$(document).ready(function () {
    $("#aa-cap").hide();
    $("#pos-cap").hide();
    $("#rub-cap").hide();
    $("#untrnd-cap").hide();
    $("#upick-cap").hide();
    $("#fort-cap").hide();
    $("#pixelate1").hide();
    $("#pixelate2").hide();
    $("#pixelate3").hide();
    $("#pixelate4").hide();
    $("#pixelate5").hide();
    $("#pixelate6").hide();
    $("#pixelate7").hide();
    $("#pixelate8").hide();




    var executed;
    var reset;


    $(document).ready(function () {

        // pixelate PROJECTS
        
      
      
        setTimeout(function (){
            $("#pixelate3").show();
                $("#y1").hide()
        }, 500) 
        
        setTimeout(function (){
            $("#pixelate2").show();
                $("#m1").hide()
        }, 600)  
        
        setTimeout(function (){
            $("#pixelate6").show();
                $("#m2").hide()
        }, 700)
        setTimeout(function (){
            $("#pixelate7").show();
                $("#y2").hide()
        }, 800)
        setTimeout(function (){
            $("#pixelate4").show();
                $("#k1").hide()
        }, 900)
        setTimeout(function (){
            $("#pixelate5").show();
                $("#c2").hide()
        }, 1000)
     
        setTimeout(function (){
            $("#pixelate8").show();
                $("#k2").hide()
        }, 1100)

        setTimeout(function (){
            $("#pixelate1").show();
                $("#c1").hide()
        }, 1200)


        $("#pixelate1").mouseenter(function() {
            $("#pixelate1").hide();
            $("#c1").show()
        })
        $("#c1").mouseleave(function() {
            $("#c1").hide();
            $("#pixelate1").show();
        })










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


        $(window).scroll(function () {
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






        $("#fix-logo").mouseenter(function () {
            $(".logo-nav").fadeIn();
        })

        $(".logo-nav").mouseleave(function () {
            $(".logo-nav").hide();
        })

    });






    // mouseenter caption animation

    $("#fortunate-img").mouseenter(function () {
        $("#fort-cap").fadeIn();


        $("#fortunate-img").mousemove(function (event) {
            $("#fortunate-img").css('opacity', '25%');
            $("#fort-cap").offset({
                left: event.pageX + 15,
                top: event.pageY - 15

            })

        })
    })


    $("#fortunate-img").mouseleave(function () {
        $("#fort-cap").hide();
        $("#fortunate-img").css('opacity', '100%');

    })

    $("#aa-img").mouseenter(function () {
        $("#aa-cap").fadeIn();


        $("#aa-img").mousemove(function (event) {
            $("#aa-img").css('opacity', '25%');
            $("#aa-cap").offset({
                left: event.pageX + 15,
                top: event.pageY - 15

            })

        })
    })


    $("#aa-img").mouseleave(function () {
        $("#aa-cap").hide();
        $("#aa-img").css('opacity', '100%');

    })


    $("#pos-img").mouseenter(function () {
        $("#pos-cap").fadeIn();
        $("#pos-img").css('opacity', '25%');


        $("#pos-img").mousemove(function (event) {

            $("#pos-cap").offset({
                left: event.pageX + 15,
                top: event.pageY - 15

            })

        })
    })


    $("#pos-img").mouseleave(function () {
        $("#pos-cap").hide();
        $("#pos-img").css('opacity', '100%');

    })


    $("#rub-img").mouseenter(function () {
        $("#rub-cap").fadeIn();
        $("#rub-img").css('opacity', '25%');


        $("#rub-img").mousemove(function (event) {

            $("#rub-cap").offset({
                left: event.pageX + 15,
                top: event.pageY - 15

            })

        })
    })


    $("#rub-img").mouseleave(function () {
        $("#rub-cap").hide();
        $("#rub-img").css('opacity', '100%');

    })
    $("#untrnd-img").mouseenter(function () {
        $("#untrnd-cap").fadeIn();
        $("#untrnd-img").css('opacity', '25%');



        $("#untrnd-img").mousemove(function (event) {

            $("#untrnd-cap").offset({
                left: event.pageX + 15,
                top: event.pageY - 15

            })

        })
    })


    $("#untrnd-img").mouseleave(function () {
        $("#untrnd-cap").hide();
        $("#untrnd-img").css('opacity', '100%');

    })
    $("#upick-img").mouseenter(function () {
        $("#upick-cap").fadeIn();
        $("#upick-img").css('opacity', '25%');


        $("#upick-img").mousemove(function (event) {

            $("#upick-cap").offset({
                left: event.pageX + 15,
                top: event.pageY - 15

            })

        })
    })


    $("#upick-img").mouseleave(function () {
        $("#upick-cap").hide();
        $("#upick-img").css('opacity', '100%');

    })




});
