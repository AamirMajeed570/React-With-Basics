import { useEffect, useState } from "react";
export const Counter = () => {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setTimeout(() => {
      if (counter < 20) {
        setCounter(counter + 1);
      } else {
        alert("Sorry! Limit Exceeded");
      }
    }, 2000);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h2>Counter :{counter}</h2>
      <button
        className="border-solid bg-slate-800 text-white p-[10px] mx-2"
        onClick={addValue}
      >
        Add
      </button>
      <button
        className="border-solid bg-slate-800 text-white p-[10px]"
        onClick={removeValue}
      >
        Remove
      </button>
    </>
  );
};
