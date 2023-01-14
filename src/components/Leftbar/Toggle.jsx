import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Leftbar from './Leftbar';

import "./Leftbar.css"



function Toggle() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="left-togg">
          {/* <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
             
              <Offcanvas.Body style={{"padding":"0"}}>
                    <Leftbar/>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          {/* </Container> */}
        </Navbar>
      ))}
    </>
  );
}

export default Toggle;