import React from 'react'
import './forgot.css'

function Forgot() {
  return (
    <div className='Forgot'>
      <div className='emailad'>
      <p className='email'>Email Address</p>
      <input type="text" id='emaila' name="email" placeholder="tim@gmail.com"/>
      </div>
      <p className='resetpass'>A password reset link would be sent to your email </p>
      <button className='signupb'>Continue</button>
        <p className='back'>Back to Sign in</p>
        </div>
  )
}

export default Forgot