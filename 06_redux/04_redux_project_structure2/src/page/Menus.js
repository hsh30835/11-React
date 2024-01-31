import { useNavigate } from "react-router-dom";
import MenuList from "../components/lists/MenuList";

const Menus = () => {
    const loginStatus = !!localStorage.getItem("isLogin");
    // 값이 존재하면 true 없으면 false로 변환
    const navigate = useNavigate();
    // useNavigate는 특정 이벤트가 실행 될 때 동작하도록 함
    // 여기서의 특정 이벤트는 로그인 시 인거같음

    return (
        <div>
            <h1>메뉴 목록 {(loginStatus) &&
                <button onClick={() => navigate("/menu/regist")}>메뉴 추가</button>}
            </h1>
            <MenuList />
            {/* 메뉴보기 누를시 MenuList 출력*/}
        </div>
    )
}

export default Menus;