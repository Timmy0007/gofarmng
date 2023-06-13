import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { useState, useEffect } from "react";
import { FaAlignJustify, FaAlignLeft, FaAngleLeft, FaApple, FaAudioDescription, FaBaby, FaBars, FaBluetooth, FaBuyNLarge, FaDownload, FaFirstOrder, FaProductHunt, FaSalesforce, FaTh } from 'react-icons/fa';

async function logins(item) {
  return fetch('https://gofarm-ng.vercel.app/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(data => data.json())
 }

//  export default  function Login({open, onClose}) {


 export default  function Login() {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [message, setMessage]= useState('')
  const navigate = useNavigate();


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
      password,
      email
    });
    if ('access_token' in response) {
      alert("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      navigate('/SellersDashboard')
      .then((value) => {
        localStorage.setItem('access_token', response['access_token']);
        localStorage.setItem('user', JSON.stringify(response['user']));
      });
    } else {
      alert("Failed", response.message, "error");
    }
  };
  

  
  //   const handleSubmit = async e => {
  //    e.preventDefault();
  //    const response = await logins({
  //      email,
  //      password  mnh 
  //    });   
  //      localStorage.setItem('email', JSON.stringify(response));
  //  }   

  // if (!open)  return  null;

  return (
    <div className='loginn'>
      <div className="Signin"> 
    
        <div className='signupg'>
      <p className="sign">Sign up with Google</p>
      </div> 
      {/* <button onClick={onClose} className='x'>X</button> */}
      <div className="orhr">
        <hr className='hrline'/>
        <p className='orl'>or</p>
        <hr className='hrlin'/>
        </div> 
        <form onSubmit={handleSubmit}>
      <label>
        <p className='emaillabel'>Email Address <p className='emessage'>{message}</p></p>
      <input id='emailas' type="email" name="email" placeholder="Example@gmail.com" value={email} onChange={handleChange} required/>
      </label>
      <label>
        <p className='passw'>Password</p>
      <input type="password" id='passwordinpu' name="password" value={password} placeholder="Enter password" minLength={4} onChange={handlePasswordChange} required/>
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