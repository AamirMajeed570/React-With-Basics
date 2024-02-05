import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Bgchanger from './components/Bgchanger'
import Bg_changer from './components/Bg_changer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Bgchanger /> */}
      <Bg_changer />
    </>
  )
}

export default App
