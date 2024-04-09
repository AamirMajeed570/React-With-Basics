import "./App.css";
import Courses from "./components/Courses/Courses";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Instructors from "./components/Instructors/Instructors";
import IslamicKnowledge from "./components/IslamicKnowledge/IslamicKnowledge";
import IslamicPillars from "./components/IslamicPillars/IslamicPillars";
import Navbar from "./components/Navbar/Navbar";
import Philosphy from "./components/Philosphy/Philosphy";
import Testimonal from "./components/Testimonals/Testimonal";

function App() {
  return (
    <>
      <Navbar />
      <Testimonal />
      <IslamicKnowledge />
      <Courses />
    <IslamicPillars />
        <Philosphy />
      <Events />
      <Instructors />
      <Footer />
    </>
  );
}

export default App;
