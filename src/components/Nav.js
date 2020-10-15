import React from 'react'
import { Button, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"

import App from './App';


const Nav1 = () => {
  return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <NavDropdown title="Kategoriyalar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Masjidlar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Nogironlar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">O'quv maskanlari</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Talabalar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/About">About Us</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="dark">Uz</Button>
            <Button disabled variant="dark">|</Button>
            <Button variant="dark">Ru</Button>
            <Button disabled variant="dark">|</Button>
            <Button variant="dark" className="mr-sm-5" active>En</Button>
            <Link to={'/SignIn'} variant="outline-primary" className="btn btn-outline-primary mr-sm-2">Sign In</Link>
            <Link to={'/SignUp'} variant="outline-primary" className="btn btn-outline-primary mr-sm-5">Sign Up</Link>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Nav1;


