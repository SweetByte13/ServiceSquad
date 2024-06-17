import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

function NavBar({ user, setuser }) {

  function handleLogoutClick() {
    fetch ("/logout", {method: "DELETE"}).then((resp) => {
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
                <Nav.Link href="signup">Sign Up</Nav.Link>
                <Nav.Link href="login">Log In</Nav.Link>
                <Nav.Link href="profile">Profile</Nav.Link>
                <Nav.Link href="opportunities">Opportunities</Nav.Link>
                <Button onClick={handleLogoutClick}>Logout</Button>
              </Nav>
          </Container>
        </Navbar>
    )
  };
  
  export default NavBar;
