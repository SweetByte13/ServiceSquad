import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
  <div>
    <NavBar />
    <h1>ServiceSquad!</h1>
    <Home />
  </div>
  )
}

export default App;
