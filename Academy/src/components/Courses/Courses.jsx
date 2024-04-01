import React from "react";
import "./Courses.css";
const Courses = () => {
  return (
    <div className="courses-container">
      <div className="courses-offered">
        <p>
          Courses <span id="span">Offered</span>
        </p>
        <p id="para">
          Your best source of knowledge about Skills and Islamic values
        </p>
      </div>
      <div className="cards">
        <div className="card1">
          <img src="../../../public/Images/Teacher.png" alt="" srcset="" />
          <p id="arab">Arabic Teaching</p>
          <p id="wisdom">Unlock the beauty and the wisdom of the Quran</p>
        </div>
        <div className="card2">
          <img src="../../../public/Images/Childs.png" alt="" srcset="" />
          <p id="arab">Quran Teaching</p>
          <p id="wisdom">Unlock the beauty and the wisdom of the Quran</p>
        </div>
        <div className="card3">
          <img src="../../../public/Images/Library.png" alt="" srcset="" />
          <p id="arab">Islamic Studies</p>
          <p id="wisdom">Unlock the beauty and the wisdom of the Quran</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
