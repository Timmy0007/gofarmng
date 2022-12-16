import React from "react";
import "./ExploreCategories.css";

function ExploreCategories() {
  return (
    <>
    <div className="explo">
      <h3 className="explore-header">Explore Popular Categories</h3>
      <div className="explore-btn">
        <button className="ebtn">Cereal Crops</button>
        <button className="ebtn">Fruits</button>
        <button className="ebtn">Tubers</button>
        <button className="ebtn">Juices</button>
      </div>

      <div className="explore-btn">
        <button className="ebtn">Bakery</button>
        <button className="ebtn">Spices</button>
        <button className="ebtn">Sea Foods</button>
        <button className="ebtn">Vegetables</button>
      </div>

      <div className="explore-btn1">
        <button className="ebtn">Diary</button>
        <button className="ebtn">Beverages</button>
        <button className="ebtn">Meat</button>
      </div>
      </div>
    </>
  );
}
export default ExploreCategories;
