import React, { useEffect } from 'react'
import './signup.css'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from "react";

async function signup(item) {
  return fetch('https://gofarm-ng.vercel.app/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(data => data.json())
 }

export default function Signup() {
const [password , setPassword] = useState('');
const [confirmPassword , setConfirmPassword] = useState('');
const [email, setEmail]= useState('')
const [firstname, setFirstname]= useState('')
const [lastname, setLastname]= useState('')
const [phoneNumber, setPhoneNumber]= useState('')
const [role, setRole]= useState('')
const [message, setMessage]= useState('')
const [pmessage, setPmessage]= useState('')
const navigate = useNavigate();

const handleChange = (e)=>{
  setEmail(e.target.value);
}

function handleClick(e){
const regEx= /[a-zA-Z0-9._%+-]+@[a-z0-9•-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
if (!regEx.test(email)){
 e.preventDefault();  setMessage('Email is not valid')
}
if ( password !== confirmPassword){
  e.preventDefault(); setPmessage('Password doesnt match')
}
}

useEffect(() =>{
 setPmessage ('')
}, [password, confirmPassword,]);

useEffect(() =>{
  setMessage ('')
 }, [email]);

 const handleSubmit = async e => {
  e.preventDefault();
  const response = await signup({
    firstname,
    lastname,
    phoneNumber,
    email,
    password,
    confirmPassword,
    role
  })
  if ('access_token' in response) {
    alert("Success", response.message, "success", {
      buttons: false,
      timer: 2000,
    })
    navigate('/')
    .then((value) => {
      localStorage.setItem('access_token', response['access_token']);
      localStorage.setItem('user', JSON.stringify(response['user']));
    });
  } else {
    alert("Failed", response.message, "error");
  }

};
  


// async function handleSubmit (){
//   let item= {email, password};
//   let result= await fetch('https://gofarmng.herokuapp.com/api/register', {
//    method:'POST',
//    headers:{
//     'Content-Type': 'application/json', 
//     'Accept': 'application/json'
//    },
//    body: JSON.stringify(item)
//   })
//  result= await result.json();
//  console.log(result)
//  }


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
        <form  onSubmit={handleSubmit}>
      <label>
      <p className='firstname'>First Name</p>
      <input type="text" id='firstnameinp' name="firstname" value={firstname} placeholder="Enter First Name" required onChange={event => setFirstname(event.target.value)}/>
      </label>
      <label>
      <p className='lastname'>Last Name</p>
      <input type="text" id='lastnameinp' name="lastname" value={lastname} placeholder="Enter Last Name" required onChange={event => setLastname(event.target.value)}/>
      </label>
      <label>
      <p className='emaill'>Email Address  <p className='emessage'>{message}</p></p>
      <input type="email" id='emailad' name="email" value={email} placeholder="tim@gmail.com" onChange={handleChange}/>
      </label>
      <label>
      <p className='phoneNumber'>Phone Number</p>
      <input type="text" id='Number' name="phoneNumber" value={phoneNumber} placeholder="Enter Phone Number" required onChange={event => setPhoneNumber(event.target.value)}/>
      </label>
      <label>
      <p className='role'>Role(Buyer or Seller)</p>
      <input type="text" id='roleinp' name="role" value={role} placeholder="Enter Role" required onChange={event => setRole(event.target.value)}/>
      </label>
      <label>
      <p className='password'>Password</p>
      <input type="password" id='passwordinp' value={password} name="password" placeholder="enter password" minLength={4} required onChange={event => setPassword(event.target.value)}/>
      </label>
      <label>
      <p className='confp'>Confirm Password</p>
      <p className='emessage'>{pmessage}</p>
      <input type="password" id='confinp' name="confirmpassword" value={confirmPassword} placeholder="enter password" minLength={4} required onChange={event => setConfirmPassword(event.target.value)}/>
      </label>
      <div className='DS'>
      <input type="checkbox" required/>
      <p className='agree'>I agree to GoFarmNg terms of service and privacy policy</p>
      </div>
      <button className='signupb' onClick={handleClick} >Sign Up</button>
      </form>
      <div className='already'>
        <p className='already1'>Already have an account?</p>
        <Link className='Asignin' to='/'>Sign In</Link>
        </div>
      </div>
    </div>
  )
}
