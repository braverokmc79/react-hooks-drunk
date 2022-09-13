import React, { memo } from 'react'

function Child({ name, age }) {

    console.log('자녀도 랜더링 되었어요.');
    return (
        <div style={{ border: '2px solid powderblue', padding: '10px' }}>
            <h3>자녀</h3>
            <p>name:{name}</p>
            <p>age : {age}살</p>
        </div>
    )
}

export default memo(Child);