
import Stu1And1 from './views/Section1/Stu1And1';
import Stu1And2 from './views/Section1/Stu1And2';
import Stu2And1 from './views/Section2/Stu2And1';
import Stu2And2 from './views/Section2/Stu2And2';
import { useState } from 'react';

function App() {
  const [ShowTimer, setShowTimer] = useState(false);

  return (
    <div className="App">
      {/*1.useState 15분만에 마스터 */}
      {/* <Stu1And1 /> */}
      {/* <Stu1And2 /> */}

      {/* 2.useEffect 깔끔하게 마스터하기  */}
      {/* <Stu2And1 /> */}
      {ShowTimer && <Stu2And2 />}
      <button onClick={() => setShowTimer(!ShowTimer)}>Toggle Timer</button>


    </div>
  );
}

export default App;
