import tw from 'tailwind-styled-components';
import { FaEllipsisV, FaTimes } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import ThemeToggle from './ThemeToggle';

const Nav = tw.nav`
  flex
  justify-between
  items-center
  py-2
  sticky
  top-0
  z-50
  h-20
  transition-all
  border-slate-300
  dark:border-slate-600
  ${p => p.$shrink ? "max-h-14" : "max-h-20"}
  ${p => p.$shrink ? 'border-b-[1px]' : 'border-b-0'}
  px-10
  backdrop-blur-md
  backdrop-saturate-150
`

const MenuButton = tw.button`
  ${p => p.$shrink ? "text-lg" : "text-2xl"}
  bg-transparent
  cursor-pointer

`

const NavMenu = tw.div`
bg-slate-200
dark:bg-slate-700
  flex
  flex-col
  rounded-md
  z-50
  w-40
  max-h-min
  pt-2
  pb-4
  px-4
  my-auto
  mr-0
  ml-auto
  gap-4
`

const NavButtonsContainer = tw.div`
  space-x-4
`

const NavControls = ({ className, menuOpen, shrink, setShow }) => (
  <NavButtonsContainer className={className}>
    <ThemeToggle shrink={shrink} />
    <MenuButton
      $shrink={shrink}
      onClick={() => setShow(prevShow => !prevShow)}
    >
      {menuOpen ? <FaTimes /> : <FaEllipsisV />}
      
    </MenuButton>
  </NavButtonsContainer>
)

const HeaderNav = ({ shrink }) => {
  const [show, setShow] = useState(false);
  const navMenuRef = useRef(null);
  // const handleOpen = () => setShow(true);
  // const handleClose = () => setShow(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (show && navMenuRef.current) {
        if (!navMenuRef.current.contains(e.target) || Math.ceil(window.scrollY) > 0) {
          setShow(false);
        }
      }
    }
    
    window.addEventListener('mousedown', checkIfClickedOutside);
    window.addEventListener('scroll', checkIfClickedOutside);
    return () => {
      window.removeEventListener('mousedown', checkIfClickedOutside);
      window.removeEventListener('scroll', checkIfClickedOutside);
    }
  }, [show])
  return (
    <Nav $shrink={shrink}>
      <Link to="/">
        <h2 className={(shrink ? 'text-xl transition-all' : 'transition-all') + ' m-0'}>Albert M</h2>
      </Link>
      {show ? (
        <NavMenu ref={navMenuRef}>
          <div className="flex flex-col leading-3">
            <NavControls className="self-end" menuOpen={show} shrink={shrink} setShow={setShow} />
            <div className="flex flex-col leading-8" onClick={() => setShow(false)}>
              <Link to="/">Home</Link>
              <Link to="about">About</Link>
            </div>            
          </div>
        </NavMenu>
      ) : (
        <NavControls menuOpen={show} shrink={shrink} setShow={setShow} />
      )}
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