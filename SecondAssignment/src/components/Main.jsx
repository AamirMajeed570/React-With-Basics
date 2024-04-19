import React from "react";
import man from "../assets/Man.svg";
import Icon from "../assets/Icon.svg";
import Vector from "../assets/Vector.svg";

import "./Main.css";
const Main = () => {
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
        <div className="right-sidebar">
          <img src={Vector} alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
