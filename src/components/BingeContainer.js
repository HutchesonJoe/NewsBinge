import React, { useState } from "react";
import Search from "./Search";
import NewsWindow from "./NewsWindow"

function BingeContainer({articles, setSearchTerm, featured, setFeatured, setMyArticles}){

 
  return ( 
    <div>
      <Search setSearchTerm={setSearchTerm}/>
      <NewsWindow articles={articles} featured={featured} setFeatured={setFeatured} setMyArticles={setMyArticles}/>
    </div>
)}

export default BingeContainer