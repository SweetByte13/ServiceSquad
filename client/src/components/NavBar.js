import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg"

function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogInClick() {
    navigate("/login")
  }


  function handleLogoutClick() {
    fetch("/logout", 
      { 
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json'
    },
  }).then((resp) => {
      if (resp.ok) {
        setUser(null);
        navigate("/")
      }
    });
  }

  function handleAboutClick() {
    navigate("/#about")
  }

  
    return (
      <Navbar expand="lg" className="navbar" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="nav-brand">
            <img 
              src={logo}
              width="30"
              height="30"
              alt="logo"
            />  ServiceSquad
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto pt-2">
              <Nav.Link className="nav-link" href="#about" onClick={handleAboutClick}>About</Nav.Link>
              <Nav.Link className="nav-link" href="opportunities">Opportunities</Nav.Link>
              <Nav.Link className="nav-link" href="organizations">Organizations</Nav.Link>
              <Nav.Link className="nav-link" href="profile">Profile</Nav.Link>
              <Nav.Link className="nav-link" href="signup">Signup</Nav.Link>
            </Nav>
           {user === null || user === undefined ? <Button className="navbar-login-btn" onClick={handleLogInClick}>Login</Button> : <Button className="navbar-login-btn" onClick={handleLogoutClick}>Logout</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
