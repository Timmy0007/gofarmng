import React, { useContext } from 'react'
import { ShopContext } from "../context/context";
import { product } from "../NewestArrival/Product/product";
import { CartItem } from './cart-item';
import carting from './carting';

const Cart = () => {
  const { cartItems} = useContext(ShopContext);   
  

  return (
    <div>
      
      <p>CARTTTTTT</p>

        <div>
        
        {product.map((props) => {
          if (cartItems[props.id] !==0) {
          return ( < CartItem data ={props} />);}
        })}     
        </div>
        
        </div>
  )
}

export default Cart;