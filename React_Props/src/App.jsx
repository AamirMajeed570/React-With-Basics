import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Card1 from './props/Card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container">
      <Card1 title="This is First Card" description="It is first Card" />
      <Card1 title="This is Second Card" description="It is Second Card" />
      <Card1 title="This is Third Card" description="It is Third Card" />
      <Card1 title="This is Fourth Card" description="It is Fourth Card" />
      <Card1 title="This is Fifth Card" description="It is Fifth Card" />
      </div>
    </>
  )
}

export default App
