import React, { useState, useEffect } from 'react';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/products/')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price} {product.price_currency}</p>
          {/* Further product details */}
        </div>
      ))}
    </div>
  );
};

export default ProductsList;


