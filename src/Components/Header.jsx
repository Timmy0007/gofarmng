import React from 'react'
import "./Header.css"
import bell from "../assets/Bell.png"
import cart from "../assets/cart.png"
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import User from "../assets/user-icon.png"
// import Hamburger from "./HamburgerComponent"

const Header = () => {
  return (
    <div className='header-content'>
        <h3>GoFarmNG</h3>
        <div className="select">
            <select name="" id="">
                <option value="All-Categories">All Categories</option>
                <option value="Cereal">Cereal Crops</option>
                <option value="Fruits">Fruits</option>
                <option value="Tubers">Tubers</option>
                <option value="Jiuices">Juices</option>
                <option value="Bakery">Bakery</option>
                <option value="Spices">Spices</option>
                <option value="Seafoods">Sea Foods</option>
                <option value="Vegetables">Vegetables</option>
                <option value="dairy">Dairy</option>
                <option value="Beverages">Beverages</option>
                <option value="Meat">Meat</option>
            </select>
            <input className='srch' type="search"placeholder="  Search Products..."/>
            <i class="fa fa-search"></i>
           
        </div>
        <div className="icons">
          <button className="sell"><a href="">Sell</a></button>
            <p className='bell'><FaBell size={30} color="#000000"/></p>
            <p className='bell'><FaShoppingCart size={30} color="#000000"/></p>
            <img src ={User} width="20%"/>
            <div className="balan">
            <p className='dam'>Damilola<FaCaretDown size={20} color="#000000"/></p>
              <small className='amount'>#34,000.89</small>
            </div>
            
            
           {/* <div className="hamburger"><Hamburger/></div> */}
            
           
        </div>
         
    </div>
  )
}

export default Header
