import React from 'react';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

import './navbar.styles.scss';

const NavbarContainer = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Youth-Led TOI</Nav.Link>
                <NavDropdown title="Join The Movement" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#YLP">TOI-Youth Leadership Program(YLP)</NavDropdown.Item>
                  <NavDropdown.Item href="#R2T">Reach to Teach(R2T)</NavDropdown.Item>
                  <NavDropdown.Item href="#RAD">Raise A Dream(RAD)</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link href="#donate" className="donate">Donate</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarContainer;