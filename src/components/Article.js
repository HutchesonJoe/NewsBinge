import React from "react"

function Article({article}){
  return (
    <div className="article">
      <h3>{article.title}</h3>
      <h4>{article.author}</h4>
      <h5>{article.description}</h5>
    </div>
  )
}

export default Article