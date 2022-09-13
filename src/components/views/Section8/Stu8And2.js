import React from 'react'
import { useState, useReducer } from 'react';
import Student from './Student';

const ACTION_TYPES = {
    ADD_STUDENT: 'add-student',
    DELETE_STUDENT: 'delete-student',
    MARK_STUDENT: 'mark-student'
}
const reducer = (state, action) => {

    switch (action.type) {
        case ACTION_TYPES.ADD_STUDENT:
            console.log("학생 추가: ", state, action);
            const newStudent = {
                id: Date.now(),
                name: action.payload.name,
                isHere: false
            }
            return {
                count: state.count + 1,
                students: [...state.students, newStudent]
            };

        case ACTION_TYPES.DELETE_STUDENT:
            console.log("학생 삭제: ", state, action);
            return {
                count: state.count - 1,
                students: state.students.filter((student) => student.id !== action.payload.id)
            }

        case ACTION_TYPES.MARK_STUDENT  :
            return {
                count: state.count,
                students: state.students.map((student) => {
                    if (student.id === action.payload.id) {
                        return { ...student, isHere: !student.isHere }
                    }
                    return student;
                })
            }
        default:
            return state;
    }
};

const initialState = {
    count: 0,
    students: []
}

function Stu8And2() {
    const [name, setName] = useState('');
    const [studentInfo, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수 : {studentInfo.count}</p>
            <input
                type="text"
                placeholder='이름을 입력해주세요.'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={() => dispatch({ type: 'add-student', payload: { name } })}>추가</button>


            {studentInfo.students.map(student => {
                return (<Student key={student.id} name={student.name} dispatch={dispatch} id={student.id} isHere={student.isHere} />)
            })}
        </div>
    )
}

export default Stu8And2;