import { useRef,useState } from "react";

const UseRefCounter = () =>{
    console.log("useRefCounter 렌더링 됨");

    const [count, setCount] = useState(0);

    let variable = 0;

    const countRef = useRef(0);

    const increseCount = () => {
        setCount(count+1);
    }

    const increaseVariable = () => {
        variable +=1;
        console.log("variable : " + variable);
    }

    const increaseCounterRef = () => {
        countRef.current = countRef.current+1;
        console.log("countRef : " + countRef.current);
    }

    return (
        <>
            <h1> counter : {count}</h1>
            <h1> variable : {variable}</h1>
            <h1> countRef : {countRef.current}</h1>
            <button onClick={increseCount}>카운트 증가</button>
            <button onClick={increaseVariable}>variable 증가</button>
            <button onClick={increaseCounterRef}>카운트 ref 증가</button>
        </>
    )
}

export default UseRefCounter;