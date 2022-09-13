import React, { useMemo, useState } from 'react'
import Child2 from './Child2';

function Stu9And2() {
    const [parentAge, setParentAge] = useState(0);

    const incrementParentAge = () => {
        setParentAge(parentAge + 1);
    }

    console.log('부모 컴포넌트가 랜더링 되었어요.');

    const name = useMemo(() => {
        return {
            lastName: "홍",
            firstName: "길동"
        }
    }, []);

    return (
        <div>
            <h1>부모</h1>
            <p>age : {parentAge}</p>
            <button onClick={incrementParentAge}   >부모 나이 증가</button>
            <Child2 name={name} />


        </div>
    )
}

export default Stu9And2