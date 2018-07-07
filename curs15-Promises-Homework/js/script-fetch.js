/* global $ */
$(onHtmlLoaded);

function onHtmlLoaded() {
    var jokesRootUrl = "https://api.icndb.com/jokes";
    
   getJokesFromApi(jokesRootUrl) 
   
        .then(get10Jokes, displayError)
        .then(function(response) {
            console.log('2', response.length);  
            displayJokes(response, jokesRootUrl);
            return 1726;
        })
        .then(function(response2) {
            x.a = 2; /* global x */
            console.log(response2); 
        })
        .catch(console.log);
}

function getJokesFromApi(jokesRootUrl) {
     var futureResponseFromAPI = fetch(jokesRootUrl, {
         method: 'GET'
     }).then(function(response) {
         return response.json();
     });
     
     return futureResponseFromAPI
     .then(function(j) {
         console.log('1', j.value.length);  

         var jokes = j.value.slice(0, 30);
         return jokes;
     });
}

function get10Jokes(jokes) {
    return jokes.slice(0, 10);
}

function displayJokes(jokes, jokesRootUrl) {
    
    var template = document.getElementById("template");
    var jokesContainer = document.getElementById("jokes");
    
    for (var i = 0; i < 10; i++) {
        
        var jokeClone = template.cloneNode(true);
        jokeClone.id = "joke_" + jokes[i].id;
        
        var jokeId = jokeClone.querySelector(".joke-id");
        jokeId.innerHTML = jokes[i].id + ". " + jokes[i].joke;
        
        jokesContainer.appendChild(jokeClone);
    }
}

function displayError(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
    var jokesContainer = document.getElementById("jokes");
    jokesContainer.innerHTML = 
    "We're sorry. The request failed with status " + jqXHR.status;
}
