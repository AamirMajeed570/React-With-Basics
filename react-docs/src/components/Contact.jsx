import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Contact = () => {
    const {phone} = useContext(AppContext)
    const {name} = useContext(AppContext)
    console.log(phone,"--->Contact")
  return (
    <div>
        <h2>Contact</h2>
        <h3>Phone: {phone}</h3>
        <h3>Name: {name}</h3>
    </div>
  )
}

export default Contact