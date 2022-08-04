import React from "react";

import { useState } from "react";

const Counter = function () {
    const [count, stateCount] = useState(0)


    function increment () {
        stateCount(count+5)
    }

    function decrement () {
        stateCount(count-5)
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick = {increment}>increment</button>
            <button onClick = {decrement}> decrement</button>
        </div>
    )


}

export default Counter