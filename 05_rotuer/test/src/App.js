import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./page/page1";
import Page2 from "./page/page2";
import Layouts from "./layoutss/Layouts";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Layouts/>}>
          <Route path="page1" element={<Page1/>}/>
          <Route path="page2" element={<Page2/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
