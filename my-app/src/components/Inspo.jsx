import React from 'react';
import "../styles/Inspo.css";
import inspo1 from "../assets/inspo1.jpg";
import inspo2 from "../assets/inspo2.jpg";
import inspo3 from "../assets/inspo3.jpg";
import inspo4 from "../assets/inspo4.jpg";
import { Link } from 'react-router-dom';

const Inspo = () => {
  const images = [inspo1, inspo2, inspo3, inspo4];

  return (
    <div className="inspo1-container">
      <div className="inspo-title">
        <p>Can't figure out the style you want? Here's some inspo...</p>
      </div>
      <div className="inspos">
        {images.map((image, index) => (
          <div key={index} className="inspo-item" style={{ backgroundImage: `url(${image})` }}></div>
        ))}
      </div>
      <Link to="/Inspo">
      <button className="arrow">
        see more
      </button>
      </Link>
    </div>
  );
};

export default Inspo;
