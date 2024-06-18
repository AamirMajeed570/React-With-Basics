import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import ShowBooks from './pages/ShowBooks'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'

const App = () => {
  return (
    <div>
      <h2 className='text-center text-3xl my-4'>Books Management System</h2>
      <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='/books/create' element={<CreateBook />}/>
        <Route path='/books/details/:id' element={<ShowBooks />}/>
        <Route path='/books/edit/:id' element={<EditBook />}/>
        <Route path='/books/delete/:id' element={<DeleteBook />}/>
      </Routes>
    </div>
  )
}

export default App