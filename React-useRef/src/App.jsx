import { useEffect, useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let a = 1;
  const a = useRef(1)
  const ref = useRef()
  useEffect(()=>{
    a.current = a.current + 1; //Value will persist
    console.log(`Value of a is ${a.current}`);
  })
  

  useEffect(()=>{

    ref.current.style.backgroundColor = "red"
    console.log(`Value of a is ${a.current}`);
  },[])

  const btnAlert = useRef(0)
  function handleClick(){
    btnAlert.current = btnAlert.current+ 1;
    alert(`You clicked ${btnAlert.current} times`)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>{ref.current.style.display = "none"}}>Hide</button>
      <button onClick={()=>{ref.current.style.display = ""}}>Display</button>
    </>
  )
}

export default App
