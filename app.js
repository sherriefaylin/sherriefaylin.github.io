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
    for (var n = 0; n < ccList.length; n++) {
    resumeInfoListItem = $("<p>");
    resumeInfoListItem.addClass("res-info-list-item");
    resumeInfoListItem.append(ccList[n]);
    $(".resume-info-list").append(resumeInfoListItem);
    }
})

$(".creative-cloud").mouseout(function() {
    $(".resume-info-list").text("");
})

$(".3d").mouseover(function() {
    for (var n = 0; n < threeDList.length; n++) {
    resumeInfoListItem = $("<p>");
    resumeInfoListItem.addClass("res-info-list-item");
    resumeInfoListItem.append(threeDList[n]);
    $(".resume-info-list").append(resumeInfoListItem);
    }
})

$(".3d").mouseout(function() {
    $(".resume-info-list").text("");
})

$(".filmSound").mouseover(function() {
    for (var n = 0; n < filmSoundList.length; n++) {
    resumeInfoListItem = $("<p>");
    resumeInfoListItem.addClass("res-info-list-item");
    resumeInfoListItem.append(filmSoundList[n]);
    $(".resume-info-list").append(resumeInfoListItem);
    }
})

$(".filmSound").mouseout(function() {
    $(".resume-info-list").text("");
})

$(".code").mouseover(function() {
    for (var n = 0; n < codeList.length; n++) {
    resumeInfoListItem = $("<p>");
    resumeInfoListItem.addClass("res-info-list-item");
    resumeInfoListItem.append(codeList[n]);
    $(".resume-info-list").append(resumeInfoListItem);
    }
})

$(".code").mouseout(function() {
    $(".resume-info-list").text("");
})

$(".prototyping").mouseover(function() {
    for (var n = 0; n < prototypingList.length; n++) {
    resumeInfoListItem = $("<p>");
    resumeInfoListItem.addClass("res-info-list-item");
    resumeInfoListItem.append(prototypingList[n]);
    $(".resume-info-list").append(resumeInfoListItem);
    }
})

$(".prototyping").mouseout(function() {
    $(".resume-info-list").text("");
})

$(".currently").mouseover(function() {
    for (var n = 0; n < currentlyList.length; n++) {
    resumeInfoListItem = $("<p>");
    resumeInfoListItem.addClass("res-info-list-item");
    resumeInfoListItem.append(currentlyList[n]);
    $(".resume-info-list").append(resumeInfoListItem);
    }
})

$(".currently").mouseout(function() {
    $(".resume-info-list").text("");
})