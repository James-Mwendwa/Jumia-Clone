import React from "react";

function Category({ products, id }) {
  const categoryItems = [
    ...new Set(products.map((product) => product.category)),
  ];
  console.log(categoryItems);
  return <div>Category</div>;
}

export default Category;
