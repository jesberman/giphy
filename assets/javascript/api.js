

var topics = ["dog", "cat", "wolf", "horse", "rabbit"];

var i;


var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=xDn761pgiJE7K6XPZyHErV3h1V4NNmgx&limit=10";

for (i=0; i < 5; i++) {

    var buttons = $('<button>'+ topics[i] + '</button>') 
    
    buttons.addClass("main-buttons");

    buttons.appendTo('#topics'); 
    

}






$("#topics").on("click",".main-buttons" , function() {


    var searchTerm = $(this).text();

    var searchParam = "&q=" + searchTerm;


    var url = queryURL + searchParam


   $.ajax({
     url: url,
     method: "GET"
     }).then(function(response) {
         var gifData = response.data



         for (i=0; i < 10; i++) {


            var gif = $('<img>');
            gif.attr("src", gifData[i].images.fixed_height_still.url);
            gif.attr("animated", gifData[i].images.fixed_height_downsampled.url);
            gif.attr("still", gifData[i].images.fixed_height_still.url);
            gif.attr("state", "still");

            gif.appendTo("#gifs");


            //gif.append("hello", gifData[i].data.rating.val());





        }

     console.log(response);
  });




    console.log($(this))
}

);





$("#gifs").on("click", "img", function() {
    console.log("It worked!");
    //animationEnd($this);
    console.log($(this).attr("state"));

    if ($(this).attr("state") === "animated") {
        $(this).attr("state", "still");

        $(this).attr("src", $(this).attr("still") ); 


    }
    else {
        $(this).attr("state", "animated");

        $(this).attr("src", $(this).attr("animated") ); 



    }


});




$("#add-animal").on("click", function(event) {


    //var newAnimal = $('<button>'+ "#animalInput".text + '</button>');
    //alert("working");
    //alert(newAnimal);

    event.preventDefault();

    //var a = "<button>" + "Hello" + "</button>";
    //topics=topics + a;

    var b = $("#animal-input").val().trim();
    //topics=topics + b;

    //var c = "<button>" + b + "</button>";


    topics.push(b);
    //$("#topics").append(a);

    //$("#topics").append(b);

    var c = $('<button>'+ b + '</button>') 

    $(c).addClass("main-buttons");

    $("#topics").append(c);


    //topics.push(c);

//    event.preventDefault();

//    var newAnimal = $("#animal-input").val().trim();

//    topics.push(newAnimal);
//    renderButtons();

    console.log(topics);
    console.log(topics[1]);

});

//renderButtons();






