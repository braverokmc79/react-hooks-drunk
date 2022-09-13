import React, { useState, useCallback } from 'react'
import Child3 from './Child3';

function Stu9And3() {
    const [parentAge, setParentAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    }

    console.log('부모 컴포넌트가 랜더링 되었어요.');

    const tellMe = useCallback(() => {
        console.log('길동아 사랑해 ');
    }, []);

    return (
        <div>
            <h1>부모</h1>
            <p>age : {parentAge}</p>
            <button onClick={incrementParentAge}   >부모 나이 증가</button>
            <Child3 name={'홍길동'} tellMe={tellMe} />
        </div>
    )
}

export default Stu9And3