import React, { useState } from 'react'
import './Footer.css'
import share from "../assets/share.svg";
import Mute from "../assets/Mute.svg";
import Reaction from "../assets/Reaction.svg";
import recording from "../assets/recording.svg";
import video from "../assets/video.svg";
import Leave from "../assets/Leave.svg";
import Dots from "../assets/Dots.svg";
import UnmuteSvg from '../assets/Unmute.svg'
import man from '../assets/Man.svg'
import closeVideoIcon from '../assets/CloseVideo.svg'

const Footer = () => {
    const [muted,setMuted] = useState(false)
    const [closed,setClose] = useState(false)
    // Function to toggle the mute Unmute State
    const toggleMute = ()=>{
        setMuted(!muted);
    }
    const toggleVideo = ()=>{
        setClose(!closed);
    }
  return (
    <>
        <footer>
        <div className="first-part">
          <img src="../../../public/Images/Inbox.png" alt="" />
          <img src={man} alt="" />
          <div className="meeting-host">
            <p>
              Khan Khalid - <span>Manager Marketing</span>
            </p>
            <p id="host">Host</p>
          </div>
        </div>
        <div className="second-part">
          <div className="icon">
            <img src={share} alt="" />
            <p>Share</p>
          </div>
          <div className="icon" onClick={toggleVideo}>
            <img src={closed?closeVideoIcon:video} alt="" />
            <p>{closed?"Close":'Open'}</p>
          </div>
          <div className="icon" onClick={toggleMute}>
            <img src={muted?UnmuteSvg:Mute} alt="" />
            <p>{muted?'Unmute':'Mute'}</p>
          </div>
          <div className="icon">
            <img src={recording} alt="" />
            <p>Recording</p>
          </div>
          <div className="icon">
            <img src={Reaction} alt="" />
            <p>Share</p>
          </div>
        </div>
        <div className="third-part">
          <div className="right-icon">
            <img src={Leave} alt="" />
            <p>Leave</p>
          </div>
          <div className="right-icon">
            <img src={Dots} alt="" />
            <span>More</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer