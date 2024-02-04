import React, { useState } from 'react'

const BG_Changer = () => {
    const [backgroundColor,setBackgroundColor] = useState('green');
  return (
    <>
    <div>
      <button onClick={()=>setBackgroundColor('green')}>Green</button>
      <button onClick={()=>setBackgroundColor('blue')}>Blue</button>
      <button onClick={()=>setBackgroundColor('black')}>Black</button>
      <button onClick={()=>setBackgroundColor('red')}>Red</button>
      <button onClick={()=>setBackgroundColor('purple')}>Purple</button>
      <button onClick={()=>setBackgroundColor('white')}>White</button>
      <button onClick={()=>setBackgroundColor('green')}>Green</button>
    </div>
     {/* Apply the background color dynamically */}
     <style>{`
        body {
          background-color: ${backgroundColor};
        }
      `}</style>
    </>
  )
}

export default BG_Changer
