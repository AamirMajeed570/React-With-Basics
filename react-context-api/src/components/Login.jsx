import React, { useContext, useState } from 'react'
import './Login.css';
import UserContext from '../context/UserContext';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    console.log(username)
    console.log(password)
    e.preventDefault();
    if (!username || !password) {
      alert('Please fill in both fields!');
      return;
    }
    setUser({ username, password })
    console.log('User logged in:', { username, password });
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <br></br>
        <button type='Submit'>Sign In</button>
      </form>
    </div>
  )
}

export default Login
