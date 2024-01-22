import { useState } from "react";

const hardCalculator = (num) =>{
    console.log("어려운 계산기");

    for(let i=0; i<99999999; i++){

    }

    return num + 100000;
}

const easyCalcaulator = (num) => {
    console.log("쉬운 계산기");

    return num + 1;
}

const ComplexCalculator = () => {
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    const hardSum = hardCalculator(hardNumber);
    const easySum = easyCalcaulator(easyNumber);
    return (
        <>
            <input
                type="number"
                value={hardNumber}
                onChange={e => setHardNumber(parseInt(e.target.value))}
            />
            <span>+100000 = {hardSum}</span>
            <h3>쉬운 계산기</h3>
            <input
                type="number"
                value={easyNumber}
                onChange={e => setEasyNumber(parseInt(e.target.value))}
            />
            <span> + 1 = {easySum}</span>
        </>
    );
    // 기존에 가지고 있던 연산을 다시 뒤엎고 계산을 하는 거라서 쉬운 계산기도 오래 걸린다
    // 쉬운계산기는 어려운계산기 부터 연산하고 다시 쉬운계산기로 연산을 하는 거라면
    // 어려운 계산기에 왜 쉬운계산기 console.log가 찍히나
    // 조건을 걸지 않아서 무조건 랜더링이 되서 둘다 실행 되는거 같음
}

export default ComplexCalculator;