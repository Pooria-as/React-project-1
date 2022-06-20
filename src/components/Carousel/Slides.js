import React from 'react'
import Slider from "react-slick";
import slide_one from "../../images/slide_one.jpg"
import slide_two from "../../images/slide_two.jpg"
import slide_three from "../../images/slide_three.jpg"
import styled from 'styled-components';
const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,

  };
  return (
    <div className='carrousel_wrapper'
      style={{
        'height': `${window.innerHeight}px`,
        'overflow': 'hidden',
        'background-size': 'cover'
      }}
    >
      <Slider
        {...settings}
      >
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`,
              'background-size': 'cover',


            }}
          >

          </div>
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`,
              'background-size': 'cover',

            }}
          ></div>
        </div>

        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`,
              'background-size': 'cover',

            }}
          ></div>
        </div>
      </Slider >


    </div >
  )
}


export default Slides