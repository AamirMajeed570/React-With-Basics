import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    const [isEven,setIsEven] = useState(false)
  return (
    <div>
        <p>Count : {count}</p>
        <p>{isEven?"EVEN":"ODD"}</p>
        <button onClick={()=>setCount(count+1)}>Click</button>
        <button onClick={()=>setIsEven(!isEven)}>Toggle Even/Odd</button>
    </div>
  )
}

export default Counter