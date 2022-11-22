import React from 'react'
import '../ShippingComponent/ShippingComponent.css'
import PaymentLogo from '../../assets/card-logos.png'


const ShippingComponent = () => {
  // function checkOutu(e) {
    //e.preventDefault();

  

  return (
    
    <div className='shp-main-container'>
        <h1>Shipping Details </h1> <br />
        <div className='pd-section'>
            <h3 className='pd-details'>Personal Details</h3>

                {/* PARENT CONTAINER FOR EMAIL AND PHONE */}
                <div className='emailPhone-container'>
                                {/* EMAIL CONTAINER */}
                                    <div className='email-container'>

                                          <label className='label-text' htmlFor="Email Address">Email Address</label> <br />
                                          <input className='text-emailPhoneInput em-input' type="text" placeholder='Enter email address' required  /> 
                                    </div>
                                  {/* PHONE NUMBER CONTAINER */}
                              <div className='phone-number-container'>

                                      <label className='label-text' htmlFor="p-number">Phone Number</label> <br />
                            <input className='text-emailPhoneInput' type="phone" placeholder='Enter Phone number' required  />
                              </div>
                  </div>


                

        </div>
                    {/* SHIPPING DETAILS */}
           <section className='shp-det-container'>
            <h3 className='pd-details'>Shipping Details</h3>
                  <label className='label-text' htmlFor="HouseAdd">House Address</label> <br />
                
                  <input className='text-addZipCityCountry hAdd' type="text" placeholder='Enter House address' required /> <br />

              <div className='zipCityCountry-Container'>

              
                                    {/* ZIP CONTAINER */}
                                <div className='zip-container'>
                                    <label className='label-text textL' htmlFor="Zipcode">Zipcode</label> 
                                    <input className='text-addZipCityCountry zpy' type="number"  /> <br />
                                </div>  
                                      {/* CITY CONTAINER */}
                                <div className='city-container'>                            
                                        <label className='label-text textL' htmlFor="city">City</label>
                                        <input className='text-addZipCityCountry cty' type="text" required />
                                    </div>
                                    {/* COUNTRY SELECTOR */}
                                    <div className='countrySelector'>

                                                      <label className='label-text textL' htmlFor="country">Country</label>
                                                          <select className='label-text' name="country" id="country">

                                                  <option value="Ghana">Ghana</option>
                                                  <option value="kenya">Kenya</option>
                                                  <option value="nigeria">Nigeria</option>
                                                  <option value="togo">Togo</option>
                                                  <option value="USA">USA</option>
                                                  <option value="UK">United Kingdom</option>
                                              </select>
                  
                                    </div>
              </div>

            </section>
                        <section className='payment-det'>
                                  <h3 className='pd-details'>Payment Details</h3>
                              <div className='bg- '>
                                <img src={PaymentLogo} alt="Card logos" />
                               
                              </div>

                              <div className=' card-container'>
                                    <label className='label-text' htmlFor="Card-details">Card Number</label>
                                    <input type="card-number" required  placeholder='Enter card number'/>

                                    <label className='label-text' htmlFor="ExpDate">Exp. Date</label>
                              <input type="datetime" />

                                    <label className='label-text' htmlFor="city">City</label>
                                      <input type="text" name="" id="" />

        </div>

                        </section>

                      

         
        {/* PREVIEW CART LIST COMPONENT */}
          <section className='pvw-cartlist'>
            <div>
                  {/* 1ST LIST ITEMS OF THE PREVIEW CART LIST COMPONENT  */}
                          {/* <div>
                              <img src="" alt="" />
                          </div> 

                              <div>
                                <h5>Fresh farm apples</h5> 
                                <p>{1000}</p>
                                <p>{0}</p>

                              </div> */}
                        {/* INCREMENT BUTTONS */}

            
             
            </div>
        {/*  2ND LIST ITEMS OF THE PREVIEW CART LIST COMPONENT*/}
            <div>

                        {/* <div>
                            <img src="" alt="" />
                        </div> 

                            <div>
                              <h5>Fresh farm apples</h5> 
                              <p>{1000}</p>
                              <p>{0}</p>

                            </div> */}
                  {/* INCREMENT BUTTONS */}



            </div>

            {/* 3rd LIST ITEMS OF THE PREVIEW CART COMPONENT */}

            <div>

                      {/* <div>
                        <img src="" alt="" />
                      </div> 

                              <div>
                                  <h5>Fresh farm apples</h5> 
                                  <p>{1000}</p>
                                  <p>{0}</p>

                              </div> */}

                            {/* INCREMENT BUTTONS */}



              </div>



{/* 
              <h3>Order Summary</h3>
              <p>Total Item: </p>
              <p>Sub Total: </p>
              <p>Delivery Fee:</p>
              <p>Total Amount: </p>
              {/* <button type="submit" onClick={checkOut}>Checkout</button> */}
          </section>
 

    </div>

  )
}

export default ShippingComponent