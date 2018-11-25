var topics = ["eggs", "daily show", "snails", "cats", "bunnies"];
var gifSearch;

$(document).on("click", ".topic-button", function () {
    $("#add-gif").on("click", function(event){
        event.preventDefault();
        gifSearch = $("#gif-input").val().trim();
        $("#gif-input").val('');
        topics.push(gifSearch);
        console.log(gifSearch);
    
        renderButtons();
 

    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=1wQx6yxcOuJcqqriBDVG9HTuZ8LdlhWi&limit=10";   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
     console.log(response);

        var gifArray = response.data;


     for (var n = 0; n < gifArray.length; n++) {
      var gifStill = $("<img>");
      gifStill.attr('src', gifArray[n].images.fixed_height_still.url)
      
        $("#gif-stuff").prepend(gifStill);
    }
    });
});
});

function renderButtons() {

    $("#buttons-display").empty();
    
    for (var n = 0; n < topics.length; n++) {
        var topicBtn = $("<button>");
        topicBtn.addClass("topic-button");
        topicBtn.attr("data-name", topics[n]);
        topicBtn.text(topics[n]);
        
    $("#buttons-display").append(topicBtn);
    };
};

$("#add-gif").on("click", function(event){
    event.preventDefault();
    gifSearch = $("#gif-input").val().trim();
    $("#gif-input").val('');
    topics.push(gifSearch);
    console.log(gifSearch);

    renderButtons();
});


renderButtons();


















// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics[n] + "&api_key=QN7whj9Ouv8HaB6fwHQsiQoVxKF5bYsA";


// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function (response){
//     console.log(response);
    // var gifArray = response.data;
    // for (var n = 0; n < gifArray.lenth; n++) {
    //     var gifImage = $("<img>");
    //     gifImage.attr('src', gifArray[n].images.fixed_height.url);
    //     $(".container").append(gifImage);
    // }
// });

// })





