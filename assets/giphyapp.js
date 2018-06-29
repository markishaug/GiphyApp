var topics = ["america","anime", "architecture", "art", "astronomy", "england", "geography", "geology", "greek gods", "history", "japan", "maps", "photography", "physics", "roman empire", "sci-fi", "space", "star trek"];

function displayGifs() {
    $("#displayDiv").empty();
    var randOffset = Math.floor((Math.random() * 40) + 1); //allow for a random offset to vary return gifs
    var btnClicked = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + btnClicked + "&api_key=kXndskHGKarskw0YKMkCGXJIteCs3jsi&limit=10&rating=g&offset=" + randOffset;


    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        var results = response.data;
        for (i = 0; i < results.length; i++) {
            
              var tempDiv = $("<div class=image-bucket>");

              var rating = response.data[i].rating;
              var stillUrl = response.data[i].images.fixed_height_still.url;
              var animateUrl = response.data[i].images.fixed_height.url;
            
              var gifRating = $("<h6>").text("Rating: " + rating);
              var gifPoster =  $("<img>").attr({
                    'src': stillUrl, 
                    'data-still': stillUrl,
                    'data-animate': animateUrl,
                    'data-state': 'still',
                    'class': 'gifDown'
              });    

              tempDiv.append(gifRating, gifPoster);
              $("#displayDiv").prepend(tempDiv);
        };
        });
  }; // end displayGifs function


// create buttons
function renderButtons() {
    // Deletes the buttons prior to adding new gifs to avoid repeat buttons
    $("#btnbar").empty();
    // Loops through the array of gifs
    for (var i = 0; i < topics.length; i++) {

        // Then dynamicaly generates buttons for each topic in the array
        var a = $("<button>");
            a.addClass("gifbtn btn btn-primary");
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $("#btnbar").append(a);
        }
    
} // end renderButtons function



// function newButton (){
//     var btnClicked = $(this).attr("data-name");


//     $("#addTopicBtn").on("click", function(event) {
//         event.preventDefault();
//         var newTopic = $("#addTopic").val().trim();
    
//         topics.push(newTopic);
    
//         renderButtons();
//     });
// }


function changeState() { // toggle the data-state, switiching from still and animated URL
    var state = $(this).attr("data-state");
    
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
  };


$(document).on("click", ".gifbtn", displayGifs);
$(document).on("click", ".gifDown", changeState);
// $(document).on("click", "#addTopicBtn", newButton);

// Calling the renderButtons function to display the intial buttons
renderButtons();



//todo
// do not add button if field is empty
// clear field after clicking 'add a topic'

// clear the field so it is empty; if it is empty it won't add a blank button 



// This function handles events where a movie button is clicked
// $("#addTopicBtn").on("click", function(event) {
    // event.preventDefault();
    // This line grabs the input from the textbox
    // var newTopic = $("#addTopic").val().trim();

    // Adding movie from the textbox to our array
    // topics.push(newTopic);

    // Calling renderButtons which handles the processing of our movie array
    // renderButtons();
// });