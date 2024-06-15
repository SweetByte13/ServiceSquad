import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
      <Navbar bg="light" data-bs-theme="light" fixed="top">
        <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
          <Nav className="nav-bar">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="signup">Sign Up</Nav.Link>
            <Nav.Link href="login">Log In</Nav.Link>
            <Nav.Link href="profile">Profile</Nav.Link>
            <Nav.Link href="opportunities">Opportunities</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
  };
  
  export default NavBar;
