import React from "react";
import Search from "./Search";
import NewsWindow from "./NewsWindow"

function BingeContainer({articles}){
  console.log(articles)
  return ( 
    <div>
      <Search />
      <NewsWindow />
    </div>
)}

export default BingeContainer