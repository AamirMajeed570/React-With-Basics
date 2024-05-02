import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [lenght, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null)
  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,20); //Copy Only twenty
    window.navigator.clipboard.writeText(password);
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()[]";
    }
    for(let i=1;i<=lenght;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  useEffect(()=>{
    passwordGenerator()
  },[lenght,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700">
      <h1 className="text-white text-center mb-2 text-3xl my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
          value={password} 
          className="outline-none w-full py-1 mx-3 mb-2.5"
          placeholder="password"
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyToClipBoard}
           className="bg-blue-500 text-black py-1 mx-auto h-[30px] w-[50px] border-none">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
              <input type="range" 
              min={6}
              max={50}
              value={lenght}
              onChange={(e)=>{setLength(e.target.value)}}
              className="cursor-pointer"
               />
               <label className="text-xl" htmlFor="">Length :{lenght} </label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor="numberInputs">Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox" 
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={()=>{
                setCharacters((prev)=>!prev)
              }}
            />
            <label htmlFor="charInputs">Characters</label>
          </div>
      </div>
      </div>
    </>
  );
}

export default App;
