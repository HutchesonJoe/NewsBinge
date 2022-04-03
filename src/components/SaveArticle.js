import React from "react";

function SaveArticle({article}){

  function handleSave(){
    console.log(article)
    fetch("http://localhost:3000/articles/", {
      method: "POST",
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         
          "title": "Third Article",
          "url": "This is also an example."
      })
    })
      .then(r=>r.json())
      .then(data=>console.log(data))
  }

  return (
    <button onClick = {handleSave}>Save this article</button>
  )
  }
export default SaveArticle