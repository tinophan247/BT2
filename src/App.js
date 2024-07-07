import { Route, Routes } from "react-router-dom";
import "./App.css";
import BT4 from "./bt4/BT4";
import BT1 from "./bt1/bt1";
import BT2 from "./bt2/bt2";
import BT3 from "./bt3/bt3";
import Login from "./bt4/pages/Login";
import About from "./bt4/pages/About";
import Product from "./bt4/pages/Product";
import Home from "./bt4/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/bt1" element={<BT1 />} />
      <Route path="/bt2" element={<BT2 />} />
      <Route path="/bt3" element={<BT3 />} />
      <Route path="/bt4" element={<BT4 />}>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
