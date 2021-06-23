import React from 'react'
import {Carousel, } from 'react-bootstrap'
import '../App.css'

const HeaderCarousel = () => {
    return (
        <div>
        <div>
         <Carousel className="mx-auto my-2 carouser-c">
            <Carousel.Item>
              <img
              className="d-block carousel-image"
              src="/image/goa.jpg"
              alt="INDIA"
              />
              <Carousel.Caption className="carousel-text">
               
                <p>India is not a nation, nor a country. It is a subcontinent of nationalities</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                    className="d-block carousel-image"
                    src="/image/jong-marshes-79mNMAvSORg-unsplash.jpg"
                    alt="Second slide"
                  />

                 <Carousel.Caption className="carousel-text">
                      
                      <p>The tallest building in the world is now in Dubai.Dubai will never settle for anything less than first place.</p>
                 </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item>
                    <img
                      className="d-block carousel-image"
                      src="/image/aman-upadhyay--6YVJEsoEdE-unsplash.jpg"
                      alt="Third slide"
                    />

                  <Carousel.Caption className="carousel-text">
                      <p>Singapore has been incredibly well-managed. It was created out of the swamp, with a strong emotional idea: a safe place for mostly Chinese, but accepting other cultures and other races.</p>
                  </Carousel.Caption>
                   </Carousel.Item>
              </Carousel>
              <div style={{boxShadow:'0px 0px 15px -5px'}} className="carousel-title"> </div>
        </div>
        
        </div>
    )
}

export default HeaderCarousel
