import { useState } from 'react'
import './App.css'

function App() {
  const [text,setText] = useState('green'); 
  const [color, setColor] = useState('green');  // Another state to store the chosen color by the user
  const handleButtonClick = ()=>{
    setColor(text); // it updates the chosen color when the button is clicked
  }
  return (
    <>
      <div>
            <h2 style={{color:color}}>Hello Using UseState in React</h2>
            <input type="text" name="text" width={50} height={100} value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleButtonClick}>Change Color</button>
      </div>
    </>
  )
}

export default App
