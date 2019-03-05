import React from 'react';
import Slider from "react-slick";
import home from './home.jpg';
import FremontTroll from './FremontTroll.jpg';
import PikePlaceMarket from './PikePlaceMarket.jpg';
import GumWall from './GumWall.jpg';

console.log(home);
console.log(FremontTroll);
console.log(PikePlaceMarket);
console.log(GumWall);


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
          <img src= {home} alt="Seattle Skyline"/>
        </div>
        <div>
          <img src= {FremontTroll} alt="The Fremont Troll in Seattle."/>
        </div>
        <div>
          <img src={PikePlaceMarket} alt="Pike Place Market in Downtown Seattle."/>
        </div>
        <div>
          <img src= {GumWall} alt="The Famous Gum Wall."/>
    </div>
      </Slider>
    );
  }
} 
