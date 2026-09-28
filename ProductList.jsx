import React from "react";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    category: "Medicinal",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 25,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 4,
    name: "Money Plant",
    price: 18,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 5,
    name: "Rose Plant",
    price: 22,
    category: "Flowering",
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322"
  },
  {
    id: 6,
    name: "Jade Plant",
    price: 30,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb"
  }
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      <h1>Our Plants</h1>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              width="200"
              height="200"
            />

            <h2>{product.name}</h2>

            <p>Category: {product.category}</p>

            <p>
              <strong>${product.price}</strong>
            </p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;