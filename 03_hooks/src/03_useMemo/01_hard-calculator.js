import { useState } from "react";
/*
    목적 : 많은 연산이 수행되는 문제로 인해 화면에 렌더링이 늦어진다.
    의문 : 그렇다면 setTimeout으로 루프를 막아버리면?
*/

const hardCalculator = (num) => {
    console.log("어려운 계산");

    // for(let i = 0; i < 999999; i++){

    // }

    // for문은 도는동안 스레드를 점유하고 있어야됨 연산이 끝나기전까진 다른연산을 할 수 없음
    // 하지만 setTimeout은 가지고 대기하고있는거라 다른 연산을 할 수 있음
    // 자바스크립트는 싱글스레드라 효율적으로 사용해야되기 때문에 이벤트루프에서 작업을 하고 다른 스레드로 넘어가게된다
    // 그래서 3초의 제한을 걸었지만 연산은 setTimeout이라는 이벤트 루프에서 해주는것
    // event loop는 영향을 받지 않는다.
    // react는 자식 요소에 promise를 가질 수 없다
    // for문은 스레드가 실행되고 돌아가는거라서 높은 숫자를 주면 연산하는 시간동안 랜더링을 기다려야한다
    setTimeout(() =>{console.log("타임 아웃 종료")}, 3000);
    // 자바스크립트는 싱글스레드 멀티처럼 동작하려면 이벤트루프에 넣어야됨
    // 이벤트 루프란 시간이 오래걸리는 작업을 후순위로 미루고난 다음에 랜더링을 마치고 작업함
    return num + 999999;
    //자바스크립트는 값이 바뀌면 그때마다 주소값을 새로 써서 단위에 제약이 없음
}

const HardCalculator = () =>{
    const [hardNumber, setHardNumber] = useState(0);
    // hardNumber : 현재 상태의 값, setHardNumber : 업데이트 할 상태의 값
    const hardSum = hardCalculator(hardNumber);
    return (
        <>
            <h3>어려운 계산기</h3>
            <input type="number"
                value={hardNumber}
                onChange={e => setHardNumber(parseInt(e.target.value))}
                // onChange 는 입력요소의 값이 변경시 실행되는 이벤트
                // e는 이벤트 객체
                // e.target.value는 입력 값을 받아오는 거라 빠지면 입력을 할 수 없음
            />
            <span>+999999 = {hardSum}</span>
        </>
    );
}

export default HardCalculator;