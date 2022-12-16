import React from "react";
import banana from "../../assets/banana2.png";
import yam from "../../assets/yam.png";
import carrot from "../../assets/carrot.png";
import pepper from "../../assets/pepper.png";
import stars from "../../assets/star.png";
import heart from "../../assets/heart.png";
import whiteLove from "../../assets/whiteLove.png";
import "./TopSellingProduct.css";

function TopSellingProduct() {
  return (
    <>
      <h3 className="top-header">Top Selling Product</h3>
      <div className="fruits">
        <div className="banana">
          <div className="top-img">
            <img className="icon" src={heart} alt="Love" />
            <img className="img" src={banana} alt="Banana" />
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
                #1000
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

        <div className="banana">
          <div className="top-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img className="img1" src={yam} alt="Yam" />
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
                #1000
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

        <div className="banana">
          <div className="top-img">
            <img className="icon" src={whiteLove} alt="" />
            <img className="img1" src={carrot} alt="Carrot" />
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
                #1000
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

        <div className="banana">
          <div className="top-img">
            <img className="icon" src={whiteLove} alt="" />
            <img src={pepper} alt="Pepper" />
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
                #1000
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
