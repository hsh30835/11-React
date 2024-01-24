import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={"/main"}>메인</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;