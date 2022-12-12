import React from "react";
import "./shippingdets.css";
import apples from "../../assets/apples.png";
import oranges from "../../assets/apples.png";
import tomatoes from "../../assets/apples.png";

const shippingdets = () => {
  return (
    <div className="shippingdetails">
      <div className="section1">
        <div className="ship">Shipping details</div>
        <form>
          <p className="pers">Personal Details</p>
          <div className="persdets">
            <label>
              <p className="email">Email Address</p>
              <input
                type="email"
                id="emailad"
                name="email"
                placeholder="Enter Email Address"
              />
            </label>
            <label className="pn">
              <p className="phonenumber">Phone Number</p>
              <input
                type="text"
                id="number"
                name="phonenumber"
                placeholder="Enter Phone Number"
                required
              />
            </label>
          </div>

          <div className="shippingdeta">Shipping Details</div>
          <label className="housead">
            <p className="house">House Address</p>
            <input
              type="text"
              id="house"
              name="house"
              placeholder="Enter Address..."
            />
          </label>
          <div className="shipdets">
            <label className="zipcode">
              <p className="zip">Zip code</p>
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder="Enter Address"
              />
            </label>
            <label className="cityy">
              <p className="city">City</p>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter City"
              />
            </label>
            <label className="countryy">
              <p className="country">Country</p>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Enter Country"
              />
            </label>
          </div>

          <div className="paymentdets">Payment Detaills</div>
          <div className="payment">
            <label className="cardnum">
              <p className="card">Card Number</p>
              <input
                type="text"
                id="card"
                name="card"
                placeholder="Enter Address"
              />
            </label>
            <label className="expdate">
              <p className="exp">Exp. Date</p>
              <input
                type="text"
                id="exp"
                name="exp"
                placeholder="Enter Exp. Date"
              />
            </label>
            <label className="cvvlabel">
              <p className="cvv">Cvv</p>
              <input type="text" id="cvv" name="cvv" placeholder="Enter Cvv" />
            </label>
          </div>
        </form>
      </div>

      <div className="section2">
        <div className="apple">
          <img className="appleimg" src={apples} alt="apples" />
          <div className="fapple">
            <p className="farmfresh">Farm fresh apple</p>
            <p className="pcs">#1000/Pcs</p>
            <p className="pc">#3000</p>
          </div>
          <div className="pcc">
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
        </div>

        <div className="oranges">
          <img className="orangeimg" src={oranges} alt="oranges" />
          <div className="foranges">
            <p className="farmfresh">Farm fresh oranges</p>
            <p className="pcs">#1000/Pcs</p>
            <p className="pc">#3000</p>
          </div>
          <div className="pcc">
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
        </div>
        <div className="tomatoes">
          <img className="tomatoesimg" src={tomatoes} alt="tomatoes" />
          <div className="ftomatoes">
            <p className="farmfresh">Farm fresh tomatoes</p>
            <p className="pcs">#1000/Pcs</p>
            <p className="pc">#3000</p>
          </div>
          <div className="pcc">
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
        </div>
        <p className="viewa">View All</p>

        <p className="orders">Order Summary</p>
        <p className="line"></p>
        <div className="ordersum">
          <div className="totalitem">
            <p className="item">Total item</p>
            <p className="itemnum">4 items</p>
          </div>
          <div className="subtotal">
            <p className="sub">Sub Total</p>
            <p className="price">#12,000</p>
          </div>
          <div className="del">
            <p className="delf">Delivery fee</p>
            <p className="delprice">#1000</p>
          </div>
          <p className="line"></p>
          <div className="totalam">
            <p className="tot">Total Amount</p>
            <p className="totprice">#13,000</p>
          </div>
        </div>
        <button className="checkout">
          <p id="checkout">Checkout</p>
        </button>
      </div>
    </div>
  );
};

export default shippingdets;
