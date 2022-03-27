import React from "react";
import Article from "./Article"

function ArticleList({articles}){
  const articleList = articles.map(article => <Article article={article} key={article.id}/>)

  return (
    <div className="article-list">
      {articleList}
    </div>
  )
}
export default ArticleList