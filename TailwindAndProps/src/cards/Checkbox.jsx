import React, { useState } from 'react'
import './Checkbox.css'
const Checkbox = () => {
    const [checkbox,setCheckbox] = useState(false);
    const handleCheckbox = ()=>{
        setCheckbox(!checkbox);
        console.log(checkbox)
    }

  return (
    <div>
        <input type="checkbox" value={checkbox} onChange={handleCheckbox} />

        <button type='submit' disabled={!checkbox} >Next</button>
    </div>
  )
}

export default Checkbox