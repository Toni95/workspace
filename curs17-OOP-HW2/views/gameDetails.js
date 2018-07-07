window.addEventListener("load", function(){
    var container = document.getElementById('article-details');
    var article = new Article();
    var gameId = getUrlParameter("gameId");
    article.id = gameId;
    console.log(gameId);
    article.getArticleDetails().then(displayGameDetails);
   var gamesRootUrl = "https://games-world.herokuapp.com/games";
    
    
    function displayGameDetails(gameDetails) {
        
        
        var titleEl = document.createElement('h3');
        titleEl.innerHTML = gameDetails.title;
        container.appendChild(titleEl);
        
        var imgEl = document.createElement('img');
        imgEl.src = article.imageUrl;
        container.appendChild(imgEl);
        
        var brEl = document.createElement('br');
        brEl.innerHTML = '';
        container.appendChild(brEl);
        var bodyEl = document.createElement('p');
        bodyEl.innerHTML = gameDetails.description;
        container.appendChild(bodyEl);
        
        var editButton = document.createElement('a');
        editButton.className = 'btn btn-primary';
        editButton.innerHTML = 'Edit';
        editButton.addEventListener("click", function(event) {   
        editGame(event, gamesRootUrl);   
        });
        container.appendChild(editButton);
        
    }
    
    function editGame(event, gamesRootUrl){
    var gameId = event.path[2].id.replace("article_", "");
    var gameBody = event.path[2].querySelector(".article-details");
    
    fetch(gamesRootUrl + "/" + gameId, {
        method: "PUT",
        body: JSON.stringify({
            body: "My body " + gameId
        })
    }).then(function(response) {
        return response.json();
    }).then(function(response){
        console.log(response);
        gameBody.innerHTML = response.body;
    });
}
    
    function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
});

//var gamesRootUrl = "https://games-world.herokuapp.com/games";


        
