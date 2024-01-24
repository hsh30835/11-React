import { Outlet } from "react-router"
import Header from "../conponent/Header"
import Navbar from "../conponent/Navbar";

const Layout = () => {
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;