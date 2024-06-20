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
import Organizations from "../pages/Organizations"
import ErrorPage from '../pages/ErrorPage';

function RequireAuth({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);
  return user ? children : null;
}


function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("TEST")
    if (!user) {
      fetch("http://localhost:5555/check_session")
        .then((resp) => {
          if (resp.ok) {
            resp.json()
            .then((user) => console.log(user))
          }
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
    <NavBar user={user} setUser={setUser} />
    <main>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/profile" element={<RequireAuth><Profile user={user} /></RequireAuth>} />
        <Route path="/opportunities" element={<Opportunities user={user} />}/>
        <Route path="/organizations" element={<Organizations setUser={setUser} />} />
      </Routes>
    </main>
  </>
);
}


export default App;