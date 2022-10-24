import { useState } from "react";
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
  const [cartItems, setCartItems] = useState([]);

  const addProducts = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home addProducts={addProducts} />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/health" element={<Health />} />
        <Route path="/checkout" element={<CheckoutCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
