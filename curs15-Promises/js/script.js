$(onHtmlLoaded);

function onHtmlLoaded() {
    var articlesRootUrl = "https://jsonplaceholder.typicode.com/posts";
    
   // $.get(articlesRootUrl) 
   getArticlesFromApi(articlesRootUrl) // displayError does not work here
        // .then(function(response30) {
        //     return get10Articles(response30);
        // })
        // .catch(displayError)
        .then(get10Articles, displayError)
        .then(function(response) {
            console.log('2', response.length);  // 2 30 => 2 10
            displayArticles(response, articlesRootUrl);
            return 1726;
        })
        .then(function(response2) {
            x.a = 2;
            console.log(response2); // 1726
        })
        .catch(console.log);
}

function getArticlesFromApi(articlesRootUrl) {
     var futureResponseFromAPI = fetch(articlesRootUrl, {
         method: 'GET'
     }).then(function(response) {
         return response.json();
     });
     
     return futureResponseFromAPI
     .then(function(j) {
         console.log('1', j.length);  // 1 100
         
         // return first 30 articles
         var articles = j.slice(0, 30);
         return articles;
     });
     
     // equivalent with
     // return  $.get(articlesRootUrl).then(...);
}

function get10Articles(articles) {
    // display only the first 10 articles
    // console.log(response.slice(0, 10));

    return articles.slice(0, 10);
}

function displayArticles(articles, articlesRootUrl) {
    
    // get the template
    var template = document.getElementById("template");
    var articlesContainer = document.getElementById("games");
    
    for (var i = 0; i < 10; i++) {
        // console.log(articles[i]);
        // clone the template
        var articleClone = template.cloneNode(true);
        articleClone.id = "article_" + articles[i].id;
        
        // populate the cloned template
        // var articleHeader = articleClone.querySelector(".article-header");
        // articleHeader.innerHTML = articles[i].id + " - " + articles[i].title;
        
        var articleId = articleClone.querySelector(".article-id");
        articleId.innerHTML = articles[i].id;
        
        var articleTitle = articleClone.querySelector(".article-title");
        articleTitle.innerHTML = articles[i].title;
        
        var articleBody = articleClone.querySelector(".article-body");
        articleBody.innerHTML = articles[i].body;
        
        getArticleComments(articles[i].id, articleClone, articlesRootUrl);
        
        var deleteButton = articleClone.querySelector(".article-delete");
        deleteButton.addEventListener("click", function(event) {
            console.log('x', articleClone);
            deleteArticle(event, articlesRootUrl);   
        });
        
        var editButton = articleClone.querySelector(".article-edit");
        editButton.addEventListener("click", function(event) {
            editArticle(event, articlesRootUrl);
        });
        
        // append the clone to the articles container
        articlesContainer.appendChild(articleClone);
    }
}

function displayError(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
    var articlesContainer = document.getElementById("articles");
    articlesContainer.innerHTML = 
    "We're sorry. The request failed with status " + jqXHR.status;
}


function getArticleComments(articleId, articleClone, articlesRootUrl) {
    console.log(articleClone);
    
    var articleComments = articleClone.querySelector(".article-comments");
    // articleComments.innerHTML = articles[i].;
    // we don't have the article comments yet, we need to get them from the API
    
    var commentsUrl = articlesRootUrl + "/" + articleId + "/comments"; 
    fetch(commentsUrl, {
        method: 'GET'
    }).then(function(response) {
        return response.json();
    }).then(function(commentsResponse) {
        console.log(commentsResponse);
        var emails = '';
        for (var i = 0;  i < commentsResponse.length; i++) {
            emails += commentsResponse[i].email;
        }
        
        articleComments.innerHTML = emails;
    });
}

function deleteArticle(event, articlesRootUrl) {
    console.log('event', event); // article_4
    // console.log(articles[i]);
    
    var articleId = event.path[2].id.replace("article_", "");

    fetch(articlesRootUrl + "/" + articleId, {
        method: 'DELETE' 
    }).then(function(response) {
        return response.json();
    }).then(function(response) {
        console.log('response', response);
        event.path[2].remove();
    });
}

function editArticle(event, articlesRootUrl){
    var articleId = event.path[2].id.replace("article_", "");
    var articleBody = event.path[2].querySelector(".article-body");
    
    fetch(articlesRootUrl + "/" + articleId, {
        method: "PUT",
        body: JSON.stringify({
            body: "My body " + articleId
        })
    }).then(function(response) {
        return response.json();
    }).then(function(response){
        console.log(response);
        articleBody.innerHTML = response.body;
    });
}