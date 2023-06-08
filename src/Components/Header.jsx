import React from 'react'
import "./Header.css"
import bell from "../assets/Bell.png"
import cart from "../assets/cart.png"
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import User from "../assets/user-icon.png"
import { useNavigate } from "react-router-dom";
// import Hamburger from "./HamburgerComponent"

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/Cart')
  }

  return (
    <div className='header-content'>
        <h3 className='gofarm'>GoFarmNG</h3>
        <div className="select">
            <select name="" id="allcats">
                <option className='allcat' value="All-Categories">All Categories</option>
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
            <button type='submit'><i class="fa fa-search"></i></button>
           
        </div>
        <div className="icons">
            <p className='bell'><FaBell size={30} color="#000000"/></p>
            <p className='bell' onClick={handleClick}><FaShoppingCart size={30} color="#000000"/></p>
            </div>
            {/* <img src ={User} width="20%"/>
            <div className="balan">
            <p className='dam'>Damilola<FaCaretDown size={20} color="#000000"/></p>
              <small className='amount'>#34,000.89</small>
            </div> */}
           {/* <div className="hamburger"><Hamburger/></div> */}
           
            <button className='join'><a href="/Signup">Join Us</a></button>
         
    </div>
  )
}

export default Header
