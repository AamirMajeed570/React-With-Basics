import React from "react";
import './Philosphy.css'
const Philosphy = () => {
  return (
    <>
      <div className="philosphy-container">
        <div className="philosphy-text">
          <p>Our <span>Philosphy</span></p>
          <p>
            Journey to Enlightenment: Unraveling the Spiritual Tapestry of
            Islamic Philosophy.
          </p>
        </div>
        <div className="learning">
            <div className="online-learning">
                <img src="../../../public/Images/Quran.png" alt="No Image" />
                <div className="community">
                    <p>Oline Learning</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Philosphy;
