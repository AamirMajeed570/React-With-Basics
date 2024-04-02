import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="top-footer">
        <img src="../../../public/Images/prophet.png" alt="" />
        <p>
          "When Allah wishes good for someone, He bestows upon him the
          Understanding of Deen"
        </p>
        <p>"من يرد الله به خيرًا يفقه في الدين"</p>
        <p>Prophet Muhammad صلى الله عليه وعلى آله وسلم</p>
      </div>
      <div className="bottom-footer">
        <div className="regular-courses">
            <h1>Regular Courses</h1>
            <ul>
                <li><a href="#">TarteeleQuran Qaida</a></li>
                <li><a href="#">Learn Qirat</a></li>
                <li><a href="#">Quran memorization</a></li>
            </ul>
        </div>
        <div className="advance-courses">
        <h1>Advance Courses</h1>
            <ul>
                <li><a href="#">Arabic Language Course</a></li>
                <li><a href="#">Tafsir Course</a></li>
                <li><a href="#">Ijazah Courses</a></li>
            </ul>
        </div>
        <div className="links">
        <h1>Links</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div className="admissions">
        <h1>Admissions</h1>
            <ul>
                <li><a href="#">Tution & Financial Aid</a></li>
                <li><a href="#">How to Apply</a></li>
                <li><a href="#">Fee Payment</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
