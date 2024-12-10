import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/resume' element={<Resume />} />
    </Routes>
    </>
  );
}

export default App;
