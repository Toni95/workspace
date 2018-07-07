// window.addEventListener("load" ,function(){
//     var containerEl = document.getElementById("articles-list");
//     var articleModels = new Articles();
//     articleModels.getAll().then(displayAllArticles);
    
    
//     function displayAllArticles(articlesData){
//         for(var i=0; i<articlesData.length; i++){
//             // create Article model instance
//             var article = new Article();
//             article.id = articlesData[i]._id;
//             article.title = articlesData[i].title;
//             article.body = articlesData[i].description;
//             article.img = articlesData[i].img;
            
//             displayArticle(article);
//         } 
//     }
    
//     function displayArticle(article){
//          var liEl = document.createElement('div');
//         liEl.className = article.id;

//          var titleEl = document.createElement('h2');
//          titleEl.innerHTML = article.title;
//         // titleEl.setAttribute("href", "https://front-end-grupa3-antoniopatraska.c9users.io/curs17-OOP-workshop/pages/article.html?articleId="+article.id);
//          liEl.appendChild(titleEl);
	
//          var bodyEl = document.createElement('p');
//          bodyEl.innerHTML = article.body;
//          liEl.appendChild(bodyEl);
       
// 		 var seeMore = document.createElement('a');
//          seeMore.className = 'btn btn-success';
//          seeMore.innerHTML = 'See More ';
// 		 seeMore.setAttribute("href", "../pages/article.html?articleId="+article.id);
         
//          liEl.appendChild(seeMore);
         
//          var deleteButton = document.createElement('a');
//          deleteButton.className = 'btn btn-danger pull-right';
//          deleteButton.innerHTML = ' Delete';
//          deleteButton.addEventListener("click", function(event) {
//             console.log('x');
//             deleteGame(event, articlesRootUrl);
//         });
        
         
//          liEl.appendChild(deleteButton);
		
//          containerEl.appendChild(liEl);
//     }
// });

// function deleteGame(event, articlesRootUrl) {
//     console.log('event', event); 
    
//     var articleId = event.path[2].id;
//     console.log('here',articleId);
//     fetch(articlesRootUrl + "/" + articleId, {
//         method: 'DELETE' 
//     }).then(function(response) {
//         console.log(response.json());
//     }).then(function(response) {
//         console.log('response', response);
//         event.path[2].remove();
//     });
// }
window.addEventListener("load" ,function onHtmlLoaded() {
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
});

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
        gamesClone.id = "game_" + games[i]._id;
       
        var gameTitle = gamesClone.querySelector(".game-title");
        gameTitle.innerHTML = games[i].title;
        gameTitle.setAttribute("href", "../pages/game.html?gameId="+ games[i]._id);
        
        var gameDescription = gamesClone.querySelector(".game-description");
        gameDescription.innerHTML = games[i].description;
        
        
        var deleteButton = gamesClone.querySelector(".game-delete");
        deleteButton.addEventListener("click", function(event) {   
        deleteGame(event, gamesRootUrl);   
            
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
   
    fetch(gamesRootUrl + "/?/" + gameId, {
        method: 'DELETE' 
    }).then(function(response) {
        console.log(response.json());
    }).then(function(response) {
        console.log('response', response);
        event.path[2].remove();
    });
}

