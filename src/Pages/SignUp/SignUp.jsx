import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import { useState } from "react";


function Signup() {
const [password , setPassword] = useState('');
const [confirmpassword , setConfirmpassword] = useState('');

function Matches(){
if ( password !== confirmpassword){
 alert('password doesnt match')
}
}

//another way of validating form password
// function passwordconf(){
//   var passwordalign = document.querySelector('#passwordinp').value;
//   var confirm = document.querySelector('#confinp').value;

//   if (passwordalign !== confirm){
//     alert('password is not the same as confirm password');
//   }

  return (
    <div className='Signupp'>
      <div className="Signup">
        <div className='signing'>
      <p className='sign'>Sign in with Google</p>
      </div>
      <div className="Horizontal">
        <hr className='hr1'/>
        <p className='or'>or</p> 
        <hr className='hr2'/>
        </div>
        <form>
      <label>
      <p className='fullname'>Full Name</p>
      <input type="text" id='name' name="fullname" placeholder="Enter Full Name" required/>
      </label>
      <label>
      <p className='email'>Email Address</p>
      <input type="email" id='emailad' name="email" placeholder="tim@gmail.com" required/>
      </label>
      <label>
      <p className='password'>Password</p>
      <input type="password" id='passwordinp' value={password} name="password" placeholder="enter password" minLength={4} required onChange={event => setPassword(event.target.value)}/>
      </label>
      <label>
      <p className='confp'>Confirm Password</p>
      <input type="password" id='confinp' name="confirm" value={confirmpassword} placeholder="enter password" minLength={4} required onChange={event => setConfirmpassword(event.target.value)}/>
      </label>
      <div className='DS'>
      <input type="checkbox" required/>
      <p className='agree'>I agree to GoFarmNg terms of service and privacy policy</p>
      </div>
      <button className='signupb' onClick={Matches}>Sign Up</button>
      </form>
      <div className='already'>
        <p className='already1'>Already have an account?</p>
        <Link className='Asignin' to='/'>Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup