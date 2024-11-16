import { useState } from 'react'
import './App.css'
import StarRating from './components/star-rating'

function App() {

  return (
    <>
        <StarRating noOfStars={10}/>
    </>
  )
}

export default App
