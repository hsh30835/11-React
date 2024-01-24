import Header from "../components/Header";
import Navbar from "../components/Navbar";

const { Outlet } = require("react-router-dom")


const Layout = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;