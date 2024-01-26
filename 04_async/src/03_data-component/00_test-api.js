import { useState } from "react"
import { json } from "react-router-dom";

const TestApi = () => {
    const [name,setName] = useState('');
    const [gender,setGender] = useState('');
    const [age,setAge] = useState(0);
    const [country,setCountry] = useState('');
    const [number,setNumber] = useState('');
    const [weight,setWeight] = useState('');
    const [firsttype,setFirstType] = useState('');
    const [secondtype,setSecondType] = useState('');

    const genderClickHandler = () => {
    fetch(`https://api.genderize.io?name=${name}`)
    .then(response =>response.json())
    .then(data => setGender(data.gender))
}
    const AgeClickHandler = () => {
        fetch(`https://api.agify.io?name=${name}`)
        .then(response => response.json())
        .then(data => setAge(data.age))
    }

    const CountryClickHandler = () => {
        fetch(`https://api.nationalize.io/?name=${name}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.country);
            setCountry(data.country[0].country_id)
        }
        )
    }

    const PokemonClickHandler = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
        .then(response => response.json())
        .then(data => setNumber(data.name))
    }

    const PokemonWeightClickHandler = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
        .then(response => response.json())
        .then(data => setWeight(data.weight))
    }

    const PokemonType1ClickHandler = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
        .then(response => response.json())
        .then(data => {
            console.log(data.types)
            console.log("=========")
            setFirstType(data.types[0].type.name)
        })
    }

    // const PokemonType2ClickHandler = () => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data.types)
    //         console.log("=========")
    //         if(data.types[1].type.name != null){
    //             setSecondType(data.types[1].type.name)
    //         }else{
    //             return (
    //                 <h3>단일 타입</h3>
    //             )
    //         }
            
    //     })
    // }
    
    const PokemonType2ClickHandler = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
            .then(response => response.json())
            .then(data => {
                console.log(data.types);
                console.log("=========");
    
                if (data.types[1] && data.types[1].type.name != null) {
                    setSecondType(data.types[1].type.name);
                } else {
                    setSecondType("단일 타입");
                }
            })
            .catch(error => {
                console.error("Error fetching Pokemon data:", error);
                // Handle error, e.g., setSecondType("에러 발생");
            });
    };


    const onChangeHandler = (e) => {
        setNumber(e.target.value)

    }

    return(
        <>
            <label>전국 도감 번호 입력 :</label>
            <input type="text" onChange={onChangeHandler}/>
            <button onClick={genderClickHandler}>이름 확인</button>
            <button onClick={AgeClickHandler}>나이 확인</button>
            <button onClick={CountryClickHandler}>국적 확인</button>
            <button onClick={PokemonClickHandler}>포켓몬 확인</button>
            <button onClick={PokemonWeightClickHandler}>포켓몬 무게 확인</button>
            <button onClick={PokemonType1ClickHandler}>포켓몬 첫 번째 타입 확인</button>
            <button onClick={PokemonType2ClickHandler}>포켓몬 두 번째 타입 확인</button>
            <h3>성별 : {gender}</h3>
            <h3>나이 : {age}</h3>
            <h3>국적 : {country}</h3>
            <h3>포켓몬 이름 : {number}</h3>
            <h3>포켓몬 무게 : {weight}g</h3>
            <h3>첫 번째 포켓몬 타입 : {firsttype}</h3>
            <h3>두 번째 포켓몬 타입 : {secondtype}</h3>
        </>
    )
}

export default TestApi;