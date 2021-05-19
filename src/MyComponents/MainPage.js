import React from 'react';
import { Button , Col, Form } from 'react-bootstrap';
import {IndianStates} from '../utils/dataHelpers';
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
    )
    }
