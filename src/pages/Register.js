import { Link } from "react-router-dom";
import Product from "./Product";
import Content from "./Content";
import Navigation from "../components/Navigation";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import React from 'react';
import './selection.css'; // Make sure to create this CSS file

// Replace 'backgroundImage1.jpg' with the actual path to your chosen background image
const backgroundStyle = {
  backgroundImage: `url("header-bgn.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function CreatePage() {
  return (
      
    
    <div style={backgroundStyle} className="">
   
          <Navbar expand="lg" className="bg-body-tertiary " bg="light">
                <Container>
                  <Navbar.Brand href="/Register" >My Imaginations</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/" >Home</Nav.Link>
                      
                      
                    </Nav>
                    <Navbar.Text>
                      Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                  </Navbar.Collapse>
                </Container>
              </Navbar>

    
  
      <div className="create-content">

        <h1 className="ulvi">What Do You Want to Create Today?</h1>
        <br/>
        <br/>
        <br/>
        <div className="button-container">
        <Link to="/content">
              <a className="btn btn-secondary btn-xl text-uppercase">
                Content Imagination
              </a>
            </Link>
          <Link to="/product">
              <a className="btn btn-secondary btn-xl text-uppercase">
                Product Imagination
              </a>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;



