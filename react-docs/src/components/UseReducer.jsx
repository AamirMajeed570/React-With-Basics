import React, { useReducer, useState } from 'react'

const UseReducer = () => {
    const initialArgs = {count: 0};
    console.log(initialArgs);
    const reducer = (state,action) =>{
      switch(action.type){
        case 'increase': {
          return {count: state.count+1}
        }
        case 'decrease': {
          return {count: state.count-1}
        }
        default:{
          return {count: state.count}
        }
      }
    }
    const [state,dispatch] = useReducer(reducer,initialArgs);
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'increase'})}>Increase+</button>
        <button onClick={()=>dispatch({type:'decrease'})}>Decrease-</button>
    </div>
  )
}

export default UseReducer