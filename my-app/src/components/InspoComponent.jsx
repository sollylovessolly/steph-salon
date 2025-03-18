import React from 'react';
import '../styles/InspoComponent.css';

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
import inspo1 from '../assets/inspo1.jpg';
import inspo2 from '../assets/inspo2.jpg';
import inspo3 from '../assets/inspo3.jpg';
import inspo4 from '../assets/inspo4.jpg';
import inspo5 from '../assets/inspo5.jpg';
import inspo6 from '../assets/inspo6.jpeg';
import inspo7 from '../assets/inspo7.jpg';
import inspo8 from '../assets/inspo8.jpg';
import inspo9 from '../assets/inspo9.jpg';
import inspo10 from '../assets/inspo10.jpg';
import inspo11 from '../assets/inspo11.jpg';
import inspo12 from '../assets/inspo12.jpg';

const inspoImages = [
    wash, braids, inspo1, twists, corn, inspo2, ghana, curls, wig, inspo3, locs, butterfly, inspo4, fulani,
    knotless, passion, inspo5, bohemian, bantu, micro, inspo6, inspo7, inspo8, inspo9, inspo10, inspo11, inspo12
];

const InspoComponent = () => {
  return (
    <div className="inspo-container">
      <div className="inspo-title">
        <p>Need Some Hair Inspo?</p>
      </div>
      <div className="inspo-grid">
        {inspoImages.map((image, index) => (
          <div key={index} className="inspo-card auto-show">
            <div className="inspo-image" style={{ backgroundImage: `url(${image})` }}></div>
          </div>
        ))}
      </div>
      <div className="disclaimer">
        <p>*Found something you love? Save it and show your stylist!* 💕</p>
      </div>
    </div>
  );
};

export default InspoComponent;
