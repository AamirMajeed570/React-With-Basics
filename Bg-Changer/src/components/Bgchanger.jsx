import React from 'react'
import PropTypes from 'prop-types'

const Bgchanger = () => {
    const changeGreen = ()=>{
        document.body.style.backgroundColor = 'green';
    }
    const changeBlue = ()=>{
        document.body.style.backgroundColor = 'blue';
    }
    const changeRed = ()=>{
        document.body.style.backgroundColor = 'red';
    }
    const changeBlack = ()=>{
        document.body.style.backgroundColor = 'black';
    }
    const changeGrey = ()=>{
        document.body.style.backgroundColor = 'grey';
    }
  return (
    <div>
      <button onClick={changeGreen}>Green</button>
      <button onClick={changeBlue}>Blue</button>
      <button onClick={changeRed}>Red</button>
      <button onClick={changeBlack}>Black</button>
      <button onClick={changeGrey}>Grey</button>
    </div>
  )
}

export default Bgchanger
