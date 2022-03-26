import React from "react"; 

function Search(){

  function handleChange(e){
    console.log(e.target.value)
  }
  return (
    <div>
      <form>
      <input type = "search" placeholder = "Search term..." onChange={handleChange}></input>
      </form>
    </div>
  )
}
export default Search