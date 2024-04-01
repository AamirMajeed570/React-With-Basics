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
      <div className="pillars">
        <div className="qalima">
          <div className="circle1">
            <img src="../../../public/Images/Qalima.png"/>
          </div>
          <div className="props1">
            <p>Swam</p>
            <p>To Believe in no God but Allah and that Muhammad is his prophet.</p>
          </div>
        </div>
        <div className="namaz">
        <div className="circle2">
            <img src="../../../public/Images/prayer.png"/>
          </div>
          <div className="props2">
            <p>Swam</p>
            <p>To Believe in no God but Allah and that Muhammad is his prophet.</p>
          </div>
        </div>
        <div className="roza">
        <div className="circle3">
            <img src="../../../public/Images/roza.png"/>
          </div>
          <div className="props3">
            <p>Swam</p>
            <p>To Believe in no God but Allah and that Muhammad is his prophet.</p>
          </div>
        </div>
        <div className="zakat">
        <div className="circle4">
            <img src="../../../public/Images/Zakat.png"/>
          </div>
          <div className="props4">
            <p>Swam</p>
            <p>To Believe in no God but Allah and that Muhammad is his prophet.</p>
          </div>
        </div>
        <div className="hajj">
        <div className="circle5">
            <img src="../../../public/Images/hajj.png"/>
          </div>
          <div className="props5">
            <p>Swam</p>
            <p>To Believe in no God but Allah and that Muhammad is his prophet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
