import React, { useState, useEffect } from "react";
import coconnut from "../../assets/coconnut.svg";
import watermelon from "../../assets/watermelon.svg";
import pineapple from "../../assets/pineapple.svg";
import whiteLove from "../../assets/whiteLove.svg";
import pawpaw from "../../assets/pawpaw.svg";
import stars from "../../assets/stars.svg";
import "./NewestArrival.css";

function NewestArrival() {
  return (
    <>
      <h3 className="newest-header">Newest Arrival</h3>

      <div className="newest-fruits">
        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img className="newimg" src={coconnut} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Coconut</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
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

        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img className="newimg1" src={watermelon} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh WaterMelon</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
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

        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img className="newimg2" src={pineapple} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Pineapple</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
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

        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img className="newimg3" src={pawpaw} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Pawpaw</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
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

      <div className="newest-fruits">
        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img className="newimg" src={coconnut} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Coconut</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
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

        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img className="newimg1" src={watermelon} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Watermelon</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
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

        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img className="newimg2" src={pineapple} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Pineapple</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
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

        <div className="newest-fruit">
          <div className="newest-img">
            <img className="icon" src={whiteLove} alt="Love" />
            <img className="newimg3" src={pawpaw} alt="Coconut" />
          </div>
          <div>
            <div>
              <p className="newest-name">Farm Fresh Pawpaw</p>
            </div>
            <div className="newest-ratings">
              <img src={stars} alt="Ratings" /> <span>(12)</span>
            </div>
            <div>
              <p className="newest-price">
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

export default NewestArrival;
