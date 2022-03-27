import React from "react";
import ArticleList from "./ArticleList";
import ArticleWindow from "./ArticleWindow";

function NewsWindow({articles}){
  return(
    <div>
       <ArticleList articles={articles}/>
        <ArticleWindow/>
    </div>
   
  )
}

export default NewsWindow