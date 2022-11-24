import React, { Component } from "react";
import image from '../assets/carousel1.webp';
import image1 from '../assets/carousel2.webp';
import image2 from '../assets/carousel3.webp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carouseldiv.css';


export default class Carouseldiv extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "Linear"
    };
    return (
      <div className={{height: "80vh"}}>
        <Slider {...settings}>
        <div>
              
            <img src={image} alt="Image" />

            <h2 className="h2-fresh"> We sell incredibly fresh produce</h2>
                <p className="fresh-fruits">Fresh fruits and vegetables are an important part of a healthy diet. They contain essential vitamins, minerals, and other nutrients that are essential for good health.</p>
              <button className="btn-shopping" type="submit">Start Shopping</button>
              <div className="response-container">
                <div >
                    <p className="response-count">4k</p>
                    <p className="response-details">Customers Reviews</p>
                </div>
                <div>
                  <p className="response-count">100k</p>
                  <p className="response-details">Food Itens</p>
                </div>

                <div>
                      <p className="response-count">5k+</p>
                      <p className="response-details">App Download</p>
                </div>

            </div>
          </div>

          <div>
            <img src={image1} alt="Image" />

              <h2 className="h2-fresh"> We sell incredibly fresh produce</h2>
                <p className="fresh-fruits">Fresh fruits and vegetables are an important part of a healthy diet. They contain essential vitamins, minerals, and other nutrients that are essential for good health.</p>
              <button className="btn-shopping" type="submit">Start Shopping</button>
              <div className="response-container">
                <div >
                    <p className="response-count">4k</p>
                    <p className="response-details">Customers Reviews</p>
                </div>
                <div>
                  <p className="response-count">100k</p>
                  <p className="response-details">Food Itens</p>
                </div>

                <div>
                      <p className="response-count">5k+</p>
                      <p className="response-details">App Download</p>
                </div>
              </div>
          </div>
          <div>
          <img src={image2} alt="Image" />


          </div>
         
          
        </Slider>
      </div>
    );
  }
}