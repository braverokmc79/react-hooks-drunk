import { useEffect, useState } from "react"


function Stu2And1() {

  const [Count, setCount] = useState(1);
  const [Name, setName] = useState('');


  const handleCountUpdate = () => {
    setCount(Count + 1);
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  //랜더링 될때마다 매번 실행됨
  useEffect(() => {
    console.log('랜더링 될때마다 매번 실행됨');
  },)

  //마운팅 + count 변화 될때마다 매번 실행됨
  useEffect(() => {
    console.log('count 변화');
  }, [Count])


  //마운팅 + Name 변화 될때마다 매번 실행됨
  useEffect(() => {
    console.log('Name 변화');
  }, [Name])


  useEffect(() => {
    console.log('마운팅 될 1번만 .....');
  }, [])

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count : {Count}</span>
      <br /><br />

      <input type="text" value={Name} onChange={handleInputChange} />
      <span>{Name}</span>
    </div>
  )
}

export default Stu2And1