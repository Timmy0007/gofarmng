import React from 'react'
import { useContext } from 'react';
import "./../Cart/Cart.css";
import { ShopContext } from "../context/context";
import carting from './carting';

export const CartItem = (props) => {
    const {id, pcs, productName, productImage, productImage2, price} = props.data;
const {totalCartAmount, totalCartPrice, cutFromCart, removeFromCart, updateCartItemCount, addToCart, cartItems} = useContext(ShopContext);   

 const cartprice = cartItems[id] * price
 

    return (

        <div className='cartt'>
            <div className='cartsection1'>
            

            <div>
        <div className='cart-item'>
        <div><img className='image' src={productImage}/></div>
        <div className='pp'>
    <p className='productname'>{productName}</p>
    <p className='pprice'>{price}</p>
    </div>
    <div className='btncart'>
        <button className='minuse' onClick={() => removeFromCart(id)}>-</button>
        <input 
        id='inpcart'
        value={cartItems[id]}
        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button id='plusss' onClick={() => addToCart(id)}>+</button>
    </div>

    <div className='ta'>
        <p className='tot'>#{cartprice}</p>
        <button className='ex' onClick={() => cutFromCart(id)}> x</button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}
