import React from "react";
import "./Events.css";
const Events = () => {
  return (
    <>
    <div className="events-container">
      <div>
        <img src="../../../public/Images/Events.png" alt="" srcset="" />
      </div>
      <div className="all-events">
        <div className="events-workshop">
          <h1>Events</h1>
          <h4>See all</h4>
        </div>
        <div className="events-text">
          <p>
            The is not just a institute for prayers rather it is a community
            center for all. The Center is committed to preserving an Islamic
            identity, building and supporting a viable Muslim community,
            promoting a compre-hensive Islamic way of life based on the Holy
            Quran and the Sunnah of Prophet Muhammad S.A.W
          </p>
        </div>
        <div className="workshop">
            <div className="date">
                <p>MAR</p>
                <span>04</span>
            </div>
            <div className="ramadhan-workshop">
                <p>Ramadan Workshop</p>
                <p>Lorem ipsum dolor sit.</p>
                <p>10:00 Pm - 4:00 Am</p>
                <p>Lorem ipsum dolor sit amet consectetur. Egestas netus tristique urna sem ipsum volutpat. Vitae.</p>
                <h2>View Event Details<span>➞</span></h2>
            </div>
        </div>
      </div>

    </div>
    <h4>Alhamdulillah <span>We Have Reached Over</span></h4>
    <div className="reach">
        <div className="card-reach">
            <h1>Students</h1>
            <h1>20K+</h1>
        </div>
        <div className="card-reach">
            <h1>Instructors</h1>
            <h1>12+</h1>
        </div>
        <div className="card-reach">
            <h1>Courses</h1>
            <h1>18+</h1>
        </div>
        <div className="card-reach">
            <h1>Positive Reviews</h1>
            <h1>5K+</h1>
        </div>
    </div>
    </>
  );
};

export default Events;
