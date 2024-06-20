import React, { useEffect, useState } from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import About from "../components/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Opportunities from "../pages/Opportunities";
import Opportunity from "../pages/Opportunity";
import Organizations from "../pages/Organizations"
import ErrorPage from '../pages/ErrorPage';

function RequireAuth({ children, user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);
  return user ? children : null;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("TEST")
    {
      fetch("/check_session")
        .then((resp) => {
          if (resp.ok) {
             return resp.json()
          }
        }).then((user) => {
          console.log(user)
          setUser(user)
        });
    }
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  // routing approach with React-Router - different routes rendered based on corresponding URL
//   return (
//     <>
//       <NavBar user={user} setUser={setUser} />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home user={user} />} />
//           <Route path="/login" element={<Login user={user} setUser={setUser} />} /> : <Navigate to="/" />
//           <Route path="/signup" element={user ? <Navigate to="/" replace /> : <SignUp onSignUp={setUser} />} />
//           <Route path="/profile" element={user ? <Profile user={user} /> : <useNavigate to="/login" replace />} />
//           <Route path="/opportunities/:id" element={user ? <Opportunities user={user} /> : <Navigate to="/login" replace />} />
//         </Routes>
//       </main>
//     </>
//   );
// }


return (
  <>
    
    <div>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        {/* <Route path="/about" element={<About setUser={setUser} user={user}/>} /> */}
        <Route path="/login" element={<Login setUser={setUser} user={user}/>} />
        <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        <Route path="/opportunities" element={<Opportunities setUser={setUser} user={user} />}/>
        <Route path="/opportunities/:id" element={<Opportunity setUser={setUser} user={user} />}/>
        <Route path="/organizations" element={<Organizations setUser={setUser} user={user} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} user={user}/>} />
      </Routes>
    </div>
  </>
);
}


export default App;