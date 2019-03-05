import React from 'react';
import Slider from "react-slick";

export default class SimpleSlider extends React.Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1}
      
    return (
    
      <Slider {...settings}>
      <div>
          <img src="/home.jpg" alt="A picture of Seattle."/>
        </div>
        <div>
          <img src="/FremontTroll.jpg" alt="A picture of Seattle."/>
        </div>
        <div>
          <img src="/PikePlaceMarket.jpg" alt="A picture of Seattle."/>
        </div>
        <div>
          <img src="/GumWall.jpg" alt="A picture of Seattle."/>
    </div>
    <div>
          <img src="/home.jpg" alt="A picture of Seattle."/>
        </div>
        <div>
          <img src="/FremontTroll.jpg" alt="A picture of Seattle."/>
        </div>
        <div>
          <img src="/PikePlaceMarket.jpg" alt="A picture of Seattle."/>
        </div>
        <div>
          <img src="/GumWall.jpg" alt="A picture of Seattle."/>
    </div>
      </Slider>
    );
  }
} 
