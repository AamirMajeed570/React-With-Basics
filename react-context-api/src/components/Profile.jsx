import React, { useContext } from 'react'
import UserContext from '../context/UserContext.js'

const Profile = () => {
    const {user} = useContext(UserContext);
    if(!user)
        return <h1>Not Logged In</h1>
  return (
    <div>
        <h2>Your Name is {user.username}</h2>
        <h3>Your Password is {user.password}</h3>
    </div>
  )
}

export default Profile;
