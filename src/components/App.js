import { useState } from 'react';
import Stu1And1 from './views/Section1/Stu1And1';
import Stu1And2 from './views/Section1/Stu1And2';
import Stu2And1 from './views/Section2/Stu2And1';
import Stu2And2 from './views/Section2/Stu2And2';
import Stu3And1 from './views/Section3/Stu3And1';
import Stu3And2 from './views/Section3/Stu3And2';
import Stu3And3 from './views/Section3/Stu3And3';
import Stu4And1 from './views/Section4/Stu4And1';
import Stu5And1 from './views/Section5/Stu5And1';
import Stu6And1 from './views/Section6/Stu6And1';
import Stu6And2 from './views/Section6/Stu6And2';
import Stu7And1 from './views/Section7/Stu7And1';
import Stu7And2 from './views/Section7/Stu7And2';
import Stu8And1 from './views/Section8/Stu8And1';
import "../App.css"
import Stu8And2 from './views/Section8/Stu8And2';
import Stu9And1 from './views/Section9/Stu9And1';
import Stu9And2 from './views/Section9/Stu9And2';
import Stu9And3 from './views/Section9/Stu9And3';
import Stu10And1 from './views/Section10/Stu10And1';
import Stu10And2 from './views/Section10/Stu10And2';
function App() {
  //const [ShowTimer, setShowTimer] = useState(false);

  return (
    <div className="App">
      {/*1.useState 15분만에 마스터 */}
      {/* <Stu1And1 /> */}
      {/* <Stu1And2 /> */}

      {/* 2.useEffect 깔끔하게 마스터하기  */}
      {/* <Stu2And1 /> */}
      {/* {ShowTimer && <Stu2And2 />}
      <button onClick={() => setShowTimer(!ShowTimer)}>Toggle Timer</button> */}

      {/* 3.useRef 완벽 정리 1# 변수 관리  */}
      {/* <Stu3And1 /> */}
      {/* <Stu3And2 /> */}
      {/* <Stu3And3 /> */}

      {/* 4.useRef 완벽 정리 2# DOM 요소 접근  */}
      {/* <Stu4And1 /> */}

      {/* 5.useContext + Context API  */}
      {/* <Stu5And1 /> */}

      {/* 6.useMemo 제대로 사용하기  */}
      {/* <Stu6And1 /> */}
      {/* <Stu6And2 /> */}

      {/* 7. useCallback 짱 쉬운 강의  */}
      {/* <Stu7And1 /> */}
      {/* <Stu7And2 /> */}


      {/* 8. useReducer 확실히 정리해드려요  */}
      {/* <Stu8And1 /> */}
      {/* <Stu8And2 /> */}

      {/* 9.React.memo로 컴포넌트 최적화하기 (ft. useMemo, useCallback) */}
      {/* <Stu9And1 /> */}
      {/* <Stu9And2 /> */}
      {/* <Stu9And3 /> */}

      {/* 10.Custom Hooks 커스텀 훅  */}
      {/* <Stu10And1 /> */}
      <Stu10And2 />


    </div>
  );
}

export default App;
