import React from 'react'
import './forgot.css'
import { Link } from 'react-router-dom'



function Forgot() {
  return (
    <div className='Forgot'>
      <div className='forgot1'>
      <form>
      <label>
      <p className='email'>Email Address</p>
      <input type="email" id='emailf' name="email" placeholder="tim@gmail.com"/>
      </label>
      </form>
      <p className='resetpass'>A password reset link would be sent to your email </p>
      <button className='signupb'>Continue</button>
      <Link className='back' to='/'> Back to Sign In</Link>
        </div>
        </div>
  )
}

export default Forgot