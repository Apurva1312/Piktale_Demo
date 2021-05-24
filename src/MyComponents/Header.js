
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import './Header.css'
import { Button , Col, Form } from 'react-bootstrap';
import './MainPage.css'
import axios from 'axios';
 function Header() {
  const[states,setStates] = useState([])  // get states array of obj
  const[districts,setDistricts]=useState([]) // get districts array of obj
  const[text,setText] = useState({
    state_id: '',
    state_name:''
  }) // state's text in input field
  const[suggestions,setSuggestions] = useState([]) // state's suggestions
  const[x,setX]= useState('') // disrict's text in input field
  const[options,setOptions] = useState([]) // district's suggestions
  
  // get states
  useEffect(() => {
    const loadstates = async() =>{
      const response = await axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
      console.log(response.data)
      setStates(response.data.states)
    }
    loadstates();

  },[])

  const onSuggestHandler =(state)=>{
    setText({
      state_id:state.state_id,
      state_name:state.state_name
    })
    setSuggestions([])
  }

  // get districts
  useEffect(() => {
    const loadcities = async() =>{
      console.log("State: ",text);
      const response = await axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${text.state_id}`)
      console.log(response.data.districts)
      setDistricts(response.data.districts)
    }
    loadcities();

  },[text])
  
  // suggestion for district
  const onOptionHandler =(x)=>{
    setX(x)
    setOptions([])
  }
  
  // states change handle
  const onChangeHandler = (text) => {
    let matches = []
    if(text.length > 0){
      matches = states.filter(state =>{
        const regex = new RegExp(`${text}`,"gi")
        return state.state_name.match(regex)
      })
    }
      console.log('matches',matches)
      setSuggestions(matches)
      setText(text)
  }

  // districts change handle
  const onchangeHandler = (x) => {
    let matches = []
    if(x.length > 0){
      matches = districts.filter(district =>{
        const regex = new RegExp(`${x}`,"gi")
        return district.district_name.match(regex)
      })
    }
      console.log('matches',matches)
      setOptions(matches)
      setX(x)

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
      <input id="formGridState" className="form-control state" type="text"
       onChange={e => onChangeHandler(e.target.value)} value={text.state_name} 
       onBlur ={()=>{
        setTimeout(()=>{
        setSuggestions([])
         },300)
       }} 
      
       />
      {suggestions && suggestions.map((suggestion,i)=>
        <div key={i} className="suggestion" onClick={() => 
        onSuggestHandler(suggestion)} 
        
        >{suggestion.state_name}</div>
      )}
      </Form.Group>
      <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <input id="formGridCity" className="form-control city" type="text"
        disabled={!text.state_name}
        onChange={e => onchangeHandler(e.target.value)} value={x}
      />
      {options && options.map((option,i)=>
        <div key={i} className="options" onClick={() => onOptionHandler(option.district_name)}
        >{option.district_name}</div>
      )}
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
