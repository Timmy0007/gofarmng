import React from "react";
import "./ExploreCategories.css";

function ExploreCategories() {
  return (
    <>
      <h3 className="explore-header">Explore Popular Categories</h3>
      <div className="explore-btn">
        <button className="btn">Cereal Crops</button>
        <button className="btn">Fruits</button>
        <button className="btn">Tubers</button>
        <button className="btn">Juices</button>
      </div>

      <div className="explore-btn">
        <button className="btn">Bakery</button>
        <button className="btn">Spices</button>
        <button className="btn">Sea Foods</button>
        <button className="btn">Vegetables</button>
      </div>

      <div className="explore-btn1">
        <button className="btn">Diary</button>
        <button className="btn">Beverages</button>
        <button className="btn">Meat</button>
      </div>
    </>
  );
}
export default ExploreCategories;
