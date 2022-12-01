import React from 'react'
import './resetpassword.css'
import { Link } from 'react-router-dom'
import { useState } from "react";

async function reset(item) {
  return fetch('https://gofarmng.herokuapp.com/api/reset-password/63662c5669e32c2508a58cfc/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRyZW1tYW9rb2hAZ21haWwuY29tIiwiaWQiOiI2MzY2MmM1NjY5ZTMyYzI1MDhhNThjZmMiLCJpYXQiOjE2Njc2NDA1NDYsImV4cCI6MTY2NzY0MTQ0Nn0.iFbXP4UC9QKEpL5ksO2cDGRJIUciJvPJf-F_T0ZLvTs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(data => data.json())
 }

function Reset() {
const [password , setPassword] = useState('');
const [confirmpassword , setConfirmpassword] = useState('');

function Matches(){
if ( password !== confirmpassword){
 alert('password doesnt match')
}
}

const handleSubmit = async e => {
  e.preventDefault();
  const response = await reset({
    password,
    confirmpassword
  })
  localStorage.setItem('user', JSON.stringify(response['user']));
};

    return (
        <div className='Resetpass'>
        <div className="Resetpass1">
        <form onSubmit={handleSubmit}>
        <label>
      <p className='password'>Password</p>
      <input type="password" id='passwordinp' value={password} name="password" placeholder="enter password" minLength={4} required onChange={event => setPassword(event.target.value)}/>
      </label>
      <label>
      <p className='confp'>Confirm Password</p>
      <input type="password" id='confinp' name="confirm" value={confirmpassword} placeholder="enter password" minLength={4} required onChange={event => setConfirmpassword(event.target.value)}/>
      </label>
      <button className='continue'  onClick={Matches}>Continue</button>
      </form>
      <Link className='back' to='/'> Back to Sign In</Link>
        </div>
        </div>
    )
}

export default Reset