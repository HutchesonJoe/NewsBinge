import React from "react";

function FeaturedArticle({articles}){
  const randomInt = function (min, max) {
    min = Math.ceil(0);
    max = Math.floor(19);
    return Math.floor(Math.random() * 19)
  }
  const featured = articles[randomInt()]
 
  if (featured === undefined){
    return (
      <div>Loading...</div>
    )} else {
     
    return (
      <div className="feature-box">
        <h2><em>Featured Article:</em></h2>
        <h2 className = "title">{featured.title}</h2>
        <h3 className = "source"><em>{featured.source.name}</em></h3>
        <img src = {featured.urlToImage} className="feature-image"/>
        <h4 className = "author">{featured.author}</h4>
        <h5 className = "description">{featured.description}</h5>
      </div>
      )

    }
  }

  

export default FeaturedArticle