import React, { useState } from "react";
import man from "../assets/Man.svg";
import Icon from "../assets/Icon.svg";
import Vector from "../assets/Vector.svg";

import "./Main.css";

const Main = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
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
          <img src={Vector} alt="" />
          {sidebarExpanded && (
            <div className="card">
              <div className="card-header">Featured</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
