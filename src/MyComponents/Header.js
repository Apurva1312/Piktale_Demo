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
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <input id="formGridState" className="form-control state" type="text" onChange={e => onChangeHandler(e.target.value)} value={text}/>
      <div className="suggest">{text}</div>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <input id="formGridCity" className="form-control city" type="text"></input>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <input  type="text" id="formGridZip" className="form-control zip" name="zip" pattern="[0-9]+"></input>
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
