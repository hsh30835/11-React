import { useEffect,useMemo,useState } from "react"

const LocationComponent = () => {
    const [isKorea, setIsKorea] = useState(true);
    const [number, setNumber] = useState(0);

    console.log("렌더링");

    // 1. 지역 변수에 문자열로 초기화 (number state 변화 시 location에 변화가 없음 (재할당) + 기본 자료형이므로)
    // const location = isKorea ? "한국" : "와노국";
    // console.log에서 숫자를 입력할 시 렌더링만 나오고 useEffect 호출 안나옴

    // 2. 지역 변수에 객체로 초기화 (number state 변화 시 loaction에 변화가 있음(재할당).객체의 주소값이므로)
    // const location = {
    //     country : isKorea ? "한국" : "와노국"
    // }
    // console.log에서 숫자를 입력할 시 렌더링과 useEffect 둘다 나옴

    // 3. 지역 변수에 useMemo의 반환 값으로 초기화 (number state 변화 시 location에 변화가 없음(재할당 x) = isKorea가 동일)
    const location = useMemo(()=>{
        return{
        country : isKorea ? "한국" : "와노국"
        }
    },[isKorea]);
    //숫자 입력시 console.log에 useEffect가 안나옴

    useEffect(()=>{
        console.log("useEffect 호출");
    }, [location]);

    return (
        <>
            <h2>지금 당신이 있는 위치는?</h2>
            <p>국가: {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>국가 토글 하기</button>
            <hr/>
            <h2>좋아하는 숫자를 입력해 주세요</h2>
            <input 
                  type="number"
                  value={number}
                  onChange={e => setNumber(e.target.value)}
                />    
        </>
    )
}

export default LocationComponent;