window.addEventListener("load" ,function(){
    var containerEl = document.getElementById("games-list");
    
    var gameModels = new Games();
    gameModels.getAll().then(displayAllGames);
    
    
    function displayAllGames(gamesData){
        for(var i=0; i<3; i++){
            // create game model instance
            var game = new Game();
            console.log(game.id = gamesData[i]._id);
             console.log(game.title = gamesData[i].title);
             console.log(game.body = gamesData[i].description);
             console.log(game.img = gamesData[i].imageUrl);
            
            displayGame(game);
            //calling class method
           // game.getgameDetails().then(displaygame);
        } 
    }
    
     function displayGame(game){
         
         
         var liEl = document.createElement('div');
         liEl.className = 'col-md-4';
         var titleEl = document.createElement('h2');
         titleEl.innerHTML = game.title;
        // titleEl.setAttribute("href", "https://front-end-grupa3-antoniopatraska.c9users.io/curs17-OOP-workshop/pages/article.html?articleId="+article.id);
         liEl.appendChild(titleEl);
         
         var img = document.createElement("img");
        img.src = game.img;
        img.className = 'img-thumbnail';
        img.width = '200px';
        img.height = '200px';
        liEl.appendChild(img);
         
         var bodyEl = document.createElement('p');
         bodyEl.innerHTML = game.body;
         liEl.appendChild(bodyEl);
         
        var deleteButton = document.createElement('a');
         deleteButton.className = 'btn btn-danger';
         deleteButton.innerHTML = 'Delete';
         liEl.appendChild(deleteButton);
         
         
         
         var seeMore = document.createElement('a');
         seeMore.className = 'btn btn-success pull-right';
         seeMore.innerHTML = 'See More';
         seeMore.setAttribute("href", "https://front-end-grupa3-antoniopatraska.c9users.io/curs16-17-OOP-homework/pages/game.html?gameId="+game.id);
         liEl.appendChild(seeMore);
         
        
        // append the clone to the articles container
        
         
         containerEl.appendChild(liEl);
    }
});

window.addEventListener("load" ,function(){
    var containerEl = document.getElementById("games-list2");
    
    var gameModels = new Games();
    gameModels.getAll().then(displayAllGames);
    
    
    function displayAllGames(gamesData){
        for(var i=3; i<6; i++){
            // create game model instance
            var game = new Game();
            console.log(game.id = gamesData[i]._id);
             console.log(game.title = gamesData[i].title);
             console.log(game.body = gamesData[i].description);
             console.log(game.img = gamesData[i].imageUrl);
            
            displayGame(game);
            //calling class method
           // game.getgameDetails().then(displaygame);
        } 
    }
    
     function displayGame(game){
         
         
         var liEl = document.createElement('div');
         liEl.className = 'col-md-4';
         var titleEl = document.createElement('h2');
         titleEl.innerHTML = game.title;
        // titleEl.setAttribute("href", "https://front-end-grupa3-antoniopatraska.c9users.io/curs17-OOP-workshop/pages/article.html?articleId="+article.id);
         liEl.appendChild(titleEl);
         
         var img = document.createElement("img");
        img.src = game.img;
        img.className = 'img-thumbnail';
        img.width = '200px';
        img.height = '200px';
        liEl.appendChild(img);
         
         var bodyEl = document.createElement('p');
         bodyEl.innerHTML = game.body;
         liEl.appendChild(bodyEl);
         
        var deleteButton = document.createElement('a');
         deleteButton.className = 'btn btn-danger';
         deleteButton.innerHTML = 'Delete';
         liEl.appendChild(deleteButton);
         
         
         
         var seeMore = document.createElement('a');
         seeMore.className = 'btn btn-success pull-right';
         seeMore.innerHTML = 'See More';
         titleEl.setAttribute("href", "https://front-end-grupa3-antoniopatraska.c9users.io/curs17-OOP-workshop/pages/article.html?articleId="+game.id);
         liEl.appendChild(seeMore);
         
        
        // append the clone to the articles container
        
         
         containerEl.appendChild(liEl);
    }
});

window.addEventListener("load" ,function(){
    var containerEl = document.getElementById("games-list3");
    
    var gameModels = new Games();
    gameModels.getAll().then(displayAllGames);
    
    
    function displayAllGames(gamesData){
        for(var i=6; i<9; i++){
            // create game model instance
            var game = new Game();
            console.log(game.id = gamesData[i]._id);
             console.log(game.title = gamesData[i].title);
             console.log(game.body = gamesData[i].description);
             console.log(game.img = gamesData[i].imageUrl);
            
            displayGame(game);
            //calling class method
           // game.getgameDetails().then(displaygame);
        } 
    }
    
     function displayGame(game){
         
         
         var liEl = document.createElement('div');
         liEl.className = 'col-md-4';
         var titleEl = document.createElement('h2');
         titleEl.innerHTML = game.title;
        // titleEl.setAttribute("href", "https://front-end-grupa3-antoniopatraska.c9users.io/curs17-OOP-workshop/pages/article.html?articleId="+article.id);
         liEl.appendChild(titleEl);
         
         var img = document.createElement("img");
        img.src = game.img;
        img.className = 'img-thumbnail';
        img.width = '200px';
        img.height = '200px';
        liEl.appendChild(img);
         
         var bodyEl = document.createElement('p');
         bodyEl.innerHTML = game.body;
         liEl.appendChild(bodyEl);
         
        var deleteButton = document.createElement('a');
         deleteButton.className = 'btn btn-danger';
         deleteButton.innerHTML = 'Delete';
         liEl.appendChild(deleteButton);
         
         
         
         var seeMore = document.createElement('a');
         seeMore.className = 'btn btn-success pull-right';
         seeMore.innerHTML = 'See More';
         liEl.appendChild(seeMore);
         
        
        // append the clone to the articles container
        
         
         containerEl.appendChild(liEl);
    }
});