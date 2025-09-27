import React, { useContext } from 'react'
import { UserContext } from '../context/index.jsx'

// This page will be used to consume the context we created in index.js file
function WelcomePage() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
        <h1>Welcome to Context API</h1>
        <h2>Hello {user.name}</h2>
        <h3>Your email is {user.email}</h3>
    </div>
  )
}

export default WelcomePage