import tw from 'tailwind-styled-components';
import { FaEllipsisV } from 'react-icons/fa';
// import { useState } from 'react';
import { Link } from "react-router-dom"
import ThemeToggle from './ThemeToggle';

const Nav = tw.nav`
  flex
  justify-between
  items-baseline
  h-18
  sticky
  top-0
  z-50
  ${p => p.$shrink ? "py-1" : "py-3"}
  px-10
  backdrop-blur-md
  backdrop-saturate-150
  transition-all
`

const MenuButton = tw.button`
  ${p => p.$shrink ? "text-lg" : "text-2xl"}
  bg-transparent
  text-white
  cursor-pointer
`

const HeaderNav = ({ shrink }) => {
  // const [show, setShow] = useState(false);
  // const handleOpen = () => setShow(true);
  // const handleClose = () => setShow(false);

  return (
    <Nav $shrink={shrink}>
      <Link to="/">
        <h2 className={(shrink ? 'text-xl transition-all' : 'transition-all') + ' m-0'}>Albert M</h2>
      </Link>
      <div className="flex w-28 justify-around px-3">
        <ThemeToggle shrink={shrink} />
        <MenuButton $shrink={shrink}>
          <FaEllipsisV />
        </MenuButton>
      </div>
    </Nav> 
    // <RBNavbar bg="light" expand={false} sticky='top' style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,135,70,1) 0%, rgba(130,234,255,1) 100%)"}}>
    //   <Container fluid>

    //     <RBNavbar.Brand as={Link} to="/"><h4>Albert M</h4></RBNavbar.Brand>
    //     <ThemeToggle />
    //     <RBNavbar.Toggle aria-controls="offcanvasNavbar" onClick={handleOpen} />
    //     <RBNavbar.Offcanvas
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //       // placement="end"
    //       show={show}
    //       onHide={handleClose}
    //       style={{backgroundColor: "whitesmoke"}}
    //     >
    //       <Offcanvas.Header closeButton>
    //         <Offcanvas.Title id="offcanvasNavbarLabel">Portfolio</Offcanvas.Title>
    //       </Offcanvas.Header>
    //       <Offcanvas.Body>
    //         <RBNav className="justify-content-end flex-grow-1 pe-3">
    //           <RBNav.Link as={Link} to="/" onClick={handleClose}>Home</RBNav.Link>
    //           <RBNav.Link as={Link} to="/about" onClick={handleClose}>About Albert</RBNav.Link>
    //         </RBNav>
    //       </Offcanvas.Body>
    //     </RBNavbar.Offcanvas>
    //   </Container>
    // </RBNavbar>
  )
}
 
export default HeaderNav;