import React from "react";
import Article from "./Article"

function ArticleList({articles, handleChooseArticle}){
  const articleList = articles.map(article => <Article article={article} handleChooseArticle={handleChooseArticle} key={article.name}/>)

  return (
    <div className="article-list" >
      {articleList}
    </div>
  )
}
export default ArticleList