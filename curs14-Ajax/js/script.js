$(onHtmlLoaded);

function onHtmlLoaded() {
    var articlesRootUrl = "https://jsonplaceholder.typicode.com/posts";
    
    $.ajax({
        url: articlesRootUrl,
        method: 'GET',
        success: function(response) {
            // display only the first 10 articles
            // console.log(response.slice(0, 10));
            
            var articles = response.slice(0, 10);
            
            // get the template
            var template = document.getElementById("template");
            var articlesContainer = document.getElementById("articles");
            
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
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
            var articlesContainer = document.getElementById("articles");
            articlesContainer.innerHTML = 
            "We're sorry. The request failed with status " + jqXHR.status;
        }
    });
}

function getArticleComments(articleId, articleClone, articlesRootUrl) {
    console.log(articleClone);
    
    var articleComments = articleClone.querySelector(".article-comments");
    // articleComments.innerHTML = articles[i].;
    // we don't have the article comments yet, we need to get them from the API
    
    var commentsUrl = articlesRootUrl + "/" + articleId + "/comments"; 
    $.get(commentsUrl, function(commentsResponse) {
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

    $.ajax({
        url: articlesRootUrl + "/" + articleId,
        method: 'DELETE',
        success: function(response) {
            console.log('response', response);
            event.path[2].remove();
        }
    });
}

function editArticle(event, articlesRootUrl){
    var articleId = event.path[2].id.replace("article_", "");
    var articleBody = event.path[2].querySelector(".article-body");
    
    $.ajax({
        url: articlesRootUrl + "/" + articleId,
        method: "PATCH",
        dataType: "json",
        data: {
            body: "My body " + articleId
        },
        success: function(response){
            console.log(response);
            articleBody.innerHTML = response.body;
        }
    });
}