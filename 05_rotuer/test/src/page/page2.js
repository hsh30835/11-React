import { useState } from "react";

const Page2 = () => {
    const [number, setNumber] = useState(0);

    // + 누를 시 3씩 증가하고 - 누를 시 3씩 감소하는 버튼 만들기
    // onChange로 number를 setNumber로 바꿔야 하나?
    // onChange는 input같이 입력할때 값이 바뀔 때 쓰는거였음 button은 onClick
    // plus const로 setNumber에 number+3해줌
    const plus = () => {
        setNumber(number + 3);
    };

    const minus = () => {
        setNumber(number - 3);
    };

    return (
        <>
            <h3>number: {number}</h3>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </>
    );
};

export default Page2;