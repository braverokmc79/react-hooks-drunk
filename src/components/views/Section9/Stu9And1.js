import React, { useState } from 'react'
import Child from './Child';

function Stu9And1() {
    const [parentAge, setParentAge] = useState(0);
    const [childAge, setChildAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    }

    const incrementChildAge = () => {
        setChildAge(childAge + 1);
    }

    console.log('부모 컴포넌트가 랜더링 되었어요.');

    return (
        <div>
            <h1>부모</h1>
            <p>age : {parentAge}</p>
            <button onClick={incrementParentAge}   >부모 나이 증가</button>
            <button onClick={incrementChildAge}   >자식 나이 증가</button>
            <Child name={'홍길동'} age={childAge} />
        </div>
    )
}

export default Stu9And1