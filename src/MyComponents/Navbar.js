import React from 'react'
import { Nav  } from 'react-bootstrap';

export default function Navbar(props) {
    return (
        <div ClassName="Navbar">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#Home">{props.title}</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link eventKey={2} href="/Home">
        Home
      </Nav.Link>
      <Nav.Link eventKey={2} href="/About">
        About
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
</div>
    )
    }