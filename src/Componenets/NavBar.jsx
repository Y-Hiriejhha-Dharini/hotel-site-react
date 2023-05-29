import { useState } from 'react';
import {Nav, Button, Dropdown, Row, Col, Container } from 'react-bootstrap';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';


const NavBar = () => {

  const [show, setShow] = useState(false);

  const MouseOver = (e)=>{
    setShow(!show);
  };

  const MouseAway = () =>{
    setShow(false);
  };


    return ( 
        <>
      <Nav className="justify-content-center bg-dark  fw-bold" activeKey="/home">
        <Nav.Item>
            <Dropdown className="d-inline-block dropdown">
              <Dropdown.Toggle className='dropdown_toggle dropdown btn-dark' show={show} onMouseOver={MouseOver} onMouseLeave={MouseAway} style={{content:"none"}}>ABOUT</Dropdown.Toggle>
              <Dropdown.Menu className="dropdown_menu">
              <Container>
                  <Row className='NavBar_align'>
                    <Col>
                      <h6 className='ps-3'>About The Hotel</h6>
                      <Dropdown.Item href="#/action-2">Overview</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Explore Colombo</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Services & Facilities</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Map & Directions</Dropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
        </Nav.Item>
        <Nav.Item>
          <Dropdown className="d-inline-block dropdown">
              <Dropdown.Toggle className='dropdown_toggle dropdown btn-dark'  style={{content:"none"}}>ROOMS & SUITES</Dropdown.Toggle>
              <Dropdown.Menu className="dropdown_menu">
                <Container>
                  <Row className='NavBar_align'>
                    <Col>
                      <h6 className='ps-3'>Rooms</h6>
                      <Dropdown.Item href="#/action-2">Deluxe Lake View</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Deluxe Ocean View</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Premier Balcony</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Premier Ocen View</Dropdown.Item>
                    </Col>
                    <Col>
                      <h6 className='ps-3'>Horizone Club</h6>
                      <Dropdown.Item href="#/action-2">Horozone Club Lake View</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Horozone Club Ocean View</Dropdown.Item>
                    </Col>
                    <Col>
                      <h6 className='ps-3'>Suites</h6>
                      <Dropdown.Item href="#/action-2">Executive Suites</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Speciality Suites</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Shangri-La Suites</Dropdown.Item>
                    </Col>
                    <Col>
                      <h6 className='ps-3'>Connecting Rooms</h6>
                      <Dropdown.Item href="#/action-2">Executive Suite & Premier Ocean Room Connecting</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Two Deluxe Lake View Rooms Connecting</Dropdown.Item>
                    </Col>
                  </Row>
                  <hr />
                  <Row><Col><Dropdown.Item href="#/action-2">ROOMS & SUITES OVERVIEW</Dropdown.Item></Col></Row>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
        </Nav.Item>
        <Nav.Item>
          <Dropdown className="d-inline-block dropdown">
              <Dropdown.Toggle className='dropdown_toggle dropdown btn-dark' style={{content:"none"}}>DINNING</Dropdown.Toggle>
              <Dropdown.Menu className="dropdown_menu">
              <Container>
                  <Row className='NavBar_align'>
                    <Col>
                      <h6 className='ps-3'>Restaurants</h6>
                      <Dropdown.Item href="#/action-2">Cake Temptations by Shangri-La Colombo</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Shang Palace</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Capital Bar & Grill</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Central</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Central Cafe</Dropdown.Item>
                    </Col>
                    <Col>
                      <h6 className='ps-3'>Bars & Lounges</h6>
                      <Dropdown.Item href="#/action-2">Sapphyr Lounges</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Capital Bar & Grill</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Pool Bar</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Sunset Terrace</Dropdown.Item>
                    </Col>
                  </Row>
                  <hr />
                  <Row><Col><Dropdown.Item href="#/action-2">DINNING OVERVIEW</Dropdown.Item></Col></Row>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
        </Nav.Item>
        <Nav.Item>
            <Dropdown className="d-inline-block dropdown">
              <Dropdown.Toggle className='dropdown_toggle dropdown btn-dark' style={{content:"none"}}>EXPERIENCE</Dropdown.Toggle>
              <Dropdown.Menu className="dropdown_menu">
              <Container>
                  <Row className='NavBar_align'>
                    <Col>
                      <h6 className='ps-3'>For Kids</h6>
                      <Dropdown.Item href="#/action-2">Overview</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Adventure Zone</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Celebrations</Dropdown.Item>
                    </Col>
                    <Col>
                      <h6 className='ps-3'>Health & Leisure</h6>
                      <Dropdown.Item href="#/action-2">Overview</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Helth Club</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Chi, The Spa</Dropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
        </Nav.Item>
        <Nav.Item>
            <Dropdown className="d-inline-block dropdown">
              <Dropdown.Toggle className='dropdown_toggle dropdown btn-dark' variant="dark" style={{content:"none"}}>EVENTS</Dropdown.Toggle>
              <Dropdown.Menu className="dropdown_menu">
              <Container>
                  <Row className='NavBar_align'>
                    <Col>
                      <h6 className='ps-3'>Meetings & Events</h6>
                      <Dropdown.Item href="#/action-2">Overview</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Experience It</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Coworking Space</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Outside Catering</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Request for Proposal</Dropdown.Item>
                    </Col>
                    <Col>
                      <h6 className='ps-3'>Wedding and Celebrations</h6>
                      <Dropdown.Item href="#/action-2">Overview</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Wedding Planning</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Wedding By Shangri-La</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Request for Proposal</Dropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/gallery" className='text-white fw-normal'>GALLERY</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/offers" className='text-white fw-normal'>OFFERS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Dropdown className="d-inline-block dropdown">
              <Dropdown.Toggle className='dropdown_toggle dropdown btn-dark' variant="dark" style={{content:"none"}}>MORE</Dropdown.Toggle>
              <Dropdown.Menu className="dropdown_menu">
              <Container>
                  <Row className='NavBar_align'>
                    <Col>
                      <h6 className='ps-3'>Apartments</h6>
                      <Dropdown.Item href="#/action-2">Learn More</Dropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
        </Nav.Item>
        <Nav.Item className='mx-5 my-1'>
            <button className='btn btn-outline-light btn-sm px-3 mx-5'>FIND A HOTEL</button>
        </Nav.Item>
      </Nav>
      </>
     );
}
 
export default NavBar;