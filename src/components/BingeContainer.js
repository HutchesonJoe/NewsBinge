import React, { useState } from "react";
import Search from "./Search";
import NewsWindow from "./NewsWindow"

function BingeContainer({articles, setSearchTerm, featuredArticle}){

 
  return ( 
    <div>
      <Search setSearchTerm={setSearchTerm}/>
      <NewsWindow articles={articles} featuredArticle={featuredArticle}/>
    </div>
)}

export default BingeContainer