import './App.css'
import Courses from './components/Courses/Courses'
import IslamicKnowledge from './components/IslamicKnowledge/IslamicKnowledge'
import Navbar from './components/Navbar/Navbar'
import Testimonal from './components/Testimonals/Testimonal'

function App() {

  return (
    <>
      <Navbar />
      <Testimonal />
      <IslamicKnowledge />
      <Courses />
    </>
  )
}

export default App
