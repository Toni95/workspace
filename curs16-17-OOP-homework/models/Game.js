function Game(){
    this._id = null;
    this.title = "";
    this.description = "";
    this.imageUrl = "";
    
}

Game.prototype.getGamesDetails = function() {
    // we're saving the value of the current context which is
    // the article model, as later on , in AJAX success function
    // we'll need to set attributes value on it.
    var that = this;
    /* global $ */
    return $.get('https://games-world.herokuapp.com/games/'+ this._id), function(gamesDetails) {
        that._id = gamesDetails.id;
        that.title = gamesDetails.title;
        that.description = gamesDetails.description;
        that.imageUrl = gamesDetails.imageUrl;
        
      
    };
};