import { NavLink } from "react-router-dom"
import Layouts from "../layoutss/Layouts"

const NavBarr = () => {
    const activeStyle={
        color:"red"
    }
    return (
        <div>
            <button><NavLink to={"page1"} style={({isActive})=> isActive ? activeStyle : undefined}>1페이지</NavLink></button>
            <button><NavLink to={"page2"} style={({isActive})=> isActive ? activeStyle : undefined}>2페이지</NavLink></button>
        </div>
    )
}

export default NavBarr;