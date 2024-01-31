import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Menus from "./page/Menus";
import MenuDetail from "./page/MenuDetail";
import Main from "./page/Main";
import MenuRegist from "./page/MenuRegist";
import MenuModify from "./page/MenuModify";
import Error from "./page/Error";
import Login from "./page/Login";
import '../src/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 페이지 들어갈시 바로 나오는 화면 */}
          <Route index element={<Main />} />
          <Route path="menu">
            <Route index element={<Menus />} />
            {/* /menu */}
            <Route path=":id" element={<MenuDetail />} />
            {/* /menu/id id에 넣는 숫자 별로 정보 나옴 */}
            <Route path="regist" element={<MenuRegist />} />
            {/* /menu/regist */}
            <Route path="modify">
              <Route path=":id" element={<MenuModify />} />
            </Route>
            {/* /menu/modify/id 수정할 id 입력 */}
          </Route>
          <Route path="login" element={<Login />} />
          {/* /menu/login */}
        </Route>
        <Route path="*" element={<Error />} />
        {/* path="*"은 이거 외의 페이지 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;