import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Gaming from "./Gaming";
import Footer from "./Footer";
import Cart from "./Cart";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const url = "http://localhost:8000/schema";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
