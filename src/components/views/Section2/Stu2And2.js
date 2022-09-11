import React from 'react'
import { useEffect } from 'react';

function Stu2And2() {


    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 돌아가는 중....");
        }, 1000);

        //다음 return 은 timer 컴포넌트가 unmount 될때 종료 처리해 준다
        return () => {
            clearInterval(timer);
            console.log("타이머가 종료되었습니다.");
        }
    }, [])


    return (
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요.!</span>
        </div>
    )
}

export default Stu2And2