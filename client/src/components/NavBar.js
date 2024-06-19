import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg"
import "../index.css"


function NavBar({ user, setuser }) {
  const navigate = useNavigate();

  function handleLogInClick() {
    navigate("/login")
  }

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((resp) => {
      if (resp.ok) {
        setuser(null);
      }
    });
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
              <Nav.Link className="nav-link" href="opportunities">Opportunities</Nav.Link>
              <Nav.Link className="nav-link" href="organizations">Organizations</Nav.Link>
              <Nav.Link className="nav-link" href="profile">Profile</Nav.Link>
              <Nav.Link className="nav-link" href="signup">Signup</Nav.Link>
            </Nav>
           {user ? <Button className="login-btn" onClick={handleLogoutClick}>Logout</Button> : <Button className="login-btn" onClick={handleLogInClick}>Login</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
