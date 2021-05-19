import React from 'react'
import { Nav,Navbar }  from 'react-bootstrap';

export default function MyNavbar(props) {
    return (
    <div className="Navbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#Home">{props.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link eventKey={2} href="/home">
            Home
          </Nav.Link>
          <Nav.Link eventKey={2} href="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar> 
    </div>
  )
}