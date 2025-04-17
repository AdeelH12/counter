import React from "react";
import { useState } from "react";

function Counter () {

    const [counter, setCounter] = useState(0)
    const [stepValue, setStepValue] = useState(0)

    function reset (){

        setCounter(0)
    }

    function handleChange(event){

        setStepValue(event.target.value);
      
    }

    return(

        <>
        <h1>Counter is: {counter}</h1>
        <button onClick={() => setCounter (counter + Number(stepValue))}>+</button>
        <button onClick={() => setCounter (counter - Number(stepValue))}>-</button>
        <button onClick={reset}>Reset</button>
       <form>
            <input type="number" placeholder="Enter a Number" onChange={handleChange}></input>
        </form>
        <br/>

        </>
    )
}

export default Counter;