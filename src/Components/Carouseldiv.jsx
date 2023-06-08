import React, { Component, useState } from "react";
import image from '../assets/caro1.webp';
import image1 from '../assets/caro2.webp';
import image2 from '../assets/caro3.webp';
import image3 from '../assets/caro4.webp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carouseldiv.css';
import Header from '../Components/Header';
import Login from "../Pages/Login/Login";



export default function Carouseldiv () {
    const settings={
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

    const [openLogin, setOpenLogin]= useState(false)
    return (   
    <>
    <Header/> 
     <div className={{height: "80vh"}}>
        <Slider className="caro" {...settings}>
        <div className='carousel1'>
             
            <img src={image} alt="Image" style={{objectFit: 'contain', maxWidth: '100%'}}/>

           
          </div>

          <div className='carousel2'>
            <img src={image1} alt="Image" style={{objectFit: 'contain', maxWidth: '100%'}}/>

              
          </div>
          <div carousel='carousel3'>
          <img src={image2} alt="Image" style={{objectFit: 'contain', maxWidth: '100%'}}/>


          </div>
         
          <div carousel='carousel3'>
          <img src={image3} alt="Image" style={{objectFit: 'contain', maxWidth: '100%'}}/>


          </div>
         
         
          
        </Slider>
        <div className="carousel-text-container">
          <div className="carouseltext">
          <h2 className="h2-fresh"> We sell incredibly fresh produce</h2>
                <p className="fresh-fruits">Fresh fruits and vegetables are an important part of a healthy diet. They contain essential vitamins, minerals, and other nutrients that are essential for good health.</p>
              <button className="btn-shopping" onClick={ () =>setOpenLogin(true)}>Start Shopping</button>
              <Login open={openLogin} onClose={()=>setOpenLogin(false)} />
              </div>
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
     

      </div>
    </> 
    )
};
