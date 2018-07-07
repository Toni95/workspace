/*global $*/
$(onHtmlLoaded);

function onHtmlLoaded() { 
    var jokeButton = document.getElementById("joke-button");
    jokeButton.addEventListener("click", function() {
        console.log('here 1');
        
        $.ajax({
           url:  'https://api.icndb.com/jokes/random/',
           method: 'GET',
           success: function(response) { // response is just a variable name
               console.log(response);
               
               var jokeElement = document.getElementById("joke");
               jokeElement.innerText = "Id: " + response.value.id + " Random joke: " + response.value.joke;
           }
        });
        
        // console.log(response);  // undefined
        
    });
    
    // will be displayed before 'here 1'
    console.log('here 2');
}