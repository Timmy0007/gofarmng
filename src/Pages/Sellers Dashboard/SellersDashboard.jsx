import React from 'react'
import "./SellersDashboard.css"
import Productbox from "../../assets/product-box.png"
import line1 from "../../assets/line1.png"
import line2 from "../../assets/line2.png"
import receipt from "../../assets/receipt-item.png"


const SellersDashboard = () => {
  return (
    <div className='Seller-dashboard'>
        <div className="chat">
            <h4>Overview</h4>
            <div className="overview-summary">
                <div className="sum1">
                    <img className='pro' src={Productbox}/>
                    <p> Total Products
                        <p className='bold'>3000</p>
                    </p>
                    <div className="stock">
                    <img src={line1} alt=""/>
                    <span className='increase'>+10%</span>
                    </div>
                </div>
                <div className="sum1">
                    <img className='pro' src={receipt} alt=""/>
                    <p> Total Products
                        <p className='bold'>3000</p>
                    </p>
                    <div className="stock">
                    <img src={line1} alt=""/>
                    <span className='increase'>+10%</span>
                    </div>
                </div>
                <div className="sum1">
                    <img className='pro' src={Productbox} alt=""/>
                    <p> Total Products
                        <p className='bold'>3000</p>
                    </p>
                    <div className="stock">
                    <img src={line1} alt=""/>
                    <span className='increase'>+10%</span>
                    </div>
                </div>
                <div className="sum1">
                    <img className='pro' src={Productbox} alt=""/>
                    <p> Total Products
                        <p className='bold'>3000</p>
                    </p>
                    <div className="stock">
                    <img src={line1} alt=""/>
                    <span className='increase'>+10%</span>
                    </div>
                </div>
            </div>

        </div>
        <div className="trx-history"></div>
      
    </div>
  )
}

export default SellersDashboard
