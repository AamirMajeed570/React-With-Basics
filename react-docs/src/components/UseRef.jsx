import React, { useRef } from 'react'

export const UseRef = () => {
    const inputEle = useRef();
    const changeColor = () =>{
        
        inputEle.current.style.background = 'red'
        inputEle.current.focus();
        console.log(inputEle.current);
    }
  return (
    <div>
        <input type='text' ref={inputEle} />
        <button onClick={changeColor}>Click</button>
    </div>
  )
}
