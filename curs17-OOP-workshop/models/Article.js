function Article(){
    this._id = "";
    this.title = "";
    this.body = "";
    this.userId = null;
    
}

Article.prototype.getArticleDetails = function() {
    // we're saving the value of the current context which is
    // the article model, as later on , in AJAX success function
    // we'll need to set attributes value on it.
    var that = this;
    
    return $.get('https://games-world.herokuapp.com/games/'+this.id, function(articleDetails) {
        that._id = articleDetails._id;
        that.title = articleDetails.title;
        that.description = articleDetails.description;
        that.imageUrl = articleDetails.imageUrl;
        
    });
};