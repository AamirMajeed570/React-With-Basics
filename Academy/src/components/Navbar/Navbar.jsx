import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className="container">
      <div className="menu-icon">
      <i className="fas fa-bars"></i> 
    </div>
      <ul>
        <li className="logo">
          <a href="#">LOGO</a>
        </li>
        <li className="menu-items">
          <select className="courses">
            <option>Courses</option>
          </select>
        </li>
        <li className="searchbox menu-items">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </li>
        <li className="contact menu-items">
          <a href="#">Contact Us</a>
        </li>
        <li className="events menu-items">
          <a href="#">Events</a>
        </li>
        <li className="login menu-items">
          <a href="#">Log In</a>
        </li>
        <li className="signup hoverBtn menu-items">
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
