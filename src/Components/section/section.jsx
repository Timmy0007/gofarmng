import React from "react";
import star from "../../assets/star.svg";
import successful from "../../assets/successful-mobile.svg";
import delivery from "../../assets/delivery.svg";
import "./Section.css";

function Section() {
  return (
    <>
      <div className="container">
        <div className="payment">
          <img className="text-img" id="star" src={star} alt="star" />
          <h4 className="text-h4">High quality products </h4>
          <p className="cons">
            consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo
          </p>
        </div>
        <div className="payment">
          <img className="text-img" src={payment} alt="safe payment" />
          <h4 className="text-h4">Safe Payment</h4>
          <p className="cons">
            consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo
          </p>
        </div>
        <div>
          <img className="text-img" id="delivery" src={delivery} alt="fast delivery" />
          <h4 className="text-h4" id="fastd">Fast delivery</h4>
          <p className="deliv" >
            consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo
          </p>
        </div>
      </div>
    </>
  );
}

export default Section;
