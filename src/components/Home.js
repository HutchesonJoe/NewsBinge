import React from "react";
import FeaturedArticle from "./FeaturedArticle";

function Home({articles, featuredArticle}){

  if (articles !== undefined){
   
    return (
      <div>
        <div className="home-box">
          <p id="welcome-to-newsbinge"><em>Welcome to NewsBinge!</em></p>
          <p> Get your news fix with the top headlines of the day, courtesy of NewsAPI.</p>
          <p>"News API is a simple, easy-to-use REST API that returns JSON search results for current and historic news articles published by over 80,000 worldwide sources."</p>
          <p>Click on "Binge" above to make your way through today's news.</p>
        </div>
        <FeaturedArticle articles = {articles} featuredArticle={featuredArticle}/>
      </div>
    )
  } else {
    return 
    <div>Loading news...</div>
  }
  
}

export default Home