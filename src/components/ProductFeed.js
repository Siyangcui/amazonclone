import React from "react";

const ProductFeed = ({ products }) => {
  return (
    <div>
      <h1>Products here...</h1>
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
};

export default ProductFeed;
