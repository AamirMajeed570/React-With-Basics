import React,{ useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import Hook from './components/Hook';
import Counter from './components/Counter';
import Plus from './components/Plus';
import UseReducer from './components/UseReducer';
import UseMemo from './Hooks/UseMemo';
import UseReducerHook from './Hooks/UseReducerHook';

function App() {
  // let [counter,setCounter] = useState(0);
  // function addValue(){
  //   console.log("Value Added",counter)
  //     setCounter(counter++);
  // }
  // function decValue(){
  //   console.log("Value Added")
  //     setCounter(counter--);
  // }
  // const [value,setValue] = useState(0)
  // const count = useRef(0); //It holds the initial Value we use the useRef() when we want not to rerender a component whenver value gets rendered
    // useEffect(()=>{
    //   count.current ++;
    // })
    // const inputEle = useRef();
    // const btnClicked = ()=>{
      
    //   console.log(inputEle.current);
    //   inputEle.current.style.background = "red"
    // }
  return (
    <>
      {/* <div>
        <h1>React Hooks</h1>
        <h2>Counter Value {counter}</h2>
        <button onClick={addValue}>Add</button>
        <br />
        <button onClick={decValue}>Remove</button>
      </div> */}
      {/* <Hook /> */}
      {/* <Counter /> */}
      {/* <Plus /> */}
      {/* <UseReducer /> */}
      <h3>Hello This is Aamir Khan</h3>
        {/* <button onClick={()=>setValue(value+1)}>+1</button>
        <h2>{value}</h2>
        <button onClick={()=>setValue(value-1)}>-1</button>
        <h2>Components get Rendered for {count.current} times</h2> */}
        {/* <input type="text" ref={inputEle}/>
        <button onClick={btnClicked}>Click</button> */}
        {/* <UseMemo /> */}
        <UseReducerHook />
    </>
  )
}

export default App
