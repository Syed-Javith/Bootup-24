import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie'
const AuthPage = () => {

  const [showLogin, setShowLogin] = useState(true);
  const cookies = new Cookies()

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };


  const loginUser = async (e) => {
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const data = { email, password }
      const res = await axios.post('http://localhost:8000/auth/login', data);
      if (res.status === 200) {
        cookies.set('user', res.data)
      }
    } catch (error) {
      console.log(error);
      alert(error?.message)
    }
  }

  const registerUser = async (e) => {
    try {
      const username = e.target.username.value
      const email = e.target.email.value;
      const mobileNumber = e.target.mobileNumber.value;
      const pincode = e.target.pincode.value
      const password = e.target.password.value;
      const role = e.target.role.value;
      const data = { username, email, mobileNumber, pincode, password, role }
      console.log(data);
      const res = await axios.post('http://localhost:8000/auth/register', data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>

      <div>

        <button onClick={toggleForm}>{showLogin ? 'New User? Click here to register!' : 'Already a user? Click here to login!'}</button>
      </div>

      {showLogin ? (
        <div class="loginForm">
          <form onSubmit={(e) => { e.preventDefault(); loginUser(e); }} >
            <label htmlFor="">Email :</label>
            <input type="text" name="email" id="" />

            <br />
            <label htmlFor="">Password :</label>
            <input type="password" name="password" id="" />

            <br />
            <input type="submit" value="LOGIN" />
          </form >
        </div>


      ) : (

        <div class="registerForm">
          <form onSubmit={(e) => { e.preventDefault(); registerUser(e) }}>
            <label htmlFor="">UserName :</label>
            <input type="text" name="username" id="" />

            <br />
            <label htmlFor="">Email :</label>
            <input type="text" name="email" id="" />

            <br />
            <label htmlFor="">Mobile Number :</label>
            <input type="text" name="mobileNumber" id="" />

            <br />
            <label htmlFor="">Location<span>(Enter pincode)</span> :</label>
            <input type="text" name="pincode" id="" />

            <br />
            <label htmlFor="">Password :</label>
            <input type="password" name="password" id="" />
            <br />
            <label htmlFor="">Role :</label>
            <select name="role" id="role">
              <option value="D">Distributor</option>
              <option value="V">Volunteer</option>
              <option value="G">General User</option>
            </select>

            <br />
            <input type="submit" value="REGISTER" />
          </form>

        </div>
      )}

    </>

  )
}

export default AuthPage
