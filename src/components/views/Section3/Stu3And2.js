import React from 'react'
import { useState, useRef } from 'react';

function Stu3And2() {

    const [Renderer, setRenderer] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    const doRendering = () => {
        setRenderer(Renderer + 1);
    }

    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log('ref : ', countRef.current);
    }

    const increaseVar = () => {
        countVar = countVar + 1;
        console.log('var : ', countVar);
    }

    const printResults = () => {
        console.log(`ref :  ${countRef.current} ,var :${countVar}`);
    }


    return (
        <div>
            <p>Ref : {countRef.current}</p>
            <p>Var : {countVar}</p>
            <button onClick={doRendering}>랜더!</button>
            <button onClick={increaseRef}>Ref 올려</button>
            <button onClick={increaseVar}>Var 올려</button>
            <button onClick={printResults}>Ref Var 값 출력</button>
        </div>
    )
}

export default Stu3And2



