import { Outlet } from "react-router-dom"
import Headerr from "../components/Headerr";
import NavBarr from "../components/NavBarr";

const Layouts = () => {
    return(
        <>
            <Headerr/>
            <NavBarr/>
            <Outlet/>
        </>    
    )
}

export default Layouts;