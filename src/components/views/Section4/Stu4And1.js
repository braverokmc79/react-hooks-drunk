import React, { useEffect, useRef } from 'react'

function Stu4And1() {
    const inputRef = useRef("");

    useEffect(() => {
        inputRef.current.focus();
        console.log(inputRef.current);
    }, [])

    const login = () => {
        alert(`환영합니다. ${inputRef.current.value}!`);
        inputRef.current.focus();
    }

    return (
        <div>
            <input type="text" placeholder='username' ref={inputRef} />
            <button onClick={login}>로그인</button>
        </div >
    )
}
export default Stu4And1