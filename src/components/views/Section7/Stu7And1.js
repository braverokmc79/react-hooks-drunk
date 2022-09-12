import React, { useCallback } from 'react'
import { useState, useEffect } from 'react';

function Stu7And1() {

    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);

    //1.useCallback 을 사용하지 않고 다음과 같은 함수 사용시에 toggle 버튼 클릭시
    // someFunction 함수도 호출된다.
    // const someFunction = () => {
    //     console.log(`someFunc : number : ${number}`);
    //     return;
    // };

    const someFunction = useCallback(() => {
        console.log(`someFunc : number : ${number}`);
        return;
    }, [number]);


    useEffect(() => {
        console.log('someFunction 이 변경되었습니다.');
    }, [someFunction])


    return (
        <div>
            <input type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <br />
            <button onClick={someFunction}>Call SomeFunce</button>
        </div>
    )
}

export default Stu7And1