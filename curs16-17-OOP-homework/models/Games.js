function Games() {
    
}

Games.prototype.getAll = function() {
    return $.get('https://games-world.herokuapp.com/games');
};


function displayError(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
    var articlesContainer = document.getElementById("articles");
    articlesContainer.innerHTML = 
    "We're sorry. The request failed with status " + jqXHR.status;
}

displayError();