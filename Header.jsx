import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div>
  <Navbar expand="lg" id="navbar">
  <Container fluid>
    <Navbar.Brand href="#" className='Foodies'>Foodies-line</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', backgroundColor: 'black' }} navbarScroll>
        
        <Nav.Link as={Link} to='/' className='page'>Home</Nav.Link>
        <Nav.Link as={Link} to='/About' className='page'>About</Nav.Link>

        <NavDropdown title="our menu" id="navbarScrollingDropdown" >
          <NavDropdown.Item as={Link} to='/Breakfast' className='item'>Breakfast</NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/Meal' className='item'>Lunch</NavDropdown.Item>
          <NavDropdown.Item as={Link} to='/Dinner' className='item'>Dinner</NavDropdown.Item>
        </NavDropdown>

      </Nav>

      <Form className='mainform'>
        <Button  id='signupbutton' as={Link} to='/Signup' variant="outline-success" className='form sign'>Register</Button>
      </Form>
      <Form className='mainform'>
        <Button  id='signinbutton' as={Link} to='/Signin' variant="outline-success" className='form sign'>Login</Button>
      </Form>

    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  )
}

export default Header