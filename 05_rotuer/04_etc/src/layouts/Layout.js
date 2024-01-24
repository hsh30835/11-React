import { Outlet } from "react-router"
import Header from "../component/Header"
import NavBar from "../component/Navbar";

const Layout = () => {
    return(
        <>
            <Header/>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export default Layout;