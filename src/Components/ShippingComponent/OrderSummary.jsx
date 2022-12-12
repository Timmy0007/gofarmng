import React from 'react'
import './OrderSummary.css'
import Apple from '../../assets/apple.png'


const OrderSummary = () => {
  return (
    <div>
        <section className='product-container'>
            <div className='product-logo'>
                <img src={Apple} alt="Image" />
            </div>
           <div className='product-details'>
                    <div className='product-details-info'>
                        <h4 className='product-type'>Fresh Farm apple</h4>
                    </div>
                        <div className='price-container'>
                                <p className='price'>#1000/pc</p>

                                </div>
                              
                        <div className='amount-container'>

                                  <p className='amount'>#3000</p>
                
                                  <span className='btn-increment' >-</span>1 <span className='btn-increment'>+</span>       
                        </div>
                   
            </div>
        </section>
    </div>
  )
}

export default OrderSummary