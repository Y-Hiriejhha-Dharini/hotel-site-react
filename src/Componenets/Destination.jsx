import {Card, Form, Button} from 'react-bootstrap';

function Destination() {
  return (
    <div className='py-2'>
      {/*Select */}
      <h1 className='text-center sub_heading'>Our Desninations</h1>
      <div className='col-md-4 mx-auto pt-3 pb-5'>
        <Form.Select aria-label="Default select example" className='p-3' size="sm">
          <option value="1">Haarana Village By Cinnamon</option>
          <option value="2">Habarana Velifushi Maldives</option>
          <option value="3">Cinnamon Hakuraa Huraa Maldives</option>
          <option value="3">Cinnamon Donveli Maldives</option>
          <option value="3">Ellaidho Maldives By Cinnamon</option>
        </Form.Select>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img variant="top" src="https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/cinnamon-dhonveli-dest-0803.png" width="50%" />
      </div>
      <div style={{position:"relative", left:'900px', top:'-400px', width: 0, height: '50px'}}>
        <Card style={{ width: '18rem', padding:'40px 20px' }}>
          <Card.Title style={{paddingLeft: '10px'}}>Cinnamon Life</Card.Title>
          <Card.Body>
            <Card.Text>
              Take a peek at the 4.5 million sq.ft urban sanctuary, envisioned as the epicenter of modern south Asia
            </Card.Text>
            <Button>Discover More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Destination;