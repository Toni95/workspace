window.addEventListener("load" ,function(){
    var containerEl = document.getElementById("articles-list");
    var articleModels = new Articles();
    articleModels.getAll().then(displayAllArticles);
    
    
    function displayAllArticles(articlesData){
        for(var i=0; i<articlesData.length; i++){
            // create Article model instance
            var article = new Article();
            article.id = articlesData[i]._id;
            article.title = articlesData[i].title;
            article.body = articlesData[i].description;
            article.img = articlesData[i].imgUrl;
            
            displayArticle(article);
            //calling class method
           // article.getArticleDetails().then(displayArticle);
        } 
    }
    
    function displayArticle(article){
         var liEl = document.createElement('div');

         var titleEl = document.createElement('a');
         titleEl.innerHTML = article.title;
         titleEl.setAttribute("href", "https://front-end-grupa3-antoniopatraska.c9users.io/curs17-OOP-workshop/pages/article.html?articleId="+article.id);
         liEl.appendChild(titleEl);
         
         var bodyEl = document.createElement('p');
         bodyEl.innerHTML = article.body;
         liEl.appendChild(bodyEl);
         
         containerEl.appendChild(liEl);
    }
});