import React from "react";
import "./ExploreCategories.css";

function ExploreCategories() {
  return (
    <>
      <h3 className="explore-header">Explore Popular Categories</h3>
      <div className="explore-btn">
        <button className="exbtn">Cereal</button>
        <button className="exbtn">Fruits</button>
        <button className="exbtn">Tubers</button>
        <button className="exbtn">Juices</button>
      </div>
      <div className="explore-btn">
        <button className="exbtn">Bakery</button>
        <button className="exbtn">Spices</button>
        <button className="exbtn">Sea Foods</button>
        <button className="exbtn">Vegetables</button>
      </div>
      <div className="explore-btn1">
        <button className="exbtn">Diary</button>
        <button className="exbtn">Beverages</button>
        <button className="exbtn">Meat</button>
      </div>
    </>
  );
}

export default ExploreCategories;
