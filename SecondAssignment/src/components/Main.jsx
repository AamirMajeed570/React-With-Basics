import React, { useState } from "react";
import man from "../assets/Man.svg";
import Icon from "../assets/Icon.svg";
import Vector from "../assets/Vector.svg";

import "./Main.css";
import "./Sidebar.css";

const Main = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <img src="../../../public/Images/schedule.png" />
          </li>
          <li id="icon">
            <img src="../../../public/Images/component4.png" alt="" srcset="" />
          </li>
          <li>
            <img src={man} alt="Man" />
          </li>
        </ul>
      </nav>
      <div className="middle-section">
        <div className="video-title">
          <img src={Icon} alt="" />
          {/* <div> */}
          <img src="../../../public/Images/Mute.png" alt="" />
          {/* </div> */}
        </div>
        <div
          className={`right-sidebar ${
            sidebarExpanded ? "sidebar-expanded" : ""
          }`}
          onClick={toggleSidebar}
        >
          <div className="sidebar-icon">
            <img
              src={Vector}
              alt=""
              style={{ padding: "1.1vw", background: "#27262f" }}
            />
          </div>
          {sidebarExpanded && (
            <div
              className={`navbar-questions ${
                sidebarExpanded ? "sidebar-expanded" : ""
              }`}
              onClick={stopPropagation}
            >
              <div className="qa">
                <h4>Q&A</h4>
                {/* <span>An easy Way for Everyone To ask Questions</span> */}
                <h3>X</h3>
              </div>
              <div className="dropdown">
                <div className="view-dropdown">
                  <label htmlFor="view-select">View</label>
                  <select name="view" id="view-select">
                    <option value="all">All</option>
                    <option value="answered">Answered</option>
                    <option value="my-questions">My Questions</option>
                    <option value="unanswered">Unanswered</option>
                  </select>
                </div>
                <div className="sortBy-dropdown">
                  <label htmlFor="sortby">Sort by</label>
                  <select name="sort" id="sortby">
                    <option value="Upvotes">Upvotes</option>
                    <option value="Me Too">Me Too</option>
                    <option value="Oldest">Oldest</option>
                    <option value="Latest">Latest</option>
                  </select>
                </div>
              </div>
              {/* // This is For The Posts */}
              <div className="card-box flex">
                <div className="top-section flex items-center">
                  <img src={man} className="w-12 h-12 mr-4" />{" "}
                  {/* Adjust the width and height as needed */}
                  <div>
                    <h6 className="mb-1">Khan Khalid</h6>{" "}
                    {/* Add margin-bottom to create space between h6 and p */}
                    <p className="text-gray-500">12 minutes ago</p>{" "}
                    {/* Adjust text color and style as needed */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
