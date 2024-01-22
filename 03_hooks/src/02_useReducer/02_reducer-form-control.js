import { useReducer } from "react"

const reducer = (state, action) => {
    console.log(action);
    return{
        ...state,
        [action.name] : action.value
    }
}

const ReducerFormControl = () =>{
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });

    const {name, nickname} = state;
    const onChangeHandler = e => dispatch(e.target);

    return(
        <>
            <label>이름 : </label>
            <input type="text" name="name" onChange={onChangeHandler}/>
            <br/>
            <label>닉네임 : </label>
            <input type="text" name="nickname" onChange={onChangeHandler}/>
            <br/>
            <div>
                <h3>입력한 이름 : {name}</h3>
                <h3>입력한 닉네임 : {nickname}</h3>
            </div>
        </>
    )
}

export default ReducerFormControl;