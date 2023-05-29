import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { BsPerson} from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import { BiMobile } from "react-icons/bi";


const Header = () => {
    return ( 
        <Navbar collapseOnSelect expand="lg" bg="light" >
      <Container>
      <Navbar.Brand href="#home">
            <img
              src="https://s.shangri-la.com/sl-fe-hotel-prod/img/shangrila_en2021.a24c901.png"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
          <Nav className="ms-auto fw-bold">
            <Nav.Link href="#deets"><BsPerson className='mx-2'/>Sign In | </Nav.Link>
            <Nav.Link href="#memes">Join Now | </Nav.Link>
            <Nav.Link href="#deets">Find Reservations | </Nav.Link>
            <Nav.Link href="#memes"><TfiWorld className='me-2'/> English | </Nav.Link>
            <Nav.Link href="#memes" className='mx-2'>LKR |</Nav.Link>
            <Nav.Link href="#memes"><BiMobile /> </Nav.Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
     );
}
 
export default Header;