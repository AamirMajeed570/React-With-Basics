import React from "react";
import "./IslamicKnowledge.css";
const IslamicKnowledge = () => {
  return (
    <div className="islamic-knowledge">
      <div className="masjid"></div>
      <div className="bismillah">
        <p id="para-bismillah">
          The is not just a institute for prayers rather it is a community
          center for all. The Center is committed to preserving an Islamic
          identity, building and supporting a viable Muslim community, promoting
          a compre-hensive Islamic way of life based on the Holy Quran and the
          Sunnah of Prophet Muhammad S.A.W
        </p>
      </div>
     
        <div className="guides">
          <p id="para-guides">
            Blossoming in the Garden <br></br>{" "}
            <span> of Islamic Knowledge</span>
          </p>
          <p id="ethical">ETHICAL & MORAL BELIEFS THAT GUIDES</p>
          <button type="submit" id="btn">
            Learn More
          </button>
        </div>
        <div className="tahajud"></div>
    
    </div>
  );
};

export default IslamicKnowledge;
