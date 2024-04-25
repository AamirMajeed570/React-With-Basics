import React, { useState } from "react";
import man from "../assets/Man.svg";
import Icon from "../assets/Icon.svg";
import Vector from "../assets/Vector.svg";
import Dots from "../assets/Dots.svg";
import uparrow from "../assets/uparrow.svg";
import downarrow from "../assets/downarrow.svg";
import "./Main.css";
import "./Sidebar.css";
import "./Cards.css";
const Main = () => {
  const cardsData = [
    {
      id: 1,
      answered: true,
      time:12,
      content:
        "What do you identify as the biggest challenge facing designers in the next 20 years, and how might we begin to address it?",
    },
    {
      id: 2,
      answered: false,
      time:7,
      content:
        "What do you identify as the biggest challenge facing designers in the next 20 years, and how might we begin to address it?",
    },
    {
      id: 3,
      answered: true,
      time:5,
      content:
        "What do you identify as the biggest challenge facing designers in the next 20 years, and how might we begin to address it?",
    },
    {
      id: 4,
      answered: false,
      time:10,
      content:
        "What do you identify as the biggest challenge facing designers in the next 20 years, and how might we begin to address it?",
    },
  ];
  const [selectedFilter,setSelectedFilter] = useState("all")
  const [sortFilter,setSortedFilter] = useState("Oldest")
  const [counter,setCounter] = useState(0);

  const handleClick = ()=>{
    setCounter(counter+1);
    console.log(counter)
  }
  const sortCards = (cards) => {
    switch (sortFilter) {
      case "Latest":
        return cards.sort((a, b) => b.time - a.time); // Sort by descending time
      case "Oldest":
        return cards.sort((a, b) => a.time - b.time); // Sort by ascending time
      default:
        return cards;
    }
  };
  
  const filteredCards = cardsData.filter((card)=>{
    if(selectedFilter==="all") return true;
    if(selectedFilter==="answered") return card.answered
    if(selectedFilter==="unanswered") return !card.answered
  })
  const sortedFilteredCards = sortCards(filteredCards);
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  // console.log(`Current time: ${timeString}`);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <nav className="container-container">
        <ul>
          <li>
            <img src="../../../public/Images/schedule.png" />
          </li>
          <li id="icon">
            <img src="../../../public/Images/component4.png" alt="" srcset="" />
          </li>
          <li>
            <img src={man} alt="Man" />
          </li>
        </ul>
      </nav>
      <div className="middle-section">
        <div className="video-title">
          <img src={Icon} alt="" />
          {/* <div> */}
          <img src="../../../public/Images/Mute.png" alt="" />
          {/* </div> */}
        </div>
        <div
          className={`right-sidebar ${
            sidebarExpanded ? "sidebar-expanded" : ""
          }`}
          onClick={toggleSidebar}
        >
          <div className="sidebar-icon">
            <img src={Vector} alt="" style={{ background: "none" }} />
          </div>
          {sidebarExpanded && (
            <div
              className={`navbar-questions ${
                sidebarExpanded ? "sidebar-expanded" : ""
              }`}
              onClick={stopPropagation}
            >
              <div className="qa">
                <h4>Q&A</h4>
                {/* <span>An easy Way for Everyone To ask Questions</span> */}
                <h3 onClick={toggleSidebar}>X</h3>
              </div>
              <div className="dropdown">
                <div className="view-dropdown">
                  <label htmlFor="view-select">View</label>
                  <select name="view" id="view-select" value={selectedFilter} onChange={(e)=>setSelectedFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="answered">Answered</option>
                    <option value="my-questions">My Questions</option>
                    <option value="unanswered">Unanswered</option>
                  </select>
                </div>
                <div className="sortBy-dropdown">
                  <label htmlFor="sortby">Sort by</label>
                  <select name="sort" id="sortby" value={sortFilter} onChange={(e)=>{
                    setSortedFilter(e.target.value)
                  }}>
                    <option value="Upvotes">Upvotes</option>
                    <option value="Me Too">Me Too</option>
                    <option value="Oldest">Oldest</option>
                    <option value="Latest">Latest</option>
                  </select>
                </div>
              </div>
              {/* // This is For The Posts */}
              <div className="four-cards">
                {sortedFilteredCards.map((data) => (
                  <div className="myCard" key={data.id}>
                    <div className="first-card">
                      <div className="blogger">
                        <div>
                          <img src={man} alt="" srcSet="" />
                        </div>
                        <div className="name-image">
                          <p>Khan Khalid</p>
                          <p id="time">{data.time} minutes ago</p>
                        </div>
                      </div>
                      <div className="blogger-qa">
                        <div className={`answer`}>
                          <p>{data.answered ? "ANSWERED" : "UNANSWERED"}</p>
                        </div>
                        <img src={Dots} alt="Image" />
                      </div>
                    </div>
                    <div className="challenge">
                      <p>{data.content}</p>
                    </div>
                    <div className="footer-btns">
                      <div className="updown">
                        <button onClick={handleClick} style={{border:"2px solid white"}}>
                          {" "}
                          <img
                            src={uparrow}
                            style={{ color: "white" }}
                            alt="Image"
                          />{" "}
                          <span>{counter}</span>
                        </button>
                        <button style={{border:"2px solid white"}}>
                          <img
                            src={downarrow}
                            style={{ color: "white" }}
                            alt="Image"
                          />{" "}
                          <span>(00)</span>
                        </button>
                      </div>
                      <div className="hands">
                        <button style={{border:"2px solid white"}}>Me Too (200)</button>
                      </div>
                      <div className="reply">
                        <button id="reply">Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="textarea">
                  <textarea name="" id="" cols="40" rows="4" placeholder="Post a Question..."></textarea>
                  <div className="emoji-icon">
                    {/* <h2 style={{ color: "white" }}>&#128512;</h2> */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
