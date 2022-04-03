import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom"
import Header from "./Header";
import BingeContainer from "./BingeContainer";
import FollowTweets from "./FollowTweets";
import VisitApi from "./VisitApi";
import NavBar from "./NavBar"
import Home from "./Home"

function App(){
  const [articles, setArticles] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [featuredArticle, setFeaturedArticle] = useState()
  
  useEffect(()=> {
    fetch ("https://newsapi.org/v2/top-headlines?country=us&apiKey=f54a02baacfc4187b26c3a5bee3f7774")
    .then (r=>r.json())
    .then (data=>setArticles(data.articles))
  
  }, []
  )

  const randomInt = function (min, max) {
    min = Math.ceil(0);
    max = Math.floor(19);
    return Math.floor(Math.random() * 19)
  }
  const featured = articles[randomInt()]
  

  const articlesToDisplay = articles.filter((article) => {
    return article.title.toLowerCase().includes(searchTerm)
  })

 
  
  return (
    <div>
      <Header />
      <NavBar className="NavBar"/>
      <Routes>
        <Route exact path="/bingecontainer" element={ <BingeContainer articles={articlesToDisplay} setSearchTerm={setSearchTerm} featuredArticle={featured}/>}>
        </Route>
        <Route path="/followtweets" element ={<FollowTweets/>}>
        </Route>
        <Route exact path="/visitapi" element = { <VisitApi/>}>
        </Route>
        <Route exact path="/" element = {<Home articles={articlesToDisplay} featuredArticle={featured}/>}></Route>
      </Routes>
    </div>
  )
}

export default App