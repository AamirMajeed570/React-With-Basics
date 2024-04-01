import './App.css'
import Courses from './components/Courses/Courses'
import IslamicKnowledge from './components/IslamicKnowledge/IslamicKnowledge'
import IslamicPillars from './components/IslamicPillars/IslamicPillars'
import Navbar from './components/Navbar/Navbar'
import Philosphy from './components/Philosphy/Philosphy'
import Testimonal from './components/Testimonals/Testimonal'

function App() {

  return (
    <>
      <Navbar />
      <Testimonal />
      <IslamicKnowledge />
      <Courses />
      <IslamicPillars />
      <Philosphy />
    </>
  )
}

export default App
