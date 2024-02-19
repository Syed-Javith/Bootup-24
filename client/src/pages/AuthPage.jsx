import React from 'react'
import { useState } from 'react';

const AuthPage = () => {

  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>

     <div>
        
        <button onClick={toggleForm}>{showLogin ? 'New User? Click here to register!' : 'Already a user? Click here to login!'}</button>
      </div>
    
    {showLogin ? (
    <div class="loginForm">
        <label htmlFor="">Username :</label>
        <input type="text" name="username" id="" />

        <br />
        <label htmlFor="">Password :</label>
        <input type="password" name="password" id="" />
        
        <br />
        <input type="submit" value="LOGIN"/>
    </div>

    ) : ( 

    <div class="registerForm">
      <label htmlFor="">UserName :</label>
      <input type="text" name="username" id="" />

      <br />
      <label htmlFor="">Email :</label>
      <input type="text" name="email" id="" />

      <br />
      <label htmlFor="">Mobile Number :</label>
      <input type="text" name="mobile" id="" />

      <br />
      <label htmlFor="">Location<span>(Enter pincode)</span> :</label>
      <input type="text" name="email" id="" />

      <br />
      <label htmlFor="">Confirm Password :</label>
      <input type="password" name="confirmPassword" id="" />

      <br />
      <input type="submit" value="REGISTER" />

    </div>
    )}

    </>
    
  )
}

export default AuthPage
