import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [typeOfColor,setTypeOfColor] = useState('hex')
  const [color,setColor] = useState('#000000')
  const generateHex = () =>{
    const hex = [1,2,3,4,5,6,7,8,9,"A","B","c","D","E","F"];
    let hexColor = '#';
    console.log("111")
    for(let i=0;i<6;i++){
      hexColor += hex[Math.floor(Math.random() * hex.length)]
    }
    console.log(hexColor)
    setColor(hexColor)
  }
  const generateRGB = () =>{
   const r = Math.floor(Math.random()*256)
   const g = Math.floor(Math.random()*256)
   const b = Math.floor(Math.random()*256)
   console.log(`rgb(${r},${g},${b})`)
    setColor(`rgb(${r},${g},${b})`)
  }
  useEffect(()=>{
    typeOfColor === "rgb" ? generateRGB() : generateHex()
  },[typeOfColor])
  return (
    <>
      <div style={{
        width: "100vw",
        height: "100vh",
        background: color
      }}>
        <div className="buttons">
          <button onClick={()=>setTypeOfColor('hex')}>Generate Hex</button>
          <button onClick={()=>setTypeOfColor('rgb')}>Generate RGB</button>
          <button onClick={()=>{
            typeOfColor === 'hex' ? generateHex() : generateRGB()
          }}>Generate Random Color</button>
        </div>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
      </div>
    </>
  )
}

export default App
