import React from "react";

function ArticleWindow({article}){
  
  if (article===null){
    return (<p>Choose and article on the left.</p>)
  } else {
    console.log(article.url)
    return (
      <div className="article-window" key = {article.id}>
        <h2>{article.title}</h2>
        <h3>{article.author}, <em>{article.source.name}</em></h3>
        <h5>{article.content}</h5>
        <h6><em>For more, visit:</em></h6>
        <h6><a href={article.url} target = "_blank">{article.source.name}</a></h6>
        <img src = {article.urlToImage} className="feature-image"/>
      </div>
      )
  }
}

export default ArticleWindow