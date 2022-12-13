import React from "react";
import star from "../images/star.svg";
import successful from "../images/successful-mobile.svg";
import delivery from "../images/delivery.svg";
import "./Section.css";

function Section() {
  return (
    <>
      <div className="container">
        <div className="payment">
          <img className="text-img" src={star} alt="star" />
          <h4 className="text-h4">High quality products </h4>
          <p>
            consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo
          </p>
        </div>
        <div className="payment">
          <img className="text-img" src={successful} alt="safe payment" />
          <h4 className="text-h4">Safe Payment</h4>
          <p className="text-para">
            consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo
          </p>
        </div>
        <div>
          <img className="text-img" src={delivery} alt="fast delivery" />
          <h4 className="text-h4">Fast delivery</h4>
          <p>
            consectetur adipiscing elit duis tristique sollicitudin nibh sit
            amet commodo
          </p>
        </div>
      </div>
    </>
  );
}

export default Section;
