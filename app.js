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

$(".creative-cloud").mouseover(function() {
    for (var n = 0; n < ccList.length; n++) {
    resumeInfoListItem = $("<li>")
    resumeInfoListItem.addClass("res-info-list-item")
    resumeInfoListItem.append(ccList[n])
    $(".resume-info").append(resumeInfoList)
    }
})