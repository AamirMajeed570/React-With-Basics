import './App.css'
import {createBrowserRouter,RouterProvider,} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path:"/home",
      element:<><Navbar /><Home></Home></>
    },
    {
      path:"/login",
      element:<><Navbar /><Login></Login></>
    },
    {
      path:"/about",
      element:<><Navbar /><About></About></>
    },
    {
      path:"/contact",
      element:<><Navbar /><Contact></Contact></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
