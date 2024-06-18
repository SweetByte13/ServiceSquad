import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../index.css"
//import Button from "react-bootstrap/Button";

function NavBar({ user, setuser }) {

  function handleLogoutClick() {
    fetch ("/logout", {method: "DELETE"}).then((resp) => {
      if (resp.ok) {
        setuser(null);
      }
    });
  }
  
    return (
      <Navbar expand="lg" className="navbar" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="nav-brand">ServiceSquad</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto pt-2">
              <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
              <Nav.Link className="nav-link" href="#link">Login</Nav.Link>
              <Nav.Link className="nav-link" href="#link">Signup</Nav.Link>
              <Nav.Link className="nav-link" href="#link">Profile</Nav.Link>
              <Nav.Link className="nav-link" href="#link">Opportunities</Nav.Link>
            </Nav>
            <button className="button" onClick={handleLogoutClick}>Logout</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;
