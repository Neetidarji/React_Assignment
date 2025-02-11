import React from "react";

function ProductList() {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
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
