import React, {useState} from "react";
import ArticleList from "./ArticleList";
import ArticleWindow from "./ArticleWindow";

function NewsWindow({articles, featuredArticle}){
  const [chosenArticle, setChosenArticle] = useState(null)
  if (chosenArticle===null){
    let article = featuredArticle
  }
  

  function handleChooseArticle(article){
    setChosenArticle(article)
  }

  return(
    <div className = "news-window">
      <ArticleList articles={articles} handleChooseArticle={handleChooseArticle}/>
      <ArticleWindow 
        article={chosenArticle} 
        articles={articles} 
        setChosenArticle={setChosenArticle} 
        featuredArticle={featuredArticle}
      />
    </div>
   
  )
}

export default NewsWindow