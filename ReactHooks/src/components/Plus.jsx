import React,{ useState } from 'react'
function Plus(){
    let [value,setValue] = useState(0);
    const add = function addValue(){
        value += 10;
        setValue(value);
    }
    return(
        <div>
            <h1>Value is {value}</h1>
            <button onClick={add}>Add</button>
        </div>
    );
}

export default Plus;