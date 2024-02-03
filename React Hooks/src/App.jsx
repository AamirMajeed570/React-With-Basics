import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hook from './components/Hook';

function App() {
  let [counter,setCounter] = useState(0);
  function addValue(){
    console.log("Value Added",counter)
      setCounter(counter++);
  }
  function decValue(){
    console.log("Value Added")
      setCounter(counter--);
  }

  return (
    <>
      {/* <div>
        <h1>React Hooks</h1>
        <h2>Counter Value {counter}</h2>
        <button onClick={addValue}>Add</button>
        <br />
        <button onClick={decValue}>Remove</button>
      </div> */}
      <Hook />
    </>
  )
}

export default App
