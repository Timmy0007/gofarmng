import React from 'react'
import './signup.css'

function Signup() {
  return (
    <div className='Signupp'>
      <div className="Signup">
        <div className='signing'>
      <p className='sign'>Sign in with Google</p>
      </div>
      <div className="orhr">
        <hr className='hr1'/>
        <p className='or'>or</p>
        <hr className='hr2'/>
        </div>
      <div className='fn'>
      <p className='fullname'>Full Name</p>
      <input type="text" id='name' name="fullname" placeholder="Enter Full Name"/>
      </div>
      <div className='emailad'>
      <p className='email'>Email Address</p>
      <input type="text" id='emaila' name="email" placeholder="tim@gmail.com"/>
      </div>
      <div className='passw'>
      <p className='password'>Password</p>
      <input type="text" id='passwordinp' name="password" placeholder="enter password"/>
      </div>
      <div className='conf'>
      <p className='confp'>Confirm Password</p>
      <input type="text" id='confinp' name="confirm" placeholder="enter password"/>
      </div>
      <div className='DS'>
      <input type="checkbox"/>
      <p className='agree'>I agree to GoFarmNg terms of service and privacy policy</p>
      </div>
      <button className='signupb'>Sign Up</button>
      <div className='already'>
        <p className='already1'>Already have an account?</p>
        <p className='Asignin'>Sign In</p>
        </div>
      </div>
    </div>
  )
}

export default Signup