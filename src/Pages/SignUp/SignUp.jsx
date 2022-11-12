import React from 'react'

function Signup() {
  return (
    <div>
      <div className="Signup">
      <p>Sign in with Google</p>
      <p>or</p>
      <p>Full Name</p>
      <input type="text" name="fullname" placeholder="Enter Full Name"/>
      <p>Email Address</p>
      <input type="text" name="email" placeholder="tim@gmail.com"/>
      <p>Password</p>
      <input type="text" name="password" placeholder="enter password"/>
      <p>Confirm Password</p>
      <input type="text" name="confirm" placeholder="enter password"/>
      <p>Forgot Password</p>
      <p><input type="checkbox"/>I agree to GoFarmNg terms of service and privacy policy</p>
      <button>Sign Up</button>
      <div>
        <p><input type="checkbox"/>Already have asn account?</p>
        <p>Sign In</p>
        </div>
      </div>
    </div>
  )
}

export default Signup