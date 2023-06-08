import React from "react";
import "./ExploreCategories.css";

function ExploreCategories() {
  return (
    <>
    <div className="explo">
      <h3 className="explore-header">Explore Popular Categories</h3>
      <div className="explore-btn1">
        <button className="exbtn" id="btn1">Cereal</button>
        <button className="exbtn" id="btn1">Fruits</button>
        <button className="exbtn" id="btn1">Tubers</button>
        <button className="exbtn" id="btn1">Juices</button>
      </div>
      <div className="explore-btn2">
        <button className="exbtn" id="btn1">Bakery</button>
        <button className="exbtn" id="btn1">Spices</button>
        <button className="exbtn" id="btn1">Sea Foods</button>
        <button className="exbtn" id="btn1">Vegetables</button>
      </div>
      <div className="explore-btn3">
        <button className="exbtn" id="btn1">Diary</button>
        <button className="exbtn" id="btn1">Beverages</button>
        <button className="exbtn" id="btn1">Meat</button>
      </div>
      </div>
    </>
  );
}

export default ExploreCategories;
