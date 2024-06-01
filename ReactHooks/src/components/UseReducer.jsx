import React, { useReducer } from "react";

// Defining the Initial State

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected Action");
  }
};

const UseReducer = () => {
    // Initialising useReducer hook
    const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("add")}>Add</button>
      <button onClick={() => dispatch("sub")}>Subtract</button>
      <button onClick={() => dispatch("mul")}>Multiply</button>
      <button onClick={() => dispatch("div")}>Divide</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default UseReducer;
