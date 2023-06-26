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

function TopSellingProduct() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const[height, setHeight]= useState("")
  const[width, setWidth]= useState("")
  const[transitionBanana, setTransitionBanana]= useState("")
  const[transitionYam, setTransitionYam]= useState("")
  const[transitionCarrot, setTransitionCarrot]= useState("")
  const[transitionPepper, setTransitionPepper]= useState("")
  const [backgroundColorYam, setBackgroundColorYam] = useState("");
  const[heightYam, setHeightYam]= useState("")
  const[widthYam, setWidthYam]= useState("")
  const [backgroundColorCarrot, setBackgroundColorCarrot] = useState("");
  const[heightCarrot, setHeightCarrot]= useState("")
  const[widthCarrot, setWidthCarrot]= useState("")
  const [backgroundColorPepper, setBackgroundColorPepper] = useState("");
  const[heightPepper, setHeightPepper]= useState("")
  const[widthPepper, setWidthPepper]= useState("")

  const styles = {
    'width': width,
   'height': height,
    backgroundColor: backgroundColor,
    transition: transitionBanana,
  };



  const styleyam = {
    'width': widthYam,
   'height': heightYam,
    backgroundColor: backgroundColorYam,
    transition: transitionYam,
  };

  const stylecarrot = {
    'width': widthCarrot,
   'height': heightCarrot,
    backgroundColor: backgroundColorCarrot,
    transition: transitionCarrot,
  };

  const stylepepper = {
    'width': widthPepper,
   'height': heightPepper,
    backgroundColor: backgroundColorPepper,
    transition: transitionPepper,
  };


  
  function hoverEffect(){
    setWidth('260px'); setTransitionBanana('2s')
  }

  function hoverOut(){
    setBackgroundColor(""); setWidth(''); setHeight('');
  }

  function hoveryam(){
   setWidthYam('260px'); setTransitionYam('2s')
  }

  function hoverYamOut(){
    setBackgroundColorYam(""); setWidthYam(''); setHeightYam('')
  }

  function hoverCarrot(){
   setWidthCarrot('260px'); setTransitionCarrot('2s')
  }

  function hoverCarrotOut(){
    setBackgroundColorCarrot(""); setWidthCarrot(''); setHeightCarrot('')
  }

  function hoverPepper(){
   setWidthPepper('260px'); setTransitionPepper('2s')
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
          <div id="div1" className="top-img" >
            <img className="icon" src={love} alt="Love" />
            <img style={styles} className="img1"  src={banana} alt="Banana" />
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
            <div id="pmm" className="plus-minus">
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
         onMouseLeave={hoverYamOut}
        >
          <div id="div2"  className="top-img">
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
            <div id="pmm" className="plus-minus">
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
          <div id="div3" className="top-img">
            <img className="icon" src={whiteLove} alt="" />
            <img  style={stylecarrot} className="img1" src={carrot} alt="Carrot" />
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
            <div id="pmm" className="plus-minus">
              <button className="decrement">-</button>2
              <button className="increment">+</button>1
            </div>
            <div>
              <button className="cart-button">Add to Cart</button>
            </div>
          </div>
        </div>

        <div id="peppper" className="banana"
        onMouseEnter={hoverPepper}
        onMouseLeave={hoverPepperOut}
        >
          <div id="div4" className="top-img">
            <img className="icon" src={whiteLove} alt="" />
            <img style={stylepepper} className="img1" src={pepper} alt="Pepper" />
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
            <div id="pmm" className="plus-minus">
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
