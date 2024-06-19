import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Opportunities from "../pages/Opportunities";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/check_session')
    .then(resp => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user))
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  // routing approach with React-Router - different routes rendered based on corresponding URL
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/home">
            <Home user={user} />
          </Route>
          <Route path="/profile">
            {user ? <Profile user={user} /> : <ErrorComponent message="User not logged in" />}
        </Route>
        <Route path="/opportunities">
            {user ? <Opportunities user={user} /> : <ErrorComponent message="User not logged in" />}
        </Route>
      </Routes>
    </main>
  </>
);
}

export default App;

