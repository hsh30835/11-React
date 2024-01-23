import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./page/Main";
import MyPage from "./page/MyPage";
import Login from "./page/Login";
import Test from "./page/test";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="mypage" element={<MyPage/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="test" element={<Test/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// Route를 쓰려면 무조건 BrowserRouter와 Routes를 먼저 감싸야 하는거같음 Route의 개수와는 상관없이
export default App;
