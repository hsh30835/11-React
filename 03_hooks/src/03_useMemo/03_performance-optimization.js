import { useMemo, useState } from "react";

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

const UseMemoComponent = () => {
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    const hardSum = useMemo(()=>{
        return hardCalculator(hardNumber);
    },[hardNumber]);
    // hardNumber라는 값이 변경되면 useMemo에 있는 return hardCalculator(hardNumber); 값을 다시 저장한다
    // 값이 바뀌지 않으면 계속 저장하고 있음

    const easySum = useMemo(()=>{
        return easyCalcaulator(easyNumber);
    },[easyNumber]);
    return (
        <>
            <h3>어려운 계산기</h3>
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
}

export default UseMemoComponent;