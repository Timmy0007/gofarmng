import React from "react";
import star from "../../assets/star.svg";
import payment from "../../assets/payment.png";
import delivery from "../../assets/delivery.svg";
import "./section.css";

function Section() {
  return (
    <>
      <div className="container">
        <div className="star">
          <img className="star-img" id="star" src={star} alt="star" />
          <p className="hq">High quality products </p>
          <p className="cons">
            consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo
          </p>
        </div>

    <div className="lin"></div>

        <div className="paym">
          <img className="paym-img" src={payment} alt="safe payment" />
          <h4 className="sp">Safe Payment</h4>
          <p className="cons">
            consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo
          </p>
        </div>

        <div className="lin"></div>

        <div className="dell">
          <img className="del-img" id="delivery" src={delivery} alt="fast delivery" />
          <h4 className="fd" id="fastd">Fast delivery</h4>
          <p className="cons" >
            consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo
          </p>
        </div>
      </div>
    </>
  );
}

export default Section;
