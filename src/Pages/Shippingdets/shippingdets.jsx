import React from 'react'
import './shippingdets.css'

const shippingdets = () => {

  return (

    <div>
    <div className='section1'>
        <div className='ship'>
        Shipping details
        </div>
        <form>
        <p>Personal Details</p>
        <div className='persdets'>
        <label>
      <p className='email'>Email Address</p>
      <input type="email" id='emailad' name="email" placeholder="Enter Email Address"/>
      </label>
      <label>
      <p className='phonenumber'>Phone Number</p>
      <input type="text" id='number' name="phonenumber" placeholder="Enter Phone Number" required/>
      </label>
        </div>

        <div>Shipping Details</div>
        <div className='shipdets'>
        <label className='housead'>
      <p className='house'>House Address</p>
      <input type="text" id='house' name="house" placeholder="Enter Address"/>
      </label>
      <label className='zipcode'>
      <p className='zip'>Zip code</p>
      <input type="text" id='zip' name="zip" placeholder="Enter Addrress"/>
      </label>
      <label className='cityy'>
      <p className='city'>City</p>
      <input type="text" id='city' name="city" placeholder="Enter City"/>
      </label>
      <label className='countryy'>
      <p className='country'>Country</p>
      <input type="text" id='country' name="country" placeholder="Enter Country"/>
      </label>
      </div>

        <div>Payment Detaills</div>
        <div className='payment'>
        <label className='cardnum'>
      <p className='card'>Card Number</p>
      <input type="text" id='card' name="card" placeholder="Enter Address"/>
      </label>
      <label className='expdate'>
      <p className='exp'>Exp. Date</p>
      <input type="text" id='exp' name="exp" placeholder="Enter Exp. Date"/>
      </label>
      <label className='cvvlabel'>
      <p className='cvv'>Cvv</p>
      <input type="text" id='cvv' name="cvv" placeholder="Enter Cvv"/>
      </label>
      </div>
    </form>
    </div>

    <div className='section2'>
    <div className='apple'>
        <p className='fapple'>Farm fresh apple</p>
        <p className='farmfresh'>#1000/Pcs</p>
        <p className='pc'>#3000</p>
        <p className='pcc'>-1+</p>
    </div>
    <div className='oranges'>
        <p className='farmfresh'>Farm fresh oranges</p>
        <p className='pcs'>#1000/Pcs</p>
        <p className='pc'>#3000</p>
        <p className='pcc'>-1+</p>
    </div>
    <div className='tomatoes'>
        <p className='farmfresh'>Farm fresh tomatoes</p>
        <p className='pcs'>#1000/Pcs</p>
        <p className='pc'>#3000</p>
        <p className='pcc'>-1+</p>
    </div>
    <p className='view'>View All</p>

    <p className='order'>Order Summary</p>
    <div className='ordersum'>
    <div className='totalitem'>
    <p>Total item</p>
    <p>4 items</p>
    </div>
    <div className='subtotal'>
    <p>Sub Total</p>
    <p>#12,000</p>
    </div>
    <div className='del'>
    <p>Delivery fee</p>
    <p>#1000</p>
    </div>
    <div className='totalam'>
    <p>Total Amount</p>
    <p>#13,000</p>
    </div>
    </div>
    <button className='checkout'>Checkout</button>
    </div>

    </div>
  )
}


export default shippingdets
