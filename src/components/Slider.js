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
          <img src="/home.jpg" alt="Seattle Skyline"/>
        </div>
        <div>
          <img src="/FremontTroll.jpg" alt="The Fremont Troll in Seattle."/>
        </div>
        <div>
          <img src="/PikePlaceMarket.jpg" alt="Pike Place Market in Downtown Seattle."/>
        </div>
        <div>
          <img src="/GumWall.jpg" alt="The Famous Gum Wall."/>
    </div>
      </Slider>
    );
  }
} 
