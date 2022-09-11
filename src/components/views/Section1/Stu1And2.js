import React, { useState } from 'react'

const heavyWork = () => {
  console.log("엄청 무거운 작업 초기값 콜백 설정시 맨 처음 랜더링 될때만 실행 !!!");
  return ['홍길동', '김민수'];
}

function Stu1And2() {

  const [Names, setNames] = useState(() => {
    return heavyWork();
  });

  const [Input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }


  const handleUpload = (e) => {
    setNames((prevState) => {
      console.log("이전 state : ", prevState);
      return [Input, ...prevState];
    })

    // setNames([...Names, Input]);
  }


  return (
    <div>
      <input type="text" value={Input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>

      <br />
      {
        Names.map((name, idx) => {
          return <p key={idx}>{name}</p>
        })


      }

    </div>
  )
}

export default Stu1And2