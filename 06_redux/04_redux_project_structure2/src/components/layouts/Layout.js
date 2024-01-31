import { Outlet } from "react-router-dom"
import Header from "../commons/Header"
import Navbar from "../commons/Navbar"


const Layout = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
            {/* App.js에서 <Route path="/" element={<Layout />}> </Route>사이에 있는 Main, Menus, Login을 랜더링 해줌 */}
        </div>
    )
}
export default Layout;