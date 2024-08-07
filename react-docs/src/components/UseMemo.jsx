import React, { useState ,useMemo} from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

   function cubeNum(num) {
    console.log('Hello');
    return Math.pow(num,3);
  };
//   const result = cubeNum(number);
  const result = useMemo(()=>cubeNum(number),[number]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>Cube of a Number is {result}</h2>
      <button onClick={()=>setCounter(counter+1)}>counter++</button>
      <h1>Counter: {counter}</h1>
    </>
  );
};

export default UseMemo;
