import React from "react";
import { NavLink }from "react-router-dom";


function Header(){
  return (
    <div>
      {/* <img src = "./logo.png" alt = "NewsBinge logo"/> */}
      <NavLink to = "./"><header className="header">NewsBinge</header></NavLink>
    </div>
    )
}

export default Header;