import { useCallback, useEffect, useState } from 'react'

function App() {
  const [length, setLength] = useState()
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{ 
      let pass ="";
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnonpqrstuvwxyz";
      if(numberAllowed) str += "1234567890"
      if(charAllowed) str += "!@#$%^&*()_}{|:~><[]"

      for(let i=0;i<length;i++){
          let char = Math.floor(Math.random()*str.length + 1)
          pass += str.charAt(char);
      }
      setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])
  useEffect(()=>{
    passwordGenerator();

  },[length,numberAllowed,charAllowed,setPassword,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-4'>Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4 py-4">
              <input type="text" 
              className='outline-none w-full py-5 px-3'
              placeholder='password'
              readOnly
              value={password}/>
              <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type="range"
                 min={8}
                 max={16}
                 value={length}
                 onChange={(e)=>{setLength(e.target.value)}}
                 className='cursor-pointer'/>
                 <label>Length :{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type='checkbox'
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={()=>{
                  setNumberAllowed((prev)=>!prev)
                }} />
                <label htmlFor='numberInput' >Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type='checkbox'
                defaultChecked={charAllowed}
                id='charInput'
                onChange={()=>{
                  setCharAllowed((prev)=>!prev)
                }} />
                <label htmlFor='charInput' >Characters</label>
            </div>
      </div>
    </>
  )
}

export default App
