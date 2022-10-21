import React, { useState, useEffect } from "react";
import "./Health.css";

function Health() {
  const [products, setProducts] = useState([]);

  // const categoryItems = [
  //   ...new Set(products.map((category) => category.category)),
  // ];

  async function fetchProducts() {
    const response = await fetch("http://localhost:8000/schema");
    const json = await response.json();
    setProducts(json);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Health &amp; Beauty</h2>
      {products.map((product) => {
        return (
          <div className="health" key={product.id}>
            <img src={product.product} alt="" />
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Health;
