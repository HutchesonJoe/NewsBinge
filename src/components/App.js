import React, { useState, useEffect } from "react";
import Header from "./Header";
import Search from "./Search";
import FeaturedArticle from "./FeaturedArticle";
import NavBar from "./NavBar"
import {Route, Switch} from "react-router-dom"


function App(){

  return (
    <>
      <Header />
      <NavBar/>
      <Switch>
        <Route exact path="/bingecontainter">
          <BingeContainer />
        </Route>
        <Route path="/followtweets">
          <FollowTweets/>
        </Route>
        <Route exact path="/visitapi">
          <VisitApi/>
        </Route>
      </Switch>
      <FeaturedArticle/>
    </>
  )
}

export default App