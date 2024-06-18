import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import "../index.css"
//import Button from "react-bootstrap/Button";

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
    <Navbar bg="light" data-bs-theme="light" fixed="top">
      <Container>
        <Navbar.Brand href="/">ServiceSquad</Navbar.Brand>
        <Nav className="nav-bar">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="profile">Profile</Nav.Link>
          <Nav.Link href="opportunities">Opportunities</Nav.Link>
          <Nav.Link href="organizations">Organizations</Nav.Link>
          <Nav.Link href="signup">Sign Up</Nav.Link>
          {user ? <Button onClick={handleLogoutClick}>Logout</Button> : <Button onClick={handleLogInClick}>Login</Button>}
        </Nav>
      </Container>
    </Navbar>
  )
};

export default NavBar;
  
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
