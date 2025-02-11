import React from "react";

function ProductInfo() {
  const product = {
    name: "Headphones",
    price: 2000,
    available: true,
  };

  return (
    <div>
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p>
        <strong>Availability:</strong>{" "}
        {product.available ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductInfo;
