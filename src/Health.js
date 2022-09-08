import React, { useState, useEffect } from "react";
import "./Health.css";

function Health() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await fetch("http://localhost:5000/schema");
    const json = await response.json();
    console.log(json);
    setProducts(json);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h2>Health &amp; Beauty</h2>
      <p>{products.category}</p>
    </div>
  );
}

export default Health;
