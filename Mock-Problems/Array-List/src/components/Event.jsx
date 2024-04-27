import React, { useState } from 'react'
import './style.css'
export const Event = () => {
    const [backgroundColor,setBackgroundColor] = useState("White")
  return (
    <>
    <div className='red' style={{backgroundColor}}>
        I am a Ist Div
    </div>
    <div className="container">
        <button onClick={()=>setBackgroundColor("red")}>Red</button>
        <button onClick={()=>setBackgroundColor("black")}>Black</button>
        <button onClick={()=>setBackgroundColor("blue")}>Blue</button>
    </div>
    </>
  )
}
