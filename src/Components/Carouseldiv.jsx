import React, { Component } from "react";
import {Carousel} from '../assets/carousel1.webp';
import {Carousel1} from '../assets/carousel2.webp';
import {Carousel2} from '../assets/carousel3.webp';
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";


export default class Carouseldiv extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={Carousel} alt="Image" />
          </div>
          <div>
          <img src={Carousel1} alt="Image" />
          </div>
          <div>
          <img src={Carousel2} alt="Image" />
          </div>
          {/* <div>
          <img src={Carousel1} alt="Image" />
          </div> */}
          
        </Slider>
      </div>
    );
  }
}