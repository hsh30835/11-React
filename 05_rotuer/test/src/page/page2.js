import { useState } from "react";
const Page2 = () => {
    // + 누를시 3씩 증가하고 -누를시 3씩 감소하는 버튼 만들기
    // 버튼을 누를시 변경 되는 것이니 onChange로 setNumber를 써야되나?
    // 아니였음 onChange는 input같이 입력하는거에 쓰는거고 button은 onClick이였음
    const[number,setNumber]=useState(0);
    return(
        <>
            <h3>number : {number}</h3>
          <button onClick={number = () => (setNumber+3)}>+</button>
          <button>-</button>  
        </>
    )
}

export default Page2;