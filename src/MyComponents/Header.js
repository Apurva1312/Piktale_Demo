import React from 'react'
import { Carousel } from 'react-bootstrap';
import './Header.css'
import { Button , Col, Form } from 'react-bootstrap';
import {IndianStates} from '../utils/dataHelpers';
import './MainPage.css'
 function Header() {
  return (
    <div ClassName="header">
        <div ClassName="carousel-effect">
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block "
      src="https://www.cowin.gov.in/assets/images/largest-vaccine-banner.jpg"
      alt="..."
      width="1350" height="350"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src="https://cdn.pixabay.com/photo/2021/01/17/22/03/vaccine-5926664__340.jpg"
      alt="..."
      width="1350" height="350"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  "
      src="https://cdn.pixabay.com/photo/2021/04/15/18/39/vaccine-6181857__340.jpg"
      alt="..." width="1350" height="350"
    />
  </Carousel.Item>
</Carousel>

<div className = "container">
       <h2>Check Vaccine Availability</h2>
      <Form>
      <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
      <option>Choose...</option>
      {
          IndianStates.map(state=>{
            return <Form.Control as="option" value={state}>{state}</Form.Control>
        })
    }
    </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
    <Form.Label>Zip</Form.Label>
    <Form.Control />
    </Form.Group>
    </Form.Row>
    <Button variant="primary" type="submit">
    Search
    </Button>
    </Form> 
    </div>  
    

</div>
</div>
  )
}
export default Header 
