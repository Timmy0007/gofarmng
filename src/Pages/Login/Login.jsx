import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
  return (
    <div className='loginn'>
      <div className="Signin">
        <div className='signupg'>
      <p className="sign">Sign up with Google</p>
      </div>
      <div className="orhr">
        <hr className='hr1'/>
        <p className='or'>or</p>
        <hr className='hr2'/>
        </div>
        <div className='emailad'>
      <p className='email'>Email Address</p>
      <input id='emaila' type="text" name="email" placeholder="example@gmail.com"/>
      </div>
      <div className='passw'>
      <p className='password'>Password</p>
      <input type="text" id='passwordinp' name="password" placeholder="enter password"/>
      </div>
      <div className='rem'>
        <input id='checkbox' type="checkbox"/>
      <p className='remember'>Remember me</p>
      <Link className='forgot' to='/Forgot'>Forgot Password</Link>
      </div>
      <button className='signinb'><p>Sign In</p></button>
      <div className='DS'>
      <p className='dont'>Don't have an account?</p>
      <Link className='signupp' to='/SignUp'>Signup</Link>
      
        </div>
      </div>
    </div>
  )
}

export default Login