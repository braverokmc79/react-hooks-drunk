import React, { memo } from 'react'

function Child3({ name, tellMe }) {

    console.log('자녀도 랜더링 되었어요.');
    return (
        <div style={{ border: '2px solid powderblue', padding: '10px' }}>
            <h3>자녀</h3>
            <p>이름:{name}</p>
            <button onClick={tellMe}>엄마 나 사랑해?</button>
        </div>
    )
}

export default memo(Child3);