import React, {Fragment, useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom"
import Header from "./Header";
import FeaturedArticle from "./FeaturedArticle";
import BingeContainer from "./BingeContainer";
import FollowTweets from "./FollowTweets";
import VisitApi from "./VisitApi";
import NavBar from "./NavBar"

function App(){
  const [articles, setArticles] = useState([])
  
  useEffect(()=> {
    fetch ("https://newsapi.org/v2/top-headlines?country=us&apiKey=f54a02baacfc4187b26c3a5bee3f7774")
    .then (r=>r.json())
    .then (data=>setArticles(data.articles))
  
  }, []
  )
 
  return (
    <div>
      <Header />
      <NavBar className="NavBar"/>
      <Routes>
        <Route exact path="/bingecontainer" element={ <BingeContainer articles={articles}/>}>
        </Route>
        <Route path="/followtweets" element ={<FollowTweets/>}>
        </Route>
        <Route exact path="/visitapi" element = { <VisitApi/>}>
        </Route>
      </Routes>
      <FeaturedArticle articles={articles}/>
    </div>
  )
}

export default App