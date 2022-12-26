import React from "react";
import { useState } from "react";
import banana from "../../assets/banana.svg";
import yam from "../../assets/yam.svg";
import carrot from "../../assets/carrot.svg";
import pepper from "../../assets/pepper.svg";
import stars from "../../assets/stars.svg";
import love from "../../assets/love.svg";
import whiteLove from "../../assets/whiteLove.svg";
import "./TopSellingProduct.css";
import { hover } from "@testing-library/user-event/dist/hover";

function TopSellingProduct() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const[height, setHeight]= useState("178px")
  const[width, setWidth]= useState("250px")
  const [backgroundColorYam, setBackgroundColorYam] = useState("");
  const[heightYam, setHeightYam]= useState("178px")
  const[widthYam, setWidthYam]= useState("250px")
  const [backgroundColorCarrot, setBackgroundColorCarrot] = useState("");
  const[heightCarrot, setHeightCarrot]= useState("178px")
  const[widthCarrot, setWidthCarrot]= useState("250px")
  const [backgroundColorPepper, setBackgroundColorPepper] = useState("");
  const[heightPepper, setHeightPepper]= useState("178px")
  const[widthPepper, setWidthPepper]= useState("250px")

  const styles = {
    'width': width,
   'height': height,
    backgroundColor: backgroundColor,
  };

  const styleyam = {
    'width': widthYam,
   'height': heightYam,
    backgroundColor: backgroundColorYam
  };

  const stylecarrot = {
    'width': widthCarrot,
   'height': heightCarrot,
    backgroundColor: backgroundColorCarrot,
  };

  const stylepepper = {
    'width': widthPepper,
   'height': heightPepper,
    backgroundColor: backgroundColorPepper,
  };

  function hoverEffect(){
    setBackgroundColor("#ff7d09"); setWidth('260px'); setHeight('195px')
  }

  function hoverOut(){
    setBackgroundColor(""); setWidth(''); setHeight('')
  }

  function hoveryam(){
    setBackgroundColorYam("#ff7d09"); setWidthYam('260px'); setHeightYam('190px')
  }

  function hoverYamOut(){
    setBackgroundColorYam(""); setWidthYam(''); setHeightYam('')
  }

  function hoverCarrot(){
    setBackgroundColorCarrot("#ff7d09"); setWidthCarrot('260px'); setHeightCarrot('195px')
  }

  function hoverCarrotOut(){
    setBackgroundColorCarrot(""); setWidthCarrot(''); setHeightCarrot('')
  }

  function hoverPepper(){
    setBackgroundColorPepper("#ff7d09"); setWidthPepper('260px'); setHeightPepper('195px')
  }

  function hoverPepperOut(){
    setBackgroundColorPepper(""); setWidthPepper(''); setHeightPepper('')
  }

  return (
    <>
      <h3 className="top-header">Top Selling Product</h3>
      <div className="fruits">
        <div className="banana" 
         onMouseEnter={hoverEffect}
         onMouseLeave={hoverOut}>
          <div className="top-img">
            <img className="icon" src={love} alt="Love" />
            <img style={styles}  className="img" src={banana} alt="Banana" />
          </div>

          <div>
            <div className="top-selling">
              <p className="top-name">Fresh Banana</p>
            </div>
            <div className="top-ratings">
              <img src={stars} alt="Ratings" />
              <span className="top-span">(12)</span>
            </div>
            <div className="price-block">
              <p className="top-price">
                #1,000
                <span className="price-pcs">/Pcs</span>
              </p>
            </div>
            <div className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="banana"
        onMouseEnter={hoveryam}
        onMouseLeave={hoverYamOut}>
          <div className="top-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img style={styleyam} className="img1" src={yam} alt="Yam" />
          </div>
          <div>
            <div className="top-selling">
              <p className="top-name">Fresh Farm Yam</p>
            </div>
            <div className="top-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div className="price-block">
              <p className="top-price">
                #1,000
                <span className="price-pcs">/Pcs</span>
              </p>
            </div>
            <div className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="banana"
        onMouseEnter={hoverCarrot}
        onMouseLeave={hoverCarrotOut}
        >
          <div className="top-img">
            <img className="icon" src={whiteLove} alt="" />
            <img style={stylecarrot} className="img1" src={carrot} alt="Carrot" />
          </div>
          <div className="top-selling">
            <div>
              <p className="top-name">Farm Fresh Carrot</p>
            </div>
            <div className="top-ratings">
              <img src={stars} alt="" />
              <span className="">(12)</span>
            </div>
            <div className="price-block">
              <p className="top-price">
                #1,000
                <span className="price-pcs">/Pcs</span>
              </p>
            </div>
            <div className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="banana"
        onMouseEnter={hoverPepper}
        onMouseLeave={hoverPepperOut}
        >
          <div className="top-img">
            <img className="icon" src={whiteLove} alt="" />
            <img style={stylepepper} className="img3" src={pepper} alt="Pepper" />
          </div>
          <div className="top-selling">
            <div>
              <p className="top-name">Farm Fresh Pepper</p>
            </div>
            <div className="top-ratings">
              <img src={stars} alt="" /> <span>(12)</span>
            </div>
            <div className="price-block">
              <p className="top-price">
                #1,000
                <span className="price-pcs">/Pcs</span>
              </p>
            </div>
            <div className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button className="view-btn">View More</button>
      </div>
    </>
  );
}
export default TopSellingProduct;
