import { useState } from 'react';
import {CardGroup, Card, Row, Col, Dropdown, Container, Button } from 'react-bootstrap';
import { SlCalender } from 'react-icons/sl';
import Calendar from 'react-calendar';
import { BsPerson} from 'react-icons/bs';
import { AiOutlineTag, AiOutlinePlus } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import "react-calendar/dist/Calendar.css";


const SliderCard = () => {
const current_date = useState(new Date().getDate() + ' ' + new Date().toLocaleString('default', { month: 'long' }) + ' ' + new Date().getFullYear())
const next_date = useState((new Date().getDate()+1) + ' ' + new Date().toLocaleString('default', { month: 'long' }) + ' ' + new Date().getFullYear())
    
return ( 
        <div className='card-group-padding slider-card'>
            <div className='p-2'>
                <Dropdown className="d-inline-block dropdown">
                    <Dropdown.Toggle className='dropdown_toggle p-3'  variant="light" style={{content:"none"}}>
                        <SlCalender className='me-3 date-span'/>
                            <a href="" className='date-span'><span className='mx-3 date-span'>{current_date}</span></a>
                            <span className='mx-3 rounded-pill p-1' style={{'background-color' : '#f5f5f0'}}>1 night</span>
                            <a href="" className='date-span'><span className='mx-3 date-span'>{next_date}</span></a>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown_menu1">
                        <Container>
                            <table className='NavBar_align '>
                                <tr>
                                    <td>
                                        <Calendar className="mx-3 my-3"/>
                                    </td>
                                    <td>
                                        <Calendar/>
                                    </td>
                                </tr>
                                <tr className='text-center'>
                                    <td className='text-center p-2' colSpan={2}>
                                        <h6 className='slider-currency-label'><RiErrorWarningLine/> Currency: LKR. Price is for reference only.</h6>
                                    </td>
                                </tr>
                            </table>
                        </Container>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        <div className='p-2'>
                    <Dropdown className="d-inline-block dropdown">
                        <Dropdown.Toggle className='dropdown_toggle p-3'  variant="light" style={{content:"none"}}>
                        <BsPerson/>
                        <span> 1 Rooms , 1 Audit, 0 Children</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown_menu2">
                            <Container>
                                <Row className='py-3'>
                                   <Col className='px-4'>Max. 8 guests per room</Col>
                                </Row>
                                <Row >
                                    <Row className='py-3'>
                                        <Col className='flex-item'>
                                            <div></div>
                                        </Col>
                                        <Col className='flex-item'>
                                            <p className='font-card'>Adult(s)</p>
                                        </Col>
                                        <Col className='flex-item'>
                                        <div className='font-card'>Children (under 12)</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='py-2 flex-item'>
                                            Room1
                                        </Col>
                                        <Col className='border py-2 mx-2'>
                                                    <span className='m-2'>-</span>
                                                    <span className='m-2'>1</span>
                                                    <span className='m-2'>+</span>
                                        </Col>
                                        
                                        <Col className='border py-2'>
                                                    <span className='m-2'>-</span>
                                                    <span className='m-2'>1</span>
                                                    <span className='m-2'>+</span>
                                        </Col>
                                    </Row>
                                </Row>
                                <hr />
                                <Row className='px-5 py-2'>
                                   <button className='btn btn-outline-warning'><AiOutlinePlus/> Add Room</button>
                                </Row>
                            </Container>
                        </Dropdown.Menu>
                    </Dropdown>
        </div>
        <div className='p-2'>
            <Dropdown className="d-inline-block dropdown">
                <Dropdown.Toggle className='dropdown_toggle p-3'  variant="light" style={{content:"none"}}>
                    <AiOutlineTag/>
                    <input type="text" size="sm" placeholder='Special Code' className='footer-input'/>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown_menu3">
                    <Container>
                        <Row className='NavBar_align mx-2 my-3'>
                            Corporate / Special Rate (Optional)
                        </Row>
                        <Row className='NavBar_align mx-2 my-3'>
                            <select name="" id="" className='p-2'>
                                <option value="">Select Code Type</option>
                                <option value="">Coporate</option>
                                <option value="">Group</option>
                                <option value="">Travel Agency</option>
                                <option value="">Promotion</option>
                                <option value="">Travel Agency</option>
                            </select>
                        </Row>
                        <Row className='NavBar_align mx-2 my-3'>
                            <input type="text" placeholder='Enter Code' className='p-2'/>
                        </Row>
                    </Container>
                </Dropdown.Menu>
            </Dropdown>
            <a className='btn btn-warning search-btn mx-2 p-3'>Search</a>
        </div>
      </div>
     );
}
 
export default SliderCard;