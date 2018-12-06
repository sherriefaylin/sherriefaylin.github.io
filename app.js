$("#upick").mouseover(function() {
    $(".thumbnail").append("<p>UPICK Info</p>")
})

$("#upick").mouseout(function() {
    $(".thumbnail").text("")
})

$("#spark").mouseover(function() {
    $(".thumbnail").append("<p>spark Info</p>")
})

$("#spark").mouseout(function() {
    $(".thumbnail").text("")
})

$("#incarnate").mouseover(function() {
    $(".thumbnail").append("<p>Incarnate Info</p>")
})

$("#incarnate").mouseout(function() {
    $(".thumbnail").text("")
})

$("#doomsday").mouseover(function() {
    $(".thumbnail").append("<p>DOOMSDAY Info</p>")
})

$("#doomsday").mouseout(function() {
    $(".thumbnail").text("")
})

$("#child").mouseover(function() {
    $(".thumbnail").append("<p>CHILD Info</p>")
})

$("#child").mouseout(function() {
    $(".thumbnail").text("")
})

$("#laundry-room").mouseover(function() {
    $(".thumbnail").append("<p>Laundry Room Info</p>")
})

$("#laundry-room").mouseout(function() {
    $(".thumbnail").text("")
})

$("#instagram").mouseover(function() {
    $(".thumbnail").append("<p>Instagram Info</p>")
})

$("#instagram").mouseout(function() {
    $(".thumbnail").text("")
})


///RESUME
var resumeInfoListItem
var ccList = ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects", "Adobe Lightroom", "Adobe InDesign", "Adobe Animate"]
var threeDList= ["Rhinocerous 3d", "Revit", "Autocad", "SketchUp", "Lasercutting"];
var filmSoundList= ["Adobe After Effects", "Final Cut Pro X", "iMovie", "Audacity", "Midas Pro 6"];
var codeList= ["HTML", "CSS", "Javascript", "jQuery", "moment.js", "node.js", "JSON", "npm", "Unity"]
var prototypingList= ["Principle", "Sketch"];
var currentlyList= ["Unity", "C#", "node.js", "three.js"];

$(".creative-cloud").mouseover(function() {
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

$(".3d").mouseover(function() {
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

$(".filmSound").mouseover(function() {
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

$(".code").mouseover(function() {
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

$(".prototyping").mouseover(function() {
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

$(".currently").mouseover(function() {
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

$(".SAIC").mouseover(function() {
   $(".exp-edu-info-list").html("<p>School of the Art Institute of Chicago</p><br><p>Bachelors of Fine Arts</p><br><p>Aug 2016-May2017</p><br><p>Visual Communication Design major</p><br><p>Architecture major</p><br><p>[Incomplete]</p>")
})

// $(".SAIC").mouseout(function() {
//     $(".exp-edu-info-list").html("");
// })

$(".UCB").mouseover(function() {
    $(".exp-edu-info-list").html("<p>Full Stack Coding Bootcamp</p><br><p>Oct 2018-Feb 2019</p>")
})
// $(".UCB").mouseout(function() {
//     $(".exp-edu-info-list").html("");
// })

$(".Incarnate").mouseover(function() {
    $(".exp-edu-info-list").html("<p>Incarnate School of the Arts</p><br><p>Isola del Gran Sasso, Italy</p><br><p>Maio Li, Taiwan</p><br><p>Jan 2018-Jun 2018</p>")
})
// $(".Incarnate").mouseout(function() {
//     $(".exp-edu-info-list").html("");
// })

