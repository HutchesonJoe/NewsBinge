import React from "react";

function NavBar(){

fetch ("https://newsapi.org/v2/top-headlines?country=us&apiKey=f54a02baacfc4187b26c3a5bee3f7774")
  .then (r=>r.json())
  .then (data=>console.log(data.articles))

 return (
   <div>NavBar
     <ul>
       <li>Binge</li>
       <li>Follow Tweets</li>
       <li>Visit Api</li>
     </ul>
   </div>
 )
}

export default NavBar