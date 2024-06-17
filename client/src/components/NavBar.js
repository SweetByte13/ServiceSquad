import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ user, setuser }) {

  function handleLogoutClick() {
    fetch ("/logout", {method: "DELETE"}).then((resp) => {
      if (resp.ok) {
        setuser(null);
      }
    });
  }
  
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  
  //   return (
  //     <Wrapper>
  //       <Navbar bg="light" data-bs-theme="light" fixed="top">
  //         <Container>
  //           <Navbar.Brand href="/">ServiceSquad</Navbar.Brand>
  //             <Nav className="nav-bar">
  //               <Nav.Link href="/">Home</Nav.Link>
  //               <Nav.Link href="signup">Sign Up</Nav.Link>
  //               <Nav.Link href="login">Log In</Nav.Link>
  //               <Nav.Link href="profile">Profile</Nav.Link>
  //               <Nav.Link href="opportunities">Opportunities</Nav.Link>
  //               <Button onClick={handleLogoutClick}>Logout</Button>
  //             </Nav>
  //         </Container>
  //       </Navbar>
  //     </Wrapper>
  //   )
  // };
  
  export default NavBar;
