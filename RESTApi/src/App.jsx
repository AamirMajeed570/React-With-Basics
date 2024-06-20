import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowPost from './components/ShowPost'

function App() {
  return (
    <>
      <h2 style={{textAlign:'center'}}>Consuming API's Through Axios</h2>
      <ShowPost />
    </>
  )
}

export default App
