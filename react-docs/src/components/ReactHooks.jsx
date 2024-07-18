import React, { useState } from 'react'

const ReactHooks = () => {
    // const [color,setColor] = useState('Red')
    // console.log('Hello');
    // const colorChange = () =>{
    //     setColor(color==='Red'?'Blue':'Red');
    // }
    const [details,setDetails] = useState({
        name:'Aamir',
        state:'J&K',
        color:'White'
    });

    const colorChange = ()=>{
        setDetails((prev)=>{
           return {...prev, color:'Green'}
        })
    }

  return (
    <div>
        <h1>My name is {details.name}</h1>
        <h2>I live in {details.state} and my favorite color is {details.color}</h2>
        <button onClick={colorChange}>Blue</button>
    </div>
  )
}

export default ReactHooks