//Global Variables

//Topics array, stores the strings that will be used to create the buttons
var topics = ["dog", "cat", "wolf", "horse", "rabbit"];

//i variable, used in the coming for loop
var i;

//URL that will be used for the  api request
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=xDn761pgiJE7K6XPZyHErV3h1V4NNmgx&limit=10";





//for loop, used to create the buttons dynamically
for (i=0; i < 5; i++) {

    //creates the "buttons" variable, which will be a button that takes the name of each iterations of the "topics" variable that the for loop goes through
    var buttons = $('<button>'+ topics[i] + '</button>') 

    //Gives each button the class "main-buttons"
    buttons.addClass("main-buttons");

    //takes what has just been created and places it in the "topics" div in the html, creating the initial buttons dynamically 
    buttons.appendTo('#topics'); 
    

}





//Function that runs whenever one of the "main-buttons" is clicked.  Designed to send the ajax request for information on the giphys
$("#topics").on("click",".main-buttons" , function() {

    //new variable that is created when a "main-button" is clicked
    var searchTerm = $(this).text();

    //new variable that adds the searchTerm variable to "&q="
    var searchParam = "&q=" + searchTerm;


    //new variable that adds the queryURL variable to the searchParam variable.  Creates the URL necessary for the API request
    var url = queryURL + searchParam


    //ajax call that requests information from the website with the corresponding URL
   $.ajax({
     url: url,
     method: "GET"
     }).then(function(response) {
         var gifData = response.data


        //for loop that runs when the ajax request is made.  Designed to generate 10 appropriate images for each request
         for (i=0; i < 10; i++) {

            //creates a new variable that corresponds to any div tags in the html
            var div = $("<div>");
            //creates a new variable that corresponds to any image tags in the html
            var gif = $('<img>');
            
            //Code used to identify the specific types of gifs to be used for the site, including both 
            //animated and still images.  Gives the gifs the attributes of "animated" and "still", and sets their
            //default state to "still"
            gif.attr("src", gifData[i].images.fixed_height_still.url);
            gif.attr("animated", gifData[i].images.fixed_height_downsampled.url);
            gif.attr("still", gifData[i].images.fixed_height_still.url);
            gif.attr("state", "still");


            //Appends the gif variable to a div
            div.append(gif);


            //Appends to each gif its corresponding title
            var title2 = ("title",gifData[i].title);
            div.append("<div>" + "Title: " + title2 + "</div");

            //Appends to each gif its corresponding rating
            div.append("<div>"+"Rating: " + rating2 + "</div");
            var rating2 = ("rating",gifData[i].rating);


            div.appendTo("#gifs");

            //creates css styling for each gif, floating them left and giving each one a border
            div.css("float" , "left");
            div.css("border-style", "solid");
            div.css("border-width", "5px");
            div.css("border-color" , "black");



        }

     console.log(response);
  });




    console.log($(this))
}

);




//creates and event listener that activates when the user clicks on a gif
$("#gifs").on("click", "img", function() {

    console.log($(this).attr("state"));

    //If else statement that switches a still image with its animated variant when clicked on.  Or, it 
    //switches an animated image with its still variant when clicked on
    if ($(this).attr("state") === "animated") {
        $(this).attr("state", "still");

        $(this).attr("src", $(this).attr("still") ); 


    }
    else {
        $(this).attr("state", "animated");

        $(this).attr("src", $(this).attr("animated") ); 



    }


});



//event listener that activates when the user clicks on the "Add an animal" button
$("#add-animal").on("click", function(event) {




    event.preventDefault();


    //creates the variable "animalInput", and sets it to equal the trimmed value of what the user enters into 
    //the animal input field
    var animalInput = $("#animal-input").val().trim();



    //pushes the "animalInput" variable into the "topics" array
    topics.push(animalInput);


    //creates the "newAnimalButton" variable, and sets it to equal "animalInput" wrapped between button tags
    var newAnimalButton = $('<button>'+ animalInput + '</button>') 

    //adds to the "newAnimalButton" variable the class of "main-buttons", which are already shared by the buttons that
    //are already created automatically
    $(newAnimalButton).addClass("main-buttons");

    //Appends to the "topics" div the newAnimalButton variable
    $("#topics").append(newAnimalButton);




    console.log(topics);
    console.log(topics[1]);

});







