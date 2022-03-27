import React, {useState} from "react";
import ArticleList from "./ArticleList";
import ArticleWindow from "./ArticleWindow";

function NewsWindow({articles}){
  const [chosenArticle, setChosenArticle] = useState(null)

  function handleChooseArticle(article){
    setChosenArticle(article)
  }

  return(
    <div className = "news-window">
       <ArticleList articles={articles} handleChooseArticle={handleChooseArticle}/>
        <ArticleWindow article={chosenArticle}/>
    </div>
   
  )
}

export default NewsWindow