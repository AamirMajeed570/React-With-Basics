import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className="container">
      <ul>
        <li className="logo">
          <a href="#">LOGO</a>
        </li>
        <li>
          <select className="courses">
            <option>Courses</option>
          </select>
        </li>
        <li className="searchbox">
          <input type="text" placeholder="Search" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </li>
        <li className="contact">
          <a href="#">Contact Us</a>
        </li>
        <li className="events">
          <a href="#">Events</a>
        </li>
        <li className="login">
          <a href="#">Log In</a>
        </li>
        <li className="signup">
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
