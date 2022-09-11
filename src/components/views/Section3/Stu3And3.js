import React from 'react'
import { useState, useRef, useEffect } from 'react';

function Stu3And3() {
    const [Count, setCount] = useState(1);
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        console.log("랜더링 수 : ", renderCount.current);
    })


    return (
        <div>
            <p>Count: {Count}</p>
            <button onClick={() => setCount(Count + 1)}>올려</button>
        </div>
    )
}

export default Stu3And3