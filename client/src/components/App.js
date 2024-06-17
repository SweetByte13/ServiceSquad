import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Login from "../pages/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/check_session").then((resp) => {
      if (resp.ok) {
        resp.json().then ((user) => setUser(user))
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser}/>;

  //fetch request GET


  return (
    <>
    <NavBar user={user} setUser={setUser} />
    <main>
      <Switch>
        <Route path="/home">
          <Home user={user}/>
        </Route>
        <Route path="/profile">
          <Profile user={user}/>
        </Route>
        <Route path="/opportunities">
          <Opportunities user={user}/>
        </Route>
      </Switch>
    </main>
    </>
  )
}

export default App;

