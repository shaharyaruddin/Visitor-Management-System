import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const headerStyle = {
  backgroundColor: 'red',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderBottom: '2px solid #0056b3',
  transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
};

const logoTextStyle = {
  color: '#fff',
  fontFamily: 'Arial, sans-serif', // Change the font family
  fontWeight: 'bold',
  fontSize: '2rem', // Increase font size
  margin: '0',
};

const navLinkStyle = {
  color: 'white',
  fontFamily: 'Arial, sans-serif', // Change the font family
  fontSize: '1.4rem', // Increase font size
  transition: 'color 0.3s',
  marginRight: '10px',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '30px',
};

const navLinkHoverStyle = {
  color: '#F8F9FA',
};

function Header() {
  return (
    <>
      <Navbar expand="lg" style={headerStyle} className="navbar-custom">
        <Container>
          <Link to="/" className="d-flex align-items-center">
            <img src="https://s.rozee.pk/company_logos/68/c_67949829853768_30634.png" alt="Logo" width="120" height="50" />
          </Link>
          <Nav className="mx-auto">
            <h3 style={logoTextStyle}>Visitor Management System</h3>
          </Nav>
          <Nav className="ml-auto">
            <Link to="/" style={navLinkStyle} className="nav-link btn btn-success fs-4">Home</Link>
          </Nav>
          <Nav className="ml-auto">
            <Link to="/forms" style={navLinkStyle} className="nav-link btn btn-dark fs-4">Create Request</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Header;
