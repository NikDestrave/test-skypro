import './assets/styles.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./views/Layout";
import Main from "./pages/Main";
import Basket from "./pages/Basket";

function App() {
  return (
    <div className={'wrap-container'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="basket" element={<Basket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
