import React from 'react';
import { Button , Col, Form } from 'react-bootstrap';
import './MainPage.css'



export default function MainPage(props) {
    return (
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
    <option>Andaman And Nicobar Islands</option><option>Andhra Pradesh</option><option>Arunachal Pradesh</option><option>Assam</option><option>Bihar</option><option>Chandigarh</option>
<option>Chhattisgarh</option><option>Dadra And Nagar Haveli</option>
<option>Daman And Diu</option><option>Delhi</option><option>Goa</option><option>Gujarat</option><option>Haryana</option>
<option>Himachal Pradesh</option><option>Jammu And Kashmir</option><option>Jharkhand</option><option>Karnataka</option><option>Kerala</option>
<option>Ladakh</option><option>Lakshadweep</option><option>Madhya Pradesh</option><option>Maharashtra</option>
<option>Manipur</option><option>Meghalaya</option><option>Mizoram</option><option>Nagaland</option>
<option>Odisha</option><option>Puducherry</option><option>Punjab</option><option>Rajasthan</option><option>Sikkim</option><option>Tamil Nadu</option>
<option>Telangana</option><option>Tripura</option><option>Uttar Pradesh</option><option>Uttarakhand</option>
<option>West Bengal</option>
    </Form.Control>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
    <Form.Label>Zip</Form.Label>
    <Form.Control />
    </Form.Group>
    </Form.Row>
    <Button variant="primary" type="submit">
    Serach
    </Button>
    </Form> 
    </div>  
    )
    }
