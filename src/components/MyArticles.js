import React, {useEffect} from "react";
import MyArticle from "./MyArticle"


function MyArticles({myArticles, setMyArticles}){
  useEffect(()=>{
    fetch("http://localhost:3000/articles")
    .then (r=>r.json())
    .then (data=>setMyArticles(data))
  }, [])
  
  const myCurrentArticles = myArticles.map(article=><MyArticle article={article} key = {article.id} myArticles={myArticles} setMyArticles={setMyArticles}/>)

  return(
    <div>{myCurrentArticles}</div>
  )
}

export default MyArticles