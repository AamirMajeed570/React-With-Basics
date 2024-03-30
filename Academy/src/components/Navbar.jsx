import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
      <div className="container">
          <ul className="container">
            <li className="logo">
              <a href="#">LOGO</a>
            </li>
            <li>
              <select className="courses">
                <option>Courses</option>
              </select>
            </li>
            <li className="searchbox">
              <input type="text" placeholder="    Search" />
              {/* <button>
                <i className="fa fa-search"></i>
              </button> */}
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
