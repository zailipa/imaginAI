import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Submit from "./Submit";
import Submit2 from "./Submit2";



export default function Content(){
        

        return (
            <div>
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
    
    
            
        <Submit2 />
    
    
    
            </div>
    
            
          );
        

}