import {Row, Button, Col, Card} from 'react-bootstrap';

function Offers() {
  const offers = [
    {
      image : "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/8/B/{A8B2E679-6D4A-497F-95C4-A905821952F5}slcmemberrate.jpg?w=360&h=175&mode=crop&quality=100&scale=both",
      room  :  'Rooms & Suites',
      date  :  "01 Feb 2021 - 31 Dec 2021",
      offer  :  "Book Early and Save with Flexibility",
      description  :  "Book in advance and save updo 20% with complementary date charges",
      amount  :  "From LKR 25,500.00 Average Per Night"
    },
    {
      image : "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/3/2/9/{32926B10-8EE8-4639-B2DD-AC55F70CB76D}slcwithbreakfast.jpg?w=360&h=175&mode=crop&quality=100&scale=both",
      room  :  'Rooms & Suites',
      date  :  "",
      offer  :  "Adventure Zone Family Package",
      description  :  "Enjoy a memorable family gateway in colombo",
      amount  :  "From LKR 31,756.80 Average Per Night"
    },
    {
      image : "https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/D/F/{ADF8672B-DCDE-4361-A5D8-2865D7D98FC7}gymweb.jpg?w=360&h=175&mode=crop&quality=100&scale=both",
      room  :  'Rooms & Suites',
      date  :  "",
      offer  :  "Bed & Breakfast",
      description  :  "Start your day with stunning views of colombo and daily breakfast",
      amount  :  ""
    },
  ]
  return (
    <div className='mt-5'>
      <h1 className='text-center sub_heading'>Offers</h1>
      <div className='offer_card'>
        <Row xs={1} md={3} className="g-5">
          {offers && offers.map((offer, i) => (
            <Col key={i}>
              <Card style={{ height: '100%' }}>
                <Card.Img variant="top" src={offer.image ? offer.image : <span>&nbsp;&nbsp;</span>} />
                <Card.Body className='text-center'>
                  <p className='fw-bold text-sm'>{offer.room ? offer.room : <span>&nbsp;&nbsp;</span>}</p>
                  <p className='text-secondary'>{offer.date ? offer.date : <span>&nbsp;&nbsp;</span>}</p>
                  <Card.Title>{offer.offer && offer.offer}</Card.Title>
                  <Card.Text>
                    <p>{offer.description ? offer.description : <span>&nbsp;&nbsp;</span>}</p>
                    <p className='text-secondary'>{offer.amount ? offer.amount : <span>&nbsp;&nbsp;</span>}</p>
                  </Card.Text>
                </Card.Body>
                <Button variant="outline-warning" className='offer-card-button'>View Details</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    <a href="" className='offer_view_all'>
      <h5 >View All</h5>
    </a>
    </div>
  );
}

export default Offers;