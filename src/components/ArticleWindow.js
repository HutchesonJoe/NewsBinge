import React, {useState, useEffect} from "react";
import FeaturedArticle from "./FeaturedArticle";
import SaveArticle from "./SaveArticle"

function ArticleWindow({article, articles, featured, setFeatured}){

 
 
  if (article===null){
    return (
      <div>
        <FeaturedArticle articles={articles} featured={featured} setFeatured={setFeatured}/>
      </div>)
  } else {
    return (
      <div  key = {article.id} className="article-window">
        <h2>{article.title}</h2>
        <h3>{article.author ? article.author : "Staff"}, <em>{article.source.name}</em></h3>
        <h6>{article.publishedAt}</h6>
        <h5>{article.content}</h5>
        <h6><em>For more, visit:</em><a href={article.url} target = "_blank">{article.source.name}</a></h6>
        <img src = {article.urlToImage} className = "chosen-article-image"/>
        <SaveArticle article = {article}/>
      </div>
   
      )
  }
}

export default ArticleWindow