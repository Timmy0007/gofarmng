import React from 'react'
import './forgot.css'
import { Link } from 'react-router-dom'
import { useState } from "react";

async function forgot(item) {
  return fetch('https://gofarmng.herokuapp.com/api/forgotpassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(data => data.json())
 }

function Forgot() {
  const handleChange = (e)=>{
    setEmail(e.target.value);
  }

  const [email, setEmail]= useState('')

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await forgot({
      email
    })
    localStorage.setItem('user', JSON.stringify(response['user']));
  };

  return (
    <div className='Forgot'>
      <div className='forgot1'>
      <form onSubmit={handleSubmit}>
      <label>
      <p className='email'>Email Address</p>
      <input type="email" id='emailf' name="email" placeholder="tim@gmail.com" required onChange={handleChange}/>
      </label>
      <p className='resetpass'>A password reset link would be sent to your email </p>
      <button className='signupb'>Continue</button>
      </form>
      <Link className='back' to='/'> Back to Sign In</Link>
        </div>
        </div>
  )
}

export default Forgot