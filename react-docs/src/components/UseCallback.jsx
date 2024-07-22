import React, { useCallback, useState } from "react";
import Header from "./Header";

export const UseCallback = () => {
  const [state, setState] = useState(0);
  const newFunction = useCallback(() =>{
    // console.log('hello') //This function will not be rerendered
  },[])
//   const newFunction = useCallback((state) =>{
//    console.log('hello')  //This function will get be rerendered
//   },[state])
  return (
    <div>
      <Header newFunction={newFunction}/>
       <h2>Counter is {state}</h2>
      <button onClick={() => setState((prev) => prev + 1)}>Click</button>
    </div>
  );
};
