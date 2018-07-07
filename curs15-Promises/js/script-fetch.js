$(onHtmlLoaded);

function onHtmlLoaded() {
    var gamesRootUrl = "https://games-world.herokuapp.com/games";
    

   getGamesFromApi(gamesRootUrl) 
        .then(getGames, displayError)
        .then(function(response) {
            console.log('test2', response.length); 
            displayGames(response, gamesRootUrl);
            return 1726;
        })
        .then(function(response2) {
            x.a = 2;
            console.log(response2); 
        })
        .catch(console.log);
}

function getGamesFromApi(gamesRootUrl) {
     var futureResponseFromAPI = fetch(gamesRootUrl, {
         method: 'GET'
     }).then(function(response) {
         return response.json();
     });
     
     return futureResponseFromAPI
     .then(function(j) {
         console.log('1', j.length); 
         
         var games = j.slice(0, 30);
         return games;
     });
}

function getGames(games) {
    
    return games;
}

function displayGames(games, gamesRootUrl) {
    
    // get the template
    var template = document.getElementById("template");
    var gamesContainer = document.getElementById("games");
    
    for (var i = 0; i < games.length; i++) {
       
        var gamesClone = template.cloneNode(true);
        // gamesClone.id = "game_" + games[i]._id;
       
        var gameTitle = gamesClone.querySelector(".game-title");
        gameTitle.innerHTML = games[i].title;
        
        // var gameDescription = gamesClone.querySelector(".game-description");
        // gameDescription.innerHTML = games[i].description;
        
        var deleteButton = gamesClone.querySelector(".game-delete");
        deleteButton.addEventListener("click", function(event) {
            console.log('x', gamesClone);
            deleteGame(event, gamesRootUrl);   
        });
        
        var editButton = gamesClone.querySelector(".game-edit");
        editButton.addEventListener("click", function(event) {
            editGame(event, gamesRootUrl);
        });
        
     
        gamesContainer.appendChild(gamesClone);
    }
}

function displayError(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
    var gamesContainer = document.getElementById("games");
    gamesContainer.innerHTML = 
    "We're sorry. The request failed with status " + jqXHR.status;
}

function deleteGame(event, gamesRootUrl) {
    console.log('event', event); 
   
    var gameId = event.path[2].id.replace("games_", "");
   
    fetch(gamesRootUrl + "/" + gameId, {
        method: 'DELETE' 
    }).then(function(response) {
        console.log(response.json());
    }).then(function(response) {
        console.log('response', response);
        event.path[2].remove();
    });
}

function editGame(event, gamesRootUrl){
    var gameId = event.path[2].id.replace("game_", "");
    var gameDescription = event.path[2].querySelector(".game-description");
    
    fetch(gamesRootUrl + "/" + gameId, {
        method: "PUT",
        body: JSON.stringify({
            body: "My body " + gameId
        })
    }).then(function(response) {
        return response.json();
    }).then(function(response){
        console.log(response);
        gameDescription.innerHTML = response.body;
    });
}