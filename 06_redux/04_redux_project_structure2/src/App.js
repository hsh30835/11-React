import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Menus from "./page/Menus";
import Main from "./page/Main";
import MenuDetail from "./page/MenuDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="menu">
              <Route index element={<Menus/>}/>
              <Route path=":id" element={<MenuDetail/>}/>
              <Route path="regist" element={<MenuRegist/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
