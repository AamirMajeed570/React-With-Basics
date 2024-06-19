import React, { useReducer } from "react";

const UseReducerHook = () => {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increase": {
        return { count: state.count + 1 };
      }
      case "decrease": {
        return { count: state.count - 1 };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Learning useReducer hook in ReactJs</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increase" })}>Increase+</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease-</button>
    </div>
  );
};

export default UseReducerHook;
