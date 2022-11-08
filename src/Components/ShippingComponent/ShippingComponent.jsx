import React from 'react'

const ShippingComponent = () => {
  function checkOut(e) {
    e.preventDefault();

  }

  return (
    
    <div className='flex-col p-10  '>
        <h1 className='text-2xl font-normal'>Shipping Details </h1> <br />
        <div className=''>
            <h3 className='font'>Personal Details</h3>
            <label className='' htmlFor="Email">Email</label>
            <input className='' type="text" placeholder='Enter email address' required  /> <br />
            <label className='' htmlFor="p-number">Phone Number</label>
            <input className='' type="number" placeholder='Enter Phone number' required  /><br />

        </div>
          <section className=''>
            <h3 className=''>Shipping Details</h3>
                  <label className='' htmlFor="HouseAdd">House Address</label>
                  <input className='' type="text" placeholder='Enter address' required />
                  <label className='' htmlFor="Zipcode">Zipcode</label>
                  <input className='' type="number"  />
                  <label className='' htmlFor="city">City</label>
                  <inpu className=''t type="text" required />
                  <label className='' htmlFor="country">Country</label>
                      <select className='' name="country" id="country">

                          <option value="Ghana">Ghana</option>
                          <option value="kenya">Kenya</option>
                          <option value="nigeria">Nigeria</option>
                          <option value="togo">Togo</option>
                          <option value="USA">USA</option>
                          <option value="UK">United Kingdom</option>
                      </select>
            
                        <section>
                                  <h3>Payment Details</h3>
                              <div className='bg- '>
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                              </div>

                              <div>
                              <label htmlFor="Card-details">Card Number</label>
                              <input type="number" required  placeholder='Enter card number'/>

                              <label htmlFor="ExpDate">Exp. Date</label>
                              <input type="datetime" />

                              <label htmlFor="city">City</label>
                                <input type="text" name="" id="" />

                              </div>

                        </section>

                      

          </section>
        {/* PREVIEW CART LIST COMPONENT */}
          <section>
            <div>
                  {/* 1ST LIST ITEMS OF THE PREVIEW CART LIST COMPONENT  */}
                          <div>
                              <img src="" alt="" />
                          </div> 

                              <div>
                                <h5>Fresh farm apples</h5> 
                                <p>{1000}</p>
                                <p>{0}</p>

                              </div>
                        {/* INCREMENT BUTTONS */}

            
             
            </div>
        {/*  2ND LIST ITEMS OF THE PREVIEW CART LIST COMPONENT*/}
            <div>

                        <div>
                            <img src="" alt="" />
                        </div> 

                            <div>
                              <h5>Fresh farm apples</h5> 
                              <p>{1000}</p>
                              <p>{0}</p>

                            </div>
                  {/* INCREMENT BUTTONS */}



            </div>

            {/* 3rd LIST ITEMS OF THE PREVIEW CART COMPONENT */}

            <div>

                      <div>
                        <img src="" alt="" />
                      </div> 

                              <div>
                                  <h5>Fresh farm apples</h5> 
                                  <p>{1000}</p>
                                  <p>{0}</p>

                              </div>

                            {/* INCREMENT BUTTONS */}



              </div>




              <h3>Order Summary</h3>
              <p>Total Item: </p>
              <p>Sub Total: </p>
              <p>Delivery Fee:</p>
              <p>Total Amount: </p>
              <button type="submit" onClick={checkOut}>Checkout</button>
          </section>


    </div>

  )
}

export default ShippingComponent