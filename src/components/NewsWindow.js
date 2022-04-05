import React, {useState} from "react";
import ArticleList from "./ArticleList";
import ArticleWindow from "./ArticleWindow";

function NewsWindow({articles, featured, setFeatured, setMyArticles}){

  const [chosenArticle, setChosenArticle] = useState(null)
  if (chosenArticle===null){
    let article = featured
  }
  
  function handleChooseArticle(article){
    setChosenArticle(article)
  }

  return(
    <div className = "news-window">
      <ArticleList articles={articles} handleChooseArticle={handleChooseArticle} setMyArticles={setMyArticles}/>
      <ArticleWindow 
        article={chosenArticle} 
        articles={articles} 
        setChosenArticle={setChosenArticle} 
        featured={featured}
        setFeatured={setFeatured}
      />
    </div>
   
  )
}

export default NewsWindow