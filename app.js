var subtitle
var blurb
var go

$(document).ready(function () {

})


$("#upick").mouseover(function () {

    $(".thumbnail").empty();
    $(".thumbnailgif").empty();
    $("#port-float-box").css('color', '#B88B37')
    $(".thumbnail").append("<p class='thumb-title'>UPICK</p>")
    subtitle = $("<p>")
    subtitle.addClass("subtitle")
    subtitle.text("MULTIPLAYER RESTAURANT LOCATOR GAME")
    $(".thumbnail").append(subtitle)
    $(".thumbnail").append("<p class='thumb-title2'><mark>TEAM</mark></p>")
    $(".thumbnail").append("<p class='thumb-title2'>ROLE: Project Manager, UI/UX Designer</p>")
    blurb = $("<img>")
    blurb.addClass("blurb")
    blurb.attr('src', 'assets/upickthumb.gif')
    $(".thumbnailgif").append(blurb)
    $(".thumbnail").append("<a href='upick.html'>SEE PROJECT</a>")
    $("body").css('background-image','url(assets/upick-bkgd10.png)');
})

// $("#upick").mouseout(function () {
//     $("#port-float-box").css('background-color', '#FFFFFF')
//     $(".thumb-title").css('color', '000000')
// })



$("#spark").mouseover(function () {
    $(".thumbnail").empty();
    $(".thumbnailgif").empty();
    $("#port-float-box").css('color', '#F6CAC9')
    $(".thumbnail").append("<p class='thumb-title'>spark</p>")
    subtitle = $("<p>")
    subtitle.addClass("subtitle")
    subtitle.text("PRODUCT DESIGN + PROTOTYPE")
    $(".thumbnail").append(subtitle)
    blurb = $("<img>")
    blurb.addClass("blurb")
    blurb.attr('src', 'assets/spark.gif')
    $(".thumbnailgif").append(blurb)
    $(".thumbnail").append("<a href='spark.html'>SEE PROJECT</a>")
    $("body").css('background-image','url(assets/spark-bkgd10.png)');
})

// $("#spark").mouseout(function () {
//     $("#port-float-box").css('background-color', '#FFFFFF')
//     $(".thumb-title").css('color', '000000')
// })



// $("#incarnate").mouseover(function () {

//     $(".thumbnail").empty();
//     $(".thumbnail").append("<p>Incarnate</p>")
//     subtitle = $("<p>")
//     subtitle.addClass("subtitle")
//     subtitle.text("Logo/Pamphlet")
//     $(".thumbnail").append(subtitle)
//     blurb = $("<img>")
//     blurb.addClass("blurb")
//     blurb.attr('src', 'assets/upickthumb.gif')
//     $(".thumbnail").append(blurb)
//     $(".thumbnail").append("<br>")
// })



$("#doomsday").mouseover(function () {
    $(".thumbnail").empty();
    $(".thumbnailgif").empty();
    $("#port-float-box").css('color', '#CC0000')
    $(".thumbnail").append("<p class='thumb-title'>DOOMSDAY</p>")
    subtitle = $("<p>")
    subtitle.addClass("subtitle")
    subtitle.text("Multimedia Testimonial")
    $(".thumbnail").append(subtitle)
    blurb = $("<img>")
    blurb.addClass("blurb")
    blurb.attr('src', 'assets/upickthumb.gif')
    $(".thumbnailgif").append(blurb)
    $(".thumbnail").append("<a href='doomsday.html'>SEE PROJECT</a>")
    $("body").css('background-image','url(assets/doomsday-bkgd10.png)');
})



// $("#doomsday").mouseout(function () {
//     $("#port-float-box").css('background-color', '#FFFFFF')
//     $(".thumb-title").css('color', '000000')
// })


$("#child").mouseover(function () {
    $(".thumbnail").empty();
    $(".thumbnailgif").empty();
    $(".thumbnail").append("<p class='thumb-title'>CHILD</p>")
    $("#port-float-box").css('color', '#000000')
    subtitle = $("<p>")
    subtitle.addClass("subtitle")
    subtitle.text("Streetwear Clothing Line")
    $(".thumbnail").append(subtitle)
    blurb = $("<img>")
    blurb.addClass("blurb")
    blurb.attr('src', 'assets/upickthumb.gif')
    $(".thumbnailgif").append(blurb)
    $(".thumbnail").append("<a href='child.html'>SEE PROJECT</a>")
    $("body").css('background-image','url(assets/child-bkgd10.png)');
})



$("#laundry-room").mouseover(function () {
    $(".thumbnail").empty();
    $(".thumbnailgif").empty();
    $(".thumbnail").append("<p class='thumb-title'>Laundry Room</p>")
    $("#port-float-box").css('color', '#00A14B')
    subtitle = $("<p>")
    subtitle.addClass("subtitle")
    subtitle.text("Design Tutoring App")
    $(".thumbnail").append(subtitle)
    blurb = $("<img>")
    blurb.addClass("blurb")
    blurb.attr('src', 'assets/upickthumb.gif')
    $(".thumbnailgif").append(blurb)
    $("body").css('background-image','url(assets/lr-bkgd10.png)');
    $(".thumbnail").append("<a href='lr.html'>SEE PROJECT</a>")
})



$("#instagram").mouseover(function () {

    $(".thumbnail").empty();
    $(".thumbnailgif").empty();
    $(".thumbnail").append("<p>Instagram Stories</p>")
    subtitle = $("<p>")
    subtitle.addClass("subtitle")
    subtitle.text("Imperfect Experiemental")
    $(".thumbnail").append(subtitle)
    blurb = $("<img>")
    blurb.addClass("blurb")
    blurb.attr('src', 'assets/upickthumb.gif')
    $(".thumbnailgif").append(blurb)
    $(".thumbnail").append("<a href='ig.html'>SEE PROJECT</a>")
})



///RESUME
var resumeInfoListItem
var ccList = ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects", "Adobe Lightroom", "Adobe InDesign", "Adobe Animate"]
var threeDList = ["Rhinocerous 3d", "Revit", "Autocad", "SketchUp", "Lasercutting"];
var filmSoundList = ["Adobe After Effects", "Final Cut Pro X", "iMovie", "Audacity", "Midas Pro 6"];
var codeList = ["HTML", "CSS", "Javascript", "jQuery", "moment.js", "node.js", "JSON", "npm", "Unity"]
var prototypingList = ["Principle", "Sketch"];
var currentlyList = ["Unity", "C#", "node.js", "three.js"];

$(".creative-cloud").mouseover(function () {
    $(".resume-info-list").empty();
    for (var n = 0; n < ccList.length; n++) {
        resumeInfoListItem = $("<p>");
        resumeInfoListItem.addClass("res-info-list-item");
        resumeInfoListItem.append(ccList[n]);
        $(".resume-info-list").append(resumeInfoListItem);
    }
})

// $(".creative-cloud").mouseout(function() {
//     $(".resume-info-list").text("");
// })

$(".3d").mouseover(function () {
    $(".resume-info-list").empty();
    for (var n = 0; n < threeDList.length; n++) {
        resumeInfoListItem = $("<p>");
        resumeInfoListItem.addClass("res-info-list-item");
        resumeInfoListItem.append(threeDList[n]);
        $(".resume-info-list").append(resumeInfoListItem);
    }
})

// $(".3d").mouseout(function() {
//     $(".resume-info-list").text("");
// })

$(".filmSound").mouseover(function () {
    $(".resume-info-list").empty();
    for (var n = 0; n < filmSoundList.length; n++) {
        resumeInfoListItem = $("<p>");
        resumeInfoListItem.addClass("res-info-list-item");
        resumeInfoListItem.append(filmSoundList[n]);
        $(".resume-info-list").append(resumeInfoListItem);
    }
})

// $(".filmSound").mouseout(function() {
//     $(".resume-info-list").text("");
// })

$(".code").mouseover(function () {
    $(".resume-info-list").empty();
    for (var n = 0; n < codeList.length; n++) {
        resumeInfoListItem = $("<p>");
        resumeInfoListItem.addClass("res-info-list-item");
        resumeInfoListItem.append(codeList[n]);
        $(".resume-info-list").append(resumeInfoListItem);
    }
})

// $(".code").mouseout(function() {
//     $(".resume-info-list").text("");
// })

$(".prototyping").mouseover(function () {
    $(".resume-info-list").empty();
    for (var n = 0; n < prototypingList.length; n++) {
        resumeInfoListItem = $("<p>");
        resumeInfoListItem.addClass("res-info-list-item");
        resumeInfoListItem.append(prototypingList[n]);
        $(".resume-info-list").append(resumeInfoListItem);
    }
})

// $(".prototyping").mouseout(function() {
//     $(".resume-info-list").text("");
// })

$(".currently").mouseover(function () {
    $(".resume-info-list").empty();
    for (var n = 0; n < currentlyList.length; n++) {
        resumeInfoListItem = $("<p>");
        resumeInfoListItem.addClass("res-info-list-item");
        resumeInfoListItem.append(currentlyList[n]);
        $(".resume-info-list").append(resumeInfoListItem);
    }
})

// $(".currently").mouseout(function() {
//     $(".resume-info-list").text("");
// })


///EXPERIENCE AND EDUCATION

$(".SAIC").mouseover(function () {
    $(".exp-edu-info-list").html("<p>School of the Art Institute of Chicago</p><br><p>Bachelors of Fine Arts</p><br><p>Aug 2016-May2017</p><br><p>Visual Communication Design major</p><br><p>Architecture major</p><br><p>[Incomplete]</p>")
})

// $(".SAIC").mouseout(function() {
//     $(".exp-edu-info-list").html("");
// })

$(".UCB").mouseover(function () {
    $(".exp-edu-info-list").html("<p>Full Stack Coding Bootcamp</p><br><p>Oct 2018-Feb 2019</p>")
})
// $(".UCB").mouseout(function() {
//     $(".exp-edu-info-list").html("");
// })

$(".Incarnate").mouseover(function () {
    $(".exp-edu-info-list").html("<p>Incarnate School of the Arts</p><br><p>Isola del Gran Sasso, Italy</p><br><p>Maio Li, Taiwan</p><br><p>Jan 2018-Jun 2018</p>")
})
// $(".Incarnate").mouseout(function() {
//     $(".exp-edu-info-list").html("");
// })

