import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { useState, useEffect } from "react";

async function logins(item) {
  return fetch('https://gofarmng.herokuapp.com/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(data => data.json())
 }

 export default  function Login() {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [message, setMessage]= useState('')


  function handleClick(e){
    const regEx= /[a-zA-Z0-9._%+-]+@[a-z0-9•-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if (!regEx.test(email)){
     e.preventDefault();  setMessage('Email is not valid')
    }
  }
  const handleChange = (e)=>{
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e)=>{
    setPassword(e.target.value);
  }

  useEffect(() =>{
    setMessage ('')
   }, [email]);

   const handleSubmit = async e => {
    e.preventDefault();
    const response = await logins({
      email,
      password
    })
    localStorage.setItem('user', JSON.stringify(response['user']));
  }
  //   if ('accessToken' in response) {
  //     alert("Success", response.message, "success", {
  //       buttons: false,
  //       timer: 2000,
  //     })
  //     .then((value) => {
  //       localStorage.setItem('accessToken', response['accessToken']);
  //       localStorage.setItem('user', JSON.stringify(response['user']));
  //     });
  //   } else {
  //     alert("Failed", response.message, "error");
  //   }
  // }

  
  //   const handleSubmit = async e => {
  //    e.preventDefault();
  //    const response = await logins({
  //      email,
  //      password
  //    });
  //      localStorage.setItem('email', JSON.stringify(response));
  //  } 
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
        <form onSubmit={handleSubmit}>
      <label>
        <p className='email'>Email Address <p className='emessage'>{message}</p></p>
      <input id='emailas' type="email" name="email" placeholder="example@gmail.com" value={email} onChange={handleChange} required/>
      </label>
      <label>
        <p className='password'>Password</p>
      <input type="password" id='passwordinp' name="password" value={password} placeholder="enter password" minLength={4} onChange={handlePasswordChange} required/>
      </label>
      <div className='rem'>
        <input id='checkbox' type="checkbox" required/>
      <p className='remember'>Remember me</p>
      <Link className='forgot' to='/Forgot'>Forgot Password</Link>
      </div>
      <button className='signinb' onClick={handleClick}><p>Sign In</p></button>
      <div className='DS'>
      <p className='dont'>Don't have an account?</p>
      <Link className='signupp' to='/SignUp'>Signup</Link>
        </div>
        </form>
      </div>
    </div>
  )
};