import React from "react";

function ProductList() {
  const products = [
    { id: 1, name: "Phone", price: "15000" },
    { id: 2, name: "Laptop", price: "50000" },
    { id: 3, name: "Headphones", price: "2000" },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Price: {product.price}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ProductList;
