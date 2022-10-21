import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Gaming from "./components/Gaming";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Health from "./components/Health";
import CheckoutCard from "./components/CheckoutCard";

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
        <Route path="/checkout" element={<CheckoutCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
