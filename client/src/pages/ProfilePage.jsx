import React from 'react'
import Cookies from 'universal-cookie'
const ProfilePage = () => {
  const cookies = new Cookies()
  const user = cookies.get('user')
  if(!user) return <h1>No user found</h1>
  return (
    <div>
      <div>
        <img src="/user.png" alt="user icon" style={{ display: 'inline-block' }} height={50} width={50} />
        <h1>{ user.username }</h1>
      </div>
    
      <h4>Email: </h4>
      <p>{user.email}</p>

      <h4>Mobile Number: </h4>
      <p>{user.mobileNumber }</p>

      <h4>Location:  </h4>
      <p>{ user.pincode }</p>

    </div>
  )
}

export default ProfilePage
