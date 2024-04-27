import React from "react";
import "./Instructors.css";
const Instructors = () => {
  return (
    <div>
      {/* <h1>Testomonials</h1> */}
      <div className="instructor-Container">
        <div className="teacher1">
          <div className="student1">
            <img src="../../../public/Images/teacher1.png" alt="" srcset="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
          <div className="stars">
            <span id="reviews">⭐️⭐️⭐️⭐️⭐️</span>
            <p>Ali Hammam</p>
            <p>Student</p>
          </div>
        </div>
        <div className="teacher2">
          <div className="student1">
            <img src="../../../public/Images/teacher2.png" alt="" srcset="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
          <div className="stars">
            <span id="reviews">⭐️⭐️⭐️⭐️⭐️</span>
            <p>Ali Hammam</p>
            <p>Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
