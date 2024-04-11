import { useState } from "react";

const Page2 = () => {
    const [number, setNumber] = useState(0);

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