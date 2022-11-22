import React from 'react'
import './resetpassword.css'
import { Link } from 'react-router-dom'
import { useState } from "react";

function Reset() {
const [password , setPassword] = useState('');
const [confirmpassword , setConfirmpassword] = useState('');

function Matches(){
if ( password !== confirmpassword){
 alert('password doesnt match')
}
}
    return (
        <div className='Resetpass'>
        <div className="Resetpass1">
        <form>
        <label>
      <p className='password'>Password</p>
      <input type="password" id='passwordinp' value={password} name="password" placeholder="enter password" minLength={4} required onChange={event => setPassword(event.target.value)}/>
      </label>
      <label>
      <p className='confp'>Confirm Password</p>
      <input type="password" id='confinp' name="confirm" value={confirmpassword} placeholder="enter password" minLength={4} required onChange={event => setConfirmpassword(event.target.value)}/>
      </label>
      <button className='continue' onClick={Matches}>Continue</button>
      </form>
      <Link className='back' to='/'> Back to Sign In</Link>
        </div>
        </div>
    )
}

export default Reset