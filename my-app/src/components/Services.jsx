import React from 'react';
import '../styles/Services.css';

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

const services = [
    { name: 'Washing & Styling', price: '₦5,000', image: wash },
    { name: 'Braids', price: '₦15,000', image: braids },
    { name: 'Twists', price: '₦12,000', image: twists },
    { name: 'Corn Rows', price: '₦8,000', image: corn },
    { name: 'Ghana Weaving', price: '₦10,000', image: ghana },
    { name: 'Finger Curls', price: '₦7,000', image: curls },
    { name: 'Wig Revamp', price: '₦6,000', image: wig },
    { name: 'Locs Maintenance', price: '₦9,000', image: locs },
    { name: 'Butterfly Locs', price: '₦18,000', image: butterfly },
    { name: 'Fulani Braids', price: '₦20,000', image: fulani },
    { name: 'Knotless Braids', price: '₦22,000', image: knotless },
    { name: 'Passion Twists', price: '₦15,000', image: passion },
    { name: 'Bohemian Braids', price: '₦18,000', image: bohemian },
    { name: 'Bantu Knots', price: '₦10,000', image: bantu },
    { name: 'Micro Braids', price: '₦25,000', image: micro },
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
        <p>*Not seeing what you want? You can always show your stylist a reference picture.*</p>
      </div>
    </div>
  );
};

export default Services;
