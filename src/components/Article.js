import React from "react"

function Article({article, handleChooseArticle}){

  function handleClick(){
    handleChooseArticle(article)
  }

  return (
    <div className="article" onClick={handleClick}>
      <h4>{article.title}</h4>
      <h5>{article.author ? article.author : "Staff"}, <em>{article.source.name}</em></h5>
      <img src={article.urlToImage} alt="No image available" className="thumbnail"/>
    </div>
  )
}

export default Article