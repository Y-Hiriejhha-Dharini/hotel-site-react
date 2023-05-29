import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Experience() {
  const cards= [
    {
      image : 'https://www.hilton.com/im/en/MBJRHHF/16722849/2021-lifestyle-shoot-at-hilton-rose-hall-resort-spa-an-all-inclusive-resort.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854',
      text : 'MULTIPLY TOUR POINTS'
    },
    {
      image : 'https://www.hilton.com/im/en/NoHotel/18127576/family-pool-day-0199-v1.jpg?impolicy=crop&cw=2000&ch=1333&gravity=NorthWest&xposition=0&yposition=83&rw=1280&rh=854',
      text : 'GET AWAY & SAVE MORE'
    },
    {
      image : 'https://www.hilton.com/im/en/NoHotel/15196711/shutterstock-269455079.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854',
      text : 'EARN UPTO 130K POINTS'
    },
    {
      image : 'https://www.hilton.com/im/en/NoHotel/13984175/cheers-5000x3333.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854',
      text : 'A NIGHT ON US'
    },
    {
      image : 'https://www.hilton.com/im/en/NoHotel/13984175/cheers-5000x3333.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=-1&rw=1280&rh=854',
      text : '3 NIGHTS UNDER $250'
    },
    {
      image : 'https://www.hilton.com/im/en/SINORHI/14530273/f-por-157-heroimage-crop3-2.jpg?impolicy=crop&cw=1500&ch=1000&gravity=NorthWest&xposition=0&yposition=0&rw=1280&rh=854',
      text : 'EARN UPTO 3X POINTS ON EVERY STAY'
    }
  ]
  return (
    <div className='p-2'>
      <h1 className='py-3 sub_heading text-center'>Experience Something New from Hilton</h1>
      <h5 className='py-2 mx-4'>Close to home or across the world. Hillton is there for you with memorable offers and experiences. Checkout What's New</h5>
      <Row xs={1} md={3} className="g-2">
        {cards && cards.map((card, i) => (
          <Col key={i} style={{ height: '80%', width:'30%' }} className='mx-auto'>
            <Card>
              <Card.Img variant="top" src={card.image} />
                <Card.ImgOverlay className='card_image_overlay'>
                  <Card.Text>{card.text}</Card.Text>
                </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Experience;