var topics = ["america","anime", "architecture", "art", "astronomy", "england", "geography", "geology", "greek gods", "history", "japan", "maps", "photography", "physics", "roman empire", "sci-fi", "space", "star trek"];

function displayGifs() {

    var btnClicked = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + btnClicked + "&api_key=kXndskHGKarskw0YKMkCGXJIteCs3jsi&limit=10";

    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(url);
        console.log(response);

    // var results = response.data;
        // for (i = 0; i < results.length; i++) {
            
            //   var tempDiv = $("<div>");

            //   var rating = response.data.rating;
            //   var stillUrl = response.data.images.fixed_height_still.url;
            //   var animateUrl = response.data.images.fixed_height.url;
            
            //   var gifRating = $("<h3>").text("Rating: " + rating);
            //   var gifPoster =  $("<img>").attr({
                    // 'src': stillUrl, 
                    // 'data-still': stillUrl,
                    // 'data-animate': animateUrl,
                    // 'data-state': 'still',
                    // 'class: 'gif"
                     

            //   tempDiv.append(gifRating, gifStillPoster);
            //   $("#displayDiv").prepend(tempDiv);

    
    });

  }



    // Function for displaying movie data
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


$(document).on("click", ".gifbtn", displayGifs);

// Calling the renderButtons function to display the intial buttons
renderButtons();

//1. why is ajax not a function ?
//2. can concat the attr() ?


