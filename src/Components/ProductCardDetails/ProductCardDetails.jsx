import React from 'react'
import "./ProductCardDetails.css"
import Star from "../Star"
import Button from '../Button'
import IncrementDecrement from "../IncrementDecrement"

const ProductCardDetails = ({image, heading, prices}) => {
  return (
    <div className=".details">
        <div className="details-container">
            <img src={image} alt="" width="300px"/>  
            <p className='heading'>{heading}
            <span className="rating"><Star/>(12)</span>
            <p className='pricing'>{prices} <small>/Kg</small>  
            <IncrementDecrement/>  
            <p className='butt'><Button/></p>
            </p>
            </p>
            
        </div>
        
    </div>
  )
}

export default ProductCardDetails
