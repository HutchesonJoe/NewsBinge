import React from "react";
import SaveArticle from "./SaveArticle";

function FeaturedArticle({featuredArticle}){
  if (featuredArticle === null){
    return (
      <div>Loading...</div>
    )
  } else if (featuredArticle === undefined){
      return (
        <div>Loading...</div>
      )
    } else {
    return (
      <div className="feature-box">
        
          <header className="sub-header"><em>Featured Article:</em></header>
          <h3 className = "title">{featuredArticle.title}</h3>
          <h4 className = "source"><em>{featuredArticle.source.name}</em></h4>
          <h5 className = "author">{featuredArticle.author ? featuredArticle.author : "Staff"}</h5>
          <h6>{featuredArticle.publishedAt}</h6>
          <h6 className = "description">{featuredArticle.description}</h6>
          <img src = {featuredArticle.urlToImage} className="feature-image" alt = "No image available"/>
          <h6><em>For more, visit:</em></h6>
          <h6><a href={featuredArticle.url} target = "_blank">{featuredArticle.source.name}</a></h6>
          <SaveArticle article = {featuredArticle}/>
      </div>
      )

    }
  }

  

export default FeaturedArticle