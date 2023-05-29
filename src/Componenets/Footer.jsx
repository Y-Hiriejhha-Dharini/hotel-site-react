import {Button, Card, Row, Col, Form } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
import { MdKeyboardArrowRight } from "react-icons/md";

function Footer() {
  return (
    <div className='footer'>
      <Row>
        <Col>
          <h3 className='sub_heading'>About</h3>
          <ul className='list_style'>
            <li><a href="">About Cinnamon Hotel & Resorts</a></li>
            <li><a href="">Media & Accolades</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="">CSR & Sustainability</a></li>
            <li><a href="">John Keels Group</a></li>
            <li><a href="">Cinnamon Air</a></li>
            <li><a href="">Nature Traits</a></li>
            <li><a href="">Cinnamon Box Office</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Privacy Statement</a></li>
          </ul>
        </Col>
        <Col>
          <Row>
            <Col>
            <h3 className='sub_heading'>Get In Touch</h3>
              <ul className='list_style'>
                <li><a href="">Know Sri Lanka</a></li>
                <li><a href="">Know Maldives</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">FAQs</a></li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='sub_heading'>Sections</h3>
              <ul className='list_style'>
                <li><a href="">Career</a></li>
                <li><a href="">Blog</a></li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <h3 className='sub_heading'>Follow Us</h3>
              <FaFacebookF className='icon-style'/>
              <AiOutlineTwitter className='icon-style'/>
              <FaLinkedinIn className='icon-style'/>
              <ImInstagram className='icon-style'/>
              <TfiYoutube  className='icon-style'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='sub_heading'>Get Cinnamon in your inbox</h3>
              <input className='p-4 m-2' type="text" placeholder="Email Address"  />
              <MdKeyboardArrowRight className='footer-right-arrow' />
                <div>
                  <Form.Check type="checkbox"
                  label="By Checking this box, I consent to the processing of my Personal Data by Cinnamon for the purpose and within the Conditions set out in this form and the"/>
                </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;