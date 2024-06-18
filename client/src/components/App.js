import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Opportunities from "../pages/Opportunities";

function App() {
  const [user, setUser] = useState(null);
  const [opps, setOpps] = useState([])

  useEffect(() => {
    fetch("/check_session").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  useEffect(() => {
    fetch("http://localhost:5555/oppurtunities")
    .then((resp) => (resp.json()))
    .then((opps) => setOpps(opps))
  }, [])

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/home">
            <Home user={user} />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/opportunities">
            <Opportunities user={user} opps={opps}/>
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App;

