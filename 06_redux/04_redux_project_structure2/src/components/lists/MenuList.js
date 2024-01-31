import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";
import MenuItem from "../items/MenuItem";

const MenuList = () => {
    const result = useSelector(state => state.menuReducer);
    // useSelector는 상태 값을 추출하는데 사용한다 menuReducer를 추출함
    // 1. menuReducer의 상태를 가져온다
    const menuList = result.menuList;
    // 2. menuReducer의 상태에서 menuList 속성을 추출하여 menuList 변수에 할당한다
    const dispatch = useDispatch();
    // useDispatch는 액션함수를 실행시켜 state를 전달?
    // 3. useDispatch를 사용하여 dispatch 함수를 가져온다

    console.log(menuList);

    useEffect(() => {
        // useEffect는 컴포넌트가 랜더링 될 때마다 특정 작업을 실행할 수 있도록 함
        dispatch(callGetMenuListAPI());
    }, [])
    // 4. useEffect를 사용하여 컴포넌트가 렌더링될 때 callGetMenuListAPI 액션 함수를 dispatch를 통해 실행한다
    // 두 번째 매개변수인 빈 배열([])은 useEffect가 컴포넌트가 처음으로 마운트될 때만 실행되도록 하는 역할을 한다.

    return (
        menuList && (
            <div className="menuBox">
                {menuList.map(menu => <MenuItem key={menu.id} menu={menu} />)}
                {/* map은 값을 배열로 반환 해주는 거 */}
            </div>
        )
    )
}
 
export default MenuList;