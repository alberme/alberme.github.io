import { useState } from 'react';
import { Link } from "react-router-dom"
import { Navbar as RBNavbar, Nav as RBNav, Container, Offcanvas } from 'react-bootstrap';
// import { FaCodepen } from '';

const HeaderNav = () => {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <RBNavbar bg="light" expand={false} sticky='top' style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,135,70,1) 0%, rgba(130,234,255,1) 100%)"}}>
      <Container fluid>
        <RBNavbar.Brand as={Link} to="/"><h4>Albert M</h4></RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="offcanvasNavbar" onClick={handleOpen} />
        <RBNavbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          // placement="end"
          show={show}
          onHide={handleClose}
          style={{backgroundColor: "whitesmoke"}}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Portfolio</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <RBNav className="justify-content-end flex-grow-1 pe-3">
              <RBNav.Link as={Link} to="/" onClick={handleClose}>Home</RBNav.Link>
              <RBNav.Link as={Link} to="/about" onClick={handleClose}>About Albert</RBNav.Link>
            </RBNav>
          </Offcanvas.Body>
        </RBNavbar.Offcanvas>
      </Container>
    </RBNavbar>
  )
}
 
export default HeaderNav;