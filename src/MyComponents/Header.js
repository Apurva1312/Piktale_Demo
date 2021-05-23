import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import './Header.css'
import { Button , Col, Form } from 'react-bootstrap';
import {IndianStates} from '../utils/dataHelpers';
import './MainPage.css'
import axios from 'axios'

 function Header() {
  const[states,setStates] = useState([])
  // const[users,setUsers]=useState([])
  const[text,setText] = useState('')
  // const[suggestions,setSuggestions] = useState([])
  useEffect(() => {
    const loadstates = async() =>{
      // https://reqres.in/api/users
      // https://cdn-api.co-vin.in/api/v2/admin/location/states
      const response = await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/state')
      console.log(response.data)
      setStates(response.data.states)
      
    }
    loadstates();

  },[])

  const onChangeHandler = (text) => {
    let matches = []
    if(text.length > 0){
      matches = states.filter(state =>{
        const regex = new RegExp(`${text}`,"gi")
        return state.state_name.match(regex)
      })
    }
      console.log('matches',matches)
      // setSuggestions(matches)
      setText(text)

  }


  return (
    <div className="header">
        <div className="carousel-effect">
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
      {/* {suggestions && suggestions.map((suggestion,i)=>
        //<div key={i}>{suggestion.state_name}</div>
      //)} */}
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

