import React from 'react';
import Product from './Product';
import productData from './productData'; // Assume product data is imported

function ProductList() {
  return (
    <section className="product-list">
      {productData.map((product) => (
        <Product 
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </section>
  );
}

export default ProductList;
