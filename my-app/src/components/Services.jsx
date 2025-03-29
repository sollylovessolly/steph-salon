import React from 'react';
import '../styles/Services.css';
import { Link } from "react-router-dom";

// Import images
import wash from '../assets/wash.jpeg';
import braids from '../assets/knot.jpeg';
import twists from '../assets/twists.jpeg';
import corn from '../assets/corn.jpg';
import ghana from '../assets/ghana.jpeg';
import curls from '../assets/curls.jpeg';
import wig from '../assets/wig.jpeg';
import locs from '../assets/locs.jpeg';
import butterfly from '../assets/butterfly.jpeg';
import fulani from '../assets/fulani.jpeg';
import knotless from '../assets/knot.jpeg';
import passion from '../assets/passion.jpeg';
import bohemian from '../assets/boheimian.jpeg';
import bantu from '../assets/bantu.jpeg';
import micro from '../assets/micro.jpeg';
import ponytail from "../assets/ponytail.jpeg"

const services = [
    { name: 'washing', price: '₦1,000', image: wash },
    { name: 'Braids', price: '₦6,000', image: braids },
    { name: 'Twists', price: '₦3,000', image: twists },
    { name: 'Corn Rows', price: '₦1,500 - ₦2,000', image: corn },
    { name: 'Ghana Weaving', price: '₦6,000', image: ghana },
    { name: 'Finger Curls', price: '₦3,000', image: curls },
    { name: 'Wig Revamp', price: '₦4,000', image: wig },
    { name: 'Locs Maintenance', price: '₦3,000', image: locs },
    { name: 'Butterfly Locs', price: '₦8,000', image: butterfly },
    { name: 'Fulani Braids', price: '₦6,000', image: fulani },
    { name: 'Knotless Box Braids', price: '₦7,000', image: knotless },
    { name: 'Passion Twists', price: '₦6,000', image: passion },
    { name: 'Goddess Braids', price: '₦8,000', image: bohemian },
    { name: 'Bantu Knots', price: '₦3,000', image: bantu },
    { name: 'Micro Braids', price: '₦9,000', image: micro },
    { name: 'ponytail', price: '₦5,000', image: ponytail },
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-title">
        <p>Explore Our Services</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card auto-show">
            <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}></div>
            <h3>{service.name}</h3>
            <p>{service.price}</p>
          </div>
        ))}
      </div>
      <div className="disclaimer">
        <p>*you can check out our telegram channels for more information on the styles and other prices 💗💗*</p>
        <button><a href="https://t.me/+wD4vp819FJM5YzNk" target="_blank" rel="noopener noreferrer">check it out</a></button>
      </div>
    </div>
  );
};

export default Services;
