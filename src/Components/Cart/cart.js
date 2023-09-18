import React, { useContext } from 'react'
import { ShopContext } from "../context/context";
import { product } from "../NewestArrival/Product/product";
import { CartItem } from './cart-item';
import carting from './carting';
import "./../Cart/Cart.css";

const Cart = () => {
  const { totalCartAmount, cartItems} = useContext(ShopContext);   
  let totalAmt = totalCartAmount()

  let totalItems = Object.values(cartItems).reduce((acc, qty) => acc + qty, 0);

  return (
    <div className='cartjj'>
      <div className='cartjs'>
    {totalAmt > 0 ? 
      <div className='cartrr'>
    <div className='cart-row'>
                  <p className='item'>Item</p>
                  <p className='quantity'>Quantity</p>
                  <p className='amt'>Amount</p>
                  <p>{carting}</p>
              </div>
      


    

      <div>
        {product.map((props) => {
          if (cartItems[props.id] !==0) {
            return (
              <div className='cartit'>
          <CartItem data ={props} />
          </div>)
          ;}
        })}
        </div>
        </div>
        : <div></div>}

      {totalAmt > 0 ? 

       <div className='orderbord'>
        <div className='ordersub'>
       <div className='summary'>
           Order summary
       </div>

       <div className='toti'>
       <p className='toti1'>Total item; </p>
        <p className='toti2'>{totalItems}  Items </p>
        </div>

        <div className='totaa'>
       <p className='tota1'>SubTotal:</p>
        <p className='tota2'>#{totalAmt} </p>
        </div>

        <div className='delii'>
       <p className='deli'>Delivery fee;</p>
       <p className='deli-fee'> #1000</p>
       </div>
   
        <div className='toa'>
       <p className='toa1'>Total Amount: </p>
        <p className='toa2'>#{totalAmt + 1000} </p>
        </div>

        <button className='checkoutp'>Proceed to Checkout</button>
       </div>
       </div>
    :<div>Your Cart is Empty</div>  
    }



        </div>
        </div>
  )
}

export default Cart;