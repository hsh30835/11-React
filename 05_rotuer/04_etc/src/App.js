import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Main from "./pages/Main";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path ="/" element={<Layout/>}/>
            <Route index element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="mypage" element={<Mypage/>}/>
            <Route path="login" element={<Login/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
