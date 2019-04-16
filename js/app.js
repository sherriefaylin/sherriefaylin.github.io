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
    $(".thumbnail").append("<p class='thumb-title2'><mark>Team</mark></p>")
    $(".thumbnail").append("<p class='thumb-title2'><mark>Role: Project Manager, UI/UX Designer</mark></p>")
    $(".thumbnail").append("<p class='thumb-title2'><mark>11/2018</mark></p>")
    $(".thumbnail").append("<p class='descr'>Can't decide where to eat? u pick will pick a resturant for you, near you.</p>")
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
    $(".thumbnail").append("<p class='thumb-title2'><mark>Solo</mark></p>")
    $(".thumbnail").append("<p class='thumb-title2'><mark>10/2017</mark></p>")
    $(".thumbnail").append("<p class='descr'>Spark tracks the strength of love between two hearts through daily events that either strengthen or weaken your love for one another in order to save your broken marriage, lost friendship, or faded familial relationship.</p>")
    blurb = $("<img>")
    blurb.addClass("blurb")
    blurb.attr('src', 'assets/spark.gif')
    $(".thumbnailgif").append(blurb)
    $(".thumbnail").append("<a href='spark.html'>SEE PROJECT</a>")
    $("body").css('background-image','url(assets/spark-bkgd10.png)');
})




$("#doomsday").mouseover(function () {
    $(".thumbnail").empty();
    $(".thumbnailgif").empty();
    $("#port-float-box").css('color', '#CC0000')
    $(".thumbnail").append("<p class='thumb-title'>DOOMSDAY</p>")
    subtitle = $("<p>")
    subtitle.addClass("subtitle")
    subtitle.text("Multimedia Testimonial")
    $(".thumbnail").append(subtitle)
    $(".thumbnail").append("<p class='thumb-title2'><mark>Solo [with assistance from South-African filmmaker Kotie-Alet Agenbag]</mark></p>")
    $(".thumbnail").append("<p class='thumb-title2'><mark>04/2018</mark></p>")
    $(".thumbnail").append("<p class='descr'>DOOMSDAY is an art piece at the cross section between film, sound, spoken word, fine arts, design, and dance.</p>")
    $(".thumbnail").append("<p class='descr'>Credits: Music from Bishop Briggs, Vancouver Sleep Clinic</p>")
    $(".thumbnail").append("<p class='descr'>Credits: Some visuals from GIPHY</p>")
    blurb = $("<img>")
    blurb.addClass("blurb")
    blurb.attr('src', 'assets/doomsday.gif')
    $(".thumbnailgif").append(blurb)
    $(".thumbnail").append("<a href='doomsday.html'>SEE PROJECT</a>")
    $("body").css('background-image','url(assets/doomsday-bkgd10.png)');
})




$("#child").mouseover(function () {
    $(".thumbnail").empty();
    $(".thumbnailgif").empty();
    $(".thumbnail").append("<p class='thumb-title'>CHILD</p>")
    $("#port-float-box").css('color', '#000000')
    subtitle = $("<p>")
    subtitle.addClass("subtitle")
    subtitle.text("Streetwear Clothing Line")
    $(".thumbnail").append(subtitle)
    $(".thumbnail").append("<p class='thumb-title2'><mark>Solo</mark></p>")
    $(".thumbnail").append("<p class='thumb-title2'><mark>07/2017</mark></p>")
    $(".thumbnail").append("<p class='descr'>Inspired by millenials in Christian communities across the world, CHILD is a streetwear that strives to translate their stories into minimally designed streetwear.</p>")
    blurb = $("<img>")
    blurb.addClass("blurb")
    blurb.attr('src', 'assets/child.gif')
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
    subtitle.text("Design Networking App [Prototype]")
    $(".thumbnail").append(subtitle)
    $(".thumbnail").append("<p class='thumb-title2'><mark>Solo</mark></p>")
    $(".thumbnail").append("<p class='thumb-title2'><mark>05/2017</mark></p>")
    $(".thumbnail").append("<p class='descr'>Triggered by the gaping hole between design beginners and professionals, Laundry Room is intended to create a bridge between the two levels and build a new, virtual community for students and seasoned designers.</p>")
    blurb = $("<img>")
    blurb.addClass("blurb")
    blurb.attr('src', 'assets/lr.gif')
    $(".thumbnailgif").append(blurb)
    $("body").css('background-image','url(assets/lr-bkgd10.png)');
    $(".thumbnail").append("<a href='lr.html'>SEE PROJECT</a>")
})



// $("#instagram").mouseover(function () {

//     $(".thumbnail").empty();
//     $(".thumbnailgif").empty();
//     $(".thumbnail").append("<p>Instagram Stories</p>")
//     subtitle = $("<p>")
//     subtitle.addClass("subtitle")
//     subtitle.text("Imperfect Experiemental")
//     $(".thumbnail").append(subtitle)
//     blurb = $("<img>")
//     blurb.addClass("blurb")
//     blurb.attr('src', 'assets/upickthumb.gif')
//     $(".thumbnailgif").append(blurb)
//     $(".thumbnail").append("<a href='ig.html'>SEE PROJECT</a>")
// })



///RESUME
var resumeInfoListItem
var ccList = ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects", "Adobe Lightroom", "Adobe InDesign", "Adobe Animate"]
var threeDList = ["Rhinocerous 3D", "Revit", "Autocad", "SketchUp", "Lasercutting"];
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
    $(".exp-edu-info-list").html("<p class='school'>School of the Art Institute of Chicago</p><br><p class='date'>08/<br>2016-<br>05/<br>2017</p><br><p>Bachelors of Fine Arts [Incomplete]</p><p>Visual Communication Design major + </p><p>Architecture major</p>")
})

// $(".SAIC").mouseout(function() {
//     $(".exp-edu-info-list").html("");
// })
$(".Incarnate").mouseover(function () {
    $(".exp-edu-info-list").html("<p class='school'>Incarnate School of the Arts</p><br><p class='date'>01/<br>2018-<br>06/<br>2018</p><br><p>Study Abroad: </p><p>Isola del Gran Sasso, Italy</p><p>Maio Li, Taiwan</p>")
})

$(".UCB").mouseover(function () {
    $(".exp-edu-info-list").html("<p class='school'>Full Stack Coding Bootcamp</p><br><p class='date'>10/<br>2018-<br>02/<br>2019</p><br><p>Full-time</p><p>Full Stack Flex Program</p>")
})
// $(".UCB").mouseout(function() {
//     $(".exp-edu-info-list").html("");
// })

// $(".Incarnate").mouseout(function() {
//     $(".exp-edu-info-list").html("");
// })

