window.addEventListener("load", function(){
    var container = document.getElementById('article-details');
    var article = new Article();
    var articleId = getUrlParameter("articleId");
    article.id = articleId;
    article.getArticleDetails().then(displayArticleDetails);
    
    function displayArticleDetails(articleDetails) {
        
        var imgEl = document.createElement('img');
        imgEl.src = article.imageUrl;
        container.appendChild(imgEl);
        
        var titleEl = document.createElement('h1');
        titleEl.innerHTML = articleDetails.title;
        container.appendChild(titleEl);
        
        var bodyEl = document.createElement('p');
        bodyEl.innerHTML = articleDetails.description;
        container.appendChild(bodyEl);
    }
    
    
    
    function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
});