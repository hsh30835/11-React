import { Link, NavLink } from "react-router-dom";
import Layout from "../layouts/Layout"

//const Navbar = () => {
    // react에서 a태그를 이용하여 페이지 이동을 처리하는 경우
    // single page application에서 관리하고 있는 상태를 잃어 버리게 된다.
    // return(
    //     <div>
    //         <ul>
    //             <li><a href={"/"}>home</a></li>
    //             <li><a href={"/main"}>main</a></li>
    //             <li><a href={"/mypage"}>mypage</a></li>
    //             <li><a href={"/login"}>login</a></li>
    //         </ul>
    //     </div>
    // )
//}

// const Navbar = () => {
//     return(
//         <div>
//             <ul>
//                 <li><Link to={"/"}>home</Link></li>
//                 <li><Link to={"/main"}>main</Link></li>
//                 <li><Link to={"/mypage"}>mypage</Link></li>
//                 <li><Link to={"/login"}>login</Link></li>
//             </ul>
//         </div>
//     )
// }

/*
    <NavLink> 컴포넌트 사용
    NavLink 컴포넌트는 Link 컴포넌트와 사용이 거의 유사하다.
    그러나 현재 nav의 상태가 active인지에 대한 값을 이용하여 스타일을 조작하거나 클래스 이름을 변경할 수 있다.
*/
const Navbar = () => {
    const activeStyle={
        backgroundColor:'green'
    }
    return(
        <div>
            <ul>
                <li><NavLink to={"/"} style={({isActive}) => isActive ? activeStyle : undefined}>home</NavLink></li>
                {/* isActive가 true일 시 list 배경색이 초록으로 변함 */}
                <li><NavLink to={"/main"} style={({isActive}) => isActive ? activeStyle : undefined}>main</NavLink></li>
                <li><NavLink to={"/mypage"} style={({isActive}) => isActive ? activeStyle : undefined}>mypage</NavLink></li>
                <li><NavLink to={"/login"} style={({isActive}) => isActive ? activeStyle : undefined}>login</NavLink></li>
                <li><NavLink to={"/test"} style={({isActive}) => isActive ? activeStyle : undefined}>test</NavLink></li>
            </ul>
        </div>
    )
    //NavLink란? Link의 스페셜버전으로 activeClassName 와 activeStyle을 사용할 수 있다

}

export default Navbar;