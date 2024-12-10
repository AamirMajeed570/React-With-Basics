import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <span>Logo</span>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
