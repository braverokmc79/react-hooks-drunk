import { useMemo, useState } from 'react';


const hardCalculate = (number) => {
    console.log("어려운 계산!");
    for (let i = 0; i < 9999999; i++) { } //생각하는 시간
    return number + 10000;
}

const easyCalculate = (number) => {
    console.log("쉬운 계산!");
    return number + 1;
}

function Stu6And1() {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    //const hardSum = hardCalculate(hardNumber);
    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber);
    }, [hardNumber]);

    const easySum = easyCalculate(easyNumber);

    return (
        <div>
            <h3>어려운 계산기</h3>
            <input type="number" value={hardNumber} onChange={(e) => setHardNumber(Number(e.target.value))} />
            <span>+10000 ={hardSum}</span>

            <br /><br />
            <h3>쉬운 계산기</h3>
            <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(Number(e.target.value))} />
            <span>+10000 ={easySum}</span>

        </div>
    )
}

export default Stu6And1