import React from "react";
import "./Testimonal.css";
// import Left from '../../../public/Images/Left.png'
const Testimonal = () => {
  return (
    <div className="testimonals">
      <div className="left-Image"></div>
      <div className="knowledge">
        <p id="gaining">
          Gaining <br></br> Knowledge is an <br></br>{" "}
          <span id="active">Active Part of Faith</span>{" "}
        </p>
        <p id="programs">
          Our programs are all personally developed in a way students can
          getaccess to our classical Islamic texts
        </p>
        <button type="submit" id="btn" className="courseBtn">Courses</button>
      </div>
      <div className="middle-Image"></div>
      <div className="middle-right-image"></div>
      <div className="vector-image"></div>
      <div className="man"></div>
      <div className="right-Image"></div>
      <div className="child-Image"></div>
    </div>
  );
};

export default Testimonal;
