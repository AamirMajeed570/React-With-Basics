import React from 'react';
import './Footer.css';

const Footer = ({ favourite }) => {
    let count = favourite.length; // Count the number of favourites

    return (
        <div className="container">
            <div>
                <h3>Copyright @Aamir Majeed 2024</h3>
            </div>
            <div>
                <h3>Total Favourite Items: {count}</h3>
            </div>
        </div>
    );
};

export default Footer;
