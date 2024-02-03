import React, { useState } from 'react'
function Counter(){
    let [value,setValue] = useState(0);
    const addTwenty=()=>{
        value = value + 20;
        setValue(value);
    }
    return (
        <div>
            <h1>Hello From Custom Hooks</h1>
            <h2>Value is {value}</h2>
            <button onClick={addTwenty}>ADD</button>
        </div>
    );
}

export default Counter;