import React from 'react';
import '../styles/Products.css';

// Import product images
import attachment from '../assets/attachement.jpeg';
import gel from '../assets/gel.jpeg';
import accessories from '../assets/accessories.jpeg';
import edgeControl from '../assets/edge-control.jpeg';
import bonnet from '../assets/bonnet.jpeg';

const products = [
  { image: attachment },
  { image: gel },
  { image: accessories },
  { image: edgeControl },
  { image: bonnet },
];

const Products = () => {
  return (
    <div className="products-container">
      <div className="products-title">
        <p>Shop Hair Essentials</p>
      </div>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-item" style={{ backgroundImage: `url(${product.image})` }}></div>
        ))}
      </div>
      <a href="https://t.me/your_channel_or_username" target="_blank" rel="noopener noreferrer">
        <button className="cta-button">Order Now</button>
      </a>
    </div>
  );
};

export default Products;
