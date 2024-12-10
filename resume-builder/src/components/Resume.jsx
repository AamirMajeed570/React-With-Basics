import React from 'react'
import './Resume.css';
import { useLocation } from 'react-router-dom';
import profile from '../assets/image.jpg';
const Resume = () => {
    // Retrieve the passed data using useLocation:
    const location = useLocation();
    const formData = location.state ?? {};
    console.log(formData);
    return (
        <>
            <div className='resume-container'>
                <div className='header'>
                    <div>
                        <h1>{formData.fname} {formData.lname}</h1>
                        <span>Address: {formData.address}</span> <br />
                        <span>Age: {new Date().getFullYear() - new Date(formData.dob).getFullYear()}</span>
                    </div>
                    <img src={profile} alt="Profile Pic" width={200} height={200} srcset="" />
                </div>
                <div className="summary">
                    <h2>About Me</h2>
                    <p>{formData.summary}</p>
                </div>
                <h2 style={{ padding: '0 20px 0 20px', marginTop: '0px' }}>Education</h2>
                <div className="education">
                    <p>{formData.university}</p>
                    <p>{formData.graduation}</p>
                </div>
                <h2 style={{ padding: '0 20px 0 20px', marginTop: '0px' }}>Skills</h2>
                <div className="skills">
                    <div>
                        <span>C++</span>
                        <span>Data Structures</span>
                        <span>Algorithms</span>
                        <span>Java</span>
                    </div>
                    <div>
                        <span>MongoDB</span>
                        <span>ExpressJS</span>
                        <span>ReactJs</span>
                        <span>NodeJs</span>
                    </div>
                    <div>
                        <span>AWS</span>
                        <span>Serverless Framework</span>
                        <span>Prisma DB</span>
                        <span>AWS Cognito</span>
                    </div>
                </div>
            </div>
            <div className="download-resume">
                <button>Download Resume</button>
            </div>
        </>
    )
}

export default Resume
