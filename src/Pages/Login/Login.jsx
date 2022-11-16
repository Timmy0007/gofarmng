import React from 'react'
import { Form, Link } from 'react-router-dom'
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
        <form>
      <label>
        <p className='email'>Email Address</p>
      <input id='emailas' type="email" name="email" placeholder="example@gmail.com" required/>
      </label>
      <label>
        <p className='password'>Password</p>
      <input type="password" id='passwordinp' name="password" placeholder="enter password" required/>
      </label>
      <div className='rem'>
        <input id='checkbox' type="checkbox" required/>
      <p className='remember'>Remember me</p>
      <Link className='forgot' to='/Forgot'>Forgot Password</Link>
      </div>
      <button className='signinb'><p>Sign In</p></button>
      <div className='DS'>
      <p className='dont'>Don't have an account?</p>
      <Link className='signupp' to='/SignUp'>Signup</Link>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login