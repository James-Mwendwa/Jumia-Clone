import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Gaming from "./Gaming";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const url = "http://localhost:8000/schema";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gaming" element={<Gaming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
