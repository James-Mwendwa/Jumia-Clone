import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Gaming from "./Gaming";
import Footer from "./Footer";
import Cart from "./Cart";
import Health from "./Health";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/health" element={<Health />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
