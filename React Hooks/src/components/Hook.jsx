import { useState } from "react";

function Hook(){
    let [counter,setCounter] = useState(0);
    const addValue = ()=>{
        if(counter<20){
            setCounter(counter+1);
        }
        else if(counter==20){

            counter = 0;
        }
    }
    const decValue = ()=>{
        if(counter<=0){
            counter = 0;
            setCounter(counter);
        }
        else{
            setCounter(counter--);
        }
    }
    return (
        <div>
            <h1>Custom Hooks</h1>
            <h2>Counter is {counter} </h2>
            <button onClick={addValue}>Add</button>
            <br />
            <button onClick={decValue}>Remove</button>
        </div>
    );
}

export default Hook;