import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import Navbar from "../components/NavBar";

const Layout = () => {
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            {/* Outlet부분에 감싼 자식부분들이 Layout에 랜더링 된다 */}
            {/* Outlet은 뭐일까? 사이드페이지를 출력해주는 것 같음*/}
        </>
    )
}

export default Layout;