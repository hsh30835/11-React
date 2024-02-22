import { useState } from "react"

const FoodApi = () => {
    const [name,setName] = useState('');
    const [groupName,setGroupName] = useState('');

    const findGroupName = () => {
        fetch(`http://openapi.foodsafetykorea.go.kr/api/0e28c65abe314f1c9981/I2790/json/1/5/DESC_KOR=${name}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log("============")
            console.log(data.I2790.row[0].GROUP_NAME)
            setGroupName(data.I2790.row[0].GROUP_NAME)
        })
    }

    const onChangeHandler = (e) => {
        setName(e.target.value)

    }

    return(
        <>
            <label>종류 확인</label>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={findGroupName}>그룹네임 검색</button>
            <h3>{name}</h3>
            <h3>{groupName}</h3>
        </>
    )
}

export default FoodApi;