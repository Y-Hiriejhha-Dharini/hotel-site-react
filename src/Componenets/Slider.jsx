import {Carousel} from 'react-bootstrap';
import SliderCard from './SliderCard';
import { MdKeyboardArrowRight } from "react-icons/md";

function Slider() {
  return (
    <>
    <Carousel className='carousel_bg'>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img"
          src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/2/0/B/{20B18195-50BE-4993-9CAE-0A141AFD3747}201126_slcb_homepage1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='carousel_caption_margin'>
          <h1>Shangri-La Colombo</h1>
          <h5>Come with us through the whimsical world of Shangri-La, where your personal paradise awaits.</h5>
        </Carousel.Caption>
        {/*Slider Link */}
        <div className='slider-link'>
          <h5 ></h5>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img"
          src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/B/4/D/{B4DC25D4-2F83-4133-BE8A-B139CBAD061B}200710_slcb_slcares.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='carousel_caption_margin'>
          <h1>Shangri-La Colombo</h1>
          <h5>A personal tropical sanctuary set within the heart of the city</h5>
        </Carousel.Caption>
        <div className='slider-link'>
          {/*Slider Link */}
          <h5>Find Your Shangri-La <MdKeyboardArrowRight/></h5>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel_img"
          src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/D/3/C/{D3C15B64-C087-481C-B560-C3578FC74DB0}FindYourShangriLa_HotelBanner_1920x800.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='carousel_caption_margin'>
          <h1>Shangri-La Cares</h1>
          <h5>Your well-being in our care - learn more about our safety standards</h5>
        </Carousel.Caption>
        <div className='slider-link'>
          {/*Slider Link */}
          <h5>Learn More <MdKeyboardArrowRight/></h5>
        </div>
      </Carousel.Item>
    </Carousel>

    {/*Slider Card */}
    <SliderCard />
    </>
  );
}

export default Slider;