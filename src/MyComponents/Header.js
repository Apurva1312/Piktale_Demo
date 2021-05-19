import React from 'react'
import { Carousel } from 'react-bootstrap';
import './Header.css'


function Header() {
  return (
  <div className="header">
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
</div>
    </div>
  )
}
export default Header