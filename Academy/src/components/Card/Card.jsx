import React from 'react';
import './Card.css'
const Card = () => {
  return (
    <div className="card">
      <img src="../../../public/Images/Child.png" alt="Card" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Quran Teaching</h2>
        <p className="card-text">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Card;
