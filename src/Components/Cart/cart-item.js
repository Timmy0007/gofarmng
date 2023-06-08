import React from 'react'
import { useContext } from 'react';
import "./../Cart/Cart.css";
import { ShopContext } from "../context/context";
import carting from './carting';

export const CartItem = (props) => {
    const {id, pcs, productName, productImage, productImage2, price} = props.data;
const {totalCartAmount, totalCartPrice, removeFromCart, updateCartItemCount, addToCart, cartItems} = useContext(ShopContext);   

 const cartprice = price * cartItems[id] 
 
 
    return (

        <div className='cartt'>
            <div className='cartsection1'>
            <div className='cart-row'>
                <p className='item'>Item</p>
                <p className='quantity'>Quantity</p>
                <p className='amt'>Amount</p>
                <p>{carting}</p>
            </div>

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
        <p className='tot'>{cartprice}</p>
        <p className='ex'>x</p>
    </div>
    </div>
    </div>
    </div>

    <div className='orderbord'>
    <div>
        Order summary
    </div>
    <p>Total item </p>

    <p>SubTotal: {totalCartAmount} </p>

    <p>delivery fee; 1000</p>

    <p>Total Amount: </p>
    </div>
    </div>
  )
}
