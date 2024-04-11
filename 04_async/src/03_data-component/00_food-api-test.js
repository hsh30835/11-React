// import { useEffect, useState } from "react"

// const FoodApi = () => {
//     const [name, setName] = useState('');
//     const [groupName, setGroupName] = useState('');


//     const findGroupName = () => { // api에서 검색하기
//         fetch(`http://openapi.foodsafetykorea.go.kr/api/0e28c65abe314f1c9981/I2790/json/1/50/DESC_KOR=${name}`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 console.log("============");

//                 const groupNames = []; // 리스트들을 뽑기위한 배열생성

//                 if (data && data.I2790 && data.I2790.row && data.I2790.row.length > 0) { // 검색한 결과가 존재하는지 안하는지 길이로 판단
//                     for (let i = 0; i < data.I2790.row.length; i++) { // 존재할 시 길이만큼 이름을 출력함
//                         groupNames.push(data.I2790.row[i].DESC_KOR); // push : 배열에서 값을 집어넣는 역할
//                     }
//                 } else { // 결과 값이 없을 때 
//                     // groupNames.push("결과 없음");
//                     // 기존에 입력한 텍스트를 보낸다
//                     // replace : 특정 문자열을 제거해줌 ,을 제거함
//                     setName(name.replace(/,$/, ''))
//                 }

//                 setGroupName(groupNames);
//             });
//     };
//     // name의 값이 바뀔 때 마다 랜더링 된다
//     useEffect(()=>{
//         // 바뀐 name값을 다시 전송하고 출력해야됨
//         console.log(name)
//         setName(name)
//     },[name])

//     const onChangeHandler = (e) => { // input에 입력한 텍스트를 e에 담아 전달
//         setName(e.target.value + ",") // ,붙여서
//     }

//     return ( // 출력
//         <>
//             <label>종류 확인</label>
//             <input type="text" onChange={onChangeHandler} />
//             <button onClick={findGroupName}>검색</button>
//             <h3>{name}</h3>
//             <h3>{groupName}</h3>
//             <h3>이름 검색 시 리스트 목록 출력하고 리스트 클릭시 칼로리 탄수화물 단백질 지방 출력</h3>
//             <h3>기본은 ,붙인 상태로 검색하고 만약 값이 없으면 ,를 지워진채로 검색해서 결과가 나오게끔
//                 결과 if
//             </h3>
//         </>
//     )
// }

// export default FoodApi;

// import React, { useEffect, useState } from "react";

// const FoodApi = () => {
//     const [name, setName] = useState('');
//     const [groupName, setGroupName] = useState('');

//     const findGroupName = () => {

//         fetch(`http://openapi.foodsafetykorea.go.kr/api/0e28c65abe314f1c9981/I2790/json/1/5/DESC_KOR=${name}`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 console.log("============");

//                 const groupNames = [];

//                 if (data && data.I2790 && data.I2790.row && data.I2790.row.length > 0) {
//                     for (let i = 0; i < data.I2790.row.length; i++) {
//                         groupNames.push(data.I2790.row[i].DESC_KOR);
//                     }
//                 } else {
//                     setName(name.replace(/,$/, ''))
//                 }

//                 setGroupName(groupNames);
//             });
//     };

//     useEffect(() => {
//         console.log(name);
//         setName(name);
//     }, [name]);

//     const onChangeHandler = (e) => {
//         setName(e.target.value + ",");
//     };

//     return (
//         <>
//             <label>종류 확인</label>
//             <input type="text" onChange={onChangeHandler} />
//             <button onClick={findGroupName}>검색</button>
//             <h3>{name}</h3>
//             <h3>{groupName}</h3>
//             <h3>이름 검색 시 리스트 목록 출력하고 리스트 클릭시 칼로리 탄수화물 단백질 지방 출력</h3>
//             <h3>기본은 ,붙인 상태로 검색하고 만약 값이 없으면 ,를 지워진채로 검색해서 결과가 나오게끔
//                 결과 if
//             </h3>
//         </>
//     );
// };

// export default FoodApi;

// import React, { useState } from "react";

// const FoodApi = () => {
//     const [name, setName] = useState('');
//     const [groupNames, setGroupNames] = useState([]);

//     const findGroupName = () => {

//         fetch(`http://openapi.foodsafetykorea.go.kr/api/0e28c65abe314f1c9981/I2790/json/1/50/DESC_KOR=${name}`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//                 console.log("====== 구분선 ======");

//                 if (data && data.I2790 && data.I2790.row && data.I2790.row.length > 0) {
//                     const names = data.I2790.row.map(item => item.DESC_KOR);
//                     setGroupNames(names);
//                 } else {
//                     const updatedName = name.slice(0, -1); // 변경된 이름
//                     console.log("이름 바뀜? " + updatedName)
//                     fetch(`http://openapi.foodsafetykorea.go.kr/api/0e28c65abe314f1c9981/I2790/json/1/50/DESC_KOR=${updatedName}`)
//                         .then(response => response.json())
//                         .then(data => {
//                             console.log(data);
//                             console.log("@@@@@@@@@@@@@@@@@2");

//                             if (data && data.I2790 && data.I2790.row && data.I2790.row.length > 0) {
//                                 const items = data.I2790.row;
//                                 items.forEach(item => {
//                                     console.log(item.DESC_KOR);
//                                 }); // 이 부분에 세미콜론을 추가해야 합니다.
//                             }
//                         });
//                 }
//             });
//     };

//     // useEffect(() => {
//     //     // console.log()
//     //     // console.log(name);
//     //     setName(name);
//     // }, [name]);

//     const onChangeHandler = (e) => {
//         setName(e.target.value + ",");
//     };

//     return (
//         <>
//             <label>종류 확인</label>
//             <input type="text" onChange={onChangeHandler} />
//             <button onClick={findGroupName}>검색</button>
//             <h3>{name}</h3>
//             {groupNames.length > 0 ? (
//                 <ul>
//                     {groupNames.map((groupName, index) => (
//                         <li key={index}>{groupName}</li>
//                     ))}
//                 </ul>
//             ) : null}
//             <h3>이름 검색 시 리스트 목록 출력하고 리스트 클릭시 칼로리 탄수화물 단백질 지방 출력</h3>
//             <h3>기본은 ,붙인 상태로 검색하고 만약 값이 없으면 ,를 지워진채로 검색해서 결과가 나오게끔
//                 결과 if
//             </h3>
//         </>
//     );
// };

// export default FoodApi;

// import React, { useState } from "react";

// const FoodApi = () => {
//     const [name, setName] = useState('');
//     const [groupNames, setGroupNames] = useState([]);

//     const findGroupName = () => {
//         fetch(`http://openapi.foodsafetykorea.go.kr/api/0e28c65abe314f1c9981/I2790/json/1/50/DESC_KOR=${name}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data && data.I2790 && data.I2790.row && data.I2790.row.length > 0) {
//                     const names = data.I2790.row.map(item => item.DESC_KOR);
//                     setGroupNames(names);
//                 } else {
//                     const updatedName = name.slice(0, -1); // 변경된 이름
//                     fetch(`http://openapi.foodsafetykorea.go.kr/api/0e28c65abe314f1c9981/I2790/json/1/50/DESC_KOR=${updatedName}`)
//                         .then(response => response.json())
//                         .then(data => {
//                             if (data && data.I2790 && data.I2790.row && data.I2790.row.length > 0) {
//                                 const items = data.I2790.row;
//                                 const names = items.map(item => item.DESC_KOR);
//                                 setGroupNames(names);
//                             }
//                         });
//                 }
//             });
//     };
    
//     const onChangeHandler = (e) => {
//         setName(e.target.value + ",");
//     };

//     return (
//         <>
//             <label>종류 확인</label>
//             <input type="text" onChange={onChangeHandler} />
//             <button onClick={findGroupName}>검색</button>
//             <h3>{name}</h3>
//             {groupNames.length > 0 ? (
//                 <ul>
//                     {groupNames.map((groupName, index) => (
//                         <li key={index}>{groupName}</li>
//                     ))}
//                 </ul>
//             ) : null}
//         </>
//     );
// };

// export default FoodApi;

import React, { useState } from "react";

const FoodApi = () => {
    const [name, setName] = useState('');
    const [groupNames, setGroupNames] = useState([]);

    const findGroupName = () => {
        fetchAndSetGroupNames(name);
    };

    const fetchAndSetGroupNames = (searchName) => {
        fetch(`http://openapi.foodsafetykorea.go.kr/api/0e28c65abe314f1c9981/I2790/json/1/5/DESC_KOR=${searchName}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.I2790 && data.I2790.row && data.I2790.row.length > 0) {
                    const names = data.I2790.row.map(item => item.DESC_KOR);
                    setGroupNames(names);
                } else {
                    if (searchName.endsWith(',')) {
                        const updatedName = searchName.slice(0, -1); // 변경된 이름
                        fetchAndSetGroupNames(updatedName);
                    }
                }
            });
    };
    
    const onChangeHandler = (e) => {
        setName(e.target.value + ",");
    };

    return (
        <>
            <label>종류 확인</label>
            <input type="text" onChange={onChangeHandler} />
            <button onClick={findGroupName}>검색</button>
            <h3>{name}</h3>
            {groupNames.length > 0 ? (
                <ul>
                    {groupNames.map((groupName, index) => (
                        <li key={index}>{groupName}</li>
                    ))}
                </ul>
            ) : null}
        </>
    );
};

export default FoodApi;